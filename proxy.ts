import { type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

// Next.js 16 renamed the `middleware` file convention to `proxy`.
// Keeps the Supabase auth cookies fresh on navigation.
export function proxy(request: NextRequest) {
  return createClient(request);
}

export const config = {
  matcher: [
    // Run on everything except Next internals and static image assets.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
