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
        If your tomato plant has yellow leaves, brown crispy tips, curled new
        growth, and wet soil that never seems to help, stop feeding it for two
        weeks. Flush the pot with plain water, then put one teacup of
        vermicompost on top of a 12-inch pot, or 4-5 teacups on an 18-inch grow
        bag. That one change brought my plant back.
      </Lead>

      <P>
        I had been doing the thing every new tomato grower does: seeing a weak
        plant and giving it more fertilizer. More liquid feed. More blue
        crystals. More hope. The plant did not need more food. It needed the
        salt build-up removed and a slower food source on top.
      </P>

      <Callout title="The rescue in one line" tone="peach">
        <strong>
          Stop chemical fertilizer, flush with plain water for 2-3 days, add
          vermicompost like a thin brown blanket on top, then leave the plant
          alone for 10-14 days.
        </strong>
      </Callout>

      <H2>What my tomato plant looked like before the fix</H2>
      <P>
        This was not one sad yellow leaf at the bottom. That is normal on old
        tomato growth. This looked different: the plant had stopped pushing new
        shoots, the leaf tips were brown and dry, and the pot stayed damp even
        though the plant looked thirsty.
      </P>

      <Table
        caption="Tomato plant stress signs before recovery"
        headers={["What I saw", "What it usually means", "What I changed"]}
        rows={[
          [
            "Brown crispy leaf tips",
            "Fertilizer burn or salt stress",
            "Stopped chemical fertilizer",
          ],
          [
            "Yellow older leaves",
            "Old damage or root stress",
            "Did not expect those leaves to turn green again",
          ],
          [
            "Curled new growth",
            "Roots struggling to pull water",
            "Flushed the pot slowly",
          ],
          [
            "Wet soil but tired plant",
            "Roots not drinking properly",
            "Waited before feeding again",
          ],
          [
            "No new shoots for a week",
            "Plant in survival mode",
            "Used vermicompost as a slow top dressing",
          ],
        ]}
      />

      <Pull>
        The plant was not hungry. It was overfed. I had been treating a blocked
        root system like a nutrition problem.
      </Pull>

      <H2>The one thing I changed</H2>
      <P>
        I stopped the chemical fertilizer completely. No liquid feed, no NPK
        granules, no "just a little more" rescue attempt. Then I flushed the pot
        with plain water until water ran out of the bottom holes. I did that
        slowly, not like throwing a bucket at it.
      </P>
      <P>
        After the pot stopped dripping, I added vermicompost only on top. For a
        12-inch tomato pot, use one full teacup. For an 18-inch grow bag, use
        4-5 teacups. Spread it like a thin blanket, leave a two-finger gap
        around the main stem, lightly mix the top finger-depth of soil, and
        water once.
      </P>

      <H2>Why this works for a tomato plant</H2>
      <P>
        Chemical fertilizer works fast because nutrients are dissolved as salts.
        That can help in open soil, but pots are small bowls with limited
        drainage. If you feed again and again, salts collect near the roots.
        The plant can look thirsty even when the pot is wet.
      </P>
      <P>
        The University of Maryland Extension explains{" "}
        <a
          href="https://extension.umd.edu/resource/fertilizer-or-pesticide-burn-vegetable-leaves"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
        >
          fertilizer burn on vegetable leaves
        </a>{" "}
        as a real problem when fertilizer concentration is too strong. In a pot,
        the practical fix is simple: dilute what is sitting there, stop adding
        more, and restart gently.
      </P>

      <H2>How much vermicompost should you put on a weak tomato plant?</H2>
      <P>
        Use less than your nervous brain wants to use. A recovering tomato plant
        needs a calm soil surface, not a rich new layer packed around the stem.
      </P>

      <Table
        caption="Vermicompost amount for tomato recovery"
        headers={["Tomato container", "Use this much", "How to put it"]}
        rows={[
          [
            "8-inch pot",
            "Half a teacup",
            "Sprinkle on top, like seasoning",
          ],
          [
            "10-inch pot",
            "Three-quarter teacup",
            "Keep away from the stem",
          ],
          [
            "12-inch pot",
            "1 full teacup",
            "Mix only the top finger-depth",
          ],
          [
            "14-16 inch pot",
            "2 teacups",
            "Spread as a thin blanket",
          ],
          [
            "18-inch grow bag",
            "4-5 teacups",
            "Use only if drainage is good",
          ],
        ]}
      />

      <H2>The exact rescue steps</H2>
      <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[17px] leading-[1.75] md:text-[18px]">
        <li>
          <strong>Stop all fertilizer.</strong> Do not add NPK, liquid feed,
          Epsom salt, banana peel water, or anything else for two weeks.
        </li>
        <li>
          <strong>Check drainage holes.</strong> If water cannot leave the pot,
          flushing will only drown the roots.
        </li>
        <li>
          <strong>Flush slowly.</strong> Water until it drains from the bottom.
          Wait 10-15 minutes. Repeat once. Do this for 2-3 days if the plant was
          heavily overfed.
        </li>
        <li>
          <strong>Remove only the worst leaves.</strong> Cut fully brown or
          diseased leaves. Leave partly green leaves alone; they still feed the
          plant.
        </li>
        <li>
          <strong>Add vermicompost on top.</strong> Use the table amount. Do not
          bury the stem and do not dig into the root ball.
        </li>
        <li>
          <strong>Wait 10-14 days.</strong> New growth is the result. Old burned
          leaves are not the result.
        </li>
      </ol>

      <H2>Week by week: what actually happened</H2>

      <H3>Days 1-3</H3>
      <P>
        Nothing dramatic happened. The yellow leaves stayed yellow and the brown
        edges stayed brown. The only useful sign was that the pot started
        draining cleanly and the soil stopped smelling sharp.
      </P>

      <H3>Days 7-10</H3>
      <P>
        Two tiny shoots appeared at the top. Not big leaves. Just small green
        tips that were not curled or burnt. That was the first sign the roots
        had started drinking properly again.
      </P>

      <H3>Week 3</H3>
      <P>
        The plant had five new leaves and three small flower buds. The old
        damaged leaves still looked ugly. I left them until the new leaves were
        strong, then trimmed the worst ones.
      </P>

      <H3>Week 5</H3>
      <P>
        The plant looked like a tomato plant again: upright, darker green at the
        top, and flowering. I did not restart chemical fertilizer. I used
        vermicompost once a month and diluted vermiwash separately when the
        plant began setting fruit.
      </P>

      <H2>When this fix will not work</H2>
      <P>
        Not every dying tomato plant has fertilizer burn. If leaves have black
        spots, circular target marks, white powder, or wet rotten stems, you are
        probably dealing with disease or rot. Vermicompost helps soil health,
        but it cannot undo a fungal infection already spreading through the
        leaves.
      </P>
      <UL>
        <LI>
          <strong>Black circular spots</strong> - remove affected leaves and
          improve airflow.
        </LI>
        <LI>
          <strong>White powder on leaves</strong> - treat as powdery mildew, not
          nutrient stress.
        </LI>
        <LI>
          <strong>Soft black stem near soil</strong> - check for stem rot and
          overwatering.
        </LI>
        <LI>
          <strong>Plant fully brown from top to bottom</strong> - it is too late
          for recovery.
        </LI>
      </UL>

      <H2>What I would do differently next time</H2>
      <P>
        I would feed the soil before the plant panics. For a healthy tomato in a
        12-inch pot, one teacup of vermicompost every 30 days is enough. For a
        fruiting tomato in an 18-inch grow bag, 4-5 teacups every 20-30 days
        works if the bag drains well. More than that is usually impatience, not
        better plant care.
      </P>

      <Callout title="Tomato rule" tone="sage">
        If the plant is weak, do less for two weeks. Flush, top dress lightly,
        give morning sun, and wait for new growth. Recovery starts at the top of
        the plant, not in the burned leaves.
      </Callout>

      <BlogFAQ
        postSlug="tomato-plant-came-back-after-i-changed-one-thing"
        items={[
          {
            q: "How do I revive a tomato plant with yellow leaves and brown tips?",
            a: "Stop chemical fertilizer, check drainage, flush the pot with plain water, then add vermicompost on top. Use one teacup for a 12-inch pot or 4-5 teacups for an 18-inch grow bag. Wait 10-14 days for new growth.",
          },
          {
            q: "Should I cut off yellow tomato leaves?",
            a: "Cut leaves that are fully brown, crispy, or diseased. Leave partly green leaves until fresh growth appears because they still help the plant make food.",
          },
          {
            q: "Can vermicompost save a dying tomato plant?",
            a: "It can help if the problem is fertilizer burn, salt build-up, weak soil, or mild root stress. It will not save a plant that is fully dried, rotted at the stem, or badly infected with fungal disease.",
          },
          {
            q: "How much vermicompost does a tomato plant need?",
            a: "Use half a teacup for an 8-inch pot, one full teacup for a 12-inch pot, and 4-5 teacups for an 18-inch grow bag. Spread it on top and mix only the top finger-depth of soil.",
          },
          {
            q: "How long does tomato plant recovery take?",
            a: "Do not judge by old leaves. In a recoverable plant, fresh shoots usually appear in 7-14 days. Real recovery is easier to see by week 3.",
          },
          {
            q: "Can I use chemical fertilizer and vermicompost together?",
            a: "For a stressed tomato plant, do not use both together. Stop chemical fertilizer first, flush the pot, use vermicompost, and wait at least two weeks before adding anything else.",
          },
          {
            q: "Why is my tomato plant wilting when the soil is wet?",
            a: "Wet soil with a wilting plant usually means the roots are not drinking properly. Common reasons are salt build-up, poor drainage, root rot, or compacted soil.",
          },
        ]}
      />
    </Prose>
  );
}
