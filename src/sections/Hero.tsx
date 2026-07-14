import { ArrowRight, Star, Truck, ShieldCheck } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { AMAZON_PRODUCT_URL } from "../lib/amazon";
import { track } from "../lib/analytics";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 pt-4 md:pt-6">
      <SectionBg variant="warm" />
      <div className="container-wide relative">
        <div className="relative overflow-hidden rounded-3xl bg-forest-700 p-6 text-cream-50 md:rounded-[2rem] md:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-peach-400/10 md:h-[28rem] md:w-[28rem]"
          />
          <div className="relative">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-stretch">
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-peach-300 md:text-xs">
                  <Star className="h-3 w-3 fill-peach-300" />
                  Vermicompost trusted since 2018 · 4.8★
                </span>
                <h1 className="mt-4 max-w-2xl font-display text-[2.25rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.65rem]">
                  Pure vermicompost.{" "}
                  <span className="italic text-peach-300">No silt.</span>
                  <br className="hidden md:block" /> No preservatives.
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200 md:text-base">
                  Used by 12,000+ plant parents since 2018. Made by earthworms,
                  screened by hand, cured in the sun.
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
                    5 kg at ₹249
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

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 lg:gap-4">
                <a
                  href={AMAZON_PRODUCT_URL}
                  onClick={() =>
                    track("hero_side_tile_clicked", {
                      tile: "vermicompost_5kg_bestseller",
                      offer: "5kg_249",
                    })
                  }
                  className="group relative flex min-h-56 items-end overflow-hidden rounded-[1.5rem] bg-peach-200 p-5 shadow-soft ring-1 ring-cream-50/15 md:min-h-64 md:rounded-[2rem] lg:min-h-72"
                >
                  <img
                    src="/sarvada-pack-balcony.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-50/90 via-cream-50/20 to-transparent" />
                  <div className="relative text-forest-800">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-peach-500 md:text-xs">
                      Bestseller
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold md:text-3xl">
                      Vermicompost 5kg
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-forest-800/85">
                      ₹249 · Buy on Amazon
                    </p>
                  </div>
                </a>

                <a
                  href={AMAZON_PRODUCT_URL}
                  onClick={() =>
                    track("hero_side_tile_clicked", {
                      tile: "amazon_available",
                      offer: "5kg_249",
                    })
                  }
                  className="group relative flex min-h-44 items-end overflow-hidden rounded-[1.5rem] bg-forest-100 p-5 shadow-soft ring-1 ring-cream-50/15 md:min-h-64 md:rounded-[2rem] lg:min-h-0"
                >
                  <img
                    src="/sarvada-pack-table.webp"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-forest-800/20 to-transparent" />
                  <div className="relative text-cream-50">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-peach-300 md:text-xs">
                      Available now
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold md:text-2xl">
                      5 kg pack · ₹249
                    </h3>
                    <p className="mt-1 text-xs text-cream-100 md:text-sm">
                      Directs to Amazon checkout
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-cream-50/20 md:mt-8 md:rounded-[2rem]">
              <div className="aspect-[16/7] md:aspect-[16/6]">
                <img
                  src="/sarvada-logo-horizontal.webp"
                  alt="Sarvada Organic vermicompost and plants"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute bottom-3 left-3 rounded-2xl bg-cream-50/95 px-3.5 py-2.5 text-forest-800 shadow-soft md:bottom-4 md:left-4">
                <p className="font-display text-base font-semibold leading-none md:text-lg">
                  12,000+
                </p>
                <p className="text-[10px] uppercase tracking-widest text-peach-500 md:text-[11px]">
                  Plant parents
                </p>
              </div>
              <div className="absolute right-3 top-3 rounded-2xl bg-forest-700/90 px-3.5 py-2.5 text-cream-50 shadow-soft md:right-4 md:top-4">
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
      </div>
    </section>
  );
}
