// This public endpoint returns one aggregate, never signup rows or contact data.
export function createCountHandler({ supabaseUrl, serviceKey, publishableKeys, fetchImpl = fetch }) {
  const keys = new Set(publishableKeys.filter(key => typeof key === 'string' && key));
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'apikey, authorization, content-type, x-client-info',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Max-Age': '86400',
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
  };
  const reply = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: cors });

  return async request => {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return reply({ error: 'Method not allowed' }, 405);
    // JWT gateway verification is disabled for publishable keys; validate the
    // project's own public API keys here instead. No privileged key reaches a client.
    if (!keys.has(request.headers.get('apikey'))) return reply({ error: 'Unauthorized' }, 401);
    if (!supabaseUrl || !serviceKey) return reply({ error: 'Count unavailable' }, 503);

    try {
      const headers = { apikey: serviceKey, Prefer: 'count=exact' };
      if (serviceKey.startsWith('eyJ')) headers.Authorization = `Bearer ${serviceKey}`;
      const response = await fetchImpl(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/waitlist?select=id`, {
        method: 'HEAD', headers, signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) return reply({ error: 'Count unavailable' }, 503);
      const match = response.headers.get('content-range')?.match(/\/(\d+)$/);
      const count = match ? Number(match[1]) : NaN;
      if (!Number.isSafeInteger(count) || count < 0) return reply({ error: 'Count unavailable' }, 503);
      return reply({ count });
    } catch {
      return reply({ error: 'Count unavailable' }, 503);
    }
  };
}
