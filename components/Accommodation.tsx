"use client";

import { useState } from "react";
import { stays, bandLabel, type Stay } from "@/lib/data";
import { SectionDivider, Gable } from "./Flourishes";

type Opt = { k: string; label: string };

const distOpts: Opt[] = [
  { k: "any", label: "Any distance" },
  { k: "5", label: "Under 5 km" },
  { k: "15", label: "Under 15 km" },
  { k: "30", label: "Under 30 km" },
];
const priceOpts: Opt[] = [
  { k: "any", label: "Any price" },
  { k: "1", label: "R" },
  { k: "2", label: "R R" },
  { k: "3", label: "R R R" },
];
const typeOpts: Opt[] = [
  { k: "all", label: "All types" },
  { k: "Guesthouse", label: "Guesthouse" },
  { k: "Hotel", label: "Hotel" },
  { k: "Self-catering", label: "Self-catering" },
];

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

export default function Accommodation() {
  const [activeId, setActiveId] = useState("klapmuts");
  const [fDist, setFDist] = useState("any");
  const [fPrice, setFPrice] = useState("any");
  const [fType, setFType] = useState("all");

  const active = stays.find((s) => s.id === activeId) ?? stays[0];

  const filtered = stays.filter((s) => {
    if (fDist !== "any" && s.dist > Number(fDist)) return false;
    if (fPrice !== "any" && s.band !== Number(fPrice)) return false;
    if (fType !== "all" && s.type !== fType) return false;
    return true;
  });

  const renderChips = (
    opts: Opt[],
    current: string,
    set: (k: string) => void,
  ) =>
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
        A handful of lovely places near the farm &mdash; tap a pin to see more.
      </p>

      {/* MAP */}
      <div className="map">
        <svg
          viewBox="0 0 110 48"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          className="map__svg"
        >
          <g stroke="#CBD3B6" strokeWidth="0.25" opacity="0.85">
            <path d="M6,27 H26 M6,29 H26 M6,31 H26 M6,33 H26 M6,35 H26" />
            <path d="M86,13 H103 M86,15 H103 M86,17 H103 M86,19 H103" />
            <path d="M40,38 H58 M40,40 H58 M40,42 H58" />
          </g>
          <path
            d="M0,11 L12,4 L22,10 L34,3 L46,11 L58,4 L70,10 L82,3 L94,10 L110,4"
            fill="none"
            stroke="#A8B39C"
            strokeWidth="0.4"
          />
          <path
            d="M-2,40 C20,34 30,44 50,40 C70,36 84,46 112,40"
            fill="none"
            stroke="#9DB0A4"
            strokeWidth="1.1"
          />
          <path
            d="M-2,20 C28,18 40,30 62,30 C84,30 96,22 112,24"
            fill="none"
            stroke="#C8A878"
            strokeWidth="1.2"
          />
          <path
            d="M55,2 C54,16 56,30 58,46"
            fill="none"
            stroke="#C8A878"
            strokeWidth="1.2"
          />
          <text x="10" y="45" fontFamily="Jost,sans-serif" fontSize="2.3" fill="#a39a84" letterSpacing="0.18">
            STELLENBOSCH
          </text>
          <text x="88" y="46" fontFamily="Jost,sans-serif" fontSize="2.3" fill="#a39a84" letterSpacing="0.18">
            PAARL
          </text>
          <text x="60" y="6" fontFamily="Jost,sans-serif" fontSize="2.3" fill="#a39a84" letterSpacing="0.18">
            SIMONSBERG
          </text>
          <text x="40" y="16" fontFamily="Jost,sans-serif" fontSize="2.3" fill="#a39a84" letterSpacing="0.18">
            KLAPMUTS
          </text>
        </svg>

        {/* venue marker */}
        <div className="map__venue">
          <Gable width={40} strokeWidth={3} color="var(--green)" />
          <div className="map__venue-label">Natte Valleij</div>
        </div>

        {/* stay pins */}
        {stays.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={s.name}
            className={`map__pin${s.id === activeId ? " map__pin--active" : ""}`}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            onClick={() => setActiveId(s.id)}
          >
            {i + 1}
          </button>
        ))}

        {/* desktop popover */}
        <div className="pop" style={{ left: `${active.x}%`, top: `${active.y}%` }}>
          <div className="pop__card">
            <div className="pop__type">{active.type}</div>
            <div className="pop__name">{active.name}</div>
            <div className="pop__meta">
              {active.distLabel} · {bandLabel(active.band)}
            </div>
            <div className="pop__price">{active.price}</div>
            <a href="#stay" className="pop__link">
              View &amp; book →
            </a>
          </div>
        </div>
      </div>

      {/* mobile active card */}
      <div className="active-card">
        <div className="pop__type">{active.type}</div>
        <div className="pop__name">{active.name}</div>
        <div className="pop__meta" style={{ marginBottom: 10 }}>
          {active.blurb}
        </div>
        <div className="stay-card__meta">
          <span className="stay-card__dist">
            {active.distLabel} · {bandLabel(active.band)}
          </span>
          <span className="stay-card__price">{active.price}</span>
        </div>
      </div>

      {/* filters */}
      <div className="filters">
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
          {filtered.map((s: Stay) => (
            <div
              key={s.id}
              className="stay-card"
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
              <div className="stay-card__thumb" style={{ background: s.tone }}>
                <PhotoIcon />
              </div>
              <div className="stay-card__body">
                <div className="stay-card__type">{s.type}</div>
                <div className="stay-card__name">{s.name}</div>
                <div className="stay-card__blurb">{s.blurb}</div>
                <div className="stay-card__meta">
                  <span className="stay-card__dist">
                    {s.distLabel} · {bandLabel(s.band)}
                  </span>
                  <span className="stay-card__price">{s.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          No stays match these filters just yet &mdash; try widening your search.
        </div>
      )}
    </section>
  );
}
