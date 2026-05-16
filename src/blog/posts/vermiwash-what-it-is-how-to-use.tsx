import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        Vermiwash is the dark brown liquid that drains out the bottom of a
        vermicompost bed when it's watered. For decades, farmers in India
        have collected it in buckets and sprayed it on their crops. It's one
        of the most underrated tools in organic gardening — and the easiest
        to use.
      </Lead>

      <H2>What vermiwash actually is</H2>
      <P>
        When water is poured through a vermicompost bed, it picks up
        water-soluble nutrients and trillions of beneficial microbes as it
        percolates through worm castings. The result is a dilute, biologically
        active liquid that delivers nutrients faster than dry compost — but
        without the harshness of chemical sprays.
      </P>
      <P>It contains, in tiny but balanced amounts:</P>
      <UL>
        <LI>Soluble NPK</LI>
        <LI>Beneficial bacteria, actinomycetes and fungi</LI>
        <LI>Plant growth hormones (auxins, cytokinins, gibberellins)</LI>
        <LI>Humic and fulvic acids</LI>
        <LI>Trace minerals (iron, manganese, zinc)</LI>
      </UL>

      <Pull>
        Think of vermicompost as the meal. Vermiwash is the cup of soup before
        the meal — quick to absorb, immediately useful, gentle on the stomach.
      </Pull>

      <H2>Why it works better than most chemical foliar sprays</H2>
      <P>
        Most chemical leaf sprays are salt-based — they deliver nutrients
        through stomata fast, but they can scorch leaves in heat and disrupt
        the leaf's surface microbiome. Vermiwash is microbe-rich and pH-balanced.
        Beneficial bacteria colonise the leaf surface (the "phyllosphere")
        and crowd out pathogens. Your plant gets fed and protected in one pass.
      </P>

      <H2>How to dilute vermiwash</H2>
      <Callout title="The standard dilution" tone="peach">
        <strong>1 part vermiwash : 10 parts water.</strong> For most home
        plants. For seedlings and very young plants, go 1:20. Never spray
        undiluted — even though it's organic, the concentration is too high
        for leaf tissue.
      </Callout>

      <H2>How to use vermiwash on different plants</H2>

      <H3>As a foliar spray</H3>
      <P>
        Use a clean spray bottle. Spray both sides of the leaves until
        slightly damp, not dripping. Best time: early morning or late
        evening, never in afternoon heat. Spray once a week during active
        growth, once every two weeks otherwise.
      </P>

      <H3>As a soil drench</H3>
      <P>
        Pour 50–100 ml of 1:10 dilution at the base of each medium pot once
        every 14 days. Especially good for plants that don't like leaf
        wetness — succulents, some indoor foliage.
      </P>

      <H3>For seedling stage</H3>
      <P>
        Mist 1:20 dilution every 5–7 days for the first month after
        germination. Helps build strong root structure and disease resistance.
      </P>

      <H2>Which plants respond best to vermiwash</H2>
      <UL>
        <LI><strong>Leafy vegetables</strong> — methi, spinach, lettuce. Visible greening within a week.</LI>
        <LI><strong>Flowering plants</strong> — roses, hibiscus, jasmine, marigold. More buds, longer bloom.</LI>
        <LI><strong>Indoor foliage</strong> — bigger leaves, glossier surface.</LI>
        <LI><strong>Recovering plants</strong> — gentler than chemical fixes.</LI>
        <LI><strong>Tomatoes and chillies</strong> during flowering and fruit-set.</LI>
      </UL>

      <H2>Common mistakes</H2>
      <UL>
        <LI><strong>Spraying undiluted.</strong> Leaf burn on tender plants. Always 1:10 or 1:20.</LI>
        <LI><strong>Afternoon spraying.</strong> Hot leaf surface + droplet = magnifying-glass sun damage.</LI>
        <LI><strong>Storing diluted vermiwash overnight.</strong> The microbes consume oxygen and start fermenting. Always dilute fresh.</LI>
        <LI><strong>Mixing with neem oil at the same time.</strong> Use them on alternate days, not together — neem can kill some of the beneficial microbes.</LI>
      </UL>

      <H2>How to make your own vermiwash at home</H2>
      <P>
        If you keep a small vermicompost bin:
      </P>
      <UL>
        <LI>Place the bin slightly elevated, with a tray underneath.</LI>
        <LI>Once a week, water the bed slowly with 1–2 litres of clean water.</LI>
        <LI>Collect the brown liquid that drains into the tray.</LI>
        <LI>Use it the same day, diluted. Don't store more than 24 hours.</LI>
      </UL>

      <Callout title="Sarvada's bottled vermiwash" tone="sage">
        We're rolling out a stabilised, bottled vermiwash that holds for 3
        months without losing microbial life. Sign up to the newsletter for
        launch notification.
      </Callout>

      <BlogFAQ
        postSlug="vermiwash-what-it-is-how-to-use"
        items={[
          {
            q: "What is vermiwash and how is it different from vermicompost?",
            a: "Vermicompost is the solid earthworm casting. Vermiwash is the liquid that drips out of a vermicompost bed when watered — concentrated soluble nutrients, microbes and plant hormones. Together they're the perfect organic feeding combo.",
          },
          {
            q: "How do I dilute vermiwash for foliar spray?",
            a: "Standard dilution is 1 part vermiwash to 10 parts water. For seedlings and tender plants, use 1:20. Never spray undiluted — concentrations can scorch leaves even though the product is fully organic.",
          },
          {
            q: "When is the best time to spray vermiwash on plants?",
            a: "Early morning before 10 AM, or after 5 PM. Never in afternoon heat — droplets on hot leaves cause burning. Mist both sides of the leaves until damp, not dripping.",
          },
          {
            q: "Can I use vermiwash on indoor plants?",
            a: "Yes — but for indoor foliage, a soil drench (50–100 ml of 1:10 dilution) every 14 days works better than misting, since you don't want wet leaves indoors. For all plants, vermiwash is an excellent gentle booster.",
          },
          {
            q: "Can I mix vermiwash with neem oil for pest control?",
            a: "Use them separately, on alternate days. Neem oil can kill some of the beneficial microbes in vermiwash. Use neem for pest control, vermiwash for nutrition and disease resistance.",
          },
        ]}
      />
    </Prose>
  );
}
