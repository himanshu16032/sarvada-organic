const PRESS = [
  "The Hindu",
  "YourStory",
  "Times of India",
  "Better India",
  "Vogue Living",
  "Architectural Digest",
];

const STATS = [
  { k: "12,000+", v: "Happy plant parents" },
  { k: "85,000+", v: "Orders delivered" },
  { k: "6+ yrs", v: "Of slow craft since 2018" },
  { k: "4.8★", v: "Avg. customer rating" },
];

export default function PressStats() {
  return (
    <section className="bg-cream-100 py-10 md:py-14">
      <div className="container-wide">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-muted md:text-xs">
          As featured in
        </p>
        <div className="mt-5 grid grid-cols-3 gap-x-4 gap-y-3 md:grid-cols-6 md:gap-x-8">
          {PRESS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-forest-800/55 transition-colors hover:text-forest-700 md:text-base"
            >
              {p}
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-5">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="rounded-3xl border border-cream-300/70 bg-cream-50 p-5 text-center md:p-7"
            >
              <p className="font-display text-3xl font-semibold text-forest-700 md:text-5xl">
                {s.k}
              </p>
              <p className="mt-2 text-[11px] font-medium text-muted md:text-sm">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
