import { Prose, H2, H3, P, Lead, UL, LI, Pull, Callout, Table, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        The fertilizer gets the credit, but the potting mix does most of the
        work. Get the mix wrong and the best vermicompost in the world won't
        save a plant. Get it right and your plants will be patient with you
        when everything else goes wrong.
      </Lead>

      <P>
        For Indian homes, there are essentially three building blocks. You
        change the ratio depending on what you're growing. Here are the five
        recipes that cover roughly 95% of home gardening.
      </P>

      <H2>The three building blocks</H2>
      <UL>
        <LI>
          <strong>Garden soil / red soil</strong> — provides structure and
          minerals. Sieve to remove rocks. Avoid construction-site soil.
        </LI>
        <LI>
          <strong>Cocopeat</strong> — coconut husk fibre. Holds water, keeps
          the mix light and airy. Available cheap in any plant store.
        </LI>
        <LI>
          <strong>Vermicompost</strong> — your nutrient and microbe source.
          Use only pure, silt-free vermicompost (Sarvada's, for example).
        </LI>
      </UL>

      <Pull>
        Get these three right, in the right ratio, and almost any Indian home
        plant will thrive. Add perlite or sand only for cacti and succulents.
      </Pull>

      <H2>The five recipes worth bookmarking</H2>

      <Table
        caption="Potting mix recipes by plant type"
        headers={["Plant type", "Garden soil", "Cocopeat", "Vermicompost", "Extra"]}
        rows={[
          ["Indoor foliage (money plant, snake, monstera)", "40%", "40%", "20%", "—"],
          ["Flowering plants (rose, hibiscus, jasmine)", "30%", "30%", "30%", "10% perlite"],
          ["Vegetables (tomato, chilli, methi)", "33%", "33%", "33%", "—"],
          ["Succulents & cacti", "20%", "30%", "20%", "30% sand/perlite"],
          ["Seedlings (under 30 days)", "0%", "60%", "40%", "—"],
        ]}
      />

      <H2>What NOT to mix</H2>
      <UL>
        <LI>
          <strong>Heavy clay or black cotton soil alone</strong> — it
          compacts after one watering and drowns roots. Always cut with
          cocopeat.
        </LI>
        <LI>
          <strong>Soil from outside without treatment</strong> — full of
          fungus, weed seeds and possibly pests. Spread it on a sheet in
          direct sun for 2 days first.
        </LI>
        <LI>
          <strong>Construction sand</strong> — too fine, too saline. Use
          horticultural sand or perlite.
        </LI>
        <LI>
          <strong>Wood ash in large quantities</strong> — pH spike kills root
          microbes. A sprinkle is fine, a cupful is not.
        </LI>
      </UL>

      <H2>The two India-specific gotchas</H2>

      <H3>North India: avoid pure loamy soil</H3>
      <P>
        Delhi, Punjab and Haryana soils are heavy and silty. Used straight,
        they form a hard crust on top. Always cut at least 40% cocopeat into
        any North Indian garden soil for pot use.
      </P>

      <H3>South India: laterite soil needs extra organic matter</H3>
      <P>
        Bangalore, Chennai and parts of Kerala have laterite-leaning soils —
        red, low in organic content. Push your vermicompost percentage up to
        30% in the recipes above. Plants will thank you.
      </P>

      <H2>When to refresh the mix</H2>
      <UL>
        <LI><strong>Every 12 months</strong> — replace the top 2 inches of soil with a fresh mix.</LI>
        <LI><strong>Every 18–24 months</strong> — fully repot, washing roots gently and using a completely new mix.</LI>
        <LI><strong>Whenever water sits</strong> — if water pools on the surface for &gt;30 seconds, the mix is compacted. Refresh now, don't wait.</LI>
      </UL>

      <Callout title="Why Sarvada vermicompost matters in your mix" tone="peach">
        Cheap vermicompost often contains 30–50% silt. When you mix that into
        your potting soil, the silt fills the air gaps cocopeat created. The
        whole mix becomes denser than what you started with. That's why pure,
        silt-free vermicompost matters — it adds nutrition without stealing
        aeration.
      </Callout>

      <BlogFAQ
        postSlug="right-potting-mix-for-every-plant"
        items={[
          {
            q: "What is the best potting mix ratio for indoor plants in India?",
            a: "40% garden soil + 40% cocopeat + 20% pure vermicompost. This works for money plant, snake plant, pothos, peace lily, monstera, areca palm and most foliage indoor plants.",
          },
          {
            q: "What is the right cocopeat to vermicompost ratio for seedlings?",
            a: "60% cocopeat to 40% vermicompost works perfectly for seedlings under 30 days old. No garden soil at this stage — it's too heavy for young roots.",
          },
          {
            q: "Can I use only cocopeat and vermicompost without soil?",
            a: "Yes — for seedlings, microgreens and very short-cycle plants. For long-term potted plants you need garden soil for mineral content and structural stability.",
          },
          {
            q: "How often should I change potting soil for indoor plants?",
            a: "Refresh the top 2 inches every 12 months. Fully repot every 18–24 months. If water pools on the surface, refresh sooner.",
          },
          {
            q: "Why does my potting mix become hard like concrete after a few months?",
            a: "Almost always silt in the vermicompost or untreated heavy soil. Silt fills the air pockets and forms a crust on watering. Switch to pure, silt-free vermicompost and add 30% cocopeat to break compaction.",
          },
        ]}
      />
    </Prose>
  );
}
