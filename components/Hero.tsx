import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Image
        src="/hero-manor.png"
        alt="Watercolour of the Cape Dutch manor at Natte Valleij Estate"
        width={1920}
        height={1080}
        priority
        sizes="(max-width: 768px) 88vw, 560px"
        className="hero__img"
      />

      <div className="eyebrow hero__eyebrow">Together with their families</div>
      <h1 className="hero__names">
        Ross <span className="amp">&amp;</span> Chloe
      </h1>
      <div className="hero__sub">are getting married</div>

      <div className="hero__date">10 April 2027</div>
      <div className="hero__place">
        Natte Valleij Estate · Cape Winelands · South Africa
      </div>

      <a href="#rsvp" className="btn-primary">
        RSVP
      </a>
    </section>
  );
}
