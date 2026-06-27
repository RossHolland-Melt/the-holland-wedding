"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export type RsvpInput = {
  full_name: string;
  attending: boolean;
  dietary: string;
  song_request: string;
  message: string;
};

export type RsvpResult = { ok: true } | { ok: false; error: string };

export async function submitRsvp(input: RsvpInput): Promise<RsvpResult> {
  const name = input.full_name?.trim();
  if (!name) {
    return { ok: false, error: "Please let us know who's responding." };
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.from("rsvps").insert({
    full_name: name,
    attending: input.attending,
    dietary: input.dietary?.trim() || null,
    song_request: input.song_request?.trim() || null,
    message: input.message?.trim() || null,
  });

  if (error) {
    console.error("RSVP insert failed:", error.message);
    return {
      ok: false,
      error: "Something went wrong saving your RSVP. Please try again.",
    };
  }

  return { ok: true };
}
