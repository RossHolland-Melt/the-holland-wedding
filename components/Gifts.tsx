import { SectionDivider } from "./Flourishes";

const giftRows = [
  ["Account holder", "Chloe Evelyn Alannah Lucas"],
  ["Bank", "Discovery Bank"],
  ["Account type", "Savings"],
  ["Account number", "12758643160"],
  ["Branch code", "679000"],
  ["SWIFT / BIC", "DISCZAJJXXX"],
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
      </div>
    </section>
  );
}
