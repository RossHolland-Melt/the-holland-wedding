import { Gable } from "./Flourishes";

export default function Footer() {
  return (
    <footer className="footer">
      <Gable width={120} finial style={{ opacity: 0.85, margin: "0 auto 18px" }} />
      <div className="footer__love">With all our love,</div>
      <div className="footer__names">Ross &amp; Chloe</div>
      <div className="footer__meta">
        10 April 2027 · Natte Valleij Estate · Cape Winelands
      </div>
      {/* TODO: replace with the couple's real contact details */}
      <div className="footer__contact">
        rossandchloe2027@email.com · +27 00 000 0000
      </div>
    </footer>
  );
}
