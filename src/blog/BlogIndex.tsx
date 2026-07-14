import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Heart } from "lucide-react";
import { POSTS_META, type Category } from "./posts";
import { BlogHeader, BlogFooter, useDocumentMeta } from "./BlogChrome";
import { useState } from "react";
import { track } from "../lib/analytics";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "../lib/aeo";

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Guides",
  "Stories",
  "Comparisons",
  "Plant Care",
  "Behind the Brand",
  "Seasonal",
  "Beginner",
];

export default function BlogIndex() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered =
    active === "All"
      ? POSTS_META
      : POSTS_META.filter((p) => p.category === active);

  const featured = POSTS_META.find((p) => p.featured) || POSTS_META[0];
  const rest = filtered.filter((p) => p.slug !== featured.slug);
  const latestUpdate = POSTS_META.reduce(
    (latest, post) => (post.updatedDate > latest ? post.updatedDate : latest),
    POSTS_META[0]?.updatedDate || "2026-06-30"
  );

  useDocumentMeta({
    title: "Sarvada Organic Blog | Organic Gardening India",
    description:
      "Read practical Indian gardening guides on vermicompost, potting mix, kitchen gardens, plant care mistakes and real Sarvada Organic grower stories.",
    canonical: "https://sarvadaorganic.com/blog",
    image: "https://sarvadaorganic.com/sarvada-logo-horizontal.webp",
    type: "website",
    keywords: [
      "sarvada organic blog",
      "vermicompost guide India",
      "organic gardening blog India",
      "kitchen garden tips India",
      "how to use vermicompost",
      "plant care India",
    ],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://sarvadaorganic.com/blog#blog",
        name: "Sarvada Organic Blog",
        description:
          "Gardening guides, stories and plant-care essays from Sarvada Organic.",
        url: "https://sarvadaorganic.com/blog",
        inLanguage: "en-IN",
        dateModified: latestUpdate,
        about: [
          { "@type": "Thing", name: "organic gardening India" },
          { "@type": "Thing", name: "vermicompost for plants" },
          { "@type": "Thing", name: "kitchen garden tips India" },
        ],
        publisher: {
          "@id": ORG_ID,
        },
        blogPost: POSTS_META.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          alternativeHeadline: p.seoTitle,
          description: p.metaDescription,
          url: `https://sarvadaorganic.com/blog/${p.slug}`,
          datePublished: p.date,
          dateModified: p.updatedDate,
          author: {
            "@type": p.author === "Sarvada Founder" ? "Person" : "Organization",
            name: p.author,
          },
          image: `https://sarvadaorganic.com${p.cover}`,
          keywords: p.keywords,
          articleSection: p.category,
          inLanguage: "en-IN",
        })),
      },
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Blog", item: `${SITE_URL}/blog` },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-cream-100">
      <BlogHeader />

      <section className="border-b border-cream-300/60 bg-cream-50 py-12 md:py-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest-700 md:text-xs">
              The Sarvada Blog
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-forest-800 md:text-6xl lg:text-[4.5rem]">
              Plant care that
              <br className="hidden md:block" />{" "}
              <span className="italic text-peach-500">sounds like home.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-xl">
              Guides, customer stories and the occasional note from the farm.
              The same advice we would give a friend starting their first
              balcony garden.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300/60 bg-cream-100">
        <div className="container-wide">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-4 scrollbar-hide md:gap-3 md:py-5">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActive(c);
                  track("blog_index_category_filtered", { category: c });
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors md:text-[15px] ${
                  active === c
                    ? "border-forest-700 bg-forest-700 text-cream-50"
                    : "border-cream-300 bg-cream-50 text-forest-800 hover:border-forest-600/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{scrollbar-width:none}`}</style>
      </section>

      {active === "All" && (
        <section className="py-10 md:py-16">
          <div className="container-wide">
            <Link
              to={`/blog/${featured.slug}`}
              onClick={() =>
                track("blog_index_featured_clicked", {
                  slug: featured.slug,
                  title: featured.title,
                  category: featured.category,
                })
              }
              className="group grid items-center gap-6 overflow-hidden rounded-[2rem] border border-cream-300/60 bg-cream-50 transition-all hover:shadow-soft md:grid-cols-2 md:gap-10 md:rounded-[2.5rem]"
            >
              <div className="aspect-[5/4] overflow-hidden bg-sage-100 md:aspect-auto md:h-full">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-6 pb-8 md:px-2 md:py-10 lg:pr-14">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] md:text-xs">
                  <span className="rounded-full bg-peach-200/70 px-3 py-1 text-peach-500">
                    Featured
                  </span>
                  <span className="text-forest-700">{featured.category}</span>
                  <span className="flex items-center gap-1 text-muted">
                    <Clock className="h-3 w-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-4xl lg:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 group-hover:text-peach-500 md:text-base">
                  Read the article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-muted">
              No posts yet in this category.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {(active === "All" ? rest : filtered).map((p, idx) => (
                <article
                  key={p.slug}
                  className="group overflow-hidden rounded-3xl border border-cream-300/60 bg-cream-50 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <Link
                    to={`/blog/${p.slug}`}
                    onClick={() =>
                      track("blog_index_post_clicked", {
                        slug: p.slug,
                        title: p.title,
                        category: p.category,
                        position: idx,
                        active_filter: active,
                      })
                    }
                    className="block"
                  >
                    <div className="aspect-[5/3] overflow-hidden bg-sage-100">
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] md:text-[11px]">
                        <span className="flex items-center gap-2">
                          <span className="text-peach-500">{p.category}</span>
                          {p.emotional && (
                            <span className="flex items-center gap-1 text-peach-500">
                              <Heart className="h-3 w-3 fill-peach-400" />
                            </span>
                          )}
                        </span>
                        <span className="flex items-center gap-1 text-muted">
                          <Clock className="h-3 w-3" /> {p.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-forest-800 md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">
                        {p.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 group-hover:text-peach-500">
                        Read article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <BlogFooter />
    </div>
  );
}
