-- Ross & Chloe wedding - keep-alive ping table
-- Run this once in the Supabase project's SQL Editor
-- (project: iiagbsooentgcynkzsch).
--
-- Why: Supabase pauses free-tier projects after ~7 days with no database
-- activity. A daily Vercel cron (app/api/keepalive) writes one row here to
-- reset that timer, then prunes rows older than a week so the table stays tiny.

create table if not exists public.keepalive (
  id        uuid primary key default gen_random_uuid(),
  pinged_at timestamptz not null default now()
);

alter table public.keepalive enable row level security;

-- The cron runs with the public (anon) key, so allow it to insert pings and
-- prune old ones. The table holds nothing sensitive (just timestamps), and
-- there is intentionally no select policy.
create policy "Cron can insert keepalive pings"
  on public.keepalive
  for insert
  to anon, authenticated
  with check (true);

create policy "Cron can prune keepalive pings"
  on public.keepalive
  for delete
  to anon, authenticated
  using (true);
