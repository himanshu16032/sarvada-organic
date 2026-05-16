import { Link, Navigate, useParams } from "react-router-dom";
import { Suspense } from "react";
import { ArrowUpRight, Clock, ArrowLeft, ShoppingBag } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "./posts";
import { BlogHeader, BlogFooter, useDocumentMeta } from "./BlogChrome";
import BlogLoader from "./BlogLoader";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/" replace />;

  const Post = post.component;
  const related = getRelatedPosts(post.slug, 3);
  const canonical = `https://sarvadaorganic.com/blog/${post.slug}`;
  const imageUrl = `https://sarvadaorganic.com${post.cover}`;

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
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
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
                  100% pure vermicompost — no silt, no preservatives.
                </h3>
                <p className="mt-3 text-sm text-muted md:text-base">
                  If this article helped you, our hand-screened, slow-cured
                  vermicompost will help your plants even more. Free delivery
                  above ₹499, Cash on Delivery available.
                </p>
                <Link
                  to="/#products"
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
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
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
  post: ReturnType<typeof getPostBySlug> & object;
  canonical: string;
  imageUrl: string;
}) {
  useDocumentMeta({
    title: `${post.title} — Sarvada Organic Blog`,
    description: post.excerpt,
    canonical,
    image: imageUrl,
    type: "article",
    publishedTime: post.date,
    author: post.author,
    keywords: post.keywords,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        headline: post.title,
        description: post.excerpt,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: post.author },
        publisher: {
          "@type": "Organization",
          name: "Sarvada Organic",
          logo: {
            "@type": "ImageObject",
            url: "https://sarvadaorganic.com/favicon.svg",
          },
        },
        keywords: post.keywords.join(", "),
        inLanguage: "en-IN",
        articleSection: post.category,
        wordCount: 1500,
        url: canonical,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sarvadaorganic.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://sarvadaorganic.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  });
  return null;
}

