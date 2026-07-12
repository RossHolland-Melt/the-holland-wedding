import { schedule } from "@/lib/data";

const VenueIcon = () => (
  <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="info-card__icon">
    <g stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 24 H27" />
      <path d="M6 24 V12" />
      <path d="M24 24 V12" />
      <path d="M6 12 C6 6 11 7 13 11" />
      <path d="M24 12 C24 6 19 7 17 11" />
      <path d="M13 11 Q15 4 17 11" />
      <circle cx="15" cy="15" r="2.4" />
    </g>
  </svg>
);

const RouteIcon = () => (
  <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="info-card__icon">
    <g stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22 C9 22 9 6 15 6 C21 6 21 18 27 18" />
      <circle cx="3" cy="22" r="2" />
      <circle cx="27" cy="18" r="2" />
    </g>
  </svg>
);

const DressIcon = () => (
  <svg width="30" height="26" viewBox="0 0 30 26" fill="none" className="info-card__icon">
    <g stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3 a2.4 2.4 0 1 0 0.1 0" />
      <path d="M15 8 C15 11 11 12 7 15 C4 17 4 21 8 21 H22 C26 21 26 17 23 15 C19 12 15 11 15 8 Z" />
    </g>
  </svg>
);

const CalendarIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" />
      <path d="M3 9 H21" />
      <path d="M8 2.5 V6.5" />
      <path d="M16 2.5 V6.5" />
    </g>
  </svg>
);

const cards = [
  {
    Icon: VenueIcon,
    title: "The Venue",
    body: "Natte Valleij Estate, R44, Klapmuts. A historic Cape Dutch wine farm in the heart of the Winelands.",
  },
  {
    Icon: RouteIcon,
    title: "Getting There",
    body: "About 45 minutes from Cape Town. Parking on site; ride-hailing reaches the farm easily.",
  },
  {
    Icon: DressIcon,
    title: "Dress Code",
    body: "Garden formal: think dusty greens and blush. A gentle heads-up, heels and lawn rarely agree, so block heels are your friend.",
  },
];

export default function TheDay() {
  return (
    <section id="theday" className="section section--sand">
      <div className="eyebrow">Saturday · 10 April 2027</div>
      <h2 className="serif-heading">The Day</h2>
      <p className="lead">
        A long, golden afternoon turning into an evening under the stars.
      </p>

      <div className="schedule">
        {schedule.map((item) => (
          <div key={item.time + item.title} className="schedule__row">
            <div className="schedule__time">{item.time}</div>
            <div>
              <div className="schedule__title">{item.title}</div>
              {item.note && <div className="schedule__note">{item.note}</div>}
            </div>
          </div>
        ))}
      </div>

      <p className="schedule__disclaimer">* Timings are a guide and may shift gently on the day.</p>

      <a href="/api/calendar" className="btn-cal">
        <CalendarIcon />
        Add to Calendar
      </a>

      <div className="info-grid">
        {cards.map(({ Icon, title, body }) => (
          <div key={title} className="info-card">
            <Icon />
            <div className="info-card__title">{title}</div>
            <div className="info-card__body">{body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
