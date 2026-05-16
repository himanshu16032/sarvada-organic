export default function BrandMarquee() {
  const items = Array.from({ length: 8 });
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-cream-300/60 bg-cream-200/40 py-4 md:py-6"
    >
      <div className="flex animate-[bm_28s_linear_infinite] gap-8 whitespace-nowrap md:gap-12">
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center gap-8 font-display text-3xl font-semibold leading-none tracking-tight md:gap-12 md:text-5xl ${
              i % 2 ? "text-peach-400" : "text-forest-700/90"
            }`}
          >
            Sarvada Organic
            <span className="inline-block h-2 w-2 rounded-full bg-peach-400" />
          </span>
        ))}
      </div>
      <style>{`@keyframes bm{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
