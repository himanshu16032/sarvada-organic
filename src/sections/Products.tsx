import { Star, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import SectionBg from "../components/SectionBg";
import { AMAZON_PRODUCT_URL } from "../lib/amazon";
import { track, useTrackVisible } from "../lib/analytics";

type Product = {
  slug: string;
  name: string;
  weight: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  badge?: { label: string; tone: "peach" | "forest" | "sage" };
  image: string;
};

const PRODUCTS: Product[] = [
  {
    slug: "vermicompost-1kg",
    name: "Sarvada Vermicompost",
    weight: "1 kg pack",
    price: 149,
    mrp: 199,
    rating: 4.7,
    reviews: 482,
    badge: { label: "Trial pack", tone: "sage" },
    image: "/sarvada-pack-table.webp",
  },
  {
    slug: "vermicompost-5kg",
    name: "Sarvada Vermicompost",
    weight: "5 kg pack",
    price: 249,
    mrp: 599,
    rating: 4.8,
    reviews: 1240,
    badge: { label: "Bestseller", tone: "peach" },
    image: "/sarvada-pack-balcony.webp",
  },
  {
    slug: "vermicompost-10kg",
    name: "Sarvada Vermicompost",
    weight: "10 kg pack",
    price: 1099,
    mrp: 1499,
    rating: 4.8,
    reviews: 612,
    badge: { label: "Popular", tone: "forest" },
    image: "/sarvada-pack-table.webp",
  },
  {
    slug: "vermicompost-25kg",
    name: "Sarvada Vermicompost",
    weight: "25 kg pack",
    price: 2499,
    mrp: 3499,
    rating: 4.9,
    reviews: 318,
    badge: { label: "Best value", tone: "peach" },
    image: "/sarvada-pack-balcony.webp",
  },
  {
    slug: "garden-starter-bundle",
    name: "Garden Starter Bundle",
    weight: "5 kg + tools",
    price: 899,
    mrp: 1299,
    rating: 4.7,
    reviews: 204,
    badge: { label: "Bundle", tone: "sage" },
    image: "/sarvada-pack-table.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-12 md:py-20">
      <SectionBg variant="warm" />
      <div className="container-wide relative">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Shop bestsellers</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Plant food, packed{" "}
              <span className="italic text-peach-500">fresh.</span>
            </h2>
          </div>
          <Link
            to="/collections/bestsellers"
            onClick={() =>
              track("products_view_all_clicked", { device: "desktop" })
            }
            className="hidden text-sm font-semibold text-forest-700 hover:text-peach-500 md:inline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-3">
          {PRODUCTS.map((p, idx) => (
            <ProductCard key={idx} product={p} position={idx} />
          ))}
        </div>

        <Link
          to="/collections/bestsellers"
          onClick={() =>
            track("products_view_all_clicked", { device: "mobile" })
          }
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-forest-700/20 bg-cream-50 px-6 py-3 text-sm font-semibold text-forest-700 hover:border-forest-700/40 md:hidden"
        >
          View all products →
        </Link>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  position,
}: {
  product: Product;
  position: number;
}) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const toneClass = {
    peach: "bg-peach-400 text-cream-50",
    forest: "bg-forest-700 text-cream-50",
    sage: "bg-sage-200 text-forest-700",
  }[product.badge?.tone || "peach"];

  const baseProps = {
    slug: product.slug,
    name: product.name,
    weight: product.weight,
    price: product.price,
    mrp: product.mrp,
    discount_pct: discount,
    rating: product.rating,
    reviews: product.reviews,
    badge: product.badge?.label,
    position,
  };

  const ref = useTrackVisible<HTMLElement>("product_card_viewed", baseProps);

  return (
    <article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-cream-200 bg-cream-50 transition-all hover:-translate-y-1 hover:shadow-soft md:rounded-3xl"
    >
      <div className="relative aspect-square overflow-hidden bg-sage-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest md:left-3 md:top-3 md:text-[10px] ${toneClass}`}
          >
            {product.badge.label}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute bottom-2.5 left-2.5 rounded-full bg-cream-50 px-2 py-0.5 text-[10px] font-bold text-forest-700 shadow-sm md:bottom-3 md:left-3 md:text-xs">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-3 md:p-4">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-peach-400 text-peach-400 md:h-3.5 md:w-3.5" />
          <span className="text-[11px] font-semibold text-forest-800 md:text-xs">
            {product.rating}
          </span>
          <span className="text-[11px] text-muted md:text-xs">
            ({product.reviews})
          </span>
        </div>
        <h3 className="mt-1.5 text-sm font-semibold text-forest-800 md:text-base">
          <Link
            to={`/products/${product.slug}`}
            onClick={() =>
              track("product_details_clicked", {
                slug: product.slug,
                position,
              })
            }
            className="hover:text-peach-500"
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-[11px] text-muted md:text-xs">{product.weight}</p>

        <div className="mt-2 flex items-baseline gap-2">
          <p className="font-display text-base font-semibold text-forest-800 md:text-lg">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="text-[11px] text-muted line-through md:text-xs">
            ₹{product.mrp.toLocaleString()}
          </p>
        </div>

        <a
          href={AMAZON_PRODUCT_URL}
          onClick={() => track("product_add_to_cart_clicked", baseProps)}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-forest-700 px-3 py-2 text-[11px] font-semibold text-cream-50 transition-colors hover:bg-forest-800 md:py-2.5 md:text-sm"
        >
          <ShoppingBag className="h-3.5 w-3.5 md:h-4 md:w-4" />
          Add to cart
        </a>
      </div>
    </article>
  );
}
