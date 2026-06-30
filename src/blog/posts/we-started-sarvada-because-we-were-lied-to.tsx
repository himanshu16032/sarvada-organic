import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        In 2018, we were beginners. We bought our first bag of "premium organic
        vermicompost" from a local nursery for ₹120. It looked fine — dark,
        slightly moist, smelled like soil. We mixed it into our pots, watered
        them, and went to sleep happy. The next morning the soil had turned
        into a hard concrete block.
      </Lead>

      <P>
        We thought it was us. New gardeners, new mistakes — we'd over-watered
        or used the wrong soil. So we bought another bag from a different
        brand. Same thing happened.
      </P>

      <H2>What we found when we tested ten brands</H2>
      <P>
        Over the next month we bought vermicompost from nurseries, supermarket
        chains, two e-commerce stores and three "organic" boutique brands.
        Ten bags. We did a simple test we now teach every Sarvada customer.
      </P>

      <Callout title="The water test for vermicompost" tone="peach">
        Take a small handful, drop it into a glass of water, and stir gently.
        Pure vermicompost stays as light flakes that slowly settle. If silt
        is mixed in, the water turns murky brown in seconds and a heavy sandy
        layer forms at the bottom.
      </Callout>

      <P>
        Eight of the ten bags failed the water test. Two were closer to 50%
        soil and silt than vermicompost. One bag — at ₹240 a kilo — was the
        worst. The seller had simply packed garden silt with a top layer of
        real castings so the bag looked dark when opened. The clean label was
        doing most of the work.
      </P>

      <Pull>
        We were paying ₹240 a kilo for dressed-up silt. We weren't furious. We
        were embarrassed for having trusted them for six months.
      </Pull>

      <H2>Why this happens in India</H2>
      <P>
        Vermicompost is heavy by weight. Silt is heavier. If you mix silt
        into vermicompost, you can sell more weight for less work. Customers
        don't notice because the bag looks the same on top.
      </P>
      <P>
        The market does not make this easy for a home gardener. A clean
        "organic" sticker can look reassuring even when nobody has checked what
        is actually inside the bag.
      </P>

      <H2>So we started making our own</H2>
      <P>
        We were bad at it at first. We learnt slowly: from soil scientists,
        from farmers in our village, and from mistakes we made in our own little
        composting setup behind the house.
      </P>
      <P>
        We figured out three things that mattered:
      </P>
      <UL>
        <LI>
          <strong>Feed quality.</strong> The worms can only produce what they
          eat. Clean cow dung from grass-fed cattle and farm waste — no
          plastic, no chemicals — makes the difference.
        </LI>
        <LI>
          <strong>Time.</strong> 60–90 days minimum. Most commercial
          operations rush this to 30 days to maximize turnover. The worms
          can't fully digest the inputs in 30 days.
        </LI>
        <LI>
          <strong>Patience after.</strong> Sun-curing and hand-sieving for two
          weeks after harvest. This is where most operations cut corners and
          start blending in silt to add bulk.
        </LI>
      </UL>

      <H2>What "no silt, no preservatives" actually means at Sarvada</H2>
      <UL>
        <LI>
          <strong>No silt.</strong> We don't add sand, soil, dust or any
          filler. Ever. Our castings are 100% what the worms produced.
        </LI>
        <LI>
          <strong>No preservatives.</strong> No fungicides, no chemical
          stabilizers. Our compost is living — that's the whole point.
        </LI>
        <LI>
          <strong>Slow cure.</strong> Minimum 90 days from feed to pack.
        </LI>
        <LI>
          <strong>Breathable bags.</strong> Microbes need oxygen. Sealed
          plastic kills them. Our packaging keeps the biology alive.
        </LI>
        <LI>
          <strong>Same farm, since 2018.</strong> We have not moved to a
          factory. We do not white-label. The pack you receive came from the
          same patch of ground where we started.
        </LI>
      </UL>

      <H2>What to look for when buying vermicompost — from anyone</H2>
      <P>
        Even if you don't buy from us, here's how to tell good vermicompost
        from filler.
      </P>

      <H3>Five signs of genuine vermicompost</H3>
      <UL>
        <LI>Light, flaky texture — never sandy or powdery.</LI>
        <LI>Earthy smell — like wet forest floor. Never sour, never ammonia.</LI>
        <LI>Uniform dark brown to nearly black colour throughout.</LI>
        <LI>Does not clump or harden when you squeeze it lightly.</LI>
        <LI>Passes the water test — water stays mostly clear.</LI>
      </UL>

      <H3>Five red flags</H3>
      <UL>
        <LI>Heavy bag that feels denser than it looks.</LI>
        <LI>Grey, brown, or reddish sandy texture mixed with dark flakes.</LI>
        <LI>Strong sour or chemical smell.</LI>
        <LI>Turns into a hard block within hours of watering in a pot.</LI>
        <LI>Suspiciously low price for the weight (under ₹40/kg is usually a warning).</LI>
      </UL>

      <H2>Why we keep doing this</H2>
      <P>
        12,000+ plant parents trust us today. We've been on the same farm since
        2018. We have never advertised on television. We've never chased big
        retail. Most people who buy from us were sent by someone whose plants
        did well with our bag.
      </P>
      <P>
        That's the only growth strategy we want.
      </P>

      <BlogFAQ
        postSlug="we-started-sarvada-because-we-were-lied-to"
        items={[
          {
            q: "How do I check if vermicompost is pure or mixed with silt?",
            a: "Do the water test. Drop a small handful into a glass of water and stir. Pure vermicompost stays as light flakes that settle slowly. If silt is mixed in, the water turns dark brown immediately and a heavy sandy layer settles at the bottom.",
          },
          {
            q: "Is Sarvada Organic vermicompost certified?",
            a: "We pack from our own farm in small batches. We don't carry the standard 'organic' logo because most certifications in India don't actually lab-test for silt or filler. We invite any customer to do the water test on our product before using it.",
          },
          {
            q: "Why is Sarvada vermicompost more expensive than nursery-shop vermicompost?",
            a: "Because there's no silt or filler. A typical ₹40/kg market bag is often 30–50% silt by weight. Sarvada's ₹120/kg for the 1kg pack is for actual castings — by volume of usable vermicompost, we're cheaper than the cheap option.",
          },
          {
            q: "What does 'no preservatives' mean in vermicompost?",
            a: "We never add fungicides, anti-fungal sprays or chemical stabilizers. Vermicompost should be living — billions of microbes per gram. Preservatives kill those microbes, defeating the entire point of organic compost.",
          },
          {
            q: "Where can I buy genuine vermicompost online in India?",
            a: "You can order Sarvada Organic vermicompost at sarvadaorganic.com — packed fresh, shipped pan-India, free delivery above ₹499, COD available. Or use the water test to verify any brand before buying.",
          },
        ]}
      />
    </Prose>
  );
}
