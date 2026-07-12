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
      <div className="footer__contact">
        <a href="mailto:rosschloeholland@gmail.com">
          rosschloeholland@gmail.com
        </a>{" "}
        · <a href="tel:+27793248388">+27 793 248 388</a>
      </div>
    </footer>
  );
}
