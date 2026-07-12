import { SectionDivider } from "./Flourishes";
import GiftDetails from "./GiftDetails";

export default function Gifts() {
  return (
    <section id="gifts" className="section section--sand">
      <SectionDivider />
      <div className="eyebrow">With gratitude</div>
      <h2 className="serif-heading" style={{ marginBottom: 22 }}>
        Gifts
      </h2>
      <p className="story__text" style={{ marginBottom: 40 }}>
        Your presence on our day is the greatest gift of all, truly.
        We&rsquo;ve been lucky enough to build a home together already, so if
        you&rsquo;d like to give something more, a small contribution toward our
        future would mean the world. There&rsquo;s no obligation whatsoever; only
        our gratitude.
      </p>

      <GiftDetails />
    </section>
  );
}
