import { Sprout, ShieldCheck, HandHeart, Quote } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { useTrackVisible } from "../lib/analytics";

const PILLARS = [
  {
    icon: Sprout,
    title: "For first-time planters",
    body:
      "Starting with your first few pots? Sarvada gives saplings a gentle, balanced start.",
  },
  {
    icon: HandHeart,
    title: "For fading plants",
    body:
      "For plants that look tired, slow food helps the soil recover before the leaves do.",
  },
  {
    icon: ShieldCheck,
    title: "Zero shortcuts",
    body:
      "We never add silt or preservatives. Just clean, screened earthworm castings.",
  },
];

export default function About() {
  const ref = useTrackVisible<HTMLElement>("about_section_viewed");
  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-cream-100 py-14 md:py-20"
    >
      <SectionBg variant="sage" />
      <div className="container-wide relative">
        <div className="grid items-end gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Why Sarvada</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              An honest brand,{" "}
              <span className="italic text-peach-500">since 2018.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted md:col-span-5 md:text-lg">
            We started Sarvada because most "organic" compost in the market is
            cut with silt and dust to fill the bag. We do the opposite. Slow,
            clean vermicomposting, packed only when it is ready.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-cream-200 bg-cream-50 p-5 transition-all hover:-translate-y-1 hover:shadow-soft md:p-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-cream-50 md:h-14 md:w-14">
                <p.icon className="h-5 w-5 md:h-6 md:w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-800 md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-stretch gap-3 overflow-hidden rounded-[2rem] bg-forest-700 md:mt-16 md:grid-cols-2 md:rounded-[2.5rem]">
          <div className="aspect-[5/4] overflow-hidden md:aspect-auto">
            <img
              src="/sarvada-pack-table.webp"
              alt="Plants thriving after weeks of Sarvada vermicompost"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 text-cream-50 md:p-10 lg:p-14">
            <Quote className="h-8 w-8 text-peach-300" />
            <blockquote className="mt-4 font-display text-xl font-medium leading-snug text-cream-50 md:text-2xl lg:text-[1.75rem]">
              "Two weeks of Sarvada and my fading tulsi was bushier than the
              day I bought it. I've stopped buying anything else."
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-peach-400 font-display text-base font-semibold text-cream-50">
                P
              </span>
              <div>
                <p className="text-sm font-semibold text-cream-50">Priya M.</p>
                <p className="text-xs text-cream-200">Pune · Verified buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
