import { createClient } from "@supabase/supabase-js";

// Supabase pauses free-tier projects after ~7 days without database activity.
// A daily Vercel cron (see vercel.json) hits this route, which writes a row to
// the `keepalive` table to reset that timer. Reading a request header keeps the
// handler request-time, so it is never prerendered or cached.

const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  // When CRON_SECRET is set, Vercel attaches it as a Bearer token on cron
  // invocations. Enforce it so only the scheduler can trigger the ping.
  const cronSecret = process.env.CRON_SECRET;
  if (
    cronSecret &&
    request.headers.get("authorization") !== `Bearer ${cronSecret}`
  ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    return Response.json(
      { ok: false, error: "Supabase environment variables are not set." },
      { status: 500 },
    );
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  });

  const now = new Date();

  // The insert is the write that actually keeps the project awake.
  const { error } = await supabase
    .from("keepalive")
    .insert({ pinged_at: now.toISOString() });

  if (error) {
    console.error("keepalive ping failed:", error.message);
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }

  // Keep the table tiny: drop pings older than a week.
  await supabase
    .from("keepalive")
    .delete()
    .lt("pinged_at", new Date(now.getTime() - WEEK_MS).toISOString());

  return Response.json({ ok: true, pinged_at: now.toISOString() });
}
