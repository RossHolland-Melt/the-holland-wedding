# the-holland-wedding

A website for our beautiful day — **10 April 2027**, Natte Valleij Estate, Cape Winelands.

Single-page wedding site built with **Next.js 16** (App Router) and **Supabase** for RSVPs, deployed on **Vercel**.

## Sections

Hero · Engagement photo · Our Story · The Day (schedule + venue/travel/dress) · RSVP · Gifts · Accommodation (interactive map + filters) · Footer.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Environment

Create `.env.local` (already gitignored) with the Supabase project keys:

```
NEXT_PUBLIC_SUPABASE_URL=https://iiagbsooentgcynkzsch.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_…
```

The same two variables must be set in the Vercel project (Production + Preview).

## RSVP database

RSVP submissions are written to a `public.rsvps` table. Create it once by pasting
[`supabase/schema.sql`](supabase/schema.sql) into the Supabase SQL Editor. The table
has Row Level Security with an **insert-only** policy, so guests can submit but cannot
read other responses — view them in the Supabase **Table Editor**.

## Project layout

| Path | What |
| --- | --- |
| `app/` | layout, page, `globals.css`, `actions/rsvp.ts` (server action) |
| `components/` | section components (Nav, Hero, RsvpForm, Accommodation, …) |
| `lib/data.ts` | schedule + accommodation content |
| `utils/supabase/` | Supabase server/client/middleware helpers |
| `proxy.ts` | Next 16 proxy (formerly `middleware.ts`) keeping sessions fresh |
| `design/` | original design mockup, kept for reference |

## Branches

- `main` → production deploy
- `staging` → preview deploys

## To-do (content placeholders)

- Real banking details + a "contribute online" link in **Gifts**
- Real contact email / phone in the **Footer**
