import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        I was certain my tomato plant was dead. The leaves had curled at the
        tips, the new shoots had stopped pushing, and the older leaves were
        yellow with brown crisp edges. I'd been feeding it expensive chemical
        fertilizer twice a week. The bag promised "faster growth, bigger fruit".
      </Lead>

      <P>
        Three weeks later, the same plant was producing five new leaves a week.
        I'd changed exactly one thing. This is the whole story — and the
        science behind why it worked.
      </P>

      <H2>What chemical fertilizer was actually doing to my plant</H2>
      <P>
        Chemical fertilizers deliver nutrients in soluble salt form. They work
        fast — that's their promise. But in pots, where there's a small soil
        volume and limited drainage, those salts build up. The roots end up
        sitting in salt water.
      </P>
      <P>
        This causes <strong>osmotic stress</strong>: the salts pull water out of
        the plant's roots faster than the plant can pull water in. The plant
        starts dehydrating even when the soil is wet. Yellowing, leaf burn,
        stunted growth — every classic "I don't know what's wrong" symptom.
      </P>

      <Pull>
        The leaves weren't burned by sun. They were burned by salt — sitting
        in the very fertilizer I'd been giving them.
      </Pull>

      <H2>The one thing I changed</H2>
      <P>
        I stopped the chemical fertilizer entirely. I flushed the pot — slow,
        deep watering until water came out the drainage holes clear — three
        times across two days. Then I top-dressed with a handful of pure
        vermicompost. Nothing else.
      </P>

      <H3>Why vermicompost works where salts don't</H3>
      <UL>
        <LI>
          <strong>Slow release.</strong> Nutrients are bound in the worm
          castings and released by microbial activity, not dissolved instantly
          in water.
        </LI>
        <LI>
          <strong>No salt spike.</strong> No osmotic stress. Roots can drink
          freely.
        </LI>
        <LI>
          <strong>Living microbes.</strong> Beneficial bacteria and fungi
          repair damaged root zones and help the plant absorb water and
          nutrients again.
        </LI>
        <LI>
          <strong>Humic acid.</strong> Buffers the soil, helps the plant
          recover from chemical shock.
        </LI>
      </UL>

      <H2>Week by week — what actually happened</H2>

      <H3>Week 1</H3>
      <P>
        Visible improvement was zero. The yellow leaves were still yellow. I
        kept watering normally. Nothing else.
      </P>

      <H3>Week 2</H3>
      <P>
        Two tiny new shoots at the top. Dark, healthy green. The older
        damaged leaves didn't recover — they never do — but the plant had
        clearly decided to keep going.
      </P>

      <H3>Week 3</H3>
      <P>
        Five new leaves. Three new flower buds. I added another handful of
        vermicompost. By week 5 the plant was unrecognisable.
      </P>

      <H2>If you're going through this right now</H2>
      <Callout title="The fix for a salt-burned plant" tone="peach">
        <ol className="ml-4 list-decimal space-y-2">
          <li>Stop chemical fertilizer immediately.</li>
          <li>Water the pot heavily for 2–3 days to flush the soil.</li>
          <li>Top-dress with a fist of pure vermicompost mixed into the top inch.</li>
          <li>Move the pot to gentle morning light if it's been in harsh sun.</li>
          <li>Wait two weeks. Don't keep "trying things". Let the soil heal.</li>
        </ol>
      </Callout>

      <P>
        The plant didn't need more nutrients. It needed less of what was
        hurting it, and a quiet, patient food source instead. Most struggling
        plants are dealing with too much, not too little.
      </P>

      <BlogFAQ
        postSlug="tomato-plant-came-back-after-i-changed-one-thing"
        items={[
          {
            q: "How do I revive a tomato plant that has yellow leaves and brown tips?",
            a: "Stop chemical fertilizer. Flush the pot with deep watering for 2–3 days, then top-dress with one fist of pure vermicompost. Wait two weeks before judging — recovery happens from the top, not the old leaves.",
          },
          {
            q: "Will the burned leaves come back?",
            a: "No. Yellow or brown-tipped leaves never recover. But the plant will push out fresh, dark-green leaves once the salt stress is gone. You can trim the damaged leaves once new growth is established.",
          },
          {
            q: "Is organic fertilizer enough for tomato plants?",
            a: "Yes. Vermicompost provides balanced NPK, micronutrients and microbes for the full fruiting cycle. Top up every 21–30 days during fruiting. Add a vermiwash foliar spray every 2 weeks if you want bigger fruit.",
          },
          {
            q: "Can I switch from chemical fertilizer to vermicompost suddenly?",
            a: "Yes — and it's often the best thing you can do for a stressed plant. Flush the pot first to clear residual salts, then start vermicompost.",
          },
          {
            q: "How often should I feed a recovering plant?",
            a: "For the first month after stress, just one application of vermicompost. Do not over-help. After the plant shows clear new growth, return to a normal 30-day feeding schedule.",
          },
        ]}
      />
    </Prose>
  );
}
