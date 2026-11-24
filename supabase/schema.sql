-- Lesgou web: tables for the launch waitlist and the tourism-provider contact form.
-- Run once in Supabase → SQL Editor. The site only ever INSERTS with the
-- publishable (anon) key; nobody can read these rows from the browser.

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  country     text not null check (char_length(country) between 2 and 3),
  first_name  text not null check (char_length(first_name) between 1 and 80),
  last_name   text not null check (char_length(last_name) between 1 and 80),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  phone       text not null check (char_length(phone) between 4 and 30),
  cedula      text check (cedula is null or cedula ~ '^[VE]-[0-9]{5,10}$'),
  source      text check (char_length(source) <= 60),
  language    text check (language in ('es', 'en')),
  -- Cédula is only asked when the country is Venezuela.
  constraint cedula_only_for_venezuela check ((country = 'VE') = (cedula is not null))
);
create unique index if not exists waitlist_email_unique on public.waitlist (lower(email));

create table if not exists public.provider_leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  services       text not null check (char_length(services) between 1 and 400),
  business_name  text not null check (char_length(business_name) between 1 and 120),
  contact_name   text not null check (char_length(contact_name) between 1 and 120),
  location       text not null check (char_length(location) between 1 and 160),
  email          text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  phone          text not null check (char_length(phone) between 4 and 30),
  website        text check (char_length(website) <= 200),
  message        text check (char_length(message) <= 2000),
  contact_via    text check (contact_via in ('WhatsApp', 'llamada', 'correo')),
  language       text check (language in ('es', 'en'))
);

alter table public.waitlist enable row level security;
alter table public.provider_leads enable row level security;

-- Insert-only for visitors. No select/update/delete policy exists, so the
-- browser can never read the list back.
revoke all on public.waitlist, public.provider_leads from public, anon, authenticated;
-- Visitors can provide form fields only; IDs and timestamps use server defaults.
grant insert (country, first_name, last_name, email, phone, cedula, source, language)
  on public.waitlist to anon;
grant insert (services, business_name, contact_name, location, email, phone, website, message, contact_via, language)
  on public.provider_leads to anon;

drop policy if exists "visitors can join the waitlist" on public.waitlist;
create policy "visitors can join the waitlist" on public.waitlist
  for insert to anon with check (true);

drop policy if exists "providers can send their details" on public.provider_leads;
create policy "providers can send their details" on public.provider_leads
  for insert to anon with check (true);

-- The optional automatic-RLS event trigger is internal database infrastructure.
-- Keep the trigger working while preventing direct calls through the Data API.
do $permissions$
begin
  if to_regprocedure('public.rls_auto_enable()') is not null then
    revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
  end if;
end
$permissions$;
