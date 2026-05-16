import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        You've finally bought a bag of vermicompost. You're standing on your
        balcony with a handful in your palm, wondering — is this too much? Too
        little? Nobody told you a number.
      </Lead>

      <P>
        Most "how to use vermicompost" articles online say something vague like
        "add a sufficient quantity." That isn't help. Here's the simple,
        specific answer for Indian home gardeners — measured in handfuls, pot
        sizes, and the way actual plants respond.
      </P>

      <H2>The one-sentence rule</H2>
      <P>
        For potted plants, use{" "}
        <strong>
          one fist of vermicompost (roughly 50&nbsp;grams) per 6-inch pot, every
          30–45 days
        </strong>
        . Mix it gently into the top 2 inches of soil and water. That's it.
        Everything below this is just adjustments for pot size, plant type,
        and season.
      </P>

      <Pull>
        If you remember nothing else: a fistful, mixed in the top inch, once a
        month. Plants do not need more.
      </Pull>

      <H2>The exact quantity by pot size</H2>
      <P>
        This is the table to bookmark. It works for almost every Indian home
        gardener with terrace pots, balcony grow bags, or windowsill planters.
      </P>

      <Table
        caption="Vermicompost quantity by pot size"
        headers={["Pot size", "Top dressing", "Frequency", "When repotting"]}
        rows={[
          ["4–6 inch", "1 fist (~50 g)", "Every 30–45 days", "Mix 20% into soil"],
          ["8–10 inch", "2 fists (~100 g)", "Every 30 days", "Mix 25% into soil"],
          ["12–14 inch", "1 cup (~150–200 g)", "Every 30 days", "Mix 25% into soil"],
          ["Grow bag (18 inch)", "2 cups (~300–400 g)", "Every 30 days", "Mix 30% into soil"],
          ["Raised bed / terrace plot", "1 kg per sq. ft.", "Every 45 days", "Mix 30% before planting"],
        ]}
      />

      <H2>What about different plant types?</H2>
      <P>
        All plants love vermicompost, but a few are heavier feeders. Adjust
        upward gently — never double-dose.
      </P>

      <H3>Heavy feeders (use the higher end of the table)</H3>
      <UL>
        <LI>Tomato, brinjal, chilli, capsicum</LI>
        <LI>Roses and hibiscus</LI>
        <LI>Bottle gourd, ridge gourd, bitter gourd</LI>
        <LI>Banana, papaya in pots</LI>
      </UL>

      <H3>Light feeders (use the lower end of the table)</H3>
      <UL>
        <LI>Money plant, snake plant, pothos</LI>
        <LI>Tulsi, mint, oregano</LI>
        <LI>Succulents and cacti — half the dose, every 60 days</LI>
        <LI>Seedlings less than 30 days old — sprinkle, don't mix</LI>
      </UL>

      <H2>The three mistakes nobody warns you about</H2>

      <H3>1. Using too much, too often</H3>
      <P>
        Real vermicompost is gentle, but it isn't magic. Doubling the dose
        will not make your plant grow twice as fast. It will, however, create
        a slow nutrient build-up that suppresses fruiting and flowering. Trust
        the slow release.
      </P>

      <H3>2. Applying it dry in peak summer</H3>
      <P>
        Indian summers strip moisture fast. Mix vermicompost in the evening,
        water immediately, and mulch on top if possible. Dry top-dressing in
        45&nbsp;°C heat sits useless on the surface.
      </P>

      <H3>3. Mixing it with chemical fertilizer in the same week</H3>
      <P>
        The salts in chemical fertilizers can kill the living microbes
        vermicompost is famous for. Pick one approach. If you must use both,
        space them at least 14 days apart.
      </P>

      <Callout title="Sarvada tip" tone="peach">
        For Sarvada Organic vermicompost, one 1&nbsp;kg pack feeds roughly 15–20
        small pots for a month. A 5&nbsp;kg pack lasts a typical balcony
        gardener 4–5 months. Plan your re-order accordingly.
      </Callout>

      <H2>Quick reference: when to feed your plants</H2>
      <UL>
        <LI><strong>Indoor plants</strong> — once every 30–45 days, year-round.</LI>
        <LI><strong>Flowering plants</strong> — every 21–30 days during the flowering season.</LI>
        <LI><strong>Vegetables</strong> — at sowing, then every 20 days through fruiting.</LI>
        <LI><strong>New seedlings</strong> — wait until they have 4–6 true leaves, then start light.</LI>
        <LI><strong>Stressed or sick plants</strong> — do NOT feed. Fix the stress (water, light, drainage) first.</LI>
      </UL>

      <BlogFAQ
        postSlug="how-much-vermicompost-to-use"
        items={[
          {
            q: "Can I use vermicompost daily?",
            a: "No. Vermicompost is slow-release — it keeps feeding for 30–45 days from a single application. Daily use wastes product and risks salt build-up over months.",
          },
          {
            q: "How much vermicompost per indoor plant in a 6-inch pot?",
            a: "About one fist (50 grams) of pure vermicompost, gently mixed into the top 1–2 inches of soil, once every 30–45 days.",
          },
          {
            q: "Can I mix vermicompost directly with cocopeat for seedlings?",
            a: "Yes — for seedlings, a 60% cocopeat + 40% vermicompost mix works beautifully. No garden soil needed at this stage.",
          },
          {
            q: "Does adding more vermicompost grow bigger flowers?",
            a: "No. Past a certain quantity, extra vermicompost suppresses flowering. Stick to the table values. For more flowers, focus on light and a phosphorus-rich top-up like vermiwash spray.",
          },
          {
            q: "How much Sarvada vermicompost do I need for a 20-pot balcony?",
            a: "Roughly 1 kg per month for 20 small/medium pots. A 5 kg pack will comfortably last you 4–5 months. Many Sarvada customers move to the monthly subscription once they have 15+ pots.",
          },
        ]}
      />
    </Prose>
  );
}
