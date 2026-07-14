import { Home, LayoutGrid } from "lucide-react";
import { track } from "../lib/analytics";

const ITEMS = [
  { icon: Home, label: "Home", href: "#top" },
  { icon: LayoutGrid, label: "Shop", href: "#products" },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-300/70 bg-cream-50/95 backdrop-blur lg:hidden">
      <ul className="container-wide grid grid-cols-2 py-1.5">
        {ITEMS.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              onClick={() =>
                track("mobile_bottom_nav_clicked", {
                  label: it.label,
                  href: it.href,
                })
              }
              className="relative flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[10px] font-medium text-forest-800 hover:text-peach-500"
            >
              <span className="relative">
                <it.icon className="h-5 w-5" />
                {it.badge ? (
                  <span className="absolute -right-1.5 -top-1 grid h-3.5 min-w-3.5 place-items-center rounded-full bg-peach-500 px-1 text-[9px] font-bold text-cream-50">
                    {it.badge}
                  </span>
                ) : null}
              </span>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
