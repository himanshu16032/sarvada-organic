import {
  Prose,
  H2,
  H3,
  P,
  Lead,
  UL,
  LI,
  Pull,
  Callout,
  Table,
  BlogFAQ,
} from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        For most potted plants, use vermicompost like a topping, not like soil:
        2-3 teaspoons for a tiny nursery pot, 4-5 tablespoons for a 6-inch pot,
        half a teacup for an 8-inch pot, and one full teacup for a 12-inch pot.
        Sprinkle it on top, lightly mix the surface, and water once.
      </Lead>

      <P>
        Start there. Then adjust: bigger pots get more, indoor plants get less,
        fruiting vegetables get fed more often, and wet monsoon soil gets a
        lighter hand. Think of it like adding masala to food. A little improves
        everything; a heap does not make the plant twice as happy.
      </P>

      <Callout title="Start here" tone="peach">
        <strong>
          Use 4-5 tablespoons for a 6-inch pot, half a teacup for an 8-inch pot,
          and one full teacup for a 12-inch pot.
        </strong>{" "}
        Repeat every 30-45 days during active growth. Spread it like a thin
        brown blanket on top, leaving one finger of space around the stem.
      </Callout>

      <H2>How much vermicompost should I use per pot?</H2>
      <P>
        Use this table for top dressing existing pots. Do not press the compost
        down like cement. Sprinkle it, spread it, and mix only the top layer so
        it looks like the soil has been dusted with dark coffee powder.
      </P>

      <Table
        caption="Vermicompost spoon and cup guide by pot size"
        headers={["Pot size", "Use this much on top", "How often", "Best use"]}
        rows={[
          [
            "4-5 inch nursery pot",
            "2-3 teaspoons",
            "45-60 days",
            "Small herbs, cuttings, young indoor plants",
          ],
          [
            "6 inch pot",
            "4-5 tablespoons, or 1 loose handful",
            "30-45 days",
            "Tulsi, money plant, pothos, small flowering plants",
          ],
          [
            "8 inch pot",
            "Half a teacup, or 7-8 tablespoons",
            "30-45 days",
            "Medium indoor plants, herbs, small chillies",
          ],
          [
            "10 inch pot",
            "Three-quarter teacup, or 1 small katori",
            "30 days",
            "Rose, hibiscus, curry leaf, brinjal, chilli",
          ],
          [
            "12 inch pot",
            "1 full teacup",
            "30 days",
            "Tomato, capsicum, larger flowering plants",
          ],
          [
            "14-16 inch pot",
            "2 teacups",
            "30 days",
            "Fruit-heavy vegetables, large ornamentals",
          ],
          [
            "18 inch grow bag",
            "4-5 teacups",
            "20-30 days in fruiting season",
            "Tomato, gourds, okra, balcony vegetables",
          ],
          [
            "Raised bed",
            "A thin one-finger layer over the surface",
            "30-45 days",
            "Leafy greens, mixed vegetables, terrace beds",
          ],
        ]}
      />

      <Pull>
        If the pot is small enough to lift with one hand, do not pour in half a
        bag. A 6-inch pot wants spoons, not scoops. Plants in containers punish
        overfeeding slowly: wet topsoil, fungus gnats, weak flowering, and roots
        that never search deeper.
      </Pull>

      <H2>Should I mix vermicompost into soil or put it on top?</H2>
      <P>
        For an existing plant, top dress. Scratch the top layer loose, spread
        the vermicompost, mix it only into the top finger-depth of soil, and
        water. Do not dig deep around the root ball just to "mix it properly";
        most pot damage happens from that one well-meant mistake.
      </P>
      <P>
        For a new potting mix, use a scoop rule: 1 scoop vermicompost for every
        3-4 scoops of your base mix. If you are using a kitchen bowl, that means
        one bowl of vermicompost for three or four bowls of cocopeat, soil, leaf
        mould, perlite, sand, or rice husk.
      </P>

      <H2>Why the 1-scoop-in-4 rule is the safest starting point</H2>
      <P>
        Different guides phrase it differently, but they land in the same
        range.{" "}
        <a
          href="https://extension.okstate.edu/fact-sheets/vermicomposting-composting-with-worms"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Oklahoma State Extension
        </a>{" "}
        suggests using worm castings as roughly one quarter to one third of a
        potting mix, while{" "}
        <a
          href="https://extension.oregonstate.edu/catalog/em-9034-composting-worms"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Oregon State Extension
        </a>{" "}
        puts typical container use at about one quarter of total soil volume.
        For home pots, that is why the 1-scoop-in-4 rule works so well: enough
        food for the plant, not so much that the mix becomes heavy.
      </P>
      <P>
        A{" "}
        <a
          href="https://link.springer.com/article/10.1007/s13593-019-0579-x"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          2019 meta-analysis in Agronomy for Sustainable Development
        </a>{" "}
        found the strongest growth response when vermicompost made up a bigger
        share of the soil volume. I still prefer the 1-scoop-in-4 rule for
        balcony containers because pots need air space, drainage, and root
        movement. Once a mix becomes too rich and too dense, the plant may grow
        leaves while flowers and fruit slow down.
      </P>

      <H2>How to apply vermicompost without wasting it</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>
          <strong>Water lightly first</strong> if the soil is bone dry. Dry soil
          pulls water away from the compost and leaves it sitting on top.
        </li>
        <li>
          <strong>Loosen the top finger-depth</strong> with your fingers or a
          fork. Stop when you start seeing fine roots.
        </li>
        <li>
          <strong>Add the measured amount</strong> from the table. Keep a small
          gap around the stem so the crown does not stay wet.
        </li>
        <li>
          <strong>Mix only the top layer</strong>. The surface should look like
          soil with dark crumbs folded in, not like a new potting mix.
        </li>
        <li>
          <strong>Water once</strong> until the top layer settles. If possible,
          mulch with dry leaves or coco chips in summer.
        </li>
      </ol>

      <H2>How much for different plants?</H2>

      <H3>Tomato, chilli, brinjal and capsicum</H3>
      <P>
        These are heavy feeders in Indian pots. Use the higher end of the table
        and repeat every 20-30 days once flowering starts. For an 18-inch tomato
        grow bag, 4-5 teacups per feeding is normal during fruiting, but only if
        drainage is excellent.
      </P>

      <H3>Tulsi, mint, coriander and leafy greens</H3>
      <P>
        Feed lightly but regularly. A 6-inch tulsi pot needs 4-5 tablespoons
        every 30-45 days. Coriander and methi in trays do better with
        vermicompost mixed into the soil before sowing, then a thin sprinkle
        after the first cut.
      </P>

      <H3>Indoor foliage plants</H3>
      <P>
        Money plant, pothos, philodendron, peace lily and snake plant grow well
        with half to normal dose every 45-60 days. Indoor plants use nutrients
        slowly because light is lower. A heavy monthly dose usually gives you
        wet soil, not faster growth.
      </P>

      <H3>Roses, hibiscus and jasmine</H3>
      <P>
        Use the normal dose every 30 days in active growth. For a 10-12 inch
        pot, three-quarter to one full teacup is enough. If the plant has plenty
        of leaves but no buds, do not add more vermicompost; check sun first,
        then use a flowering support like diluted vermiwash on a separate day.
      </P>

      <H3>Succulents and cacti</H3>
      <P>
        Use very little. Add 1-2 tablespoons to a small pot every 60-90 days, or
        use only 1 spoon of vermicompost for every 8-10 spoons of gritty mix.
        These plants hate a rich, wet root zone.
      </P>

      <H2>What changes in summer, monsoon and winter?</H2>
      <UL>
        <LI>
          <strong>Peak summer</strong> - feed in the evening, water immediately,
          and mulch. In 38 C plus balcony heat, dry top dressing loses most of
          its value.
        </LI>
        <LI>
          <strong>Monsoon</strong> - use half the usual amount if the pot stays
          wet for more than a day. Wet compost on wet soil invites fungus gnats.
        </LI>
        <LI>
          <strong>Winter</strong> - stretch the gap to 45-60 days for slow
          growers. Feed vegetables and flowering plants only while they are
          actively growing.
        </LI>
        <LI>
          <strong>Fruiting season</strong> - tomatoes, chillies, brinjal and
          gourds can use smaller, more frequent feedings every 20-30 days.
        </LI>
      </UL>

      <H2>Can too much vermicompost hurt plants?</H2>
      <P>
        Mature vermicompost is gentle, especially compared with strong chemical
        fertilizer. The risk is different: too much organic matter in a small
        container holds water, slows drainage, and makes roots lazy. In
        flowering and fruiting plants, that often shows up as lush leaves with
        fewer buds.
      </P>
      <P>
        Stop feeding for a month if the topsoil stays wet, smells sour, grows a
        grey crust, or attracts tiny black flies. Scrape off the top layer, let
        the pot dry properly, and restart at half dose.
      </P>

      <H2>How much Sarvada vermicompost should I buy?</H2>
      <P>
        A 1 kg pack feeds about 13-18 small 6-inch pots once, or 5-7 medium
        10-inch pots once. A 5 kg pack is the better size for a mixed balcony
        garden with tomatoes, chillies, herbs and indoor plants because grow
        bags consume the pack quickly during fruiting.
      </P>

      <Callout title="Sarvada buying guide" tone="sage">
        If you have fewer than 10 small pots, start with 1 kg. If you have 15-25
        mixed pots or even two fruiting grow bags, pick 5 kg. If you are filling
        new pots from scratch, use the bowl rule: 1 bowl vermicompost for every
        3-4 bowls of base potting mix.
      </Callout>

      <H2>When should you not apply vermicompost?</H2>
      <UL>
        <LI>
          <strong>Right after repotting</strong> if the new mix already contains
          one scoop vermicompost for every 3-4 scoops of base mix.
        </LI>
        <LI>
          <strong>When roots are rotting</strong>. Fix drainage and watering
          first; feeding a drowning plant makes the pot wetter.
        </LI>
        <LI>
          <strong>On brand-new seedlings</strong> before they have 4-6 true
          leaves. Use a light mix, not a top dressing.
        </LI>
        <LI>
          <strong>In the same week as chemical fertilizer</strong>. Keep at
          least a 10-14 day gap so salts do not disturb the microbial activity.
        </LI>
      </UL>

      <BlogFAQ
        postSlug="how-much-vermicompost-to-use"
        items={[
          {
            q: "How much vermicompost do I use for a 6-inch pot?",
            a: "Use 4-5 tablespoons, roughly one loose handful, every 30-45 days. Sprinkle it on top, lightly mix the top finger-depth of soil, and water once.",
          },
          {
            q: "How much vermicompost should I mix into potting soil?",
            a: "Use 1 scoop vermicompost for every 3-4 scoops of base potting mix. If you measure with a bowl, use 1 bowl vermicompost with 3-4 bowls of soil, cocopeat, or other mix ingredients.",
          },
          {
            q: "Can I use vermicompost every week?",
            a: "Weekly use is usually too much for home pots. Use it every 30-45 days for most plants, every 20-30 days for heavy fruiting vegetables, and every 45-60 days for slow indoor plants.",
          },
          {
            q: "How much vermicompost does a tomato plant need?",
            a: "A tomato in a 12-inch pot needs about 1 full teacup every 30 days. In an 18-inch grow bag during fruiting, use 4-5 teacups every 20-30 days if drainage is good.",
          },
          {
            q: "Can too much vermicompost damage plants?",
            a: "Mature vermicompost rarely burns roots, but too much can keep container soil wet and heavy. Signs include fungus gnats, sour smell, grey crust, lush leaves with few flowers, and slow root growth.",
          },
          {
            q: "Should I put vermicompost on top or mix it deep?",
            a: "For existing plants, top dress only. Loosen the top finger-depth of soil, mix the vermicompost there, and water. Deep mixing can break feeder roots.",
          },
          {
            q: "Is vermicompost safe for seedlings?",
            a: "Yes, but use it lightly. For seed trays, mix 1 spoon of vermicompost with 5-6 spoons of light seed mix, and wait until seedlings have 4-6 true leaves before top dressing.",
          },
          {
            q: "How long does 1 kg vermicompost last?",
            a: "One kilogram feeds about 13-18 small 6-inch pots once, or 5-7 medium 10-inch pots once. A mixed balcony with grow bags will use it faster than an indoor plant collection.",
          },
        ]}
      />
    </Prose>
  );
}
