import { Star, BadgeCheck } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { useTrackVisible } from "../lib/analytics";

const REVIEWS = [
  {
    name: "Priya M.",
    place: "Pune",
    rating: 5,
    title: "Brought my tulsi back to life",
    body:
      "My tulsi was almost gone. Two weeks of Sarvada and it's bushier than the day I bought it. Smells like real soil, not chemicals.",
    verified: true,
    product: "Vermicompost 5kg",
  },
  {
    name: "Arjun K.",
    place: "Bengaluru",
    rating: 5,
    title: "Finally an honest compost",
    body:
      "I've tried 4 brands. All had silt and dust. Sarvada is the real deal — light, dark, alive. My terrace tomatoes love it.",
    verified: true,
    product: "Vermicompost 25kg",
  },
  {
    name: "Sneha R.",
    place: "Mumbai",
    rating: 5,
    title: "Made me look like a pro",
    body:
      "First-time planter here. Sarvada made me look like I know what I'm doing. Even my mom is impressed with my balcony garden.",
    verified: true,
    product: "Vermicompost 1kg",
  },
  {
    name: "Vikram S.",
    place: "Delhi",
    rating: 4,
    title: "Worth every rupee",
    body:
      "Slightly premium pricing but completely justified. The packaging is great, delivery was fast, and plants are thriving.",
    verified: true,
    product: "Vermicompost 5kg",
  },
];

export default function Testimonials() {
  const ref = useTrackVisible<HTMLElement>("testimonials_section_viewed");
  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative overflow-hidden bg-cream-100 py-12 md:py-20"
    >
      <SectionBg variant="split" />
      <div className="container-wide relative">
        <div className="grid items-end gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="eyebrow">Plant parent reviews</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Rated <span className="italic text-peach-500">4.8</span> by 3,200+ growers.
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 rounded-3xl border border-cream-300/70 bg-cream-50 p-4 md:p-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-peach-200 font-display text-xl font-bold text-peach-500">
                G
              </div>
              <div className="min-w-0">
                <p className="font-display text-2xl font-semibold text-forest-800">
                  4.8 / 5.0
                </p>
                <div className="mt-0.5 flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-peach-400 text-peach-400"
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted">
                    3,247 Google reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-5 mt-8 flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="w-[78vw] shrink-0 rounded-3xl border border-cream-200 bg-cream-50 p-5 md:w-auto md:p-6"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r.rating
                        ? "fill-peach-400 text-peach-400"
                        : "fill-cream-300 text-cream-300"
                    }`}
                  />
                ))}
              </div>
              <h3 className="mt-3 text-base font-semibold text-forest-800 md:text-lg">
                {r.title}
              </h3>
              <blockquote className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-200 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-200 font-display text-sm font-semibold text-forest-700">
                  {r.name.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1 text-sm font-semibold text-forest-800">
                    {r.name}
                    {r.verified && (
                      <BadgeCheck className="h-3.5 w-3.5 text-peach-500" />
                    )}
                  </p>
                  <p className="truncate text-[11px] text-muted">
                    {r.place} · {r.product}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
