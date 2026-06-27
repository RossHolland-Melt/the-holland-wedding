"use client";

import { useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#theday", label: "The Day" },
  { href: "#gifts", label: "Gifts" },
  { href: "#stay", label: "Accommodation" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          R <span>&amp;</span> C
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <g stroke="var(--green)" strokeWidth="1.6" strokeLinecap="round">
              <path d="M1 1 H21" />
              <path d="M1 7 H21" />
              <path d="M1 13 H21" />
            </g>
          </svg>
        </button>
      </div>

      {open && (
        <nav className="nav__mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
