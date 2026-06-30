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
        Vermicomposting is simple in theory: earthworms eat soft, partly
        decomposed waste and leave behind dark, crumbly vermi khad. The part
        people rush is the part that matters: shade, moisture, air, gentle feed
        and the right composting worms.
      </Lead>

      <P>
        Think of a vermicompost bed like a quiet kitchen. Cow dung and plant
        waste are the ingredients. Microbes begin the cooking. Earthworms finish
        the meal by digesting the soft material and leaving behind castings that
        plants can use gently.
      </P>
      <P>
        At Sarvada, we care most about the slow middle part: the bed must stay
        cool, moist and alive long enough for the castings to mature before they
        ever reach a plant pot.
      </P>

      <Callout title="PDF-style summary" tone="peach">
        If you came here searching for a vermicomposting PDF, use this sequence:
        prepare bedding, add partly decomposed feed, introduce worms, keep it
        moist like a squeezed sponge, protect it from heat, and harvest only
        when the compost is dark and crumbly.
      </Callout>

      <H2>Process of vermicomposting step by step</H2>
      <Table
        caption="Vermicomposting process"
        headers={["Step", "What happens", "Beginner check"]}
        rows={[
          [
            "1. Choose a shaded place",
            "The bed stays cool and protected",
            "No direct afternoon sun or rain flooding",
          ],
          [
            "2. Prepare bedding",
            "Dry leaves, cocopeat or old compost create a soft home",
            "Bedding feels damp, not dripping",
          ],
          [
            "3. Pre-compost the feed",
            "Cow dung and plant waste cool down before worms enter",
            "No sharp heat or ammonia smell",
          ],
          [
            "4. Add earthworms",
            "Composting worms move through the soft feed",
            "Worms stay inside instead of escaping",
          ],
          [
            "5. Maintain moisture and air",
            "Microbes and worms keep working",
            "Material feels like a squeezed sponge",
          ],
          [
            "6. Stop feeding before harvest",
            "The bed becomes uniform and dark",
            "Very little original waste is visible",
          ],
          [
            "7. Sieve and cure",
            "Castings become cleaner and easier to use",
            "Texture is crumbly, earthy and cool",
          ],
        ]}
      />

      <H2>Which earthworm for vermicompost?</H2>
      <P>
        Do not dig random garden worms and expect them to live in a compost
        box. Many deep-soil worms prefer mineral soil, not a shallow organic
        waste bed. Vermicomposting uses surface-feeding compost worms that stay
        active in rich organic material.
      </P>
      <P>
        <a
          href="https://extension.okstate.edu/fact-sheets/vermicomposting-composting-with-worms"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Oklahoma State Extension
        </a>{" "}
        and{" "}
        <a
          href="https://extension.oregonstate.edu/catalog/em-9034-composting-worms"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Oregon State Extension
        </a>{" "}
        both discuss red worms for worm composting. In India, many vermicompost
        units also use fast-composting species such as red wigglers and African
        nightcrawlers, depending on local climate and availability.
      </P>

      <Table
        caption="Worm buying checklist"
        headers={["Question", "Good sign", "Warning sign"]}
        rows={[
          [
            "Are they composting worms?",
            "Seller mentions vermicompost culture",
            "Seller only says earthworms from soil",
          ],
          [
            "Are they active?",
            "Worms move away from light and stay moist",
            "Dry, weak or dead worms in the box",
          ],
          [
            "Is bedding included?",
            "Worms arrive with moist compost bedding",
            "Worms arrive bare in a plastic bag",
          ],
          [
            "Is the local climate suitable?",
            "Seller gives heat and moisture guidance",
            "No advice for Indian summer or monsoon",
          ],
        ]}
      />

      <H2>What to feed the worms</H2>
      <P>
        Worms do not want fresh, hot waste. They want soft, partly decomposed
        material. For farms, that often means pre-composted cow dung and plant
        waste. For home bins, use small amounts of chopped vegetable peels,
        crushed dry leaves and old compost.
      </P>
      <UL>
        <LI>Good: vegetable peels, fruit peels, tea leaves and dry leaves.</LI>
        <LI>Good: cow dung only after it cools and loses sharp smell.</LI>
        <LI>Avoid: meat, oil, dairy, salty food and spicy cooked leftovers.</LI>
        <LI>Avoid: plastic, glossy paper, diseased plant material and pesticides.</LI>
      </UL>

      <H2>Moisture, air and shade matter more than speed</H2>
      <P>
        A healthy vermicompost bed is moist, airy and cool. If it gets dry,
        worms slow down. If it gets waterlogged, the bed smells and air
        disappears. If it gets hot, worms move away or die.
      </P>
      <P>
        The best moisture analogy is a squeezed sponge. When you press the
        bedding, it should feel damp but not release a stream of water. If it
        smells rotten, mix in dry leaves or cocopeat and reduce feeding for a
        few days.
      </P>

      <Pull>
        Vermicomposting is not about forcing worms to eat faster. It is about
        making a calm home where worms and microbes can keep working.
      </Pull>

      <H2>How to know vermi khad is ready</H2>
      <UL>
        <LI>It is dark brown to black.</LI>
        <LI>It smells earthy, not sour or like ammonia.</LI>
        <LI>It feels crumbly and cool.</LI>
        <LI>Original waste pieces are mostly gone.</LI>
        <LI>Water does not turn it into sticky clay.</LI>
      </UL>

      <H2>Common vermicomposting mistakes</H2>
      <Table
        caption="Mistake and fix"
        headers={["Problem", "Likely cause", "Fix"]}
        rows={[
          [
            "Bad smell",
            "Too much wet food or poor air",
            "Add dry leaves, stop feeding and loosen the top",
          ],
          [
            "Worms escaping",
            "Heat, acidity, dryness or fresh manure",
            "Cool the bed, moisten lightly and remove strong feed",
          ],
          [
            "Ants in the bed",
            "Too dry",
            "Moisten bedding and place bin legs in water cups if needed",
          ],
          [
            "Fruit flies",
            "Food exposed on top",
            "Bury peels under bedding and avoid overfeeding",
          ],
          [
            "Sticky compost",
            "Too much fine material or poor curing",
            "Dry slightly, sieve and cure before packing",
          ],
        ]}
      />

      <Callout title="Sarvada note" tone="sage">
        Sarvada vermicompost is slow-cured before packing because unfinished
        compost behaves differently in pots. Mature vermicompost should be
        crumbly, earthy and gentle on roots.
      </Callout>
      <P>
        To see why maturity matters in pots, read the{" "}
        <a
          href="/blog/we-started-sarvada-because-we-were-lied-to"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Sarvada no-silt water test
        </a>
        . When your compost is ready, use the{" "}
        <a
          href="/blog/how-much-vermicompost-to-use"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          vermicompost quantity guide
        </a>{" "}
        or compare ready-to-use{" "}
        <a
          href="/collections/vermicompost"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          pure vermicompost packs
        </a>
        .
      </P>

      <BlogFAQ
        postSlug="process-of-vermicomposting-earthworm-guide"
        items={[
          {
            q: "What is the process of vermicomposting?",
            a: "The process of vermicomposting includes preparing bedding, adding partly decomposed organic waste, introducing composting earthworms, maintaining moisture and shade, then harvesting mature worm castings.",
          },
          {
            q: "Which earthworm is best for vermicompost?",
            a: "Composting worms such as red wigglers are commonly used because they live in rich organic material near the surface. Buy worms from a vermicompost culture supplier instead of digging random garden worms.",
          },
          {
            q: "Is vermi khad the same as vermicompost?",
            a: "Yes. Vermi khad usually means vermicompost or worm castings used as organic fertilizer for plants.",
          },
          {
            q: "Can I get a vermicomposting PDF?",
            a: "This article is written like a PDF-style checklist: bedding, feed, worms, moisture, shade and harvest. You can use the tables as a quick beginner guide.",
          },
          {
            q: "How long does vermicomposting take?",
            a: "Small beds often take around 45-90 days depending on feed, weather, worm activity and moisture. Harvest only when the material is dark, crumbly and earthy.",
          },
          {
            q: "Can I use fresh cow dung for vermicomposting?",
            a: "Do not add fresh hot cow dung directly with worms. Let it pre-compost and cool first so ammonia and heat do not harm the worms.",
          },
        ]}
      />
    </Prose>
  );
}
