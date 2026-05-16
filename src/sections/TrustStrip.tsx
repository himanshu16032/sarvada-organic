import { Truck, RefreshCcw, ShieldCheck, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Free Delivery", sub: "On orders above ₹499" },
  { icon: RefreshCcw, title: "7-Day Returns", sub: "Easy hassle-free returns" },
  { icon: ShieldCheck, title: "Cash on Delivery", sub: "Pay when it arrives" },
  { icon: Leaf, title: "100% Organic", sub: "Lab-tested every batch" },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-cream-200/70 bg-cream-50 py-5 md:py-7">
      <div className="container-wide grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
        {ITEMS.map((it) => (
          <div
            key={it.title}
            className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-100/60 p-3 md:border-0 md:bg-transparent md:p-0"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage-100 text-forest-700 md:h-12 md:w-12">
              <it.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-forest-800 md:text-base">
                {it.title}
              </p>
              <p className="truncate text-[11px] text-muted md:text-xs">
                {it.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
