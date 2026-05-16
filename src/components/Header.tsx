import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Leaf,
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";
import { track } from "../lib/analytics";

const NAV: { label: string; href: string; sub?: { label: string; href: string }[] }[] = [
  {
    label: "Shop",
    href: "#products",
    sub: [
      { label: "Vermicompost", href: "#products" },
      { label: "Potting Mix", href: "#products" },
      { label: "Plant Growth Serum", href: "#products" },
      { label: "Vermiwash", href: "#products" },
      { label: "Neem-Karanja Cake", href: "#products" },
      { label: "Bundles", href: "#products" },
    ],
  },
  { label: "Why Sarvada", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream-50/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_-18px_rgba(31,42,27,0.25)]" : ""
      }`}
    >
      <div className="container-wide flex h-14 items-center gap-3 md:h-16">
        <button
          aria-label="Open menu"
          onClick={() => {
            setOpen((v) => {
              track("mobile_menu_toggled", { open: !v });
              return !v;
            });
          }}
          className="-ml-1 grid h-10 w-10 place-items-center rounded-full text-forest-700 hover:bg-cream-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a
          href="#top"
          onClick={() => track("header_logo_clicked")}
          className="flex items-center gap-2 md:gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-700 text-cream-50 md:h-10 md:w-10">
            <Leaf className="h-[18px] w-[18px] md:h-5 md:w-5" />
          </span>
          <span className="font-display text-xl font-semibold leading-none tracking-tight text-forest-800 md:text-2xl">
            Sarvada<span className="ml-1 text-peach-500">Organic</span>
          </span>
        </a>

        <nav className="ml-8 hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <div key={n.label} className="group relative">
              {n.href.startsWith("/") ? (
                <Link
                  to={n.href}
                  onClick={() =>
                    track("header_nav_clicked", {
                      label: n.label,
                      href: n.href,
                      position: "desktop",
                    })
                  }
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-forest-800 hover:bg-cream-200/70 hover:text-forest-700"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  href={n.href}
                  onClick={() =>
                    track("header_nav_clicked", {
                      label: n.label,
                      href: n.href,
                      position: "desktop",
                      has_submenu: Boolean(n.sub),
                    })
                  }
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-forest-800 hover:bg-cream-200/70 hover:text-forest-700"
                >
                  {n.label}
                  {n.sub && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </a>
              )}
              {n.sub && (
                <div className="absolute left-0 top-full hidden min-w-52 pt-2 group-hover:block">
                  <div className="overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 p-2 shadow-soft">
                    {n.sub.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() =>
                          track("header_subnav_clicked", {
                            parent: n.label,
                            label: s.label,
                            href: s.href,
                          })
                        }
                        className="block rounded-xl px-3 py-2 text-sm text-forest-800 hover:bg-cream-200/70"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:gap-1.5">
          <button
            aria-label="Search"
            onClick={() =>
              setSearch((v) => {
                track("header_search_toggled", { open: !v });
                return !v;
              })
            }
            className="grid h-10 w-10 place-items-center rounded-full text-forest-700 hover:bg-cream-200"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Account"
            onClick={() => track("header_account_clicked")}
            className="hidden h-10 w-10 place-items-center rounded-full text-forest-700 hover:bg-cream-200 md:grid"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Wishlist"
            onClick={() => track("header_wishlist_clicked")}
            className="hidden h-10 w-10 place-items-center rounded-full text-forest-700 hover:bg-cream-200 md:grid"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => track("header_cart_clicked", { items_in_cart: 2 })}
            className="relative grid h-10 w-10 place-items-center rounded-full text-forest-700 hover:bg-cream-200"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-peach-500 px-1 text-[10px] font-bold text-cream-50">
              2
            </span>
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-cream-200/80 bg-cream-50">
          <div className="container-wide py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const value = (
                  e.currentTarget.elements.namedItem(
                    "q"
                  ) as HTMLInputElement | null
                )?.value?.trim();
                track("header_search_submitted", {
                  query: value || "",
                  query_length: value?.length || 0,
                });
              }}
              className="flex items-center gap-2 rounded-full border border-cream-300 bg-cream-100 px-4 py-2.5 focus-within:border-forest-600 focus-within:bg-cream-50"
            >
              <Search className="h-4 w-4 text-muted" />
              <input
                name="q"
                autoFocus
                type="text"
                placeholder="Search vermicompost, potting mix, plant care…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={() => {
                  setSearch(false);
                  track("header_search_toggled", { open: false });
                }}
                className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-forest-700"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-x-0 top-full transition-opacity`}
      >
        <div className="container-wide pb-4">
          <div className="rounded-3xl border border-cream-200 bg-cream-50 p-4 shadow-soft">
            <div className="mb-3 flex items-center gap-2 rounded-full bg-cream-100 px-4 py-2.5">
              <Search className="h-4 w-4 text-muted" />
              <input
                type="text"
                placeholder="Search products…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
            </div>
            <nav className="flex flex-col">
              {NAV.map((n) =>
                n.href.startsWith("/") ? (
                  <Link
                    key={n.label}
                    to={n.href}
                    onClick={() => {
                      track("header_nav_clicked", {
                        label: n.label,
                        href: n.href,
                        position: "mobile",
                      });
                      setOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-forest-800 hover:bg-cream-200/70"
                  >
                    {n.label}
                    <span className="text-peach-500">→</span>
                  </Link>
                ) : (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => {
                      track("header_nav_clicked", {
                        label: n.label,
                        href: n.href,
                        position: "mobile",
                      });
                      setOpen(false);
                    }}
                    className="flex items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-forest-800 hover:bg-cream-200/70"
                  >
                    {n.label}
                    <span className="text-peach-500">→</span>
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
