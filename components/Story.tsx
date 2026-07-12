import { SectionDivider } from "./Flourishes";

export default function Story() {
  return (
    <section className="section">
      <SectionDivider width={220} />
      <div className="eyebrow">Welcome</div>
      <h2 className="script-heading">Our Story</h2>
      <p className="story__text">
        It all started at Mojo Market. From there we wandered down to the beach for a walk, and discovered almost immediately that neither of us actually likes the beach. Somehow, that became our first real bonding moment. The night carried us on to Tin Roof for a proper student night out, and it ended the way the best nights do: the two of us sharing a single bowl of two-minute noodles. After that, we never really left each other&rsquo;s side.
      </p>
      <p className="story__text">
        For six months we drove back and forth between Stellenbosch and Cape Town, until it finally dawned on us that we&rsquo;d much rather just do life together. So we moved in.
      </p>
      <p className="story__text">
        Everything else followed from there. We finished our degrees, found our footing in our careers, and welcomed two very spoiled cats into the family. We bought our first home and made it ours. We got engaged. And now we&rsquo;re onto our favourite adventure yet: building a beautiful, colourful life together, and of course throwing the best party there ever was.
      </p>
      <p className="story__text">
        Who knew a Tinder match would turn into all this?
      </p>
    </section>
  );
}
