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
        For tomato plants in Indian pots, the best fertilizer is a steady
        routine, not one strong dose. Start with an airy potting mix, add
        vermicompost before planting, then top dress every 20-30 days once the
        plant begins flowering.
      </Lead>

      <P>
        Tomatoes are hungry, but they are also dramatic. Too little food gives
        pale leaves and weak fruiting. Too much food gives a leafy plant that
        behaves like it forgot the tomato part. Feed it like a marathon runner,
        not like a phone on fast charge.
      </P>
      <P>
        At Sarvada, tomato advice usually starts with the pot, not the packet:
        a tomato in tight, wet soil cannot use even good organic fertilizer
        properly.
      </P>

      <Callout title="Tomato feeding rule" tone="peach">
        For a 12-inch tomato pot, mix 2 scoops vermicompost into every 10 scoops
        of potting mix before planting. After flowering starts, add 1 teacup
        vermicompost on top every 20-30 days if drainage is good.
      </Callout>

      <H2>Best fertilizer for tomato plant in pots</H2>
      <P>
        In home pots, tomato plants need three things together: loose soil,
        regular organic food and enough sun. Vermicompost is a good starting
        point because it feeds gently and improves the soil around roots.
      </P>
      <P>
        <a
          href="https://extension.umd.edu/resource/growing-tomatoes-home-garden"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Maryland Extension
        </a>{" "}
        treats tomato success as a full growing system: soil, planting, support,
        water and disease prevention all matter. That is why fertilizer alone
        cannot save a tomato plant in a tiny pot, dark corner or sticky soil.
      </P>

      <Table
        caption="Tomato fertilizer schedule"
        headers={["Stage", "What to do", "How much", "Watch for"]}
        rows={[
          [
            "Before planting",
            "Mix vermicompost into potting mix",
            "2 scoops in every 10 scoops mix",
            "Mix should still feel airy",
          ],
          [
            "First 2 weeks",
            "Do not add extra fertilizer",
            "Only water when needed",
            "Let roots settle",
          ],
          [
            "Vegetative growth",
            "Light top dressing",
            "Half teacup for a 12-inch pot",
            "Deep green leaves, firm stem",
          ],
          [
            "Flowering starts",
            "Regular top dressing",
            "1 teacup every 20-30 days",
            "Flowers should not drop heavily",
          ],
          [
            "Fruiting",
            "Continue feeding if drainage is good",
            "1 teacup every 20-30 days",
            "Even watering matters most",
          ],
          [
            "Monsoon or wet soil",
            "Reduce dose",
            "Half dose",
            "Avoid fungus gnats and root rot",
          ],
        ]}
      />

      <H2>Use the right tomato potting mix first</H2>
      <P>
        A tomato plant in a pot needs more root room than most beginners expect.
        Use a 12-inch pot as the minimum. Choose an 18-inch grow bag if you want
        a stronger harvest. Fertilizer works better when roots can breathe.
      </P>
      <Table
        caption="10-scoop tomato potting mix"
        headers={["Ingredient", "Amount", "Job"]}
        rows={[
          ["Garden soil or red soil", "3 scoops", "Mineral base and weight"],
          ["Cocopeat", "3 scoops", "Moisture holding"],
          ["Vermicompost", "2 scoops", "Slow organic food"],
          ["Leaf mould or composted manure", "1 scoop", "Organic matter"],
          ["Rice husk, perlite or coarse sand", "1 scoop", "Drainage and air"],
        ]}
      />
      <P>
        For more mix options, use the{" "}
        <a
          href="/blog/right-potting-mix-for-every-plant"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          potting mix recipe guide
        </a>
        . For exact feeding quantities by pot size, use the{" "}
        <a
          href="/blog/how-much-vermicompost-to-use"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          vermicompost dose guide
        </a>
        .
      </P>

      <H2>How to apply vermicompost to tomato plants</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>Water lightly if the topsoil is very dry.</li>
        <li>Loosen the top finger-depth of soil without cutting roots.</li>
        <li>Spread the measured vermicompost in a ring away from the stem.</li>
        <li>Mix only the top layer gently.</li>
        <li>Water once so the compost settles.</li>
        <li>Mulch with dry leaves in summer to keep moisture steady.</li>
      </ol>

      <Pull>
        Tomato plants hate sudden changes. Steady water plus steady food beats
        one big fertilizer dose every time.
      </Pull>

      <H2>What tomatoes need besides fertilizer</H2>
      <UL>
        <LI>
          <strong>Sun:</strong> 6-8 hours of direct light is ideal.
        </LI>
        <LI>
          <strong>Support:</strong> add a stake or cage before the plant becomes
          heavy.
        </LI>
        <LI>
          <strong>Water:</strong> keep moisture even; do not swing from bone dry
          to flooded.
        </LI>
        <LI>
          <strong>Air:</strong> avoid overcrowding leaves against walls or other
          pots.
        </LI>
        <LI>
          <strong>Mulch:</strong> dry leaves or coco chips reduce summer stress.
        </LI>
      </UL>

      <H2>If your tomato plant has leaves but no fruit</H2>
      <P>
        Do not immediately add more fertilizer. First check sunlight. A tomato
        in weak light may grow leaves but fail to flower properly. Next check
        nitrogen. Too much rich food can push leaf growth at the cost of
        flowering.
      </P>
      <P>
        If the plant is very leafy, pause feeding for 2-3 weeks, give it more
        sun if possible, and keep watering even. When flowers return, restart
        with a smaller vermicompost dose.
      </P>

      <H2>If flowers are falling</H2>
      <P>
        Flower drop is often stress, not hunger. Heat, irregular watering, low
        sunlight, strong wind, or a pot drying out too often can all cause it.
        Feeding more during stress usually makes the pot wetter and heavier.
      </P>
      <UL>
        <LI>Water deeply and evenly instead of sprinkling daily.</LI>
        <LI>Mulch during hot weeks.</LI>
        <LI>Move the pot where it gets morning sun and some harsh-afternoon relief.</LI>
        <LI>Use half-dose vermicompost during monsoon or cloudy weeks.</LI>
      </UL>

      <H2>When chemical tomato fertilizer may help</H2>
      <P>
        Organic fertilizer is a good base, but some problems need targeted
        correction. If leaves show a clear deficiency pattern, or if blossom-end
        rot appears repeatedly even with steady watering, a specific nutrient
        treatment may be needed. Do not guess with strong fertilizer. Diagnose
        first.
      </P>

      <Callout title="Sarvada note" tone="sage">
        For tomatoes in grow bags, Sarvada vermicompost works best as part of a
        loose mix and as a measured top dressing. Do not fill the whole grow bag
        with compost; roots need structure as much as food.
      </Callout>
      <P>
        If your plant is already stressed, read the{" "}
        <a
          href="/blog/tomato-plant-came-back-after-i-changed-one-thing"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          tomato plant recovery guide
        </a>{" "}
        before adding more food. If the plant is healthy and fruiting, compare{" "}
        <a
          href="/collections/vermicompost"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Sarvada vermicompost packs
        </a>{" "}
        for regular feeding.
      </P>

      <BlogFAQ
        postSlug="fertilizer-for-tomato-plant"
        items={[
          {
            q: "What is the best fertilizer for tomato plant in pots?",
            a: "Use vermicompost as the base organic fertilizer. Mix it into the potting mix before planting, then top dress every 20-30 days after flowering starts.",
          },
          {
            q: "How much vermicompost does a tomato plant need?",
            a: "A 12-inch tomato pot needs about 1 teacup as top dressing every 20-30 days during flowering and fruiting. Use half dose if the pot stays wet.",
          },
          {
            q: "Can I use cow dung manure for tomato plants?",
            a: "Use only well-rotted cow dung manure, preferably in outdoor beds or as a small part of the potting mix. Do not use fresh cow dung in tomato pots.",
          },
          {
            q: "Why is my tomato plant growing leaves but no tomatoes?",
            a: "Common causes are low sunlight, excess nitrogen, poor pollination, heat stress or an undersized pot. Check sun and watering before adding more fertilizer.",
          },
          {
            q: "How often should I fertilize tomato plants?",
            a: "Feed lightly during early growth, then every 20-30 days after flowering starts. Keep watering steady because tomatoes react badly to sudden dry-wet cycles.",
          },
          {
            q: "What potting mix is best for tomato plants?",
            a: "Use 3 scoops soil, 3 scoops cocopeat, 2 scoops vermicompost, 1 scoop leaf mould or composted manure and 1 scoop rice husk, perlite or coarse sand.",
          },
        ]}
      />
    </Prose>
  );
}
