import { Link, Navigate, useParams } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { ArrowUpRight, Clock, ArrowLeft, ShoppingBag } from "lucide-react";
import { getPostBySlug, getRelatedPosts, type BlogEntry } from "./posts";
import { BlogHeader, BlogFooter, useDocumentMeta } from "./BlogChrome";
import BlogLoader from "./BlogLoader";
import { track } from "../lib/analytics";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
} from "../lib/aeo";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    track("blog_post_viewed", {
      slug: post.slug,
      title: post.title,
      category: post.category,
      read_time: post.readTime,
      published: post.date,
      author: post.author,
      keywords: post.keywords,
    });
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  const Post = post.component;
  const related = getRelatedPosts(post.slug, 3);
  const canonical = `https://sarvadaorganic.com/blog/${post.slug}`;
  const imageUrl = `https://sarvadaorganic.com${post.cover}`;
  const publishedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const updatedDate = new Date(post.updatedDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const authorNote =
    post.author === "Sarvada Founder"
      ? "From Sarvada Organic's founder, based on small-batch vermicompost production and Indian balcony-garden support since 2018."
      : "From Sarvada Organic's farm team, based on small-batch vermicompost production and Indian balcony-garden support since 2018.";

  return (
    <>
      <PostMeta
        post={post}
        canonical={canonical}
        imageUrl={imageUrl}
      />
      <div className="min-h-screen bg-cream-100">
        <BlogHeader />

        <article className="bg-cream-100">
          <header className="border-b border-cream-300/60 bg-cream-50 py-10 md:py-16">
            <div className="container-wide">
              <Link
                to="/blog"
                onClick={() =>
                  track("blog_post_back_clicked", { from_slug: post.slug })
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700 hover:text-peach-500 md:text-sm"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
              </Link>
              <div className="mt-6 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] md:text-xs">
                  <span className="rounded-full bg-peach-200/70 px-3 py-1 text-peach-500">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-muted"
                  >
                    {publishedDate}
                  </time>
                  {post.updatedDate !== post.date && (
                    <time dateTime={post.updatedDate} className="text-muted">
                      Updated {updatedDate}
                    </time>
                  )}
                </div>
                <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-forest-800 md:text-5xl lg:text-[3.75rem]">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-xl">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-sm text-muted">
                  By <span className="font-semibold text-forest-800">{post.author}</span>
                </p>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted md:text-sm">
                  {authorNote}
                </p>
              </div>
            </div>
          </header>

          <div className="container-wide py-8 md:py-12">
            <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-sage-100 md:rounded-[2.5rem]">
              <img
                src={post.cover}
                alt={post.coverAlt}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="container-wide pb-16 md:pb-24">
            <div className="mx-auto max-w-3xl">
              <Suspense fallback={<BlogLoader />}>
                <Post />
              </Suspense>

              <div className="mt-12 rounded-[2rem] border border-cream-300/70 bg-cream-50 p-6 md:mt-16 md:rounded-[2.5rem] md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-peach-500 md:text-xs">
                  Try Sarvada Organic
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-forest-800 md:text-3xl">
                  100% pure vermicompost. No silt, no preservatives.
                </h3>
                <p className="mt-3 text-sm text-muted md:text-base">
                  If this helped, start with clean, hand-screened
                  vermicompost. Free delivery above ₹499 and Cash on Delivery
                  available.
                </p>
                <Link
                  to="/#products"
                  onClick={() =>
                    track("blog_post_shop_cta_clicked", {
                      from_slug: post.slug,
                      from_title: post.title,
                    })
                  }
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800 md:text-base"
                >
                  <ShoppingBag className="h-4 w-4" /> Shop now
                </Link>
              </div>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-cream-300/60 bg-cream-50 py-12 md:py-20">
            <div className="container-wide">
              <h2 className="font-display text-2xl font-semibold leading-tight text-forest-800 md:text-4xl">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
                {related.map((r, idx) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    onClick={() =>
                      track("blog_post_related_clicked", {
                        from_slug: post.slug,
                        to_slug: r.slug,
                        to_title: r.title,
                        position: idx,
                      })
                    }
                    className="group overflow-hidden rounded-3xl border border-cream-300/60 bg-cream-100 transition-all hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="aspect-[5/3] overflow-hidden bg-sage-100">
                      <img
                        src={r.cover}
                        alt={r.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] md:text-[11px]">
                        <span className="text-peach-500">{r.category}</span>
                        <span className="flex items-center gap-1 text-muted">
                          <Clock className="h-3 w-3" /> {r.readTime}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-forest-800 md:text-xl">
                        {r.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 group-hover:text-peach-500">
                        Read
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <BlogFooter />
      </div>
    </>
  );
}

function PostMeta({
  post,
  canonical,
  imageUrl,
}: {
  post: BlogEntry;
  canonical: string;
  imageUrl: string;
}) {
  const author =
    post.author === "Sarvada Founder"
      ? {
          "@type": "Person",
          "@id": "https://sarvadaorganic.com/#founder",
          name: post.author,
          worksFor: { "@id": ORG_ID },
          knowsAbout: [
            "vermicomposting",
            "organic gardening in India",
            "silt-free vermicompost",
          ],
        }
      : {
          "@type": "Organization",
          "@id": "https://sarvadaorganic.com/#farm-team",
          name: post.author,
          url: "https://sarvadaorganic.com/#about",
          parentOrganization: {
            "@id": ORG_ID,
          },
          knowsAbout: [
            "vermicompost use",
            "Indian balcony gardening",
            "organic fertilizer for home plants",
          ],
        };

  useDocumentMeta({
    title: post.seoTitle,
    description: post.metaDescription,
    canonical,
    image: imageUrl,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedDate,
    author: post.author,
    section: post.category,
    keywords: post.keywords,
    tags: post.keywords,
    jsonLd: [
      organizationSchema(),
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        headline: post.title,
        alternativeHeadline: post.seoTitle,
        description: post.metaDescription,
        abstract: post.summary,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.updatedDate,
        author,
        publisher: { "@id": ORG_ID },
        keywords: post.keywords,
        about: [
          { "@type": "Thing", name: post.primaryKeyword },
          ...post.keywords.slice(0, 4).map((keyword) => ({
            "@type": "Thing",
            name: keyword,
          })),
        ],
        inLanguage: "en-IN",
        articleSection: post.category,
        isAccessibleForFree: true,
        isPartOf: { "@id": `${SITE_URL}/blog#blog` },
        sourceOrganization: { "@id": ORG_ID },
        thumbnailUrl: imageUrl,
        url: canonical,
      },
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Blog", item: `${SITE_URL}/blog` },
        { name: post.title, item: canonical },
      ]),
    ],
  });
  return null;
}
