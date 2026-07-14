export type ProductData = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  mrp: number;
  weight: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  available: boolean;
  category: string;
  keywords: string[];
};

export const PRODUCT_DATA: Record<string, ProductData> = {
  "vermicompost-1kg": {
    slug: "vermicompost-1kg",
    name: "Sarvada Vermicompost",
    tagline: "Trial pack — pure earthworm castings",
    description:
      "Start your organic gardening journey with our 1 kg trial pack. 100% pure vermicompost — no silt, no preservatives, no shortcuts. Hand-screened and slow-cured on our farm since 2018.",
    price: 149,
    mrp: 199,
    weight: "1 kg",
    image: "/sarvada-pack-table.webp",
    rating: 4.7,
    reviews: 482,
    badge: "Trial pack",
    available: true,
    category: "Vermicompost",
    keywords: [
      "vermicompost 1kg",
      "organic vermicompost trial pack",
      "earthworm castings india",
      "buy vermicompost online",
    ],
  },
  "vermicompost-5kg": {
    slug: "vermicompost-5kg",
    name: "Sarvada Vermicompost",
    tagline: "Bestseller — the most popular size",
    description:
      "Our most loved pack — 5 kg of pure, hand-screened vermicompost for home gardens, balcony plants, and kitchen gardens. No silt. No fillers. Free delivery above ₹499.",
    price: 249,
    mrp: 599,
    weight: "5 kg",
    image: "/sarvada-pack-balcony.webp",
    rating: 4.8,
    reviews: 1240,
    badge: "Bestseller",
    available: true,
    category: "Vermicompost",
    keywords: [
      "vermicompost 5kg",
      "best vermicompost india",
      "organic fertilizer 5kg",
      "earthworm castings 5kg",
    ],
  },
  "vermicompost-10kg": {
    slug: "vermicompost-10kg",
    name: "Sarvada Vermicompost",
    tagline: "Popular — ideal for larger gardens",
    description:
      "10 kg of farm-fresh vermicompost for serious gardeners. Perfect for raised beds, multiple containers, or a full balcony garden. Pure castings — slow-cured for maximum nutrition.",
    price: 1099,
    mrp: 1499,
    weight: "10 kg",
    image: "/sarvada-pack-table.webp",
    rating: 4.8,
    reviews: 612,
    badge: "Popular",
    available: true,
    category: "Vermicompost",
    keywords: [
      "vermicompost 10kg",
      "organic vermicompost bulk",
      "buy vermicompost 10kg",
      "garden fertilizer 10kg",
    ],
  },
  "vermicompost-25kg": {
    slug: "vermicompost-25kg",
    name: "Sarvada Vermicompost",
    tagline: "Best value — for farms and large gardens",
    description:
      "Our best-value 25 kg pack. Ideal for kitchen gardens, small farms, community gardening, and bulk buyers. Same pure vermicompost — lower per-kg cost.",
    price: 2499,
    mrp: 3499,
    weight: "25 kg",
    image: "/sarvada-pack-balcony.webp",
    rating: 4.9,
    reviews: 318,
    badge: "Best value",
    available: true,
    category: "Vermicompost",
    keywords: [
      "vermicompost 25kg",
      "bulk vermicompost india",
      "buy vermicompost wholesale",
      "organic fertilizer bulk",
    ],
  },
  "garden-starter-bundle": {
    slug: "garden-starter-bundle",
    name: "Garden Starter Bundle",
    tagline: "Everything you need to start growing",
    description:
      "Start your home garden the right way. This bundle includes 5 kg of our pure vermicompost plus essential gardening tools. Perfect for first-time plant parents.",
    price: 899,
    mrp: 1299,
    weight: "5 kg + tools",
    image: "/sarvada-pack-table.webp",
    rating: 4.7,
    reviews: 204,
    badge: "Bundle",
    available: true,
    category: "Bundles",
    keywords: [
      "garden starter bundle",
      "home garden kit india",
      "plant care bundle",
      "organic gardening starter kit",
    ],
  },
  "vermicompost-subscription": {
    slug: "vermicompost-subscription",
    name: "Monthly Vermicompost Subscription",
    tagline: "Fresh vermicompost delivered every month",
    description:
      "Never run out of plant food. Our monthly subscription delivers 5 kg of fresh vermicompost to your door every month. Subscribe and save — cancel anytime.",
    price: 509,
    mrp: 599,
    weight: "5 kg / month",
    image: "/sarvada-logo-horizontal.webp",
    rating: 4.9,
    reviews: 142,
    badge: "Subscribe & save",
    available: true,
    category: "Subscriptions",
    keywords: [
      "vermicompost subscription",
      "monthly plant food delivery",
      "organic fertilizer subscription india",
      "subscribe vermicompost",
    ],
  },
  "plant-growth-serum": {
    slug: "plant-growth-serum",
    name: "Plant Growth Serum",
    tagline: "Concentrated liquid nutrition for your plants",
    description:
      "A concentrated serum of plant-available nutrients derived from vermicompost. A few drops go a long way. Launching soon.",
    price: 0,
    mrp: 0,
    weight: "100 ml",
    image: "/sarvada-logo-horizontal.webp",
    rating: 0,
    reviews: 0,
    badge: "Coming soon",
    available: false,
    category: "Plant Care",
    keywords: [
      "plant growth serum india",
      "liquid plant fertilizer",
      "plant serum organic",
      "plant growth booster",
    ],
  },
  "liquid-vermiwash": {
    slug: "liquid-vermiwash",
    name: "Liquid Vermiwash",
    tagline: "The liquid gold from our vermicompost beds",
    description:
      "Vermiwash is the liquid collected from vermicompost beds — rich in plant-available nutrients, beneficial microbes, and natural growth hormones. Launching soon.",
    price: 0,
    mrp: 0,
    weight: "500 ml",
    image: "/sarvada-pack-table.webp",
    rating: 0,
    reviews: 0,
    badge: "Coming soon",
    available: false,
    category: "Plant Care",
    keywords: [
      "liquid vermiwash india",
      "buy vermiwash online",
      "vermiwash fertilizer",
      "liquid organic fertilizer",
    ],
  },
  "neem-karanja-cake": {
    slug: "neem-karanja-cake",
    name: "Neem Karanja Cake",
    tagline: "Natural pest and disease control for soil",
    description:
      "A blend of neem cake and karanja cake — two powerful natural amendments for soil health, pest resistance, and nematode control. Launching soon.",
    price: 0,
    mrp: 0,
    weight: "1 kg",
    image: "/sarvada-pack-balcony.webp",
    rating: 0,
    reviews: 0,
    badge: "Coming soon",
    available: false,
    category: "Pest Control",
    keywords: [
      "neem karanja cake india",
      "neem cake fertilizer",
      "organic pest control soil",
      "karanja cake buy",
    ],
  },
  "seed-starter-mix": {
    slug: "seed-starter-mix",
    name: "Seed Starter Mix",
    tagline: "The ideal medium for seed germination",
    description:
      "A light, airy mix of vermicompost, cocopeat, and perlite — optimised for seed germination and early seedling growth. Launching soon.",
    price: 0,
    mrp: 0,
    weight: "2 kg",
    image: "/sarvada-pack-table.webp",
    rating: 0,
    reviews: 0,
    badge: "Coming soon",
    available: false,
    category: "Potting Mix",
    keywords: [
      "seed starter mix india",
      "seed germination mix",
      "organic seed starting mix",
      "buy potting mix online",
    ],
  },
};

export const ALL_PRODUCTS = Object.values(PRODUCT_DATA);
