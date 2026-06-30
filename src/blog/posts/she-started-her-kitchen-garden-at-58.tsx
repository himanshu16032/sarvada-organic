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
        Asha started her kitchen garden at 58 with three pots, one 6-foot Delhi
        balcony, and four hours of morning sun. She planted methi, tulsi and one
        chilli plant first. Four months later she had 12 pots: herbs, chillies,
        cherry tomato, mint, coriander, money plant and roses.
      </Lead>

      <P>
        The part worth copying is not that everything grew perfectly. It did
        not. She drowned the first methi tray by day 10. The part worth copying
        is the routine she ended up with: three beginner plants, a bowl-mix soil
        recipe, light watering, and one monthly vermicompost feeding.
      </P>

      <Callout title="Asha's starter setup" tone="peach">
        <strong>
          Start with 3 pots: methi, tulsi and chilli. Fill each pot with 2 bowls
          garden soil, 2 bowls cocopeat and 1 bowl vermicompost.
        </strong>{" "}
        Water only when the top finger-depth feels dry. Feed once a month, not
        every week.
      </Callout>

      <H2>What she started with</H2>
      <P>
        Asha lives in a third-floor apartment in West Delhi. Her balcony gets
        morning sun from roughly 8 AM to noon. Before this, she had never grown
        anything. Her daughter sent her a Sarvada Organic 1 kg pack as a "try
        it" gift, and she bought three plastic pots from the nursery near her
        bus stop.
      </P>

      <Table
        caption="Asha's first three pots"
        headers={["Plant", "Pot size", "Why it worked for a beginner"]}
        rows={[
          [
            "Methi",
            "Wide shallow tray",
            "Sprouts quickly and forgives imperfect soil",
          ],
          [
            "Tulsi",
            "8-inch pot",
            "Clear watering signal: leaves droop when thirsty",
          ],
          [
            "Chilli",
            "10-inch pot",
            "Slow but steady; good for learning patience",
          ],
        ]}
      />

      <H2>Month 1: the nervous beginning</H2>
      <P>
        She watered twice a day because the top looked dry. By day 10, the methi
        had collapsed. The soil was wet underneath, but the surface kept fooling
        her. That is the first beginner trap in Indian balconies: the top dries
        fast, the root zone does not.
      </P>

      <Pull>
        "I cried over the methi," she told us later. "I thought it must be me.
        Maybe I am not the kind of person who can grow things."
      </Pull>

      <P>
        The fix was small enough to feel silly. She stopped watering by habit
        and started using the finger test. If the top finger-depth felt dry, she
        watered. If it felt cool and damp, she waited.
      </P>

      <H2>Month 2: the first real sign</H2>
      <P>
        She remade the methi tray with the bowl rule: 2 bowls soil, 2 bowls
        cocopeat, 1 bowl vermicompost. For the tulsi and chilli pots, she added
        vermicompost only on top: half a teacup for the 8-inch tulsi and
        three-quarter teacup for the 10-inch chilli.
      </P>
      <P>
        Three days later, the chilli plant pushed two new leaves. Not a harvest.
        Not a miracle. Just two clean green leaves. That was enough to make her
        call her daughter.
      </P>

      <H2>Month 3: the first harvest</H2>
      <P>
        The first successful harvest was not a basket of vegetables. It was one
        small handful of methi. Asha's mother used to grow methi in their village
        courtyard, and Asha said the smell came back before the memory did:
        faintly bitter when she rubbed the leaf between her fingers.
      </P>
      <P>
        She put it in dal, took a photo, and sent it to her daughter. They spoke
        for an hour.
      </P>

      <H3>What she was growing by week 12</H3>
      <UL>
        <LI>Three methi trays, staggered so one tray was always young</LI>
        <LI>One cherry tomato plant, with the first fruit around week 11</LI>
        <LI>Two chilli plants: one mild Bhavnagri and one very ambitious hot chilli</LI>
        <LI>Tulsi, mint and coriander near the kitchen door</LI>
        <LI>One money plant cutting from her neighbour</LI>
        <LI>Two rose pots added after she stopped calling herself a beginner</LI>
      </UL>

      <H2>Month 4: twelve pots, one routine</H2>
      <P>
        By month four, Asha was spending 20-30 minutes on the balcony every
        morning. She does not scroll there. She checks leaves, turns one pot
        slightly, pinches dry tips, and writes feeding dates in a notebook. The
        routine became the real harvest.
      </P>

      <Table
        caption="Asha's monthly kitchen garden routine"
        headers={["When", "What she does", "How much"]}
        rows={[
          [
            "Every morning",
            "Checks leaves and soil",
            "Finger test before watering",
          ],
          [
            "When soil feels dry",
            "Waters slowly",
            "Until a little drains out below",
          ],
          [
            "First Sunday",
            "Feeds small pots",
            "4-5 tablespoons vermicompost",
          ],
          [
            "First Sunday",
            "Feeds 8-10 inch pots",
            "Half to three-quarter teacup",
          ],
          [
            "First Sunday",
            "Feeds tomato grow bag",
            "4-5 teacups during fruiting",
          ],
        ]}
      />

      <H2>If you want to start like Asha</H2>
      <P>
        Do not begin with 12 pots. Begin with three. One fast plant, one daily
        use plant, one slow fruiting plant. That way you get a small win, a
        daily reason to look, and one plant that teaches patience.
      </P>
      <UL>
        <LI>
          <strong>Fast plant</strong> - methi, coriander or spinach in a shallow
          tray.
        </LI>
        <LI>
          <strong>Daily use plant</strong> - tulsi, mint or curry leaf in an
          8-inch pot.
        </LI>
        <LI>
          <strong>Patience plant</strong> - chilli or cherry tomato in a 10-12
          inch pot.
        </LI>
        <LI>
          <strong>Soil mix</strong> - 2 bowls garden soil, 2 bowls cocopeat, 1
          bowl vermicompost.
        </LI>
        <LI>
          <strong>Monthly feeding</strong> - use spoons for small pots and
          teacups for bigger pots.
        </LI>
      </UL>

      <H2>Why this matters more than vegetables</H2>
      <P>
        Asha did not start gardening because she needed cheaper methi. Her
        husband's evening walk routine had left a quiet hour in the day, and she
        did not know what to do with it. Now she says, "I have a reason to wake
        up before everyone else."
      </P>
      <P>
        Most people think they are buying compost. Very often they are buying a
        reason to look closely at something alive for 20 minutes. We try to
        remember that when we pack each bag.
      </P>

      <Callout title="Beginner rule" tone="sage">
        If your first plant dies, do not restart the whole hobby. Restart with
        one tray of methi. It sprouts fast, forgives mistakes, and gives your
        confidence back before the week is over.
      </Callout>

      <BlogFAQ
        postSlug="she-started-her-kitchen-garden-at-58"
        items={[
          {
            q: "How do I start a kitchen garden in an Indian apartment balcony?",
            a: "Start with three pots: methi, tulsi and chilli. Use 2 bowls garden soil, 2 bowls cocopeat and 1 bowl vermicompost. Keep them in morning sun and water only when the top finger-depth feels dry.",
          },
          {
            q: "What is the easiest vegetable to grow first?",
            a: "Methi is the easiest first crop. It sprouts quickly, grows in a shallow tray, needs only a few hours of sun, and gives a small harvest in about 3-4 weeks.",
          },
          {
            q: "How much vermicompost should a beginner use?",
            a: "For a 6-inch pot, use 4-5 tablespoons once a month. For an 8-10 inch pot, use half to three-quarter teacup. Sprinkle it on top and lightly mix the surface.",
          },
          {
            q: "How much sun does a balcony kitchen garden need?",
            a: "Four hours of morning sun is enough for methi, tulsi, mint, coriander and many chillies. Tomatoes and roses do better with closer to 6 hours.",
          },
          {
            q: "Do I need expensive potting mix?",
            a: "No. For beginner balcony plants, use 2 bowls garden soil, 2 bowls cocopeat and 1 bowl vermicompost. This is easier than reading a bag full of technical ratios.",
          },
          {
            q: "Can someone over 50 start gardening for the first time?",
            a: "Yes. Start small, keep the pots at a comfortable height, avoid heavy grow bags at first, and choose forgiving plants like methi, tulsi, mint and chilli.",
          },
        ]}
      />
    </Prose>
  );
}
