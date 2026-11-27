import { createCountHandler } from './handler.mjs';

function keyMap(name: string): Record<string, string> {
  try { return JSON.parse(Deno.env.get(name) || '{}'); } catch { return {}; }
}

const publicKeys = keyMap('SUPABASE_PUBLISHABLE_KEYS');
const secretKeys = keyMap('SUPABASE_SECRET_KEYS');

Deno.serve(createCountHandler({
  supabaseUrl: Deno.env.get('SUPABASE_URL'),
  serviceKey: secretKeys.default || Object.values(secretKeys)[0] || Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
  publishableKeys: [...Object.values(publicKeys), Deno.env.get('SUPABASE_ANON_KEY')],
}));
