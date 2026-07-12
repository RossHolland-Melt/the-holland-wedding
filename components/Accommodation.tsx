"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  stays,
  bandLabel,
  stayDistance,
  distanceLabel,
  type StayType,
} from "@/lib/data";
import { SectionDivider } from "./Flourishes";

const AccommodationMap = dynamic(() => import("./AccommodationMap"), {
  ssr: false,
  loading: () => <div className="map__loading">Unrolling the map…</div>,
});

type Opt = { k: string; label: string };

const distOpts: Opt[] = [
  { k: "any", label: "Any distance" },
  { k: "3", label: "Under 3 km" },
  { k: "8", label: "Under 8 km" },
  { k: "15", label: "Under 15 km" },
];
const priceOpts: Opt[] = [
  { k: "any", label: "Any price" },
  { k: "1", label: "R" },
  { k: "2", label: "R R" },
  { k: "3", label: "R R R" },
];

// thumbnail tint by type - keeps the card grid looking warm without photos
const TONES: Record<StayType, string> = {
  Guesthouse: "#EFDCDE",
  Hotel: "#EDE0C9",
  "Self-catering": "#E3E7DD",
  "B&B": "#E7E3D6",
  Lodge: "#DDE5DC",
  "Farm stay": "#E3E7DD",
  Cottage: "#EFE7D8",
};

function PhotoIcon({ stroke = "#7d8763" }: { stroke?: string }) {
  return (
    <svg
      width="34"
      height="26"
      viewBox="0 0 62 48"
      fill="none"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    >
      <rect x="2" y="6" width="58" height="40" rx="4" stroke={stroke} strokeWidth="2" />
      <path
        d="M6 42 L24 26 L34 35 L44 25 L56 38"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// stays carry their distance once, computed from real coordinates
const withDist = stays
  .map((s) => ({ ...s, km: stayDistance(s) }))
  .sort((a, b) => a.km - b.km);

export default function Accommodation() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [fDist, setFDist] = useState("any");
  const [fPrice, setFPrice] = useState("any");
  const [fType, setFType] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  // While the map is full-screen, lock body scroll and allow Esc to close.
  useEffect(() => {
    if (!expanded) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  // type chips reflect only the types that actually appear in the data
  const typeOpts = useMemo<Opt[]>(() => {
    const seen = Array.from(new Set(stays.map((s) => s.type)));
    return [{ k: "all", label: "All types" }, ...seen.map((t) => ({ k: t, label: t }))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return withDist.filter((s) => {
      if (fDist !== "any" && s.km > Number(fDist)) return false;
      if (fPrice !== "any" && s.band !== Number(fPrice)) return false;
      if (fType !== "all" && s.type !== fType) return false;
      if (q && !`${s.name} ${s.area} ${s.type}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [fDist, fPrice, fType, query]);

  const active = filtered.find((s) => s.id === activeId) ?? null;

  const renderChips = (opts: Opt[], current: string, set: (k: string) => void) =>
    opts.map((o) => (
      <button
        key={o.k}
        type="button"
        className={`chip${o.k === current ? " chip--on" : ""}`}
        onClick={() => set(o.k)}
      >
        {o.label}
      </button>
    ));

  return (
    <section id="stay" className="section">
      <SectionDivider />
      <div className="eyebrow">Cape Winelands</div>
      <h2 className="serif-heading">Where to Stay</h2>
      <p className="lead">
        Lovely places to lay your head near the farm. Tap a pin or a card to
        find your bearings, then book straight through.
      </p>

      <div className={`map${expanded ? " map--full" : ""}`}>
        <AccommodationMap
          stays={filtered}
          activeId={activeId}
          onSelect={setActiveId}
          expanded={expanded}
        />
        <button
          type="button"
          className="map__expand"
          onClick={() => setExpanded((v) => !v)}
          aria-label={expanded ? "Close full-screen map" : "Expand map to full screen"}
        >
          {expanded ? (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M6 6 L18 18 M18 6 L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M9 3 H3 V9 M15 3 H21 V9 M21 15 V21 H15 M9 21 H3 V15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="map__expand-label">{expanded ? "Close" : "Expand"}</span>
        </button>
      </div>

      {/* active stay shown below the map on mobile (popups handle desktop) */}
      {active && (
        <div className="active-card">
          <div className="stay-card__type">{active.type}</div>
          <div className="pop__name">{active.name}</div>
          <div className="pop__meta" style={{ marginBottom: 10 }}>
            {active.blurb}
          </div>
          <div className="stay-card__meta">
            <span className="stay-card__dist">
              {distanceLabel(active.km)} · {bandLabel(active.band)}
            </span>
            <a
              className="stay-card__price stay-card__link"
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {active.price} →
            </a>
          </div>
        </div>
      )}

      {/* search + filters */}
      <div className="filters">
        <div className="filter-search">
          <div className="filter-label">Search</div>
          <input
            type="search"
            className="search-input"
            placeholder="Name or area…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search accommodation"
          />
        </div>
        <div>
          <div className="filter-label">Distance</div>
          <div className="chips">{renderChips(distOpts, fDist, setFDist)}</div>
        </div>
        <div>
          <div className="filter-label">Price</div>
          <div className="chips">{renderChips(priceOpts, fPrice, setFPrice)}</div>
        </div>
        <div>
          <div className="filter-label">Type</div>
          <div className="chips">{renderChips(typeOpts, fType, setFType)}</div>
        </div>
      </div>

      {/* cards */}
      {filtered.length > 0 ? (
        <div className="cards">
          {filtered.map((s, i) => (
            <div
              key={s.id}
              className={`stay-card${s.id === activeId ? " stay-card--active" : ""}`}
              onClick={() => setActiveId(s.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveId(s.id);
                }
              }}
            >
              <div
                className="stay-card__thumb"
                style={{ background: TONES[s.type] ?? "#E3E7DD" }}
              >
                <span className="stay-card__num">{i + 1}</span>
                <PhotoIcon />
              </div>
              <div className="stay-card__body">
                <div className="stay-card__type">{s.type}</div>
                <div className="stay-card__name">{s.name}</div>
                <div className="stay-card__blurb">{s.blurb}</div>
                <div className="stay-card__meta">
                  <span className="stay-card__dist">
                    {distanceLabel(s.km)} · {bandLabel(s.band)}
                  </span>
                  <a
                    className="stay-card__price stay-card__link"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {s.price} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          No stays match these filters just yet. Try widening your search.
        </div>
      )}
    </section>
  );
}
