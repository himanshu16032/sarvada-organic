import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../blog/BlogChrome";
import { COLLECTION_DATA, CollectionData } from "../data/collections";
import { PRODUCT_DATA, ProductData } from "../data/products";
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
              {collection.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {collection.description}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
              {products.map((product, idx) => (
                <CollectionProductCard key={product.slug} product={product} position={idx} collectionSlug={collection.slug} />
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

          {collection.slug === "vermicompost" && (
            <div className="mt-12 max-w-3xl rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold text-forest-800 md:text-2xl">
                Why vermicompost works
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                Buy Sarvada vermicompost online for pots, balcony gardens and
                kitchen herbs — pure earthworm castings with no silt and no
                preservatives. For official background on vermicomposting and
                organic manures in India, see these sources:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
                <li>
                  <a
                    href="/lab-reports/svtl-10-260604-01.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
                  >
                    SVTL-10-260604-01 lab report PDF (N 3.16%, K 0.94%)
                  </a>
                </li>
                <li>
                  <a
                    href="https://svtestinglaboratories.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
                  >
                    SV Testing Laboratories (NABL accredited)
                  </a>
                </li>
                <li>
                  <a
                    href="https://agritech.tnau.ac.in/org_farm/orgfarm_vermicompost.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
                  >
                    TNAU Agritech — vermicompost production guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://icar.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
                  >
                    Indian Council of Agricultural Research (ICAR)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agriwelfare.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-forest-700 underline decoration-peach-300 underline-offset-4"
                  >
                    Ministry of Agriculture &amp; Farmers Welfare
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
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
          alt={`${product.name} ${product.weight}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
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
          {product.name}
        </h2>
        <p className="text-[11px] text-muted md:text-xs">{product.weight}</p>

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

  useDocumentMeta({
    title: `${collection.name} — Sarvada Organic`,
    description: collection.description,
    canonical,
    type: "website",
    modifiedTime: SITE_LASTMOD,
    keywords: [
      collection.name.toLowerCase(),
      `buy ${collection.name.toLowerCase()} online india`,
      "organic plant care india",
      "sarvada organic",
    ],
    jsonLd: [
      organizationSchema(),
      storeSchema(),
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        name: `${collection.name} — Sarvada Organic`,
        description: collection.description,
        url: canonical,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        dateModified: SITE_LASTMOD,
        inLanguage: "en-IN",
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
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: collection.name, item: canonical },
      ]),
    ],
  });
  return null;
}
