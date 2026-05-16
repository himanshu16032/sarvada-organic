import { ArrowUpRight, Clock } from "lucide-react";

const POSTS = [
  {
    cat: "Plant Care",
    title: "Why your tulsi keeps dying — and the 3-step fix",
    read: "4 min read",
    image: "/plant-transformation.jpg",
  },
  {
    cat: "Beginner Guide",
    title: "First-time planter? Start with these 5 essentials",
    read: "6 min read",
    image: "/hero-plants.jpg",
  },
  {
    cat: "Did You Know",
    title: "What is vermicompost — and why your plants beg for it",
    read: "5 min read",
    image: "/vermicompost-hands.jpg",
  },
];

export default function Blog() {
  return (
    <section className="bg-cream-100 py-12 md:py-20">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">From our journal</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Grow smarter,{" "}
              <span className="italic text-peach-500">one read</span> at a time.
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-sm font-semibold text-forest-700 hover:text-peach-500 md:inline"
          >
            All articles →
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[5/3] overflow-hidden bg-sage-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-widest md:text-xs">
                  <span className="text-peach-500">{p.cat}</span>
                  <span className="flex items-center gap-1 text-muted">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
                <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-lg font-semibold leading-snug text-forest-800 md:text-xl">
                  {p.title}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-peach-500 transition-transform group-hover:rotate-12" />
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
