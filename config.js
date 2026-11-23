// Public Supabase settings for the forms (Project Settings → API).
// The publishable/anon key is meant to live in the browser: the tables only
// accept INSERTs (see supabase/schema.sql), so it cannot read any data.
window.LESGOU_SUPABASE = {
  url: '',      // e.g. https://abcd1234.supabase.co
  anonKey: ''   // sb_publishable_... (or the legacy anon key)
};
