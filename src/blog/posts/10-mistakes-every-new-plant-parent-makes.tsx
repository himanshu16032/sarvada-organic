import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        We've made most of these ourselves. Some of them more than once. If
        you're losing plants and don't know why — odds are you're doing one
        of the ten things below. The good news is, all of them are easy to
        fix.
      </Lead>

      <H2>1. Overwatering</H2>
      <P>
        The #1 killer of Indian home plants. We feel responsible for our
        plants, so we water them — daily, sometimes twice. But roots need
        oxygen as much as water. Wet soil with no air pockets suffocates
        roots, leading to rot.
      </P>
      <P>
        <strong>The fix:</strong> Stick your finger 2 inches into the soil.
        Only water if the top inch is dry. For most plants, this means
        watering every 2–3 days, not daily.
      </P>

      <H2>2. Garden soil straight into pots</H2>
      <P>
        Garden soil works in the garden because the ecosystem supports it —
        rain, microbes, worms, varied texture. In a pot, garden soil
        compacts after a few waterings and forms a hard surface that water
        runs off without soaking.
      </P>
      <P>
        <strong>The fix:</strong> Always cut garden soil with at least 40%
        cocopeat and 20% vermicompost.
      </P>

      <H2>3. Buying cheap fertilizer with silt and fillers</H2>
      <P>
        That ₹40/kg vermicompost from the nursery is almost always 30–50%
        silt. It looks dark in the bag but it compacts your potting mix into
        concrete and starves your plants of real nutrition.
      </P>
      <P>
        <strong>The fix:</strong> Do the water test. Pure vermicompost
        leaves clear water; silt-mixed compost turns it muddy brown
        instantly.
      </P>

      <H2>4. Wrong plant for the spot</H2>
      <P>
        Putting a sun-loving rose in a north-facing balcony, or a
        shade-loving fern on a hot western terrace. Plants don't move
        themselves. You have to know what they need before you buy.
      </P>

      <H3>Quick light reference</H3>
      <UL>
        <LI>Full sun (6+ hours): tomato, rose, hibiscus, marigold, okra</LI>
        <LI>Partial sun (3–5 hours): methi, mint, chilli, tulsi, basil</LI>
        <LI>Bright indirect: pothos, monstera, philodendron, peace lily</LI>
        <LI>Low light: snake plant, ZZ, lucky bamboo</LI>
      </UL>

      <H2>5. Fertilizing a sick plant</H2>
      <P>
        It feels logical — "the plant looks weak, let me feed it more". But
        feeding a stressed plant is like feeding a person with a stomach
        upset. The roots can't absorb properly. The unused fertilizer builds
        up and makes things worse.
      </P>
      <P>
        <strong>The fix:</strong> Diagnose first. Is it water? Light?
        Drainage? Fix the underlying problem. Only feed once the plant shows
        new growth.
      </P>

      <H2>6. Ignoring drainage</H2>
      <P>
        Pots without drainage holes are a death sentence for most plants.
        Even decorative pots with one small hole at the bottom often clog
        with compacted soil.
      </P>
      <P>
        <strong>The fix:</strong> Every pot needs at least one drainage hole
        plus a layer of broken terracotta or small stones at the bottom.
        Lift pots slightly off the ground so water drains freely.
      </P>

      <Pull>
        Root rot kills more Indian home plants than every pest combined. And
        almost all root rot starts with drainage you didn't check.
      </Pull>

      <H2>7. Giving up after one plant death</H2>
      <P>
        Every gardener — every gardener — loses plants. The Sarvada farm
        team has lost plants. Your grandmother lost plants. A plant death
        isn't a sign you're "not a plant person". It's data. Notice what
        happened, adjust, and try again.
      </P>

      <H2>8. Repotting at the wrong time</H2>
      <P>
        Don't repot in peak summer heat or during monsoon. The plant is
        already stressed from temperature/humidity changes — adding root
        disturbance pushes it over.
      </P>
      <P>
        <strong>Best time to repot in India:</strong> October–November or
        February–March. The shoulder seasons.
      </P>

      <H2>9. Ignoring humidity for tropical plants</H2>
      <P>
        Plants like monstera, calathea, ferns and peace lily originate in
        humid forests. In dry Delhi winters they look perpetually crispy. A
        small humidifier or a weekly mist makes a dramatic difference.
      </P>

      <H2>10. Buying plants without researching them</H2>
      <P>
        Nursery owners will sell you anything they have. That doesn't mean
        every plant fits your home. Spend five minutes searching the plant's
        light, water and humidity needs before you take it home.
      </P>
      <P>
        <strong>A small list of forgiving plants for beginners:</strong>
      </P>
      <UL>
        <LI>Money plant (any conditions)</LI>
        <LI>Snake plant (low light, low water)</LI>
        <LI>Pothos (medium light)</LI>
        <LI>Tulsi (4 hours sun)</LI>
        <LI>Methi (any pot, any season)</LI>
        <LI>Aloe vera (occasional water)</LI>
      </UL>

      <Callout title="The Sarvada beginner's promise" tone="peach">
        If you do the basics right — good soil mix, pure vermicompost
        monthly, water only when soil is dry — you'll lose less than one
        plant in ten. That's a respectable record even for experienced
        gardeners.
      </Callout>

      <BlogFAQ
        postSlug="10-mistakes-every-new-plant-parent-makes"
        items={[
          {
            q: "Why are my indoor plants dying in India?",
            a: "The most common reasons are overwatering, garden soil compacting in pots, silt-heavy compost, poor drainage, and putting plants in the wrong light. Fix these one by one and most plants recover quickly.",
          },
          {
            q: "How do I tell the difference between overwatering and underwatering?",
            a: "Overwatered plants have soft, yellow, drooping leaves and damp soil that smells slightly sour. Underwatered plants have crisp, brown-edged leaves and bone-dry soil that pulls away from the pot's edge. The fix is opposite for each.",
          },
          {
            q: "What's the easiest indoor plant for beginners in India?",
            a: "Money plant (pothos). It tolerates low light, irregular watering, and almost any soil. Snake plant is a close second — it actively prefers neglect.",
          },
          {
            q: "How often should I water indoor plants in India?",
            a: "There's no fixed schedule — it depends on plant type, pot size, season and humidity. The rule: stick your finger 2 inches into the soil. Water only if the top inch is dry. For most plants this is every 2–4 days.",
          },
          {
            q: "Can vermicompost fix a struggling plant by itself?",
            a: "Sometimes. Vermicompost helps recovery enormously if the underlying issue is poor soil or nutrient deficiency. But if the cause is overwatering, poor drainage or wrong light, fix that first — then top-dress with vermicompost to support new growth.",
          },
        ]}
      />
    </Prose>
  );
}
