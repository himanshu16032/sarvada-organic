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
        The best fertilizer for indoor plants is not the strongest one. It is
        the one you can use lightly without turning the pot into a wet, heavy
        mess. For most Indian homes, that means vermicompost every 45-60 days in
        a loose potting mix.
      </Lead>

      <P>
        Indoor plants live slower lives than balcony plants. They get less sun,
        lose less water, and use food more slowly. Feeding them like a tomato
        plant in full sun is like serving a full thali to someone who only asked
        for tea.
      </P>
      <P>
        At Sarvada, our safest indoor advice is boring on purpose: feed less
        than you feel like feeding, keep the mix loose, and let the plant show
        active growth before increasing food.
      </P>

      <Callout title="Start here" tone="peach">
        For money plant, pothos, snake plant, palms, peace lily and philodendron,
        use 2-4 tablespoons vermicompost on an 8-inch pot every 45-60 days.
        Keep the potting mix airy and water only when the top layer dries.
      </Callout>

      <H2>Best fertilizer for indoor plants: the simple answer</H2>
      <P>
        Use mature vermicompost as the regular food. It is mild, easy to dose,
        and it supports the soil instead of forcing sudden leaf growth. Indoor
        plants rarely need heavy feeding unless they are in bright light and
        actively growing.
      </P>
      <P>
        <a
          href="https://fieldreport.caes.uga.edu/publications/B1318/growing-indoor-plants-with-success/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Georgia Extension
        </a>{" "}
        explains indoor plant success through the balance of light, water,
        temperature, humidity, soil and fertilizer. That balance matters because
        fertilizer cannot fix a dark corner, a blocked drainage hole, or a pot
        that stays wet for a week.
      </P>

      <Table
        caption="Indoor plant fertilizer schedule"
        headers={["Plant type", "Vermicompost dose", "How often", "Note"]}
        rows={[
          [
            "Money plant, pothos, philodendron",
            "2-4 tablespoons for an 8-inch pot",
            "45-60 days",
            "Use less in low light",
          ],
          [
            "Snake plant and ZZ plant",
            "1-2 tablespoons",
            "60-90 days",
            "These plants dislike wet, rich soil",
          ],
          [
            "Peace lily and palms",
            "3-5 tablespoons",
            "45-60 days",
            "Feed only when new leaves are coming",
          ],
          [
            "Herbs near a sunny window",
            "3-4 tablespoons",
            "30-45 days",
            "They use more food than decorative plants",
          ],
          [
            "Recently repotted plants",
            "Skip top feeding",
            "Wait 30-45 days",
            "Fresh mix usually already has compost",
          ],
        ]}
      />

      <H2>Garden soil mix is not the same as potting mix</H2>
      <P>
        Garden soil is made for open ground. Potting mix is made for a
        container. That difference matters indoors because the pot is a closed
        room for roots. If the room has no air, fertilizer only makes it wetter
        and heavier.
      </P>
      <P>
        <a
          href="https://extension.illinois.edu/container-gardens/soil"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Illinois Extension
        </a>{" "}
        says container media must drain and breathe.{" "}
        <a
          href="https://fieldreport.caes.uga.edu/publications/C787/gardening-in-containers/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Georgia Extension
        </a>{" "}
        also points out that poor aeration and excess moisture stress roots in
        containers. That is why plain garden soil often fails inside pots.
      </P>

      <H2>A good indoor potting mix recipe</H2>
      <P>
        Use this as your default indoor potting mix. Measure with any one scoop:
        a mug, katori, bowl or garden trowel. The ratio matters more than the
        tool.
      </P>
      <Table
        caption="10-scoop indoor potting mix"
        headers={["Ingredient", "Amount", "Job"]}
        rows={[
          ["Garden soil or red soil", "3 scoops", "Weight and mineral structure"],
          ["Cocopeat", "4 scoops", "Moisture holding and softness"],
          ["Vermicompost", "2 scoops", "Slow organic food"],
          ["Perlite, rice husk or coarse sand", "1 scoop", "Air and drainage"],
        ]}
      />
      <P>
        The mix should feel like moist poha: soft, airy and crumbly. If it feels
        like wet dough, add more rice husk, perlite or coarse sand before
        planting.
      </P>
      <P>
        For plant-specific ratios, use the full{" "}
        <a
          href="/blog/right-potting-mix-for-every-plant"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          potting mix guide
        </a>
        . For dose by pot size, keep the{" "}
        <a
          href="/blog/how-much-vermicompost-to-use"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          vermicompost spoon guide
        </a>{" "}
        open while feeding.
      </P>

      <Pull>
        Indoor plant care is mostly restraint. Less water, less fertilizer, more
        patience, and better soil structure.
      </Pull>

      <H2>Organic fertilizers that work indoors</H2>
      <UL>
        <LI>
          <strong>Vermicompost:</strong> best regular food for most indoor pots.
        </LI>
        <LI>
          <strong>Vermiwash:</strong> useful as a light diluted spray or drench,
          but not every day.
        </LI>
        <LI>
          <strong>Neem cake:</strong> useful in tiny amounts for soil support,
          especially when repotting.
        </LI>
        <LI>
          <strong>Composted leaf mould:</strong> good for texture, but not a
          complete fertilizer.
        </LI>
        <LI>
          <strong>Cow dung manure:</strong> avoid indoors unless it is fully
          decomposed, dry, low-smell and used very lightly.
        </LI>
      </UL>

      <H2>How to apply natural plant fertilizer indoors</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>Check that the plant is getting enough light for new growth.</li>
        <li>Loosen only the top finger-depth of soil.</li>
        <li>Sprinkle the measured vermicompost like a thin blanket.</li>
        <li>Keep one finger gap around the stem.</li>
        <li>Water once, then wait until the top layer dries before watering again.</li>
      </ol>

      <H2>Signs you are overfeeding indoor plants</H2>
      <UL>
        <LI>White or grey crust on topsoil.</LI>
        <LI>Fungus gnats around the pot.</LI>
        <LI>Sour smell after watering.</LI>
        <LI>Soft new growth that bends easily.</LI>
        <LI>Yellowing after feeding, especially in low light.</LI>
      </UL>

      <Callout title="Sarvada note" tone="sage">
        If an indoor plant is not growing, check light and drainage before
        adding more fertilizer. Vermicompost helps living soil, but it cannot
        replace sunlight.
      </Callout>
      <P>
        If you want a low-smell regular feed for indoor pots, compare the{" "}
        <a
          href="/collections/vermicompost"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Sarvada vermicompost packs
        </a>{" "}
        and start with the smallest size that matches your plant count.
      </P>

      <BlogFAQ
        postSlug="best-fertilizer-for-indoor-plants"
        items={[
          {
            q: "What is the best fertilizer for indoor plants?",
            a: "For most indoor plants, pure vermicompost is the safest regular fertilizer. Use it lightly every 45-60 days and reduce the dose in low light.",
          },
          {
            q: "Can I use garden soil mix for indoor plants?",
            a: "Use garden soil only as one part of a potting mix. Plain garden soil becomes compact in containers, so mix it with cocopeat, vermicompost and an air material.",
          },
          {
            q: "What is the best potting mix for indoor plants?",
            a: "Use 3 scoops soil, 4 scoops cocopeat, 2 scoops vermicompost and 1 scoop perlite, rice husk or coarse sand.",
          },
          {
            q: "Are organic fertilizers safe for indoor plants?",
            a: "Yes, when used lightly. Vermicompost is usually safe indoors. Avoid fresh cow dung manure because it can smell, stay wet and harm roots.",
          },
          {
            q: "How often should I fertilize indoor plants?",
            a: "Every 45-60 days during active growth is enough for most indoor plants. Snake plant and ZZ plant can wait 60-90 days.",
          },
          {
            q: "Can too much natural plant fertilizer hurt indoor plants?",
            a: "Yes. Too much organic fertilizer can keep soil wet and attract fungus gnats. Use small measured doses instead of covering the whole pot heavily.",
          },
        ]}
      />
    </Prose>
  );
}
