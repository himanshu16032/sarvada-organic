import { lazy } from "react";

export type Category =
  | "Guides"
  | "Stories"
  | "Comparisons"
  | "Plant Care"
  | "Behind the Brand"
  | "Seasonal"
  | "Beginner";

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  readTime: string;
  date: string;
  author: string;
  cover: string;
  coverAlt: string;
  keywords: string[];
  featured?: boolean;
  emotional?: boolean;
};

export type BlogEntry = BlogMeta & {
  component: ReturnType<typeof lazy>;
};

export const POSTS: BlogEntry[] = [
  {
    slug: "how-much-vermicompost-to-use",
    title: "How much vermicompost should you actually use? (Most people get this wrong)",
    excerpt:
      "A handful per pot? Half a bag? Here's the simple table-based answer for Indian home gardens — by pot size, plant type and season.",
    category: "Guides",
    readTime: "6 min read",
    date: "2026-02-04",
    author: "Sarvada Farm Team",
    cover: "/vermicompost-hands.jpg",
    coverAlt: "Close-up of pure Sarvada Organic vermicompost held in hands",
    keywords: [
      "how much vermicompost to use",
      "vermicompost quantity for plants",
      "vermicompost dosage potted plants India",
      "vermicompost for pots",
    ],
    featured: true,
    component: lazy(() => import("./posts/how-much-vermicompost-to-use")),
  },
  {
    slug: "tomato-plant-came-back-after-i-changed-one-thing",
    title: "My tomato plant died. Then I changed one thing and everything turned around.",
    excerpt:
      "A real story about a half-dead tomato plant, burned roots, and the slow, microbe-rich fix that brought it back in three weeks.",
    category: "Stories",
    readTime: "5 min read",
    date: "2026-01-22",
    author: "Sarvada Farm Team",
    cover: "/plant-transformation.jpg",
    coverAlt: "A tomato plant brought back to life with organic vermicompost",
    keywords: [
      "tomato plant not growing India",
      "how to revive tomato plant",
      "organic fertilizer for tomato plants India",
      "burned roots fertilizer",
    ],
    emotional: true,
    component: lazy(
      () => import("./posts/tomato-plant-came-back-after-i-changed-one-thing")
    ),
  },
  {
    slug: "vermicompost-vs-cow-dung-vs-chemical-fertilizer",
    title: "Vermicompost vs. cow dung manure vs. chemical fertilizer — an honest comparison",
    excerpt:
      "Forget the marketing. Here's what each fertilizer actually does to your soil, your plant, and your wallet — with no brand agenda.",
    category: "Comparisons",
    readTime: "8 min read",
    date: "2026-01-10",
    author: "Sarvada Farm Team",
    cover: "/process-diagram.jpg",
    coverAlt:
      "Side-by-side comparison of vermicompost, cow dung manure and chemical fertilizer",
    keywords: [
      "vermicompost vs cow dung manure",
      "organic vs chemical fertilizer plants India",
      "which fertilizer is best for home garden India",
      "best fertilizer terrace garden India",
    ],
    featured: true,
    component: lazy(
      () => import("./posts/vermicompost-vs-cow-dung-vs-chemical-fertilizer")
    ),
  },
  {
    slug: "she-started-her-kitchen-garden-at-58",
    title: "She started her kitchen garden at 58. Here's what she grew in 4 months.",
    excerpt:
      "Asha had never gardened. Today her balcony has 12 pots, three kinds of tomatoes and a methi plant her daughter calls 'the family pet'.",
    category: "Stories",
    readTime: "6 min read",
    date: "2025-12-28",
    author: "Sarvada Farm Team",
    cover: "/hero-plants.jpg",
    coverAlt: "An Indian balcony kitchen garden with herbs, tomatoes and chillies",
    keywords: [
      "kitchen garden for beginners India",
      "how to start kitchen garden apartment India",
      "terrace garden first steps",
    ],
    emotional: true,
    component: lazy(
      () => import("./posts/she-started-her-kitchen-garden-at-58")
    ),
  },
  {
    slug: "right-potting-mix-for-every-plant",
    title: "The right potting mix for every plant — a no-nonsense guide for Indian homes",
    excerpt:
      "Indoor foliage, flowering plants, vegetables, succulents — each needs a different mix. Here are the five recipes worth bookmarking.",
    category: "Guides",
    readTime: "7 min read",
    date: "2025-12-12",
    author: "Sarvada Farm Team",
    cover: "/packaging-reference.jpeg",
    coverAlt: "Hands mixing potting soil, cocopeat and vermicompost in a bowl",
    keywords: [
      "potting mix recipe India",
      "soil mix for indoor plants India",
      "cocopeat vermicompost ratio potting mix",
    ],
    component: lazy(() => import("./posts/right-potting-mix-for-every-plant")),
  },
  {
    slug: "we-started-sarvada-because-we-were-lied-to",
    title: "We started Sarvada because we were lied to about our vermicompost",
    excerpt:
      "The first bag we bought turned into concrete after one watering. So we tested every brand we could find. Here's what we found — and why we started making our own.",
    category: "Behind the Brand",
    readTime: "7 min read",
    date: "2025-11-29",
    author: "Sarvada Founder",
    cover: "/packaging-reference.jpeg",
    coverAlt: "Sarvada Organic founder holding genuine, silt-free vermicompost",
    keywords: [
      "pure vermicompost India no silt",
      "vermicompost adulteration India",
      "best vermicompost brand India honest",
    ],
    featured: true,
    emotional: true,
    component: lazy(
      () => import("./posts/we-started-sarvada-because-we-were-lied-to")
    ),
  },
  {
    slug: "vermiwash-what-it-is-how-to-use",
    title: "Vermiwash: what it is, how to use it, and why it's so underrated",
    excerpt:
      "The dark liquid that drips out of a vermicompost bed is plant gold. Here's how to dilute it, when to spray, and what plants love it most.",
    category: "Plant Care",
    readTime: "5 min read",
    date: "2025-11-14",
    author: "Sarvada Farm Team",
    cover: "/plant-transformation.jpg",
    coverAlt: "Spraying diluted vermiwash on leafy green plants",
    keywords: [
      "vermiwash uses plants India",
      "how to use vermiwash",
      "vermiwash vs vermicompost",
    ],
    component: lazy(() => import("./posts/vermiwash-what-it-is-how-to-use")),
  },
  {
    slug: "what-growing-your-own-food-does-to-you",
    title: "What growing your own food does to you that nobody talks about",
    excerpt:
      "Not a how-to. Just an honest essay about what a few balcony pots quietly change inside you. Send this to the friend who's been meaning to start.",
    category: "Stories",
    readTime: "6 min read",
    date: "2025-10-30",
    author: "Sarvada Farm Team",
    cover: "/hero-plants.jpg",
    coverAlt: "Morning light falling on a peaceful home balcony garden",
    keywords: [
      "benefits of growing your own food India",
      "gardening mental health benefits India",
      "home gardening apartment India",
    ],
    emotional: true,
    component: lazy(
      () => import("./posts/what-growing-your-own-food-does-to-you")
    ),
  },
  {
    slug: "indian-gardening-calendar-month-by-month",
    title: "The complete season-by-season gardening calendar for Indian home gardeners",
    excerpt:
      "Rabi, Zaid, Kharif — three growing seasons, twelve months, one bookmark-worthy planner for what to plant and what to feed your plants when.",
    category: "Seasonal",
    readTime: "9 min read",
    date: "2025-10-09",
    author: "Sarvada Farm Team",
    cover: "/hero-plants.jpg",
    coverAlt: "Seasonal Indian home garden — monsoon green leafy vegetables",
    keywords: [
      "when to plant vegetables India",
      "gardening calendar India month by month",
      "monsoon garden India what to plant",
    ],
    featured: true,
    component: lazy(
      () => import("./posts/indian-gardening-calendar-month-by-month")
    ),
  },
  {
    slug: "10-mistakes-every-new-plant-parent-makes",
    title: "10 mistakes every new plant parent makes (and how to not make them)",
    excerpt:
      "Overwatering, garden soil straight in pots, cheap fertilizer with silt — the ten quiet plant-killers and the simple fixes for each.",
    category: "Beginner",
    readTime: "8 min read",
    date: "2025-09-22",
    author: "Sarvada Farm Team",
    cover: "/plant-transformation.jpg",
    coverAlt: "Wilting plant being revived with proper care and organic fertilizer",
    keywords: [
      "plant care mistakes India beginners",
      "why are my plants dying India",
      "overwatering underwatering plants India",
    ],
    component: lazy(() => import("./posts/10-mistakes-every-new-plant-parent-makes")),
  },
];

export const POSTS_META: BlogMeta[] = POSTS.map((p) => {
  const { component: _component, ...meta } = p;
  return meta;
});

export function getPostBySlug(slug: string): BlogEntry | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogMeta[] {
  const current = POSTS.find((p) => p.slug === slug);
  if (!current) return POSTS_META.slice(0, limit);
  const sameCat = POSTS_META.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = POSTS_META.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCat, ...others].slice(0, limit);
}
