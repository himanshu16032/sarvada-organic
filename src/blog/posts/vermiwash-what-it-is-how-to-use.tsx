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
        Vermiwash is the brown liquid collected from a vermicompost bed. Dilute
        it before it touches a plant: 1 cap vermiwash with 10 caps water for
        normal plants, or 1 cap with 20 caps water for seedlings. Spray in the
        early morning or evening until leaves look lightly misted, not dripping.
      </Lead>

      <P>
        Think of vermicompost as the meal and vermiwash as the quick drink.
        Vermicompost feeds slowly through the soil. Vermiwash is useful when a
        plant needs a gentle leaf spray or a light soil drink without the shock
        of chemical fertilizer.
      </P>

      <Callout title="Fast dilution" tone="peach">
        <strong>
          For a 1 litre spray bottle, add half a teacup of vermiwash and fill
          the rest with water.
        </strong>{" "}
        For seedlings, use only 2-3 tablespoons in the same bottle. Never spray
        vermiwash undiluted.
      </Callout>

      <H2>What vermiwash actually is</H2>
      <P>
        When clean water passes slowly through a vermicompost bed, it carries
        tiny amounts of soluble nutrients, humic substances and microbes from
        the worm castings. Do not expect a thick fertilizer. Good vermiwash is
        closer to a light compost tea.
      </P>
      <P>
        Good vermiwash should smell earthy, not rotten. It should look like weak
        tea or thin black coffee. If it smells sour, alcoholic or sewage-like,
        do not spray it on leaves.
      </P>

      <Pull>
        Vermiwash is not magic plant medicine. It is a gentle support. The trick
        is dilution, timing and not overusing it.
      </Pull>

      <H2>How to dilute vermiwash without measuring equipment</H2>
      <P>
        Use the same cup, cap or spoon for both liquids. That is all a ratio
        means. One bottle cap of vermiwash gets 10 bottle caps of water. One
        tablespoon gets 10 tablespoons of water.
      </P>

      <Table
        caption="Vermiwash dilution guide"
        headers={["Use case", "Household measure", "How strong"]}
        rows={[
          [
            "Normal foliar spray",
            "1 cap vermiwash + 10 caps water",
            "Standard gentle spray",
          ],
          [
            "1 litre spray bottle",
            "Half teacup vermiwash, rest water",
            "Good for most home plants",
          ],
          [
            "Seedlings",
            "1 cap vermiwash + 20 caps water",
            "Very mild",
          ],
          [
            "Tender indoor plants",
            "2-3 tablespoons in 1 litre water",
            "Safer first spray",
          ],
          [
            "Soil drench",
            "Half teacup diluted mix per medium pot",
            "Pour near the edge of the pot",
          ],
        ]}
      />

      <H2>How to use vermiwash as a leaf spray</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>
          <strong>Dilute fresh.</strong> Mix only what you will use that day.
        </li>
        <li>
          <strong>Spray before 10 AM or after 5 PM.</strong> Do not spray hot
          leaves in afternoon sun.
        </li>
        <li>
          <strong>Mist both sides of the leaves.</strong> Stop when the leaves
          look damp. They should not drip.
        </li>
        <li>
          <strong>Repeat weekly during active growth.</strong> For slow indoor
          plants, once every 15 days is enough.
        </li>
        <li>
          <strong>Watch one leaf first.</strong> For a new plant, spray a small
          patch and wait a day before spraying the full plant.
        </li>
      </ol>

      <H2>How to use vermiwash as a soil drench</H2>
      <P>
        A soil drench means pouring the diluted vermiwash into the pot instead
        of spraying leaves. Use this for indoor foliage, succulents, or plants
        that do not like wet leaves. Pour half a teacup of diluted mix around
        the edge of a medium pot, not directly on the stem.
      </P>

      <Table
        caption="Vermiwash use by plant type"
        headers={["Plant type", "Best method", "How often"]}
        rows={[
          [
            "Methi, spinach, coriander",
            "Mild leaf spray",
            "Once a week after true leaves appear",
          ],
          [
            "Tomato and chilli",
            "Leaf spray during flowering",
            "Once every 7-10 days",
          ],
          [
            "Rose, hibiscus, jasmine",
            "Leaf spray",
            "Once a week in active growth",
          ],
          [
            "Money plant, pothos, peace lily",
            "Soil drench",
            "Once every 15 days",
          ],
          [
            "Succulents and cacti",
            "Very mild soil drench",
            "Once a month, only if growing",
          ],
          [
            "Seedlings",
            "Very mild mist",
            "Once every 7-10 days",
          ],
        ]}
      />

      <H2>When vermiwash helps most</H2>
      <UL>
        <LI>
          <strong>After transplant shock</strong> - wait 3-4 days, then use a
          very mild spray.
        </LI>
        <LI>
          <strong>During flowering</strong> - tomatoes, chillies and flowering
          plants respond well to gentle weekly support.
        </LI>
        <LI>
          <strong>For dull leaves</strong> - indoor foliage often looks fresher
          after a mild soil drench.
        </LI>
        <LI>
          <strong>For leafy greens</strong> - spray lightly after the first true
          leaves, never on the day you harvest.
        </LI>
      </UL>

      <H2>Common mistakes</H2>
      <UL>
        <LI>
          <strong>Spraying undiluted</strong> - even organic liquids can stress
          tender leaves when used too strong.
        </LI>
        <LI>
          <strong>Spraying at noon</strong> - droplets on hot leaves can leave
          burn marks.
        </LI>
        <LI>
          <strong>Mixing with neem oil</strong> - use neem and vermiwash on
          separate days.
        </LI>
        <LI>
          <strong>Storing diluted mix</strong> - mix fresh and use the same day.
        </LI>
        <LI>
          <strong>Using it on sick leaves</strong> - black spots, mildew and rot
          need disease care first.
        </LI>
      </UL>

      <H2>Can you make vermiwash at home?</H2>
      <P>
        Yes, if you already keep a healthy vermicompost bin. Place a tray under
        the bin, pour clean water slowly through the compost bed, collect the
        brown liquid that drains out, dilute it, and use it the same day. Do not
        store homemade diluted vermiwash for later.
      </P>

      <Callout title="Sarvada note" tone="sage">
        We are working on a ready-to-dilute Sarvada vermiwash. Until it is
        ready, follow the same safety rule for any vermiwash: dilute first,
        spray cool leaves, and use less on seedlings.
      </Callout>

      <BlogFAQ
        postSlug="vermiwash-what-it-is-how-to-use"
        items={[
          {
            q: "What is vermiwash?",
            a: "Vermiwash is the brown liquid collected from a vermicompost bed after water passes through worm castings. It contains small amounts of soluble nutrients, humic substances and microbes.",
          },
          {
            q: "How do I dilute vermiwash for plants?",
            a: "Use 1 cap vermiwash with 10 caps water for most plants. For seedlings and tender indoor plants, use 1 cap with 20 caps water or 2-3 tablespoons in a 1 litre spray bottle.",
          },
          {
            q: "How much vermiwash do I put in a 1 litre spray bottle?",
            a: "For normal plants, add about half a teacup of vermiwash and fill the rest of the bottle with water. For seedlings, use only 2-3 tablespoons.",
          },
          {
            q: "Can I spray vermiwash on leaves?",
            a: "Yes, after dilution. Spray early morning or evening, mist both sides of the leaves, and stop before the leaves start dripping.",
          },
          {
            q: "Can I pour vermiwash into soil?",
            a: "Yes. Use diluted vermiwash as a soil drench for indoor plants or plants that dislike wet leaves. Half a teacup of diluted mix is enough for a medium pot.",
          },
          {
            q: "Can I mix vermiwash with neem oil?",
            a: "Use them on separate days. Neem oil is for pest pressure, while vermiwash is for gentle nutrition and soil or leaf support.",
          },
          {
            q: "How often should I use vermiwash?",
            a: "Use it once a week for active vegetables and flowering plants. For indoor foliage, once every 15 days is enough. For succulents, use it rarely and only as a mild soil drench.",
          },
        ]}
      />
    </Prose>
  );
}
