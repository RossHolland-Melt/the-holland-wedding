import { SectionDivider } from "./Flourishes";

// NOTE: banking details below are placeholders from the mockup — replace with
// the couple's real account info and a real "contribute online" link.
const giftRows = [
  ["Account name", "R & C Lucas"],
  ["Bank", "[ Your bank ]"],
  ["Account number", "•••• •••• 4027"],
  ["Reference", "Your name"],
];

export default function Gifts() {
  return (
    <section id="gifts" className="section section--sand">
      <SectionDivider />
      <div className="eyebrow">With gratitude</div>
      <h2 className="serif-heading" style={{ marginBottom: 22 }}>
        Gifts
      </h2>
      <p className="story__text" style={{ marginBottom: 40 }}>
        Your presence on our day is the greatest gift of all &mdash; truly.
        We&rsquo;ve been lucky enough to build a home together already, so if
        you&rsquo;d like to give something more, a small contribution toward our
        future would mean the world. There&rsquo;s no obligation whatsoever; only
        our gratitude.
      </p>

      <div className="gift-card">
        <div className="gift-card__title">The Honeymoon Fund</div>
        <div className="gift-card__sub">A toast to our next adventure</div>
        {giftRows.map(([label, value]) => (
          <div key={label} className="gift-row">
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
        <a href="#gifts" className="btn-outline">
          Contribute online
        </a>
      </div>
    </section>
  );
}
