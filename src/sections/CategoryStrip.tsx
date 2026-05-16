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
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-2.5 scrollbar-hide md:gap-2.5">
          {CATS.map((c) => (
            <a
              key={c.label}
              href="#products"
              className="group flex shrink-0 items-center gap-2 rounded-full border border-cream-200 bg-cream-100 px-3.5 py-2 transition-colors hover:border-peach-300 hover:bg-peach-100"
            >
              <c.icon className="h-4 w-4 text-forest-700" />
              <span className="whitespace-nowrap text-xs font-medium text-forest-800 md:text-sm">
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
