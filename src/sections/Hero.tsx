import { ArrowRight, Star, Truck, ShieldCheck } from "lucide-react";
import SectionBg from "../components/SectionBg";
import { AMAZON_PRODUCT_URL } from "../lib/amazon";
import { track } from "../lib/analytics";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-100 pt-3 md:pt-4">
      <SectionBg variant="warm" />
      <div className="container-wide relative">
        <div className="relative overflow-hidden rounded-3xl bg-forest-700 p-5 text-cream-50 md:rounded-[2rem] md:p-8 lg:p-10 xl:p-12">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-peach-300 md:text-xs">
                <Star className="h-3 w-3 fill-peach-300" />
                Vermicompost trusted since 2018 · 4.8★
              </span>
              <h1 className="mt-3 max-w-2xl font-display text-[2.15rem] font-semibold leading-[1.05] md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
                Pure vermicompost.{" "}
                <span className="italic text-peach-300">No silt.</span>
                <br className="hidden md:block" /> No preservatives.
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-200 md:text-base">
                Used by 12,000+ plant parents since 2018. Made by earthworms,
                screened by hand, cured in the sun.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={AMAZON_PRODUCT_URL}
                  onClick={() =>
                    track("hero_cta_clicked", {
                      cta: "shop_now",
                      location: "hero_main",
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-peach-400 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-peach-500 md:text-base"
                >
                  Shop now <ArrowRight className="h-4 w-4" />
                </a>
                <span className="rounded-full border border-cream-50/20 px-4 py-2 text-xs font-semibold text-cream-100 md:text-sm">
                  5 kg at ₹249
                </span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream-200 md:text-sm">
                <span className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-peach-300" /> Free delivery ₹499+
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-peach-300" /> COD available
                </span>
              </div>
            </div>

            <a
              href={AMAZON_PRODUCT_URL}
              onClick={() =>
                track("hero_product_image_clicked", {
                  product: "vermicompost_5kg",
                  offer: "5kg_249",
                })
              }
              className="group block max-w-[22rem] overflow-hidden rounded-[1.5rem] bg-cream-50 shadow-soft ring-1 ring-cream-50/15 md:rounded-[1.75rem] lg:justify-self-end"
            >
              <div className="aspect-[4/5] max-h-[22rem] md:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="/sarvada-pack-balcony.webp"
                  alt="Sarvada Organic vermicompost 5 kg pack"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3 text-forest-800">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-peach-500">
                    Bestseller
                  </p>
                  <p className="font-display text-lg font-semibold md:text-xl">
                    Vermicompost 5kg
                  </p>
                </div>
                <p className="shrink-0 rounded-full bg-forest-700 px-3 py-1.5 text-sm font-semibold text-cream-50">
                  ₹249
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
