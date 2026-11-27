import test from 'node:test';
import assert from 'node:assert/strict';
import { createCountHandler } from '../supabase/functions/waitlist-count/handler.mjs';
import { createWaitlistCounter } from '../waitlist-counter.mjs';

const config = { supabaseUrl: 'https://project.example', serviceKey: 'sb_secret_server', publishableKeys: ['sb_publishable_client'] };
const request = (method = 'GET', key = 'sb_publishable_client') => new Request('https://function.example/?select=email', { method, headers: { apikey: key } });

test('the public endpoint returns only a count, using a fixed HEAD query on the server', async () => {
  const handler = createCountHandler({ ...config, fetchImpl: async (url, options) => {
    assert.equal(url, 'https://project.example/rest/v1/waitlist?select=id');
    assert.equal(options.method, 'HEAD');
    assert.equal(options.headers.apikey, 'sb_secret_server');
    assert.equal(options.headers.Prefer, 'count=exact');
    assert.equal(options.headers.Authorization, undefined);
    return new Response(null, { headers: { 'content-range': '0-0/7' } });
  } });
  const response = await handler(request());
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('access-control-allow-origin'), '*');
  assert.deepEqual(await response.json(), { count: 7 });
});

test('invalid API keys and write methods never query signup data', async () => {
  let reads = 0;
  const handler = createCountHandler({ ...config, fetchImpl: async () => { reads++; throw new Error('Must not read'); } });
  assert.equal((await handler(request('GET', 'wrong'))).status, 401);
  assert.equal((await handler(request('POST'))).status, 405);
  assert.equal((await handler(request('OPTIONS'))).status, 204);
  assert.equal(reads, 0);
});

test('database errors and invalid count headers fail closed without exposing private details', async () => {
  for (const upstream of [new Response('private error', { status: 500 }), new Response(null, { headers: { 'content-range': '0-0/*' } })]) {
    const handler = createCountHandler({ ...config, fetchImpl: async () => upstream });
    const response = await handler(request());
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { error: 'Count unavailable' });
  }
});

test('a zero-row list is valid, and legacy service keys stay server-side', async () => {
  const handler = createCountHandler({ ...config, serviceKey: 'eyJ.server-token', fetchImpl: async (_url, options) => {
    assert.equal(options.headers.Authorization, 'Bearer eyJ.server-token');
    return new Response(null, { headers: { 'content-range': '*/0' } });
  } });
  assert.deepEqual(await (await handler(request())).json(), { count: 0 });
});

test('the visual total starts at 250 and adds confirmed database records', async () => {
  const painted = [];
  const counter = createWaitlistCounter({ readCount: async () => 7, present: total => painted.push(total) });
  assert.deepEqual(painted, [250]);
  await counter.refresh();
  assert.equal(counter.total, 257);
  assert.deepEqual(painted, [250, 257]);
});

test('a successful new signup increments once; a duplicate signup does not', async () => {
  let rows = 0;
  const painted = [];
  const counter = createWaitlistCounter({ readCount: async () => rows, present: total => painted.push(total) });
  await counter.refresh();
  rows = 1;
  const saved = counter.confirmSignup(true);
  assert.equal(counter.total, 251);
  await saved;
  const before = painted.length;
  await counter.confirmSignup(false);
  assert.equal(counter.total, 251);
  assert.deepEqual(painted.slice(before), [251]);
});

test('a stale poll cannot undo a signup that has already been saved', async () => {
  let resolveOld, resolveNew, reads = 0;
  const counter = createWaitlistCounter({ present: () => {}, readCount: () => new Promise(resolve => {
    if (++reads === 1) resolveOld = resolve; else resolveNew = resolve;
  }) });
  const old = counter.refresh();
  const saved = counter.confirmSignup(true);
  resolveOld(0); await old;
  assert.equal(counter.total, 251);
  resolveNew(2); await saved;
  assert.equal(counter.total, 252);
});

test('network failures and malformed counts never invent an increment', async () => {
  let value = 3, failures = 0;
  const counter = createWaitlistCounter({ present: () => {}, unavailable: () => failures++, readCount: async () => {
    if (value === 'offline') throw new Error('Offline'); return value;
  } });
  await counter.refresh();
  for (value of ['offline', -1, '4', NaN, Number.MAX_SAFE_INTEGER]) await counter.refresh();
  assert.equal(counter.total, 253);
  assert.equal(failures, 5);
});
