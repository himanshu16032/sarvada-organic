import {
  Leaf,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { track } from "../lib/analytics";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "Vermicompost", href: "/collections/vermicompost" },
      { label: "Potting Mix", href: "/collections/potting-mix" },
      { label: "Plant Growth Serum", href: "/products/plant-growth-serum" },
      { label: "Neem Cake", href: "/products/neem-karanja-cake" },
      { label: "Seed Starter", href: "/collections/seed-starter" },
      { label: "Bundles", href: "/collections/bundles" },
      { label: "Gifting", href: "/collections/gifting" },
    ],
  },
  {
    title: "About",
    links: [
      {
        label: "Our Story",
        href: "/blog/we-started-sarvada-because-we-were-lied-to",
      },
      { label: "Why Sarvada", href: "/#about" },
      { label: "Sustainability", href: "/#process" },
      { label: "Blog", href: "/blog" },
      { label: "Corrections Policy", href: "/corrections-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track Order", href: "/contact" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Returns & Refunds", href: "/returns-refunds" },
      { label: "FAQs", href: "/#faq" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-800 pb-24 text-cream-100 lg:pb-0">
      <div className="container-wide pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream-50 text-forest-700">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-semibold leading-none tracking-tight text-cream-50">
                Sarvada<span className="ml-1 text-peach-300">Organic</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/80 md:text-base">
              Organic vermicompost made on our farm since 2018. Pure castings,
              no silt, no preservatives.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-50/10">
                  <Mail className="h-3.5 w-3.5 text-peach-300" />
                </span>
                <a
                  href="mailto:sarvadaorganic@gmail.com"
                  onClick={() => track("footer_contact_clicked", { kind: "email" })}
                  className="text-cream-200/90 hover:text-cream-50"
                >
                  sarvadaorganic@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream-50/10">
                  <MapPin className="h-3.5 w-3.5 text-peach-300" />
                </span>
                <span className="text-cream-200/90">
                  Sarvada Organic Farm, India
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {([
                {
                  Icon: Instagram,
                  name: "instagram",
                  href: "https://www.instagram.com/sarvadaorganic",
                },
                {
                  Icon: Facebook,
                  name: "facebook",
                  href: "https://www.facebook.com/sarvadaorganic",
                },
                {
                  Icon: Youtube,
                  name: "youtube",
                  href: "https://www.youtube.com/@sarvadaorganic",
                },
              ] as const).map(({ Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    track("footer_social_clicked", { network: name })
                  }
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream-50/10 transition-colors hover:bg-peach-400"
                >
                  <Icon className="h-4 w-4 text-cream-50" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-peach-300">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/#") ? (
                        <a
                          href={l.href}
                          onClick={() =>
                            track("footer_link_clicked", {
                              column: c.title,
                              label: l.label,
                            })
                          }
                          className="text-cream-200/85 transition-colors hover:text-cream-50"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          to={l.href}
                          onClick={() =>
                            track("footer_link_clicked", {
                              column: c.title,
                              label: l.label,
                            })
                          }
                          className="text-cream-200/85 transition-colors hover:text-cream-50"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-cream-50/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-cream-200/60 md:text-sm">
            © {new Date().getFullYear()} Sarvada Organic Pvt. Ltd. · Made slowly. Packed fresh.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {["UPI", "Visa", "Mastercard", "RuPay", "Razorpay", "COD"].map(
              (m) => (
                <span
                  key={m}
                  className="rounded-md border border-cream-50/15 bg-cream-50/5 px-2 py-1 text-[10px] font-semibold tracking-wider text-cream-200/80 md:text-xs"
                >
                  {m}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
