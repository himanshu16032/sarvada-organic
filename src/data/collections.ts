export type CollectionData = {
  slug: string;
  name: string;
  description: string;
  productSlugs: string[];
};

export const COLLECTION_DATA: Record<string, CollectionData> = {
  vermicompost: {
    slug: "vermicompost",
    name: "Vermicompost",
    description:
      "100% pure earthworm castings — hand-screened, slow-cured, no silt, no preservatives. India's most trusted vermicompost since 2018.",
    productSlugs: [
      "vermicompost-1kg",
      "vermicompost-5kg",
      "vermicompost-10kg",
      "vermicompost-25kg",
    ],
  },
  "organic-fertilizer": {
    slug: "organic-fertilizer",
    name: "Organic Fertilizer",
    description:
      "Certified organic plant nutrition for home gardens, balcony plants, and small farms. Safe for children, pets, and the planet.",
    productSlugs: [
      "vermicompost-1kg",
      "vermicompost-5kg",
      "vermicompost-10kg",
      "vermicompost-25kg",
      "neem-karanja-cake",
    ],
  },
  "plant-care": {
    slug: "plant-care",
    name: "Plant Care",
    description:
      "Everything your plants need to thrive — from growth serums to vermiwash and soil amendments.",
    productSlugs: ["plant-growth-serum", "liquid-vermiwash", "seed-starter-mix"],
  },
  "potting-mix": {
    slug: "potting-mix",
    name: "Potting Mix",
    description:
      "Specially formulated mixes for indoor plants, balcony containers, raised beds, and seed germination.",
    productSlugs: ["seed-starter-mix", "vermicompost-1kg"],
  },
  "pest-control": {
    slug: "pest-control",
    name: "Pest Control",
    description:
      "Natural, chemical-free pest and disease management for healthy soil and plants.",
    productSlugs: ["neem-karanja-cake", "liquid-vermiwash"],
  },
  "seed-starter": {
    slug: "seed-starter",
    name: "Seed Starter",
    description:
      "Everything you need to germinate seeds and grow strong seedlings from the very beginning.",
    productSlugs: ["seed-starter-mix", "vermicompost-1kg"],
  },
  bundles: {
    slug: "bundles",
    name: "Bundles",
    description:
      "Curated bundles for home gardeners — more value, less hassle. Everything together so you can just plant.",
    productSlugs: ["garden-starter-bundle"],
  },
  subscriptions: {
    slug: "subscriptions",
    name: "Subscriptions",
    description:
      "Never run out of plant food. Fresh vermicompost delivered to your door every month.",
    productSlugs: ["vermicompost-subscription"],
  },
  gifting: {
    slug: "gifting",
    name: "Gifting",
    description:
      "The gift every plant parent actually wants. Thoughtfully packed organic plant care — perfect for any occasion.",
    productSlugs: [
      "garden-starter-bundle",
      "vermicompost-subscription",
      "vermicompost-5kg",
    ],
  },
  bestsellers: {
    slug: "bestsellers",
    name: "Bestsellers",
    description:
      "Our most loved products — tried, tested, and trusted by thousands of plant parents across India.",
    productSlugs: [
      "vermicompost-5kg",
      "vermicompost-1kg",
      "garden-starter-bundle",
      "vermicompost-10kg",
    ],
  },
  "new-arrivals": {
    slug: "new-arrivals",
    name: "New Arrivals",
    description:
      "Fresh additions to our product line — new organic plant care products launching soon.",
    productSlugs: [
      "plant-growth-serum",
      "liquid-vermiwash",
      "neem-karanja-cake",
      "seed-starter-mix",
    ],
  },
};
