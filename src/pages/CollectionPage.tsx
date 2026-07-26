import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star, Truck, ShieldCheck, FlaskConical } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../blog/BlogChrome";
import { COLLECTION_DATA, CollectionData } from "../data/collections";
import { PRODUCT_DATA, ProductData } from "../data/products";
import { LAB_REPORT } from "../data/labReport";
import { AMAZON_PRODUCT_URL } from "../lib/amazon";
import { track } from "../lib/analytics";
import {
  SITE_LASTMOD,
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
  storeSchema,
} from "../lib/aeo";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? COLLECTION_DATA[slug] : undefined;

  if (!collection) return <Navigate to="/" replace />;

  const products = collection.productSlugs
    .map((s) => PRODUCT_DATA[s])
    .filter(Boolean) as ProductData[];

  const canonical = `https://sarvadaorganic.com/collections/${collection.slug}`;
  const isVermiHub = collection.slug === "vermicompost";

  return (
    <>
      <CollectionMeta
        collection={collection}
        canonical={canonical}
        products={products}
      />
      <div className="min-h-screen bg-cream-100">
        <Header />
        <div className="container-wide py-8 md:py-12">
          <Link
            to="/#products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700 hover:text-peach-500 md:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All products
          </Link>

          <div className="mt-8">
            <h1 className="font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              {collection.h1 || collection.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {collection.description}
            </p>
            {isVermiHub && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={AMAZON_PRODUCT_URL}
                  rel="nofollow sponsored"
                  onClick={() =>
                    track("collection_hub_buy_clicked", {
                      collection: "vermicompost",
                      cta: "primary",
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800 md:text-base"
                >
                  <ShoppingBag className="h-4 w-4" /> Buy 5 kg on Amazon · ₹249
                </a>
                <span className="text-xs font-semibold text-muted md:text-sm">
                  Official store: sarvadaorganic.com
                </span>
              </div>
            )}
          </div>

          {isVermiHub && (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3">
                <FlaskConical className="h-5 w-5 shrink-0 text-peach-500" />
                <p className="text-sm font-semibold text-forest-800">
                  Lab N 3.16% · SVTL report
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-peach-500" />
                <p className="text-sm font-semibold text-forest-800">
                  No silt · No preservatives
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3">
                <Truck className="h-5 w-5 shrink-0 text-peach-500" />
                <p className="text-sm font-semibold text-forest-800">
                  Free delivery ₹499+ · COD
                </p>
              </div>
            </div>
          )}

          {products.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {products.map((product, idx) => (
                <CollectionProductCard
                  key={product.slug}
                  product={product}
                  position={idx}
                  collectionSlug={collection.slug}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-cream-200 bg-cream-50 p-10 text-center">
              <p className="font-semibold text-forest-800">Coming soon</p>
              <p className="mt-2 text-sm text-muted">
                Products in this collection are launching soon.
              </p>
              <Link
                to="/#products"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-forest-800"
              >
                <ShoppingBag className="h-4 w-4" /> Shop available products
              </Link>
            </div>
          )}

          {isVermiHub && <VermicompostHubCopy />}
        </div>
        <Footer />
      </div>
    </>
  );
}

function VermicompostHubCopy() {
  return (
    <div className="mt-12 space-y-8 md:mt-16">
      <section className="rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-forest-800 md:text-2xl">
          Vermicompost pack sizes and price (India)
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
          Choose the pack for your balcony or terrace. Most home gardeners start
          with the <strong className="text-forest-800">5 kg bestseller at ₹249</strong>{" "}
          — enough for mixed pots and grow bags without buying bulk.
        </p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-cream-300/80 text-[11px] font-semibold uppercase tracking-wider text-muted">
                <th className="py-2 pr-4">Pack</th>
                <th className="py-2 pr-4">Price</th>
                <th className="py-2">Best for</th>
              </tr>
            </thead>
            <tbody className="text-forest-800">
              <tr className="border-b border-cream-200">
                <td className="py-3 pr-4 font-semibold">1 kg</td>
                <td className="py-3 pr-4">₹149</td>
                <td className="py-3 text-muted">Trial · under 10 small pots</td>
              </tr>
              <tr className="border-b border-cream-200">
                <td className="py-3 pr-4 font-semibold">5 kg</td>
                <td className="py-3 pr-4">₹249</td>
                <td className="py-3 text-muted">Bestseller · mixed balcony</td>
              </tr>
              <tr className="border-b border-cream-200">
                <td className="py-3 pr-4 font-semibold">10 kg</td>
                <td className="py-3 pr-4">₹1,099</td>
                <td className="py-3 text-muted">Larger terrace · more grow bags</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">25 kg</td>
                <td className="py-3 pr-4">₹2,499</td>
                <td className="py-3 text-muted">Bulk · beds and nurseries</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a
          href={AMAZON_PRODUCT_URL}
          rel="nofollow sponsored"
          onClick={() =>
            track("collection_hub_buy_clicked", {
              collection: "vermicompost",
              cta: "price_table",
            })
          }
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-peach-400 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-peach-500"
        >
          Buy vermicompost on Amazon →
        </a>
      </section>

      <section className="rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-forest-800 md:text-2xl">
          Why buy Sarvada vermicompost online
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base">
          <li>
            <strong className="text-forest-800">Lab-certified nutrients</strong> —
            Nitrogen 3.16%, Potassium 0.94%, organic carbon 15%, pH 6.85 (
            <a
              href={LAB_REPORT.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              report {LAB_REPORT.reportNo}
            </a>
            ).
          </li>
          <li>
            <strong className="text-forest-800">No silt, no fillers</strong> —
            pure earthworm castings for pots that drain and breathe.
          </li>
          <li>
            <strong className="text-forest-800">Made for Indian homes</strong> —
            balcony pots, terrace grow bags, tulsi, tomatoes and indoor plants.
          </li>
          <li>
            <strong className="text-forest-800">Official brand site</strong> —
            shop only at{" "}
            <strong className="text-forest-800">sarvadaorganic.com</strong> or
            our Amazon listing. That is the live Sarvada Organic store.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted md:text-base">
          Dosage help:{" "}
          <Link
            to="/blog/how-much-vermicompost-to-use"
            className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
          >
            how much vermicompost per pot
          </Link>
          {" · "}
          <Link
            to="/blog/vermicompost-vs-cow-dung-vs-chemical-fertilizer"
            className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
          >
            vermicompost vs cow dung
          </Link>
          .
        </p>
      </section>

      <section className="rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-forest-800 md:text-2xl">
          Buying vermicompost online — FAQs
        </h2>
        <dl className="mt-5 space-y-5 text-sm md:text-base">
          <div>
            <dt className="font-semibold text-forest-800">
              Where can I buy vermicompost online in India?
            </dt>
            <dd className="mt-1.5 text-muted">
              Buy Sarvada vermicompost on Amazon from this page (5 kg from ₹249)
              or browse packs above. Pan-India delivery; COD where Amazon
              supports it.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-forest-800">
              Which pack should I buy — 1 kg or 5 kg?
            </dt>
            <dd className="mt-1.5 text-muted">
              Under ~10 small pots: 1 kg trial. Mixed balcony or any grow bags:
              5 kg bestseller. Larger terraces: 10 kg or 25 kg.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-forest-800">
              Is Sarvada vermicompost lab tested?
            </dt>
            <dd className="mt-1.5 text-muted">
              Yes. SV Testing Laboratories (NABL) report {LAB_REPORT.reportNo} —
              Nitrogen 3.16%. Download the PDF from our lab report section.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-forest-800">
              How often do I apply vermicompost after I buy it?
            </dt>
            <dd className="mt-1.5 text-muted">
              Most pots: every 30–45 days. Fruiting grow bags: every 20–30 days.
              See the full spoon chart on our dosage guide.
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-8">
        <h2 className="font-display text-xl font-semibold text-forest-800 md:text-2xl">
          Authority sources
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
          <li>
            <a
              href={LAB_REPORT.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              SVTL lab report PDF (N 3.16%, K 0.94%)
            </a>
          </li>
          <li>
            <a
              href={LAB_REPORT.lab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              SV Testing Laboratories (NABL)
            </a>
          </li>
          <li>
            <a
              href="https://agritech.tnau.ac.in/org_farm/orgfarm_vermicompost.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              TNAU Agritech — vermicompost guide
            </a>
          </li>
          <li>
            <a
              href="https://icar.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
            >
              ICAR
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

function CollectionProductCard({
  product,
  position,
  collectionSlug,
}: {
  product: ProductData;
  position: number;
  collectionSlug: string;
}) {
  const discount =
    product.mrp > 0
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <a
      href={AMAZON_PRODUCT_URL}
      rel="nofollow sponsored"
      onClick={() =>
        track("collection_product_clicked", {
          collection: collectionSlug,
          slug: product.slug,
          position,
        })
      }
      className="group relative overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 transition-all hover:-translate-y-1 hover:shadow-soft md:rounded-3xl"
    >
      <div className="relative aspect-square overflow-hidden bg-sage-100">
        <img
          src={product.image}
          alt={`Buy ${product.name} ${product.weight} online India`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading={position < 2 ? "eager" : "lazy"}
          width={720}
          height={720}
        />
        {product.badge && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-peach-400 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-cream-50 md:left-3 md:top-3 md:text-[10px]">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute bottom-2.5 left-2.5 rounded-full bg-cream-50 px-2 py-0.5 text-[10px] font-bold text-forest-700 shadow-sm md:bottom-3 md:left-3 md:text-xs">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-3 md:p-4">
        {product.reviews > 0 && (
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-peach-400 text-peach-400 md:h-3.5 md:w-3.5" />
            <span className="text-[11px] font-semibold text-forest-800 md:text-xs">
              {product.rating}
            </span>
            <span className="text-[11px] text-muted md:text-xs">
              ({product.reviews})
            </span>
          </div>
        )}
        <h2 className="mt-1.5 text-sm font-semibold text-forest-800 md:text-base">
          {product.name} {product.weight}
        </h2>
        <p className="text-[11px] text-muted md:text-xs">{product.tagline}</p>

        {product.available ? (
          <div className="mt-2 flex items-baseline gap-2">
            <p className="font-display text-base font-semibold text-forest-800 md:text-lg">
              ₹{product.price.toLocaleString()}
            </p>
            {product.mrp > product.price && (
              <p className="text-[11px] text-muted line-through md:text-xs">
                ₹{product.mrp.toLocaleString()}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-2 text-xs font-semibold text-peach-500">Coming soon</p>
        )}
      </div>
    </a>
  );
}

function CollectionMeta({
  collection,
  canonical,
  products,
}: {
  collection: CollectionData;
  canonical: string;
  products: ProductData[];
}) {
  const availableProducts = products.filter((p) => p.available);
  const isVermiHub = collection.slug === "vermicompost";
  const title =
    collection.seoTitle || `${collection.name} — Sarvada Organic`;
  const keywords =
    collection.keywords ||
    [
      collection.name.toLowerCase(),
      `buy ${collection.name.toLowerCase()} online india`,
      "organic plant care india",
      "sarvada organic",
    ];

  const faqSchema = isVermiHub
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I buy vermicompost online in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Buy Sarvada vermicompost online in India from sarvadaorganic.com or Amazon. Packs start at 1 kg ₹149; the 5 kg bestseller is ₹249. Free delivery above ₹499 where eligible.",
            },
          },
          {
            "@type": "Question",
            name: "How much does vermicompost 5 kg cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sarvada Organic vermicompost 5 kg is ₹249 (MRP ₹599). It is the bestseller pack for mixed balcony gardens.",
            },
          },
          {
            "@type": "Question",
            name: "Is Sarvada vermicompost lab tested?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. SV Testing Laboratories (NABL) report ${LAB_REPORT.reportNo} shows Nitrogen 3.16%, Potassium 0.94%, organic carbon 15.0% and pH 6.85.`,
            },
          },
          {
            "@type": "Question",
            name: "Which vermicompost pack should I buy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Choose 1 kg for a trial under about 10 small pots, 5 kg for a mixed balcony, 10 kg for a larger terrace, and 25 kg for beds or bulk use.",
            },
          },
        ],
      }
    : null;

  useDocumentMeta({
    title,
    description: collection.description,
    canonical,
    type: "website",
    modifiedTime: SITE_LASTMOD,
    keywords,
    jsonLd: [
      organizationSchema(),
      storeSchema(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        name: title,
        headline: collection.h1 || collection.name,
        description: collection.description,
        url: canonical,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        dateModified: SITE_LASTMOD,
        inLanguage: "en-IN",
        about: isVermiHub
          ? { "@type": "Thing", name: "Vermicompost" }
          : undefined,
        ...(availableProducts.length > 0 && {
          mainEntity: {
            "@type": "ItemList",
            name: `${collection.name} products`,
            numberOfItems: availableProducts.length,
            itemListElement: availableProducts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://sarvadaorganic.com/products/${p.slug}`,
              name: `${p.name} ${p.weight}`,
            })),
          },
        }),
      },
      ...(faqSchema ? [faqSchema] : []),
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        {
          name: isVermiHub ? "Buy Vermicompost" : collection.name,
          item: canonical,
        },
      ]),
    ],
  });
  return null;
}
