import { SectionDivider } from "./Flourishes";

export default function Story() {
  return (
    <section className="section">
      <SectionDivider width={220} />
      <div className="eyebrow">Welcome</div>
      <h2 className="script-heading">Our Story</h2>
      <p className="story__text">
        From a first date that ran far too long to a quiet <em>yes</em>{" "}
        beneath the oaks, every winding road has led us here. On the tenth of
        April,
        surrounded by the people we love most, we&rsquo;ll say our vows among the
        vines at Natte Valleij. This little corner of the internet holds
        everything you need &mdash; when to arrive, where to lay your head, and
        how to RSVP. We can hardly wait to celebrate with you.
      </p>
    </section>
  );
}
