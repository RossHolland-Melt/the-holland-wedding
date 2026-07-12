"use client";

import { useState, type FormEvent } from "react";
import { submitRsvp } from "@/app/actions/rsvp";
import { SectionDivider } from "./Flourishes";

export default function RsvpForm() {
  const [attending, setAttending] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

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
        We can&rsquo;t wait to celebrate with you. Kindly respond by 1 March
        2027.
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
    </section>
  );
}
