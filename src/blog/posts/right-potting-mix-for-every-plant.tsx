import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        If you do not want to think in percentages, use a 10-scoop potting mix:
        4 scoops garden soil, 4 scoops cocopeat and 2 scoops vermicompost. It
        works for money plant, tulsi, pothos, palms, herbs and most balcony
        pots. Special plants only need small changes.
      </Lead>

      <P>
        Potting mix is not plant food. It is the room the roots live in. If
        that room has no air, no drainage, or too much wetness, even the best
        fertilizer cannot rescue the plant.
      </P>

      <Callout title="Start here" tone="peach">
        Use the 4:4:2 rule as your default: 4 parts soil, 4 parts cocopeat, 2
        parts vermicompost. For succulents, add much more sand or perlite. For
        seedlings, skip heavy soil and keep the mix light.
      </Callout>

      <H2>The 10-scoop rule</H2>
      <P>
        Do not start with percentages. Start with a bowl, a mug or your hand.
        If one scoop means one katori, the recipe is still the same. The goal is
        simple: structure, moisture, gentle food, and enough air space for
        roots.
      </P>

      <Table
        caption="Potting mix recipes by plant type"
        headers={["Plant type", "Garden soil", "Cocopeat", "Vermicompost", "Extra"]}
        rows={[
          [
            "Indoor foliage: money plant, pothos, palm, monstera",
            "4 scoops",
            "4 scoops",
            "2 scoops",
            "Optional 1 scoop perlite if the room is humid",
          ],
          [
            "Flowering plants: rose, hibiscus, jasmine",
            "3 scoops",
            "3 scoops",
            "3 scoops",
            "1 scoop perlite, rice husk or coarse sand",
          ],
          [
            "Vegetables: tomato, chilli, brinjal, methi",
            "3 scoops",
            "3 scoops",
            "2 scoops",
            "2 scoops leaf mould, composted manure or rice husk",
          ],
          [
            "Succulents and cacti",
            "2 scoops",
            "1 scoop",
            "1 scoop",
            "6 scoops coarse sand, perlite, pumice or brick chips",
          ],
          [
            "Seedlings under 30 days",
            "0 scoops",
            "7 scoops",
            "1 scoop, finely sieved",
            "2 scoops perlite or vermiculite",
          ],
        ]}
      />

      <H2>Why garden soil alone fails in pots</H2>
      <P>
        Good garden soil can make terrible pot soil. In the ground, extra water
        can move sideways and roots can travel deeper. In a pot, the same soil
        becomes a small locked box.{" "}
        <a
          href="https://extension.illinois.edu/container-gardens/soil"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Illinois Extension
        </a>{" "}
        says container media must drain and breathe, and that garden soil by
        itself blocks both.
      </P>
      <P>
        <a
          href="https://fieldreport.caes.uga.edu/publications/C787/gardening-in-containers/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Georgia Extension
        </a>{" "}
        explains the same thing in root language: excess moisture and poor air
        stress roots and invite root-rotting fungi. That is why the best mix
        feels like moist poha, not wet dough. It should hold shape lightly, then
        crumble when you press it.
      </P>

      <Pull>
        If water sits on top for more than 30 seconds, your potting mix is too
        tight. Roots do not drown in one watering. They drown when the mix never
        lets air come back.
      </Pull>

      <H2>What each ingredient does</H2>
      <Table
        caption="Ingredient job chart"
        headers={["Ingredient", "Job in the pot", "Common mistake"]}
        rows={[
          [
            "Garden soil or red soil",
            "Gives weight, minerals and structure",
            "Using it alone, especially if it is clay-heavy",
          ],
          [
            "Cocopeat",
            "Holds water and keeps the mix light",
            "Using dry bricks without soaking and squeezing first",
          ],
          [
            "Vermicompost",
            "Adds slow food, microbes and organic matter",
            "Making it the whole potting mix",
          ],
          [
            "Perlite, rice husk, pumice or brick chips",
            "Creates air pockets and faster drainage",
            "Skipping it for succulents or very wet balconies",
          ],
          [
            "Coarse sand",
            "Adds drainage and weight",
            "Using fine construction sand or beach sand",
          ],
          [
            "Leaf mould",
            "Softens vegetable and flowering mixes",
            "Using fresh leaves that are still breaking down",
          ],
        ]}
      />

      <H2>How to adjust for Indian homes</H2>
      <H3>If your soil becomes a hard cake</H3>
      <P>
        Use less garden soil and more cocopeat or rice husk. This usually
        happens with heavy clay, black cotton soil, or silt-heavy compost. For a
        10-scoop mix, move from 4 scoops soil to 2 or 3 scoops soil.
      </P>

      <H3>If your balcony stays wet after rain</H3>
      <P>
        Use less cocopeat and add more air material. In monsoon, a pot that
        stays wet for two days is not being "well watered"; it is stuck. Add
        perlite, pumice, rice husk, brick chips, or coarse sand.
      </P>

      <H3>If your terrace dries in one afternoon</H3>
      <P>
        Keep the 4 scoops cocopeat, add mulch on top, and water deeply instead
        of sprinkling. Dry heat punishes shallow watering. A thin layer of dry
        leaves or coco chips on top saves more water than adding extra compost.
      </P>

      <H3>If you are starting seeds</H3>
      <P>
        Keep the mix light.{" "}
        <a
          href="https://extension.umd.edu/resource/starting-seeds-indoors/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Maryland Extension
        </a>{" "}
        describes seed-starting media as soilless and moist like a wrung-out
        sponge, not soppy wet. For Indian homes, cocopeat plus perlite or
        vermiculite does that job well. Add only a little sieved vermicompost
        after the first true leaves appear.
      </P>

      <H2>What not to mix</H2>
      <UL>
        <LI>
          <strong>Fresh cow dung.</strong> It can heat, smell, bring weed seeds,
          and burn young roots. Use only well-rotted manure in outdoor beds.
        </LI>
        <LI>
          <strong>Fine construction sand.</strong> It packs into the gaps and
          makes the pot heavier without improving drainage.
        </LI>
        <LI>
          <strong>Too much wood ash.</strong> A pinch is enough. A cup can push
          the mix too alkaline for many home plants.
        </LI>
        <LI>
          <strong>Only cocopeat.</strong> It holds water but has no real
          structure for long-term plants unless you mix in compost and minerals.
        </LI>
        <LI>
          <strong>Only vermicompost.</strong> It is food, not a full house for
          roots. Too much can keep small pots wet and heavy.
        </LI>
      </UL>

      <H2>How to mix it without wasting material</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>Soak cocopeat fully, then squeeze it until it feels damp, not dripping.</li>
        <li>Sieve garden soil and vermicompost so stones and hard lumps stay out.</li>
        <li>Measure with one scoop size and mix dry ingredients first.</li>
        <li>Add water slowly until the mix clumps lightly in your fist.</li>
        <li>Fill the pot, tap the sides once, and leave one inch at the top for watering.</li>
      </ol>

      <H2>When to refresh the mix</H2>
      <UL>
        <LI>
          <strong>Every 12 months</strong> - remove the top 2 inches and replace
          with fresh mix.
        </LI>
        <LI>
          <strong>Every 18-24 months</strong> - repot fully if the plant is
          root-bound or water stops draining well.
        </LI>
        <LI>
          <strong>When water pools</strong> - if water sits on the surface for
          more than 30 seconds, refresh sooner.
        </LI>
        <LI>
          <strong>After root rot</strong> - do not reuse the same wet, sour mix
          for another plant.
        </LI>
      </UL>

      <Callout title="Sarvada note" tone="sage">
        Pure vermicompost should feel crumbly and earthy. If a bag turns your
        mix into clay after one watering, it probably has too much silt. In
        pots, silt steals the air gaps that cocopeat and perlite create.
      </Callout>

      <BlogFAQ
        postSlug="right-potting-mix-for-every-plant"
        items={[
          {
            q: "What is the best potting mix ratio for indoor plants in India?",
            a: "Use 4 scoops garden soil, 4 scoops cocopeat, and 2 scoops vermicompost. Add 1 scoop perlite if your room or balcony stays humid.",
          },
          {
            q: "What is the best potting mix for vegetables in pots?",
            a: "Use 3 scoops soil, 3 scoops cocopeat, 2 scoops vermicompost, and 2 scoops leaf mould, composted manure, rice husk, or perlite. Vegetables need food, drainage, and root space.",
          },
          {
            q: "Can I use only cocopeat and vermicompost?",
            a: "Yes for seedlings and short-cycle microgreens, but not for long-term pots. Most plants need some mineral structure from soil or another stable base ingredient.",
          },
          {
            q: "Why does my potting mix become hard after watering?",
            a: "It usually has too much clay, fine sand, or silt-heavy compost. Add cocopeat and an air material like perlite, rice husk, pumice, or coarse sand.",
          },
          {
            q: "Is garden soil good for potted plants?",
            a: "Garden soil is useful only after amendment. By itself it becomes too compact in containers, so mix it with cocopeat, vermicompost, and a drainage material.",
          },
          {
            q: "What is the best potting mix for succulents and cacti?",
            a: "Use a gritty mix: 2 scoops soil, 1 scoop cocopeat, 1 scoop vermicompost, and 6 scoops coarse sand, perlite, pumice, or brick chips.",
          },
          {
            q: "How often should I change potting soil?",
            a: "Refresh the top 2 inches every 12 months. Fully repot every 18-24 months, or sooner if water pools, roots circle the pot, or the mix smells sour.",
          },
        ]}
      />
    </Prose>
  );
}
