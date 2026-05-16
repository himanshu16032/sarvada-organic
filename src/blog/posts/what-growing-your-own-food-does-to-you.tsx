import { Prose, H2, P, Lead, Pull, BlogFAQ } from "../Prose";

export default function Post() {
  return (
    <Prose>
      <Lead>
        The first time I harvested something I grew, I stood in my kitchen
        and cried a little. That surprised me. It was three sad-looking
        sprigs of methi. I'd grown it from a seed I'd thrown into a pot
        almost as a joke.
      </Lead>

      <P>
        This isn't a guide to gardening. There are no plant care tips below.
        This is an essay about what happens, quietly, when you start growing
        something — and why most of our customers eventually stop using the
        word "hobby".
      </P>

      <H2>You stop eating mindlessly</H2>
      <P>
        The first thing that goes is the way you eat. When you've watered
        something every day for two months and finally chopped it onto your
        dal, you can't go back to seeing food as fuel. You notice the
        coriander on every plate. You think about who grew the methi at the
        market. You stop wasting food, almost involuntarily.
      </P>
      <P>
        This sounds dramatic. It isn't. It's small and gradual and
        permanent.
      </P>

      <H2>You learn patience the hard way</H2>
      <P>
        Plants don't care about your deadlines. The chilli will fruit when
        it's ready. The seed will germinate in five days or it won't. You
        cannot make it faster. Watching this — really watching it — rewires
        something. The deadlines at work start feeling less personal.
      </P>

      <Pull>
        Gardening teaches a strange kind of slow, useful patience. The kind
        that doesn't show up in productivity books.
      </Pull>

      <H2>You learn grief, too</H2>
      <P>
        Some plants die. You can't stop it. The neem outside the balcony got
        the spider mite first and brought it home. Or you went away for a
        weekend in May and forgot to ask anyone to water. Or there was
        nothing wrong and the plant just didn't make it.
      </P>
      <P>
        You feel it more than you think you will. Most of our customers say
        the first plant death taught them something they didn't know they
        needed to learn — that you can do everything right and still lose
        something. It's a kind of grief that costs you nothing and gives you
        a small permanent thing in return.
      </P>

      <H2>You join a quiet community</H2>
      <P>
        Plant people find each other. The watchman who notices your tomato
        plant. The aunty in the lift with the same hibiscus. The WhatsApp
        groups where forty strangers swap cuttings and seeds and photos of
        their first harvests. The way every plant in your house has the name
        of the friend who gave it to you.
      </P>
      <P>
        This community didn't exist for most of us before. It's not
        organised. It doesn't have hashtags. It's just — there. Suddenly.
      </P>

      <H2>You touch ancestral memory</H2>
      <P>
        Almost everyone's grandparents grew something. Tulsi by the door. A
        guava tree in the backyard. Methi in a pot on the kitchen ledge.
        When you start growing, you find yourself doing things — pulling a
        leaf, smelling the soil, talking to a plant — that you have no
        memory of being taught.
      </P>
      <P>
        Indians have been growing things in our homes for a thousand years.
        Two generations of apartment living can't erase that. The first time
        you crush a tulsi leaf between your fingers and smell your own
        hand, something deep clicks back into place.
      </P>

      <H2>None of this is in the brochure</H2>
      <P>
        Our brochure says vermicompost. 60+ nutrients. No silt, no
        preservatives. Free delivery above ₹499. That's all true.
      </P>
      <P>
        But that's not really what people buy. People buy a quiet half hour
        with something alive. They buy a reason to wake up earlier than the
        rest of the house. They buy the first methi from their own pot. They
        buy the call to their daughter to send a photo.
      </P>
      <P>
        We make vermicompost. It's what we've been quietly growing things
        with since 2018. If you've been thinking of starting — this is where
        we'd begin.
      </P>

      <BlogFAQ
        postSlug="what-growing-your-own-food-does-to-you"
        items={[
          {
            q: "Is home gardening actually good for mental health?",
            a: "There's growing scientific consensus that even 30 minutes of daily gardening reduces cortisol, improves mood and helps with mild depression and anxiety. The combination of soil-microbe exposure, gentle physical activity and tending to something alive seems to be uniquely beneficial.",
          },
          {
            q: "Can I grow my own food in an Indian apartment?",
            a: "Yes — even with a 4x6 foot balcony or just a windowsill, you can grow tulsi, methi, mint, chillies, coriander and even cherry tomatoes. Indian seasons are forgiving for small-scale home growing.",
          },
          {
            q: "What's the easiest plant to start a kitchen garden with?",
            a: "Methi (fenugreek). It germinates in 3 days, grows in any pot size, doesn't need full sun, and gives a harvest in under 30 days. Almost no one fails with methi.",
          },
          {
            q: "Do I need a lot of time to maintain home plants?",
            a: "No. Most balcony kitchen gardens need 15–20 minutes a day. Watering, a quick look at the plants, occasional pruning. Once a month you spend 30 minutes feeding everything with vermicompost.",
          },
          {
            q: "Is Sarvada Organic good for beginner gardeners?",
            a: "Yes — that's literally why we started. New gardeners are most likely to lose plants to chemical fertilizer burn or silt-heavy compost. Pure vermicompost is the most forgiving plant food there is.",
          },
        ]}
      />
    </Prose>
  );
}
