import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../blog/BlogChrome";
import { COLLECTION_DATA, CollectionData } from "../data/collections";
import { PRODUCT_DATA, ProductData } from "../data/products";
import { track } from "../lib/analytics";

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
    <Link
      to={`/products/${product.slug}`}
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
    </Link>
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
    keywords: [
      collection.name.toLowerCase(),
      `buy ${collection.name.toLowerCase()} online india`,
      "organic plant care india",
      "sarvada organic",
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: `${collection.name} — Sarvada Organic`,
        description: collection.description,
        url: canonical,
        ...(availableProducts.length > 0 && {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: availableProducts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://sarvadaorganic.com/products/${p.slug}`,
              name: `${p.name} ${p.weight}`,
            })),
          },
        }),
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
            name: collection.name,
            item: canonical,
          },
        ],
      },
    ],
  });
  return null;
}
