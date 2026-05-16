const STEPS = [
  {
    n: "01",
    title: "Feed the worms",
    body:
      "Organic cow dung & farm waste — no plastic, no chemicals — feeds our worms.",
  },
  {
    n: "02",
    title: "Slow composting",
    body:
      "For 60–90 days, worms turn waste into rich, dark, living castings.",
  },
  {
    n: "03",
    title: "Sun-cure & screen",
    body: "We sun-cure and hand-sieve every batch. No silt, no sand, ever.",
  },
  {
    n: "04",
    title: "Pack fresh",
    body:
      "Breathable bags so microbes stay alive on their way to your plants.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-20">
      <div className="container-wide">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">How it's made</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Four patient steps.{" "}
              <span className="italic text-peach-500">No shortcuts.</span>
            </h2>
          </div>
          <p className="text-base text-muted md:col-span-5 md:text-lg">
            Real vermicompost can't be rushed. Here's the slow craft behind
            every Sarvada bag — for the last 6+ years.
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-cream-200 bg-cream-50 p-5 md:p-7"
            >
              <span className="font-display text-4xl font-semibold text-peach-300 md:text-5xl">
                {s.n}
              </span>
              <h3 className="mt-3 text-base font-semibold text-forest-800 md:text-lg">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted md:text-[15px]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
