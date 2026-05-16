import {
  Leaf,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const COLS = [
  {
    title: "Shop",
    links: [
      "Vermicompost",
      "Potting Mix",
      "Plant Growth Serum",
      "Neem Cake",
      "Seed Starter",
      "Bundles",
      "Gifting",
    ],
  },
  {
    title: "About",
    links: [
      "Our Story",
      "Why Sarvada",
      "Sustainability",
      "Blog",
      "Press",
      "Careers",
    ],
  },
  {
    title: "Support",
    links: [
      "Track Order",
      "Shipping Policy",
      "Returns & Refunds",
      "FAQs",
      "Terms",
      "Privacy",
      "Contact Us",
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
              India's most loved organic vermicompost — slow-crafted on our
              farm since 2018. Pure castings, no silt, no preservatives.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-50/10">
                  <Phone className="h-3.5 w-3.5 text-peach-300" />
                </span>
                <a
                  href="tel:+910000000000"
                  className="text-cream-200/90 hover:text-cream-50"
                >
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream-50/10">
                  <Mail className="h-3.5 w-3.5 text-peach-300" />
                </span>
                <a
                  href="mailto:hello@sarvadaorganic.com"
                  className="text-cream-200/90 hover:text-cream-50"
                >
                  hello@sarvadaorganic.com
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
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
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
                    <li key={l}>
                      <a
                        href="#"
                        className="text-cream-200/85 transition-colors hover:text-cream-50"
                      >
                        {l}
                      </a>
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
