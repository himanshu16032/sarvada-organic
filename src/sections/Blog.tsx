import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { POSTS_META } from "../blog/posts";
import SectionBg from "../components/SectionBg";

export default function Blog() {
  const posts = POSTS_META.slice(0, 3);

  return (
    <section id="blog" className="relative overflow-hidden bg-cream-100 py-12 md:py-20">
      <SectionBg variant="sage" />
      <div className="container-wide relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">From our blog</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Grow smarter,{" "}
              <span className="italic text-peach-500">one read</span> at a time.
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden text-sm font-semibold text-forest-700 hover:text-peach-500 md:inline"
          >
            All articles →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="aspect-[5/3] overflow-hidden bg-sage-100">
                <img
                  src={p.cover}
                  alt={p.coverAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-widest md:text-xs">
                  <span className="text-peach-500">{p.category}</span>
                  <span className="flex items-center gap-1 text-muted">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h3 className="mt-3 flex items-start justify-between gap-3 font-display text-lg font-semibold leading-snug text-forest-800 md:text-xl">
                  {p.title}
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-peach-500 transition-transform group-hover:rotate-12" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-forest-700/20 bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-700"
          >
            Read the blog →
          </Link>
        </div>
      </div>
    </section>
  );
}
