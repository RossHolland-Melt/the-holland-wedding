"use client";

import { useState } from "react";

type Row = { label: string; value: string; copyable?: boolean };

const rows: Row[] = [
  { label: "Account holder", value: "Chloe Evelyn Alannah Lucas" },
  { label: "Bank", value: "Discovery Bank" },
  { label: "Account type", value: "Savings" },
  { label: "Account number", value: "12758643160" },
  { label: "Branch code", value: "679000" },
  { label: "SWIFT / BIC", value: "DISCZAJJXXX" },
  { label: "Reference", value: "Your name", copyable: false },
];

const allText = rows
  .filter((r) => r.copyable !== false)
  .map((r) => `${r.label}: ${r.value}`)
  .join("\n");

function CopyIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function GiftDetails() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string, key: string) {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      // Fallback for older browsers / non-secure contexts.
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600);
    }
  }

  return (
    <div className="gift-card">
      <div className="gift-card__title">The Honeymoon Fund</div>
      <div className="gift-card__sub">A toast to our next adventure</div>

      {rows.map((r) => (
        <div key={r.label} className="gift-row">
          <span className="gift-row__label">{r.label}</span>
          <span className="gift-row__val">
            <span>{r.value}</span>
            {r.copyable !== false && (
              <button
                type="button"
                className={`gift-row__copy${copied === r.label ? " is-copied" : ""}`}
                onClick={() => copy(r.value, r.label)}
                aria-label={`Copy ${r.label}`}
                title={`Copy ${r.label}`}
              >
                {copied === r.label ? <CheckIcon /> : <CopyIcon />}
              </button>
            )}
          </span>
        </div>
      ))}

      <button
        type="button"
        className={`btn-outline gift-copy-all${copied === "__all__" ? " is-copied" : ""}`}
        onClick={() => copy(allText, "__all__")}
      >
        {copied === "__all__" ? "Copied ✓" : "Copy all details"}
      </button>
    </div>
  );
}
