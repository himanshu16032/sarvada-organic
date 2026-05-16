import { ArrowRight, Star, Truck, ShieldCheck } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { track } from "../lib/analytics";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 pt-4 md:pt-6">
      <SectionBg variant="warm" />
      <div className="container-wide relative">
        <div className="grid gap-3 md:gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl bg-forest-700 p-6 text-cream-50 md:rounded-[2rem] md:p-10 lg:col-span-2 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-peach-400/30 blur-3xl md:h-96 md:w-96"
            />
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-peach-300 backdrop-blur md:text-xs">
                  <Star className="h-3 w-3 fill-peach-300" />
                  India's most loved vermicompost · 4.8★
                </span>
                <h1 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.75rem]">
                  Pure vermicompost.{" "}
                  <span className="italic text-peach-300">No silt.</span>
                  <br className="hidden md:block" /> No preservatives.
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200 md:text-base">
                  Trusted by 12,000+ plant parents since 2018. Earthworm-made,
                  hand-screened, sun-cured. Real food for real plants.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#products"
                    onClick={() =>
                      track("hero_cta_clicked", {
                        cta: "shop_now",
                        location: "hero_main",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-peach-400 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-peach-500 md:text-base"
                  >
                    Shop now <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="rounded-full border border-cream-50/20 px-4 py-2 text-xs font-semibold text-cream-100 md:text-sm">
                    Starts at ₹149
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-200 md:text-sm">
                  <span className="flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-peach-300" /> Free delivery ₹499+
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-peach-300" /> COD available
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-[2rem] bg-sage-200/30 ring-1 ring-cream-50/10">
                  <img
                    src="/hero-plants.jpg"
                    alt="Lush plants thriving with Sarvada Organic vermicompost"
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 rotate-[-4deg] rounded-2xl bg-cream-50 px-3.5 py-2.5 text-forest-800 shadow-soft md:-bottom-4 md:-left-4">
                  <p className="font-display text-base font-semibold leading-none md:text-lg">
                    12,000+
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-peach-500 md:text-[11px]">
                    Happy plant parents
                  </p>
                </div>
                <div className="absolute -right-2 top-4 rotate-3 rounded-2xl bg-peach-400 px-3.5 py-2.5 text-cream-50 shadow-soft md:-right-4">
                  <p className="font-display text-base font-semibold leading-none md:text-lg">
                    100%
                  </p>
                  <p className="text-[10px] uppercase tracking-widest md:text-[11px]">
                    Pure castings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:gap-4">
            <a
              href="#products"
              onClick={() =>
                track("hero_side_tile_clicked", {
                  tile: "vermicompost_5kg_bestseller",
                  offer: "flat_20_off_599",
                })
              }
              className="group relative flex h-44 items-end overflow-hidden rounded-3xl bg-peach-200 p-5 md:h-auto md:flex-1 md:rounded-[2rem] md:p-6"
            >
              <img
                src="/plant-transformation.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-50/95 via-cream-50/40 to-transparent" />
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-widest text-peach-500 md:text-xs">
                  Bestseller
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-forest-800 md:text-2xl">
                  Vermicompost 5kg
                </h3>
                <p className="mt-0.5 text-xs text-forest-800/80 md:text-sm">
                  Flat 20% off · ₹599
                </p>
              </div>
            </a>
            <a
              href="#products"
              onClick={() =>
                track("hero_side_tile_clicked", {
                  tile: "subscribe_and_save",
                  offer: "monthly_15_off",
                })
              }
              className="group relative flex h-44 items-end overflow-hidden rounded-3xl bg-forest-100 p-5 md:h-auto md:flex-1 md:rounded-[2rem] md:p-6"
            >
              <img
                src="/vermicompost-hands.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-800/85 via-forest-800/40 to-transparent" />
              <div className="relative text-cream-50">
                <span className="text-[10px] font-bold uppercase tracking-widest text-peach-300 md:text-xs">
                  New
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold md:text-2xl">
                  Subscribe & save
                </h3>
                <p className="mt-0.5 text-xs text-cream-200 md:text-sm">
                  Monthly delivery · 15% off
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
