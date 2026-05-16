import {
  Sprout,
  Leaf,
  FlaskConical,
  Package,
  Gift,
  Flower2,
  Bug,
  Layers,
} from "lucide-react";

const CATS = [
  { icon: Sprout, label: "Vermicompost" },
  { icon: Layers, label: "Potting Mix" },
  { icon: FlaskConical, label: "Plant Serum" },
  { icon: Leaf, label: "Neem Cake" },
  { icon: Flower2, label: "Seed Starter" },
  { icon: Bug, label: "Pest Control" },
  { icon: Package, label: "Bundles" },
  { icon: Gift, label: "Gifting" },
];

export default function CategoryStrip() {
  return (
    <section className="border-b border-cream-200/70 bg-cream-50">
      <div className="container-wide">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-4 scrollbar-hide md:gap-3 md:py-5">
          {CATS.map((c) => (
            <a
              key={c.label}
              href="#products"
              className="group flex shrink-0 flex-col items-center gap-2"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-cream-300 bg-cream-100 text-forest-700 transition-all group-hover:-translate-y-0.5 group-hover:border-peach-300 group-hover:bg-peach-100 md:h-20 md:w-20">
                <c.icon className="h-6 w-6 md:h-7 md:w-7" />
              </span>
              <span className="max-w-[5rem] text-center text-[11px] font-medium leading-tight text-forest-800 md:text-xs">
                {c.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{scrollbar-width:none}`}</style>
    </section>
  );
}
