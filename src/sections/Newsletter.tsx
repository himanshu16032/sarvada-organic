import { Mail, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        <div className="overflow-hidden rounded-[2rem] bg-forest-700 px-6 py-10 text-cream-50 md:rounded-[2.5rem] md:px-12 md:py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-peach-300 md:text-xs">
                <Sparkles className="h-3.5 w-3.5" /> Plant Parents Club
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Get 10% off your first order.
              </h2>
              <p className="mt-3 text-sm text-cream-200 md:text-base">
                Join our newsletter for plant-care tips, monthly drops & subscriber-only
                pricing.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-2 rounded-full bg-cream-50 px-4 py-3 text-forest-800">
                <Mail className="h-4 w-4 text-muted" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted md:text-base"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-peach-400 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-peach-500 md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
