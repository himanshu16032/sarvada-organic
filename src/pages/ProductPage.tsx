import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../blog/BlogChrome";
import { PRODUCT_DATA, ProductData } from "../data/products";
import { AMAZON_PRODUCT_URL } from "../lib/amazon";
import { track } from "../lib/analytics";
import {
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  merchantReturnPolicy,
  organizationSchema,
  shippingDetails,
  storeSchema,
} from "../lib/aeo";

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? PRODUCT_DATA[slug] : undefined;

  if (!product) return <Navigate to="/" replace />;

  const canonical = `https://sarvadaorganic.com/products/${product.slug}`;
  const imageUrl = `https://sarvadaorganic.com${product.image}`;
  const discount =
    product.mrp > 0
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <>
      <ProductMeta product={product} canonical={canonical} imageUrl={imageUrl} />
      <div className="min-h-screen bg-cream-100">
        <Header />
        <div className="container-wide py-8 md:py-12">
          <Link
            to="/#products"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700 hover:text-peach-500 md:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All products
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="overflow-hidden rounded-3xl bg-sage-100 md:rounded-[2.5rem]">
              <img
                src={product.image}
                alt={`${product.name} ${product.weight}`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="w-fit rounded-full bg-peach-200/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-peach-500">
                  {product.badge}
                </span>
              )}
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-4xl lg:text-5xl">
                {product.name}
                <span className="mt-1 block text-xl font-normal text-muted md:text-2xl">
                  {product.weight}
                </span>
              </h1>
              <p className="mt-2 text-base italic text-peach-500">{product.tagline}</p>

              {product.reviews > 0 && (
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-peach-400 text-peach-400"
                            : "fill-cream-300 text-cream-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-forest-800">
                    {product.rating}
                  </span>
                  <span className="text-sm text-muted">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              )}

              <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
                {product.description}
              </p>

              {product.available ? (
                <div className="mt-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-semibold text-forest-800 md:text-4xl">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.mrp > product.price && (
                      <>
                        <span className="text-lg text-muted line-through">
                          ₹{product.mrp.toLocaleString()}
                        </span>
                        <span className="rounded-full bg-peach-100 px-2.5 py-0.5 text-sm font-bold text-peach-500">
                          {discount}% OFF
                        </span>
                      </>
                    )}
                  </div>
                  <a
                    href={AMAZON_PRODUCT_URL}
                    onClick={() =>
                      track("product_page_add_to_cart", {
                        slug: product.slug,
                        price: product.price,
                      })
                    }
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-forest-800 md:w-auto md:px-10"
                  >
                    <ShoppingBag className="h-5 w-5" /> Add to cart
                  </a>
                </div>
              ) : (
                <div className="mt-8 rounded-3xl border border-cream-300/70 bg-cream-50 p-6">
                  <p className="font-semibold text-forest-800">Launching soon</p>
                  <p className="mt-1 text-sm text-muted">
                    This product is coming soon. Shop our available products in the meantime.
                  </p>
                  <Link
                    to="/#products"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-forest-800"
                  >
                    <ShoppingBag className="h-4 w-4" /> Shop available products
                  </Link>
                </div>
              )}

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-cream-200/70 pt-8">
                {[
                  { Icon: Truck, label: "Free delivery above ₹499" },
                  { Icon: Shield, label: "100% pure, no fillers" },
                  { Icon: RotateCcw, label: "Easy returns" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <Icon className="h-5 w-5 text-forest-700" />
                    <span className="text-[11px] font-medium text-muted md:text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function ProductMeta({
  product,
  canonical,
  imageUrl,
}: {
  product: ProductData;
  canonical: string;
  imageUrl: string;
}) {
  const offerSchema = product.available
    ? {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price,
        availability: "https://schema.org/InStock",
        url: canonical,
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": ORG_ID },
        shippingDetails: shippingDetails(),
        hasMerchantReturnPolicy: merchantReturnPolicy(),
      }
    : {
        "@type": "Offer",
        priceCurrency: "INR",
        availability: "https://schema.org/PreOrder",
        url: canonical,
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": ORG_ID },
        hasMerchantReturnPolicy: merchantReturnPolicy(),
      };

  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${canonical}#product`,
    name: `${product.name} ${product.weight}`,
    description: product.description,
    image: [imageUrl],
    brand: { "@type": "Brand", name: "Sarvada Organic" },
    manufacturer: { "@id": ORG_ID },
    url: canonical,
    sku: `SARV-${product.slug.toUpperCase()}`,
    category: product.category,
    countryOfOrigin: "IN",
    material: product.category === "Vermicompost" ? "Earthworm castings" : undefined,
    additionalProperty:
      product.category === "Vermicompost"
        ? [
            {
              "@type": "PropertyValue",
              name: "No silt",
              value: "Yes",
            },
            {
              "@type": "PropertyValue",
              name: "No preservatives",
              value: "Yes",
            },
            {
              "@type": "PropertyValue",
              name: "Pack size",
              value: product.weight,
            },
          ]
        : [
            {
              "@type": "PropertyValue",
              name: "Pack size",
              value: product.weight,
            },
          ],
    offers: offerSchema,
  };

  if (product.reviews > 0) {
    productSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
      bestRating: 5,
      worstRating: 1,
    };
  }

  useDocumentMeta({
    title: `${product.name} ${product.weight} — Sarvada Organic`,
    description: product.description,
    canonical,
    image: imageUrl,
    type: "product",
    keywords: product.keywords,
    jsonLd: [
      organizationSchema(),
      storeSchema(),
      productSchema,
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: "Products", item: `${SITE_URL}/#products` },
        { name: `${product.name} ${product.weight}`, item: canonical },
      ]),
    ],
  });
  return null;
}
