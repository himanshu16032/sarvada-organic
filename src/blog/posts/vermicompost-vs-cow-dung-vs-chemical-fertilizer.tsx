import { Prose, H2, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        For most Indian balcony and terrace pots, vermicompost is the safest
        regular food. Cow dung manure is better for outdoor beds when it is
        fully decomposed. Chemical fertilizer is the fastest fix for a known
        deficiency, but it is also the easiest one to overdo in a small pot.
      </Lead>

      <P>
        Think of it like feeding a person. Chemical fertilizer is a quick energy
        drink: fast, strong, useful in the right moment, but not a full meal.
        Cow dung manure is raw groceries: cheap and useful, but it needs time to
        cook. Vermicompost is a ready, slow meal for the soil: already broken
        down by worms, mild, and easy for roots to handle.
      </P>

      <Callout title="Start here" tone="peach">
        Use vermicompost every 30-45 days for normal potted plants. Use
        well-rotted cow dung manure when preparing outdoor beds. Use chemical
        fertilizer only when you know the exact problem you are treating, such
        as a nitrogen, calcium, or potassium deficiency.
      </Callout>

      <H2>Vermicompost vs cow dung vs chemical fertilizer</H2>

      <Table
        caption="Simple comparison for home gardeners"
        headers={["Question", "Vermicompost", "Cow dung manure", "Chemical fertilizer"]}
        rows={[
          [
            "What is it best at?",
            "Feeding soil gently",
            "Adding bulk organic matter",
            "Giving exact nutrients fast",
          ],
          [
            "How fast does it work?",
            "Slow and steady",
            "Slow after it decomposes",
            "Fast",
          ],
          [
            "Root burn risk in pots",
            "Very low when mature",
            "High if fresh or half-rotted",
            "High if used too much",
          ],
          [
            "Best use",
            "Pots, seedlings, indoor plants, vegetables",
            "Outdoor beds, farm patches, soil preparation",
            "Hydroponics, large fields, diagnosed deficiencies",
          ],
          [
            "Main weakness",
            "Not instant",
            "Needs time and clean sourcing",
            "Can build salts in containers",
          ],
          [
            "Easy analogy",
            "Ready slow meal",
            "Raw groceries",
            "Energy drink",
          ],
        ]}
      />

      <H2>Why vermicompost is easiest for pots</H2>
      <P>
        Pots are small. That is the whole story. A plant in the ground can send
        roots deeper and wider when the top layer gets too strong. A plant in a
        10-inch pot has nowhere to run, so mild feeding matters more than raw
        power.
      </P>
      <P>
        University guides usually keep worm compost around one quarter of a
        container mix.{" "}
        <a
          href="https://www.uaf.edu/ces/publications/database/gardening/composting-with-worms.php"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Alaska Fairbanks Extension
        </a>{" "}
        gives a potting mix with one part castings and three other parts, and{" "}
        <a
          href="https://extension.oregonstate.edu/catalog/em-9034-composting-worms"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Oregon State Extension
        </a>{" "}
        gives 25% as a typical container mix level. That matches the practical
        home rule: one scoop vermicompost for three or four scoops of base mix.
      </P>
      <P>
        Worm castings are also mild.{" "}
        <a
          href="https://www.lsuagcenter.com/articles/page1651169706312"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          LSU AgCenter
        </a>{" "}
        notes that worm castings can be used fresh and will not burn plants, and
        that their N-P-K can vary widely based on what the worms ate. A{" "}
        <a
          href="https://link.springer.com/article/10.1007/s13593-019-0579-x"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          2019 meta-analysis
        </a>{" "}
        found better average yield and root growth with vermicompost, but the
        useful lesson for home gardeners is simpler: use it as part of the soil,
        not as the whole soil.
      </P>
      <UL>
        <LI>Use it for balcony vegetables like tomato, chilli and brinjal.</LI>
        <LI>Use it for indoor plants like money plant, snake plant and palms.</LI>
        <LI>Use it for seedlings once they have a few true leaves.</LI>
        <LI>Use it when you want a forgiving monthly routine.</LI>
      </UL>

      <Pull>
        Vermicompost is not the strongest fertilizer in the room. It is the most
        forgiving one, and that is why it fits home pots so well.
      </Pull>

      <H2>When cow dung manure is better</H2>
      <P>
        Cow dung manure wins when you have soil space and time. It adds bulk,
        improves soil texture, and is usually cheaper per kilogram than
        vermicompost. For a farm patch or a large outdoor bed, that matters.
      </P>
      <P>
        The important word is decomposed.{" "}
        <a
          href="https://agritech.tnau.ac.in/ta/org_farm/orgfarm_manure.html"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          TNAU Agritech
        </a>{" "}
        describes farmyard manure as a decomposed mix of dung, urine, bedding
        and fodder leftovers, with average nutrients around 0.5% nitrogen, 0.2%
        P2O5 and 0.5% K2O. It also notes that farmyard manure takes about four
        to five months to become ready, and that not all nutrients are available
        to the first crop at once.
      </P>
      <P>
        Fresh cow dung is different. It can contain ammonia, salts, weed seeds
        and harmful bacteria.{" "}
        <a
          href="https://extension.colostate.edu/topic-areas/yard-garden/choosing-a-soil-amendment/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Colorado State University Extension
        </a>{" "}
        says fresh manure can burn plants because of high ammonia and salts, and
        that fresh manure needs months before harvest in food gardens. That is
        why fresh dung in a pot is a bad bargain: it is cheap, but one hot
        pocket near the roots can undo the saving.
      </P>
      <UL>
        <LI>Use well-rotted cow dung manure before planting a raised bed.</LI>
        <LI>Use it in outdoor soil where smell and bulk are manageable.</LI>
        <LI>
          Do not use fresh cow dung in indoor pots, seed trays or balcony food
          pots.
        </LI>
        <LI>If it smells sharp like ammonia, it is not ready for delicate roots.</LI>
      </UL>

      <H2>When chemical fertilizer makes sense</H2>
      <P>
        Chemical fertilizer is not the villain. It is concentrated and direct.
        If a tomato plant has a clear calcium problem, a targeted calcium feed
        works faster than waiting for any compost to break down. If someone is
        growing hydroponically, there is no soil food web to feed, so measured
        nutrient salts are the system.
      </P>
      <P>
        The risk is overuse.{" "}
        <a
          href="https://aggie-horticulture.tamu.edu/ornamental/greenhouse-management/managing-soluble-salts/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          Texas A&amp;M AgriLife
        </a>{" "}
        explains that soluble salts build up from over-fertilization and can
        injure roots.{" "}
        <a
          href="https://extension.umd.edu/resource/salt-or-fertilizer-damage-trees"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          University of Maryland Extension
        </a>{" "}
        says over-application of water-soluble fertilizers can burn or injure
        plants because salts pull water out of roots and leaves.
      </P>
      <P>
        In open fields, salts can be managed with soil testing, irrigation and
        measured rates. In a balcony pot during May heat, the same mistake is
        harsher. Water evaporates, salts stay behind, and the plant looks
        thirsty even when the soil is wet.
      </P>
      <UL>
        <LI>Use chemical fertilizer when the deficiency is clear.</LI>
        <LI>Use it when the crop system is built for precise feeding.</LI>
        <LI>Do not use it weekly just because leaves look pale.</LI>
        <LI>
          Do not mix strong chemical fertilizer and heavy compost feeding on the
          same day.
        </LI>
      </UL>

      <H2>Best choice by situation</H2>
      <Table
        caption="What to use in common Indian home garden situations"
        headers={["Situation", "Best choice", "Why"]}
        rows={[
          [
            "6-12 inch balcony pot",
            "Vermicompost",
            "Small soil volume needs mild, slow feeding",
          ],
          [
            "Indoor foliage plant",
            "Vermicompost, light dose",
            "Low light means slow nutrient use",
          ],
          [
            "New raised bed",
            "Well-rotted cow dung plus compost",
            "Large soil volume can use bulky organic matter",
          ],
          [
            "Tomato with confirmed calcium deficiency",
            "Targeted chemical feed",
            "Specific deficiency needs fast correction",
          ],
          [
            "Hydroponic setup",
            "Chemical nutrient solution",
            "There is no soil for compost to work through",
          ],
          [
            "Seedlings and cuttings",
            "Very light vermicompost",
            "Young roots need gentle nutrition",
          ],
        ]}
      />

      <H2>The common mistakes</H2>
      <UL>
        <LI>
          <strong>Using fresh cow dung in pots.</strong> It may heat, smell,
          release ammonia, carry weed seeds, or burn young roots.
        </LI>
        <LI>
          <strong>Treating chemical fertilizer like monthly food.</strong> It is
          better used like medicine: correct product, correct dose, correct
          reason.
        </LI>
        <LI>
          <strong>Using vermicompost as 100% potting soil.</strong> Mix it with
          soil, cocopeat, leaf mould, rice husk, sand or perlite so roots still
          get air.
        </LI>
        <LI>
          <strong>Thinking N-P-K is everything.</strong> Plants need nutrients,
          but pots also need drainage, air, microbes, moisture balance and
          enough sunlight.
        </LI>
      </UL>

      <H2>The verdict for Indian home gardeners</H2>
      <Callout title="The honest verdict" tone="peach">
        If you have balcony, terrace or indoor pots, make vermicompost your
        regular fertilizer. If you are preparing a large outdoor bed, use
        well-rotted cow dung manure. If you have a diagnosed deficiency or a
        soilless system, use chemical fertilizer carefully and measure it.
      </Callout>

      <H2>What about Indian summer?</H2>
      <P>
        In Delhi, Jaipur, Ahmedabad, Mumbai, Pune, Hyderabad and Bengaluru
        summers, terrace pots dry from the outside while the inner soil may
        still be wet. This is exactly when strong feeding causes confusion:
        brown tips, drooping leaves, wet soil, and a gardener who adds even more
        water.
      </P>
      <P>
        In hot months, keep the rule boring. Feed lightly with vermicompost in
        the evening, water once, and mulch with dry leaves or coco chips. Avoid
        fresh dung. Use chemical fertilizer only at low dose and only when the
        plant is actively growing, not when it is already heat-stressed.
      </P>

      <BlogFAQ
        postSlug="vermicompost-vs-cow-dung-vs-chemical-fertilizer"
        items={[
          {
            q: "Which is better for home plants, vermicompost or cow dung manure?",
            a: "For potted home plants, vermicompost is usually better because it is mild, already processed, and easy to use in small soil volume. Cow dung manure is better for outdoor beds when it is fully decomposed.",
          },
          {
            q: "Is chemical fertilizer bad for plants?",
            a: "No, chemical fertilizer is not automatically bad. It is useful for diagnosed nutrient deficiencies, hydroponics, and large-scale farming, but too much can build salts and burn roots in pots.",
          },
          {
            q: "Can I mix vermicompost and cow dung manure?",
            a: "Yes, but it makes more sense in raised beds and outdoor soil. For small pots, use vermicompost alone or use only a small amount of fully rotted cow dung mixed into the base soil.",
          },
          {
            q: "Can I use fresh cow dung directly in pots?",
            a: "No. Fresh cow dung can contain ammonia, salts, weed seeds and harmful bacteria. In a small pot it can smell, heat up, and damage young roots.",
          },
          {
            q: "How long should cow dung decompose before use?",
            a: "Plan in months, not days. Traditional farmyard manure often takes around four to five months to become ready, and fresh manure for food gardens should be composted well before planting.",
          },
          {
            q: "Can vermicompost replace chemical fertilizer?",
            a: "For most balcony, terrace and indoor plants, yes, vermicompost can be the regular fertilizer. It will not replace a fast targeted treatment when a plant has a confirmed nutrient deficiency.",
          },
          {
            q: "Is vermicompost stronger than cow dung manure?",
            a: "It is not simply stronger; it is more processed and easier for pots. Cow dung manure is bulky and slow, while vermicompost is worm-processed, mild, and better suited for regular top dressing.",
          },
          {
            q: "What is the best fertilizer for terrace gardens in summer?",
            a: "Use light vermicompost feeding in the evening and mulch the pot surface. Avoid fresh cow dung and avoid strong chemical feeding when plants are already heat-stressed.",
          },
        ]}
      />
    </Prose>
  );
}
