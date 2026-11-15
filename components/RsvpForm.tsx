"use client";

import { useEffect, useState, type FormEvent } from "react";
import { submitRsvp } from "@/app/actions/rsvp";
import { SectionDivider } from "./Flourishes";

const STORAGE_KEY = "holland-wedding:rsvp-submitted";

function readSubmitted(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export default function RsvpForm() {
  const [open, setOpen] = useState(false);
  const [hasRsvpd, setHasRsvpd] = useState(false);
  const [attending, setAttending] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  // Pop up on arrival unless this browser has already RSVP'd.
  useEffect(() => {
    const submitted = readSubmitted();
    // Deferred so first paint matches the server render (no hydration mismatch).
    const t = setTimeout(() => {
      setHasRsvpd(submitted);
      if (!submitted) setOpen(true);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // Any link to #rsvp (nav, hero button) opens the popup.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element).closest?.('a[href="#rsvp"]');
      if (!link) return;
      e.preventDefault();
      openForm();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Esc closes; lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function openForm() {
    setStatus("idle");
    setError(null);
    setOpen(true);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    const result = await submitRsvp({
      full_name: String(data.get("full_name") ?? ""),
      attending,
      dietary: String(data.get("dietary") ?? ""),
      song_request: String(data.get("song_request") ?? ""),
      message: String(data.get("message") ?? ""),
    });

    if (result.ok) {
      setStatus("done");
      setHasRsvpd(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      } catch {}
      form.reset();
    } else {
      setStatus("idle");
      setError(result.error);
    }
  }

  return (
    <section id="rsvp" className="section">
      <SectionDivider />
      <h2 className="serif-heading">RSVP</h2>
      <p className="lead">
        We can&rsquo;t wait to celebrate with you. Kindly respond by{" "}
        <span className="rsvp__date">1 December 2026</span>.
      </p>

      <button type="button" className="btn-primary" onClick={openForm}>
        {hasRsvpd ? "Update your RSVP" : "RSVP"}
      </button>
      {hasRsvpd && (
        <p className="rsvp__note">
          We&rsquo;ve got your RSVP &mdash; you&rsquo;re welcome to send it again
          if anything changes.
        </p>
      )}

      {open && (
        <div
          className="modal"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            className="modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-title"
          >
            <button
              type="button"
              className="modal__close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <h2 id="rsvp-title" className="serif-heading">
              RSVP
            </h2>
            <p className="lead">
              Kindly respond by{" "}
              <span className="rsvp__date">1 December 2026</span>.
            </p>
      {status === "done" ? (
        <div className="rsvp__success">
          <h3 className="script-heading">Thank you</h3>
          <p className="story__text">
            Your RSVP is in. We can&rsquo;t wait to celebrate with you.
          </p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="form__error">{error}</div>}

          <div className="field">
            <label className="label" htmlFor="full_name">
              Full name(s)
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              placeholder="Ross Holland & Chloe Lucas"
              className="input"
            />
          </div>

          <div className="field">
            <span className="label">Will you be joining us?</span>
            <div className="seg">
              <button
                type="button"
                className={`seg__btn${attending ? " seg__btn--on" : ""}`}
                aria-pressed={attending}
                onClick={() => setAttending(true)}
              >
                Joyfully accepts
              </button>
              <button
                type="button"
                className={`seg__btn${!attending ? " seg__btn--on" : ""}`}
                aria-pressed={!attending}
                onClick={() => setAttending(false)}
              >
                Sadly declines
              </button>
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="dietary">
              Dietary requirements
            </label>
            <input
              id="dietary"
              name="dietary"
              type="text"
              placeholder="Vegetarian, allergies…"
              className="input"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="song_request">
              A song to get you on the dance floor
            </label>
            <input
              id="song_request"
              name="song_request"
              type="text"
              placeholder="Artist, Title"
              className="input"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="message">
              A message for the couple
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Share a note, a memory, or a word of advice…"
              className="textarea"
            />
          </div>

          <button
            type="submit"
            className="btn-primary btn-block"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send our RSVP"}
          </button>
        </form>
      )}
          </div>
        </div>
      )}
    </section>
  );
}
