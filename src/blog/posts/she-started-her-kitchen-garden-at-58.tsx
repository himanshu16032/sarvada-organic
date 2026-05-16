import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        Asha is 58. She lives in a third-floor apartment in West Delhi with a
        six-foot balcony that gets four hours of morning sun. Until last
        September, she had never grown anything. Not a single plant. Her
        daughter sent her a Sarvada Organic 1&nbsp;kg pack as a "try it" gift.
        Four months later, she has twelve pots.
      </Lead>

      <H2>Month 1 — the nervous beginning</H2>
      <P>
        Asha bought three plastic pots. Methi seeds. Tomato seedlings. A
        chilli plant from the nursery near her bus stop. The nursery owner
        asked if she needed soil. She said yes, then panicked at the till
        when he asked which type. She bought a bag of cocopeat too, because
        someone on YouTube had said so.
      </P>
      <P>
        Her first week she watered the pots twice a day, every day. By day
        ten she had drowned the methi.
      </P>

      <Pull>
        "I cried over the methi," she told us later. "I thought it must be me.
        Maybe I'm not the kind of person who can grow things."
      </Pull>

      <H2>Month 2 — the first sprout</H2>
      <P>
        She started watering once a day, in the evening. She added a fistful
        of Sarvada vermicompost to each pot. Three days later, the chilli
        plant had two new leaves. Dark, healthy green.
      </P>
      <P>
        She called her daughter. Her daughter sent her a photo from her own
        Delhi balcony — a flowering hibiscus she had been struggling with for
        months that had also turned around after switching to vermicompost.
        They sent each other photos every Sunday after that.
      </P>

      <H2>Month 3 — the first harvest</H2>
      <P>
        Twenty grams of fresh methi. Asha's mother used to grow methi in
        their village courtyard. Asha hadn't tasted "real" methi — the kind
        that smells faintly bitter when you bruise the leaf — in maybe forty
        years.
      </P>
      <P>
        She made dal with it. Texted her daughter the photo. Her daughter
        called and they spoke for an hour.
      </P>

      <H3>What Asha was growing by week 12</H3>
      <UL>
        <LI>Three pots of methi (staggered, so harvests rolled)</LI>
        <LI>One cherry tomato plant — first fruit at week 11</LI>
        <LI>Two chillies — Bhut Jolokia and a mild Bhavnagri</LI>
        <LI>Tulsi, mint, coriander — the kitchen trio</LI>
        <LI>One money plant from a cutting her neighbour gave her</LI>
        <LI>Roses — newly added at month 3</LI>
      </UL>

      <H2>Month 4 — twelve pots, one routine</H2>
      <P>
        Asha now spends 30 minutes on her balcony every morning. She doesn't
        listen to music. She doesn't scroll. She waters, looks, occasionally
        prunes. She has a notebook where she tracks who got fed when.
      </P>
      <P>
        Her exact monthly feeding schedule, in her words:
      </P>

      <Callout title="Asha's monthly schedule" tone="sage">
        <p>
          <strong>First Sunday of the month</strong> — one fist of Sarvada
          vermicompost in each medium pot. Two fists in the tomato.
        </p>
        <p className="mt-2">
          <strong>Every Sunday</strong> — quick visual check. Any yellow
          leaves? Anything wilting? Anything new?
        </p>
        <p className="mt-2">
          <strong>Every evening</strong> — water just enough that a little
          drains out the bottom.
        </p>
      </Callout>

      <H2>Why this matters more than gardening</H2>
      <P>
        Asha didn't take up gardening for the herbs. She took it up because
        her husband's evening walk routine had her sitting alone at home and
        she didn't know what to do with the hours. She tells us, "Now I have
        a reason to wake up before everyone else." Her daughter notices.
      </P>
      <P>
        Most of our customers aren't really buying vermicompost. They're
        buying a quiet half hour with something alive. We try to remember
        that when we pack each bag.
      </P>

      <H2>If you want to start like Asha</H2>
      <UL>
        <LI>Three pots. No more. Pick easy plants: methi, chilli, tulsi.</LI>
        <LI>Don't buy potting mix in fancy bags. Garden soil + cocopeat + vermicompost (40-40-20) is plenty.</LI>
        <LI>Water once a day, not twice. Most beginners drown plants.</LI>
        <LI>One fist of Sarvada vermicompost in each pot every 30 days.</LI>
        <LI>Don't move pots around. Plants like steady light.</LI>
        <LI>Be okay with one death. Everyone loses a plant.</LI>
      </UL>

      <BlogFAQ
        postSlug="she-started-her-kitchen-garden-at-58"
        items={[
          {
            q: "How do I start a kitchen garden in an Indian apartment balcony?",
            a: "Start with 3 pots — methi, chilli, tulsi are the easiest. Use a 40% garden soil + 40% cocopeat + 20% vermicompost mix. Water once a day in the evening. Feed with vermicompost once a month.",
          },
          {
            q: "What's the easiest vegetable to grow for first-time gardeners in India?",
            a: "Methi (fenugreek). It sprouts in 3 days, grows in any size pot, doesn't need much sun, and gives you a harvest in 25 days. It's the most forgiving Indian kitchen-garden plant.",
          },
          {
            q: "Do I need expensive potting mix for a beginner kitchen garden?",
            a: "No. A simple 40% garden soil + 40% cocopeat + 20% Sarvada vermicompost mix is better than most premium potting mixes — and a third of the cost.",
          },
          {
            q: "How much sun does a balcony kitchen garden need?",
            a: "Four hours of direct morning sun is enough for tulsi, methi, mint, chillies and leafy greens. For tomatoes and roses you'll want closer to 6 hours.",
          },
          {
            q: "Can senior citizens with no gardening experience grow vegetables at home?",
            a: "Absolutely. Many of our most active customers are over 50 and started during the pandemic. Begin with 3–4 forgiving plants, feed them gently with vermicompost, and you'll see results in 4–6 weeks.",
          },
        ]}
      />
    </Prose>
  );
}
