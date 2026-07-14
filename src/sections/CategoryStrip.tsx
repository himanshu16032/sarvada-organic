import { Sprout } from "lucide-react";
import { track } from "../lib/analytics";

const CATS = [
  { icon: Sprout, label: "Vermicompost" },
];

export default function CategoryStrip() {
  return (
    <section className="border-b border-cream-200/70 bg-cream-50">
      <div className="container-wide">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-2.5 scrollbar-hide md:gap-2.5">
          {CATS.map((c, idx) => (
            <a
              key={c.label}
              href="#products"
              onClick={() =>
                track("category_chip_clicked", {
                  label: c.label,
                  position: idx,
                })
              }
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
