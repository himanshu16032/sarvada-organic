import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        Every Indian gardening WhatsApp group has the same fight. Vermicompost
        people argue with cow dung loyalists, who argue with the gentleman
        who's been using urea for thirty years. Here's what each fertilizer
        actually does, when it's the right pick, and when it isn't. No brand
        agenda — we sell vermicompost, but this article won't pretend it's the
        right answer for everyone.
      </Lead>

      <H2>The honest comparison</H2>

      <Table
        caption="Vermicompost vs cow dung manure vs chemical fertilizer"
        headers={["Property", "Vermicompost", "Cow dung manure", "Chemical fertilizer"]}
        rows={[
          ["NPK balance", "Balanced, gentle", "Low N, high salts", "High & precise"],
          ["Release speed", "Slow (30–45 days)", "Slow once mature", "Instant"],
          ["Microbes", "Billions, living", "Some, inconsistent", "None"],
          ["Risk of burning roots", "None", "If fresh/uncured", "High in pots"],
          ["Smell", "Earthy", "Strong, ammonia-like", "Chemical"],
          ["Best for", "Pots, indoor, seedlings", "Outdoor beds, prep", "Hydroponics, fields"],
          ["Cost per pot/month", "Low–medium", "Very low", "Low (but recurring)"],
        ]}
      />

      <H2>When cow dung manure is actually better</H2>
      <P>
        Cow dung wins in a few specific cases:
      </P>
      <UL>
        <LI>
          Setting up a large outdoor bed or farm patch where you have plenty
          of land and can wait 60 days for it to fully mature in the soil.
        </LI>
        <LI>
          Improving heavy clay soil over a season — its bulk physically helps
          break up compaction.
        </LI>
        <LI>
          When budget is the deciding factor and you have access to a clean
          local source. Per kilogram it's cheaper than vermicompost.
        </LI>
      </UL>
      <P>
        The problem with cow dung in pots: fresh dung releases ammonia and
        burns roots. Even matured dung has high salt content and inconsistent
        microbial life. In small soil volumes, this is a real risk.
      </P>

      <H2>When vermicompost wins</H2>
      <P>
        Vermicompost is what we'd recommend for almost every Indian home
        gardener with 5–50 pots. Specifically:
      </P>
      <UL>
        <LI>Indoor plants — money plant, snake plant, palms, monsteras.</LI>
        <LI>Balcony and terrace pots — tomatoes, chillies, methi, roses.</LI>
        <LI>Seedlings and young plants — too delicate for raw dung or chemicals.</LI>
        <LI>Flowering plants — slow microbial release matches bloom cycles perfectly.</LI>
        <LI>Anyone who wants to garden without testing soil pH every month.</LI>
      </UL>

      <Pull>
        Vermicompost is the most forgiving fertilizer ever made. It is almost
        impossible to "overdo".
      </Pull>

      <H2>When chemical fertilizer makes real sense</H2>
      <P>
        We're not going to pretend chemical fertilizers are evil. They have
        legitimate uses:
      </P>
      <UL>
        <LI>
          <strong>Hydroponics and aquaponics</strong>, where there's no soil
          to host microbes anyway.
        </LI>
        <LI>
          <strong>Diagnosed deficiencies</strong> — your tomato is showing
          calcium deficiency (blossom-end rot), a targeted CaNO₃ spray fixes
          it faster than waiting on organic uptake.
        </LI>
        <LI>
          <strong>Large-scale agriculture</strong>, where yield economics
          require precise, instant nutrition.
        </LI>
      </UL>
      <P>
        For a home gardener with 20 pots though, the math rarely works out.
        The risk of salt build-up in small pots is just too high.
      </P>

      <H2>The verdict for Indian home gardeners</H2>
      <Callout title="The honest summary" tone="peach">
        For the typical Indian home gardener with a balcony, terrace, or
        kitchen garden — vermicompost is the most forgiving, complete and
        long-term healthy choice. Use cow dung if you have an outdoor bed and
        time. Use chemicals only for diagnosed problems, never as routine.
      </Callout>

      <H2>What's the best fertilizer for terrace gardens in Indian summer?</H2>
      <P>
        In Delhi, Mumbai, Bangalore and Pune summers, terrace pots heat up
        fast. Salts in chemical fertilizers concentrate dangerously when soil
        moisture evaporates. Cow dung releases ammonia faster in heat.
        Vermicompost stays stable, holds moisture, and protects roots from
        thermal shock.
      </P>
      <P>
        Translation: in Indian summers, vermicompost isn't just convenient —
        it's the safest choice for terrace and balcony pots.
      </P>

      <BlogFAQ
        postSlug="vermicompost-vs-cow-dung-vs-chemical-fertilizer"
        items={[
          {
            q: "Which is better for home plants — vermicompost or cow dung manure?",
            a: "For potted plants, vermicompost is clearly better. It's matured, microbe-rich, doesn't burn roots, and feeds plants slowly. Cow dung is better for outdoor beds where you have time and space.",
          },
          {
            q: "Can I mix vermicompost and cow dung together?",
            a: "Yes — for raised beds and outdoor gardens, a 50:50 mix works beautifully. For pots, stick to just vermicompost — cow dung can introduce inconsistencies into a small soil volume.",
          },
          {
            q: "Is organic fertilizer enough or do I need chemical fertilizer too?",
            a: "For 95% of home gardeners, organic vermicompost is enough. You only need chemical fertilizers if you're doing hydroponics or fixing a diagnosed nutrient deficiency.",
          },
          {
            q: "Why does cow dung manure burn plants sometimes?",
            a: "Fresh or partially decomposed cow dung releases ammonia as it breaks down. In pots with limited soil and air flow, this ammonia and high salt content can burn roots and yellow leaves.",
          },
          {
            q: "Is Sarvada Organic vermicompost the same as cow dung manure?",
            a: "No. Cow dung is one of the inputs we feed our earthworms — but the worms further digest it for 60–90 days, producing castings that are richer in NPK, microbes, and gentler than raw or matured dung.",
          },
        ]}
      />
    </Prose>
  );
}
