import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        Most gardening calendars online are written for European seasons. They
        tell you to plant tomatoes "after the last frost". We do not have frost
        in most of India. We have Rabi, Zaid and Kharif. Once you know what each
        season is asking for, the calendar starts making sense.
      </Lead>

      <Callout title="Start here" tone="peach">
        For most Indian home gardens, plant cool-season vegetables in Rabi
        (October-February), heat-loving gourds and okra in Zaid (March-May),
        and monsoon greens or climbers in Kharif (June-September). Feed with
        vermicompost every 30-45 days in Rabi, every 21 days in Zaid, and as a
        top dressing in Kharif.
      </Callout>

      <H2>The three Indian growing seasons</H2>
      <Table
        caption="India's three primary growing seasons"
        headers={["Season", "Months", "Climate", "Best for"]}
        rows={[
          ["Rabi", "October–February", "Cool, low humidity", "Spinach, peas, carrot, tomato, mustard"],
          ["Zaid", "March–May", "Hot, dry", "Cucumber, gourd, okra, watermelon"],
          ["Kharif", "June–September", "Hot, monsoon humid", "Methi, amaranth, ridge gourd, beans"],
        ]}
      />

      <H2>Rabi season — October to February</H2>
      <P>
        This is when Indian gardeners get spoiled: cool nights, mild days, and
        enough sun for tomatoes, greens and flowers. If you want to set up new
        pots, do it in late September or early October.
      </P>

      <H3>What to plant</H3>
      <UL>
        <LI>Tomato, capsicum (transplant seedlings in October)</LI>
        <LI>Spinach, methi, coriander, mustard greens</LI>
        <LI>Peas, broad beans, French beans</LI>
        <LI>Carrot, radish, beetroot (in deep pots)</LI>
        <LI>Onion, garlic (long-cycle, plant once and forget)</LI>
        <LI>Flowering: marigold, calendula, pansy, petunia</LI>
      </UL>

      <H3>How to feed your plants in Rabi</H3>
      <P>
        Light feeding works. One application of pure vermicompost at planting,
        then a top-up every 30–45 days. Plants grow slowly in cool weather
        and don't need much.
      </P>

      <H2>Zaid season — March to May</H2>
      <P>
        Pre-monsoon summer is where terrace gardens get tested. Days are hot,
        evenings are kinder, and pots dry from the sides while staying damp
        near the roots. Most failures now come from stress, salt build-up and
        confused watering.
      </P>

      <H3>What to plant</H3>
      <UL>
        <LI>Cucumber, bottle gourd, ridge gourd, bitter gourd</LI>
        <LI>Okra (bhindi) — extremely heat-tolerant</LI>
        <LI>Watermelon, muskmelon (in grow bags)</LI>
        <LI>Pumpkin, brinjal</LI>
        <LI>Tulsi thrives in this heat</LI>
      </UL>

      <H3>How to feed your plants in Zaid</H3>
      <P>
        Hot weather means more watering, which means more nutrient leaching.
        Increase vermicompost top-dressing to every 21 days instead of 30. A
        thin layer of mulch (dry grass, cocopeat, coconut coir) on top of the
        soil saves water and keeps roots calmer.
      </P>

      <Pull>
        In Indian summers, water deeply once a day in the evening — not
        shallowly twice. Deep roots survive heat, shallow roots fry.
      </Pull>

      <H2>Kharif season — June to September</H2>
      <P>
        Monsoon looks easy because the rain does your watering. That is also
        the trap. The big risks are overwatering, fungal disease and pots that
        never dry out. Drainage becomes everything.
      </P>

      <H3>What to plant</H3>
      <UL>
        <LI>Methi (the easiest monsoon plant)</LI>
        <LI>Amaranth (chaulai), spinach</LI>
        <LI>Ridge gourd, bottle gourd, snake gourd</LI>
        <LI>Cluster beans, cowpea</LI>
        <LI>Lemongrass, mint</LI>
      </UL>

      <H3>How to feed your plants in Kharif</H3>
      <P>
        Use vermicompost as a top-dressing only, not mixed deep into the
        soil. Heavy rain will wash deep-mixed compost out the drainage
        holes. Top-dress every 30 days and let the rain wash nutrients down
        gradually.
      </P>

      <H2>Month-by-month quick reference</H2>
      <Table
        caption="What to do every month of the Indian gardening year"
        headers={["Month", "Plant", "Feed / care"]}
        rows={[
          ["October", "Tomato, methi, spinach, peas", "Heavy initial vermicompost mix"],
          ["November", "Coriander, carrot, beetroot", "Top-dress flowering plants"],
          ["December", "Garlic, onion, mustard", "Feed minimally — slow growth"],
          ["January", "Late winter herbs", "Refresh top inch of soil"],
          ["February", "Prep pots for summer crops", "Start vermicompost mix for new pots"],
          ["March", "Cucumber, okra, bitter gourd", "Increase feeding cycle to every 21 days"],
          ["April", "Bottle gourd, ridge gourd, melons", "Heavy mulching, evening watering"],
          ["May", "Pumpkin, brinjal — heat-set", "Vermiwash spray weekly"],
          ["June", "Methi, amaranth, beans (pre-monsoon prep)", "Check drainage holes"],
          ["July", "Mint, lemongrass, kharif greens", "Top-dress only, no deep mixing"],
          ["August", "Replant any monsoon losses", "Apply neem cake against fungal issues"],
          ["September", "Prep pots for Rabi", "Last vermicompost feed before transition"],
        ]}
      />

      <H2>City-specific notes</H2>
      <UL>
        <LI>
          <strong>Delhi & NCR:</strong> Rabi is your golden window. Zaid is
          brutally hot — protect pots from western afternoon sun.
        </LI>
        <LI>
          <strong>Mumbai & Pune:</strong> Kharif is your hardest season due
          to humidity and fungal pressure. Stronger drainage is critical.
        </LI>
        <LI>
          <strong>Bangalore & Chennai:</strong> Year-round growing with
          minor adjustments. Watch for pests during inter-season transitions.
        </LI>
        <LI>
          <strong>Hyderabad:</strong> Hot Zaid with long Kharif. Tomatoes
          fruit best November–February here.
        </LI>
      </UL>

      <Callout title="Sarvada feeding rhythm" tone="peach">
        <UL>
          <LI><strong>Rabi:</strong> Every 30–45 days</LI>
          <LI><strong>Zaid:</strong> Every 21 days + vermiwash spray</LI>
          <LI><strong>Kharif:</strong> Every 30 days, top-dress only</LI>
        </UL>
      </Callout>

      <BlogFAQ
        postSlug="indian-gardening-calendar-month-by-month"
        items={[
          {
            q: "When should I start a kitchen garden in India?",
            a: "October is the best month. It's the start of Rabi, the kindest growing season — cool nights, mild days, low pest pressure. New pots set up in October will produce well through February.",
          },
          {
            q: "What can I plant in Indian summer (Zaid season)?",
            a: "Cucumber, all gourds (bottle, ridge, bitter), okra, watermelon, brinjal, pumpkin and tulsi all thrive in March–May heat. Mulch the soil and water deeply in the evening.",
          },
          {
            q: "What grows well in Indian monsoon?",
            a: "Methi, amaranth, spinach, mint, lemongrass and most gourds love the monsoon. Focus on drainage — root rot kills more plants than over-watering directly during Kharif.",
          },
          {
            q: "How often should I add vermicompost in different seasons?",
            a: "Rabi: every 30–45 days. Zaid: every 21 days (faster nutrient leaching in summer). Kharif: every 30 days as top-dressing only, since rain washes deep-mixed compost out.",
          },
          {
            q: "Can I grow tomatoes year-round in India?",
            a: "In Delhi and the north — October to February only. In Bangalore, Pune, Mumbai and most of South India — almost year-round with careful sun and water management. Vermicompost helps tomatoes handle stress in any season.",
          },
        ]}
      />
    </Prose>
  );
}
