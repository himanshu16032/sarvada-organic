import { Link } from "react-router-dom";
import { Leaf, ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
import { useEffect } from "react";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cream-300/60 bg-cream-50/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 md:gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-700 text-cream-50 md:h-10 md:w-10">
            <Leaf className="h-[18px] w-[18px] md:h-5 md:w-5" />
          </span>
          <span className="font-display text-xl font-semibold leading-none tracking-tight text-forest-800 md:text-2xl">
            Sarvada<span className="ml-1 text-peach-500">Organic</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/blog"
            className="text-sm font-medium text-forest-800 hover:text-peach-500"
          >
            All articles
          </Link>
          <a
            href="/#products"
            className="text-sm font-medium text-forest-800 hover:text-peach-500"
          >
            Shop
          </a>
          <a
            href="/#about"
            className="text-sm font-medium text-forest-800 hover:text-peach-500"
          >
            About
          </a>
          <a
            href="/#faq"
            className="text-sm font-medium text-forest-800 hover:text-peach-500"
          >
            FAQ
          </a>
        </nav>

        <Link
          to="/#products"
          className="inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-4 py-2 text-xs font-semibold text-cream-50 hover:bg-forest-800 md:px-5 md:py-2.5 md:text-sm"
        >
          Shop vermicompost <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t border-cream-300/60 bg-cream-100">
      <div className="container-wide py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-700 text-cream-50">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold leading-none tracking-tight text-forest-800">
                Sarvada<span className="ml-1 text-peach-500">Organic</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Vermicompost made on our farm since 2018. No silt, no
              preservatives.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                {
                  Icon: Instagram,
                  name: "instagram",
                  href: "https://www.instagram.com/sarvadaorganic",
                },
                {
                  Icon: Facebook,
                  name: "facebook",
                  href: "https://www.facebook.com/sarvadaorganic",
                },
                {
                  Icon: Youtube,
                  name: "youtube",
                  href: "https://www.youtube.com/@sarvadaorganic",
                },
              ].map(({ Icon, name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-cream-50 text-forest-700 hover:bg-peach-400 hover:text-cream-50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 md:text-right">
            <p className="font-display text-2xl font-semibold leading-tight text-forest-800 md:text-3xl">
              Want the next plant note?
            </p>
            <p className="mt-2 text-sm text-muted md:text-base">
              Get the next plant-care essay straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex flex-col gap-2 sm:flex-row md:justify-end"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-full border border-cream-300 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none placeholder:text-muted focus:border-forest-600 md:min-w-72"
              />
              <button
                type="submit"
                className="rounded-full bg-forest-700 px-5 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream-300/70 pt-5 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sarvada Organic Pvt. Ltd.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/" className="hover:text-forest-700">Home</Link>
            <Link to="/blog" className="hover:text-forest-700">Blog</Link>
            <a href="/#products" className="hover:text-forest-700">Shop</a>
            <Link to="/corrections-policy" className="hover:text-forest-700">Corrections</Link>
            <Link to="/contact" className="hover:text-forest-700">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function useDocumentMeta(meta: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  keywords?: string[];
  type?: "article" | "website" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  jsonLd?: object[];
}) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = meta.title;

    type RestoreEntry = { el: HTMLElement; attrName: string; prevValue: string | null };
    const toRestore: RestoreEntry[] = [];
    const toRemove: HTMLElement[] = [];

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      const el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (el) {
        toRestore.push({ el, attrName: "content", prevValue: el.getAttribute("content") });
        el.setAttribute("content", content);
      } else {
        const created = document.createElement("meta");
        created.setAttribute(attr, key);
        created.setAttribute("content", content);
        document.head.appendChild(created);
        toRemove.push(created);
      }
    };

    const appendMeta = (attr: "name" | "property", key: string, content: string) => {
      const created = document.createElement("meta");
      created.setAttribute(attr, key);
      created.setAttribute("content", content);
      document.head.appendChild(created);
      toRemove.push(created);
    };

    const setLink = (rel: string, href: string) => {
      const el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (el) {
        toRestore.push({ el, attrName: "href", prevValue: el.getAttribute("href") });
        el.setAttribute("href", href);
      } else {
        const created = document.createElement("link");
        created.setAttribute("rel", rel);
        created.setAttribute("href", href);
        document.head.appendChild(created);
        toRemove.push(created);
      }
    };

    setMeta("name", "description", meta.description);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    if (meta.keywords?.length) setMeta("name", "keywords", meta.keywords.join(", "));
    setLink("canonical", meta.canonical);
    setMeta("property", "og:type", meta.type || "article");
    setMeta("property", "og:url", meta.canonical);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:locale", "en_IN");
    if (meta.image) setMeta("property", "og:image", meta.image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:url", meta.canonical);
    if (meta.image) setMeta("name", "twitter:image", meta.image);
    if (meta.publishedTime) setMeta("property", "article:published_time", meta.publishedTime);
    if (meta.modifiedTime) setMeta("property", "article:modified_time", meta.modifiedTime);
    if (meta.section) setMeta("property", "article:section", meta.section);
    meta.tags?.forEach((tag) => appendMeta("property", "article:tag", tag));
    if (meta.author) setMeta("name", "author", meta.author);

    const scripts: HTMLScriptElement[] = [];
    (meta.jsonLd || []).forEach((schema) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
      scripts.push(s);
    });

    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    return () => {
      document.title = prevTitle;
      toRemove.forEach((el) => el.remove());
      toRestore.forEach(({ el, attrName, prevValue }) => {
        if (prevValue === null) el.removeAttribute(attrName);
        else el.setAttribute(attrName, prevValue);
      });
      scripts.forEach((s) => s.remove());
    };
  }, [
    meta.title,
    meta.description,
    meta.canonical,
    meta.image,
    meta.author,
    meta.publishedTime,
    meta.modifiedTime,
    meta.section,
    meta.tags?.join(","),
    meta.keywords?.join(","),
    JSON.stringify(meta.jsonLd || []),
  ]);
}
