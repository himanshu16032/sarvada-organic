import { Repeat, Truck, Percent, ArrowRight } from "lucide-react";
import { track } from "../lib/analytics";

const PERKS = [
  { icon: Repeat, title: "Skip or cancel anytime", sub: "Full flexibility, no lock-in" },
  { icon: Percent, title: "Save 15% every month", sub: "Locked-in subscriber pricing" },
  { icon: Truck, title: "Free priority delivery", sub: "Always free for subscribers" },
];

export default function Subscribe() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-peach-200/70 p-6 md:rounded-[2.5rem] md:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-peach-400/30 blur-3xl md:h-96 md:w-96"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-peach-500 md:text-xs">
                New · Subscribe & save
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
                Never run out of plant food again.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-forest-800/80 md:text-base">
                Get a fresh 5kg pack of Sarvada Vermicompost delivered every
                month. Pause, skip or cancel anytime.
              </p>

              <ul className="mt-6 grid gap-2.5 md:grid-cols-3 md:gap-3">
                {PERKS.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-2.5 rounded-2xl bg-cream-50/80 p-3 md:flex-col md:items-start md:p-4"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-peach-400 text-cream-50">
                      <p.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-forest-800 md:text-sm">
                        {p.title}
                      </p>
                      <p className="text-[11px] text-muted md:text-xs">{p.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#products"
                  onClick={() =>
                    track("subscribe_section_cta_clicked", {
                      plan: "monthly_5kg",
                      price: 509,
                      mrp: 599,
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800 md:text-base"
                >
                  Start subscription <ArrowRight className="h-4 w-4" />
                </a>
                <span className="text-xs font-semibold text-forest-800 md:text-sm">
                  ₹509/mo · was ₹599
                </span>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-50 ring-1 ring-cream-300/60">
                <img
                  src="/packaging-reference.jpeg"
                  alt="Sarvada Organic Vermicompost monthly subscription pack"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
