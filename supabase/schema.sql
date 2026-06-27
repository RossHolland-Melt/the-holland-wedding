-- Ross & Chloe wedding — RSVP storage
-- Run this once in the Supabase project's SQL Editor
-- (project: iiagbsooentgcynkzsch).

create table if not exists public.rsvps (
  id           uuid primary key default gen_random_uuid(),
  full_name    text not null,
  attending    boolean not null default true,
  dietary      text,
  song_request text,
  message      text,
  created_at   timestamptz not null default now()
);

alter table public.rsvps enable row level security;

-- Guests submit with the public (anon) key, so allow inserts only.
create policy "Anyone can submit an RSVP"
  on public.rsvps
  for insert
  to anon, authenticated
  with check (true);

-- Note: there is intentionally NO select policy, so guests cannot read
-- each other's responses. View submissions in the Supabase Table Editor.
