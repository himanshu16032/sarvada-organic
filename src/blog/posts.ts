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
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: Category;
  readTime: string;
  date: string;
  updatedDate: string;
  author: string;
  cover: string;
  coverAlt: string;
  primaryKeyword: string;
  keywords: string[];
  summary: string;
  featured?: boolean;
  emotional?: boolean;
};

export type BlogEntry = BlogMeta & {
  component: ReturnType<typeof lazy>;
};

export const POSTS: BlogEntry[] = [
  {
    slug: "how-much-vermicompost-to-use",
    title: "How Much Vermicompost to Use Per Pot: Spoon Guide",
    seoTitle: "How Much Vermicompost Per Pot | Spoon Guide",
    metaDescription:
      "Learn exactly how much vermicompost to use for 4-inch to 18-inch pots, seedlings, tomatoes, indoor plants and Indian summer or monsoon conditions.",
    excerpt:
      "A spoon, teacup and handful guide for Indian balcony pots, grow bags and seedlings: what to add, where to add it and when to repeat.",
    category: "Guides",
    readTime: "9 min read",
    date: "2026-02-04",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-table.webp",
    coverAlt: "Close-up of pure Sarvada Organic vermicompost held in hands",
    primaryKeyword: "how much vermicompost to use",
    keywords: [
      "how much vermicompost to use",
      "how much vermicompost per pot",
      "how many spoons vermicompost per pot",
      "vermicompost spoon guide",
      "vermicompost teaspoon per pot",
      "vermicompost tablespoon per pot",
      "vermicompost quantity for plants",
      "vermicompost for pots",
      "how often to apply vermicompost",
    ],
    summary:
      "Most potted plants need measured vermicompost every 30-45 days: spoons for small pots, teacups for larger ones.",
    featured: true,
    component: lazy(() => import("./posts/how-much-vermicompost-to-use")),
  },
  {
    slug: "buy-cow-dung-manure-online-khaad-guide",
    title: "Buy Cow Dung Manure Online? Read This Khaad Guide First",
    seoTitle: "Buy Cow Dung Manure Online | Khaad Guide",
    metaDescription:
      "Buy cow dung manure online or choose vermicompost? Learn khaad types, vermicompost price, near-me checks and safe organic fertilizer buying tips for pots.",
    excerpt:
      "Before you buy khaad online, learn when cow dung manure helps, when vermicompost is safer and how to compare the real price per kg.",
    category: "Guides",
    readTime: "8 min read",
    date: "2026-06-30",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-balcony.webp",
    coverAlt: "Sarvada Organic vermicompost pack for online khaad buying guide",
    primaryKeyword: "buy cow dung manure online",
    keywords: [
      "buy cow dung manure online",
      "khaad for plants online",
      "vermicompost price",
      "vermicompost near me",
      "vermi khad",
      "organic fertilizers",
      "natural plant fertilizer",
      "buy vermicompost online",
    ],
    summary:
      "Use well-rotted cow dung manure for outdoor beds. For pots, indoor plants and regular feeding, pure vermicompost is usually the easier choice.",
    component: lazy(
      () => import("./posts/buy-cow-dung-manure-online-khaad-guide")
    ),
  },
  {
    slug: "best-fertilizer-for-indoor-plants",
    title: "Best Fertilizer for Indoor Plants: Simple Soil and Feeding Guide",
    seoTitle: "Best Fertilizer for Indoor Plants India",
    metaDescription:
      "Find the best fertilizer for indoor plants with potting mix, garden soil mix ratios and a natural plant fertilizer schedule for Indian homes and balconies.",
    excerpt:
      "Indoor plants do not want heavy feeding. They need airy mix, small vermicompost doses and enough patience to let new leaves arrive.",
    category: "Plant Care",
    readTime: "8 min read",
    date: "2026-06-30",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-logo-horizontal.webp",
    coverAlt: "Healthy indoor plants growing with natural fertilizer",
    primaryKeyword: "best fertilizer for indoor plants",
    keywords: [
      "best fertilizer for indoor plants",
      "garden soil mix",
      "potting mix",
      "organic fertilizers",
      "natural plant fertilizer",
      "fertilizer for indoor plants",
      "indoor plant fertilizer India",
    ],
    summary:
      "Most indoor plants do best with light vermicompost every 45-60 days in an airy potting mix, not strong fertilizer in heavy soil.",
    component: lazy(() => import("./posts/best-fertilizer-for-indoor-plants")),
  },
  {
    slug: "process-of-vermicomposting-earthworm-guide",
    title: "Process of Vermicomposting: Earthworm and Vermi Khad Guide",
    seoTitle: "Process of Vermicomposting | Earthworm Guide",
    metaDescription:
      "Learn the process of vermicomposting, earthworm for vermicompost, vermi khad steps and a simple PDF-style checklist for Indian home gardeners at home.",
    excerpt:
      "A plain vermicomposting guide: bedding, feed, worms, moisture, harvest signs and the small mistakes that make compost smell.",
    category: "Guides",
    readTime: "8 min read",
    date: "2026-06-30",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/process-diagram.jpg",
    coverAlt: "Simple visual guide showing the vermicomposting process",
    primaryKeyword: "process of vermicomposting",
    keywords: [
      "process of vermicomposting",
      "vermicomposting pdf",
      "earthworm for vermicompost",
      "vermi khad",
      "vermicompost process",
      "how to make vermicompost at home",
    ],
    summary:
      "Vermicomposting needs composting worms, shade, moisture, air and patient curing to turn soft waste into dark vermi khad.",
    component: lazy(
      () => import("./posts/process-of-vermicomposting-earthworm-guide")
    ),
  },
  {
    slug: "fertilizer-for-tomato-plant",
    title: "Fertilizer for Tomato Plant: Organic Feeding Schedule for Pots",
    seoTitle: "Fertilizer for Tomato Plant | Organic Pot Guide",
    metaDescription:
      "Use this fertilizer for tomato plant schedule for Indian pots, with vermicompost doses, potting mix, flowering support and organic feeding mistake fixes.",
    excerpt:
      "Tomatoes need steady feeding, not one rescue dose. Use this stage-by-stage vermicompost routine for pots and grow bags.",
    category: "Plant Care",
    readTime: "7 min read",
    date: "2026-06-30",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-table.webp",
    coverAlt: "Tomato plant growing in a pot with organic fertilizer",
    primaryKeyword: "fertilizer for tomato plant",
    keywords: [
      "fertilizer for tomato plant",
      "best fertilizer for tomato",
      "vermicompost for tomato plant",
      "organic fertilizers",
      "natural plant fertilizer",
      "tomato potting mix",
    ],
    summary:
      "Tomato plants in pots need airy soil, vermicompost at planting and measured top dressing every 20-30 days once flowers and fruit begin.",
    component: lazy(() => import("./posts/fertilizer-for-tomato-plant")),
  },
  {
    slug: "tomato-plant-came-back-after-i-changed-one-thing",
    title: "Tomato Plant Dying? The One Change That Brought Mine Back",
    seoTitle: "Tomato Plant Dying? Organic Revival Guide",
    metaDescription:
      "Revive a stressed tomato plant with yellow leaves, brown tips or fertilizer burn using plain-water flushing, drainage checks and measured vermicompost.",
    excerpt:
      "Yellow leaves, brown tips, wet soil, no new growth: the plain-water flush and vermicompost top dressing that helped my tomato plant recover.",
    category: "Stories",
    readTime: "8 min read",
    date: "2026-01-22",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-table.webp",
    coverAlt: "A tomato plant brought back to life with organic vermicompost",
    primaryKeyword: "tomato plant dying",
    keywords: [
      "tomato plant dying",
      "tomato plant not growing India",
      "how to revive tomato plant",
      "tomato plant yellow leaves brown tips",
      "tomato plant fertilizer burn",
      "organic fertilizer for tomato plants India",
      "burned roots fertilizer",
      "vermicompost for tomato plant",
    ],
    summary:
      "A tomato plant with fertilizer burn often needs less feeding first: stop chemicals, flush the pot, then add a light vermicompost top dressing.",
    emotional: true,
    component: lazy(
      () => import("./posts/tomato-plant-came-back-after-i-changed-one-thing")
    ),
  },
  {
    slug: "vermicompost-vs-cow-dung-vs-chemical-fertilizer",
    title: "Vermicompost vs. cow dung manure vs. chemical fertilizer — an honest comparison",
    seoTitle: "Vermicompost vs Cow Dung vs Chemical Fertilizer",
    metaDescription:
      "Compare vermicompost, cow dung manure and chemical fertilizer for Indian pots, terrace gardens and outdoor beds, including burn risk, speed and best use.",
    excerpt:
      "Forget the packet claims. Here is what each fertilizer actually does to your soil, your plant and your wallet.",
    category: "Comparisons",
    readTime: "8 min read",
    date: "2026-01-10",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/process-diagram.jpg",
    coverAlt:
      "Side-by-side comparison of vermicompost, cow dung manure and chemical fertilizer",
    primaryKeyword: "vermicompost vs cow dung manure",
    keywords: [
      "vermicompost vs cow dung manure",
      "organic vs chemical fertilizer plants India",
      "which fertilizer is best for home garden India",
      "best fertilizer terrace garden India",
    ],
    summary:
      "Vermicompost suits Indian pots, cow dung manure suits outdoor beds when fully decomposed, and chemical fertilizer fits diagnosed deficiencies.",
    featured: true,
    component: lazy(
      () => import("./posts/vermicompost-vs-cow-dung-vs-chemical-fertilizer")
    ),
  },
  {
    slug: "she-started-her-kitchen-garden-at-58",
    title: "She Started Her Kitchen Garden at 58: A 3-Pot Beginner Plan",
    seoTitle: "Kitchen Garden for Beginners India | 3-Pot Plan",
    metaDescription:
      "See how a 58-year-old beginner started a Delhi balcony kitchen garden with methi, tulsi and chilli, then grew a 12-pot routine in four months.",
    excerpt:
      "Asha began with methi, tulsi and chilli in a 6-foot Delhi balcony. Four months later, she had 12 pots and a routine she actually enjoyed.",
    category: "Stories",
    readTime: "8 min read",
    date: "2025-12-28",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-logo-horizontal.webp",
    coverAlt: "An Indian balcony kitchen garden with herbs, tomatoes and chillies",
    primaryKeyword: "kitchen garden for beginners India",
    keywords: [
      "kitchen garden for beginners India",
      "how to start kitchen garden apartment India",
      "terrace garden first steps",
      "balcony kitchen garden India",
      "3 pot kitchen garden",
      "methi tulsi chilli beginner garden",
      "kitchen garden for senior citizens",
    ],
    summary:
      "A beginner kitchen garden can start with three pots: methi for a quick win, tulsi for daily use and chilli for patience.",
    emotional: true,
    component: lazy(
      () => import("./posts/she-started-her-kitchen-garden-at-58")
    ),
  },
  {
    slug: "right-potting-mix-for-every-plant",
    title: "The right potting mix for every plant — a no-nonsense guide for Indian homes",
    seoTitle: "Potting Mix Recipe India for Every Plant",
    metaDescription:
      "Use simple potting mix recipes for indoor plants, vegetables, flowers, succulents and seedlings with Indian soil, cocopeat and vermicompost ratios.",
    excerpt:
      "Indoor foliage, flowers, vegetables, succulents and seedlings each need a different mix. These five recipes are enough for most homes.",
    category: "Guides",
    readTime: "7 min read",
    date: "2025-12-12",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-balcony.webp",
    coverAlt: "Hands mixing potting soil, cocopeat and vermicompost in a bowl",
    primaryKeyword: "potting mix recipe India",
    keywords: [
      "potting mix recipe India",
      "soil mix for indoor plants India",
      "cocopeat vermicompost ratio potting mix",
    ],
    summary:
      "The default Indian home potting mix is 4 scoops soil, 4 scoops cocopeat and 2 scoops vermicompost, then small changes for drainage.",
    component: lazy(() => import("./posts/right-potting-mix-for-every-plant")),
  },
  {
    slug: "we-started-sarvada-because-we-were-lied-to",
    title: "We started Sarvada because we were lied to about our vermicompost",
    seoTitle: "Pure Vermicompost India: No-Silt Water Test",
    metaDescription:
      "Learn the water test for pure vermicompost, why silt-heavy compost hardens pots, and how Sarvada Organic keeps castings filler-free.",
    excerpt:
      "The first bag we bought turned into concrete after one watering. We tested every brand we could find. That is how Sarvada began.",
    category: "Behind the Brand",
    readTime: "7 min read",
    date: "2025-11-29",
    updatedDate: "2026-06-30",
    author: "Sarvada Founder",
    cover: "/sarvada-pack-balcony.webp",
    coverAlt: "Sarvada Organic founder holding genuine, silt-free vermicompost",
    primaryKeyword: "pure vermicompost India no silt",
    keywords: [
      "pure vermicompost India no silt",
      "vermicompost adulteration India",
      "best vermicompost brand India honest",
    ],
    summary:
      "Pure vermicompost should stay flaky in water, smell earthy and never turn your pot into a hard block after one watering.",
    featured: true,
    emotional: true,
    component: lazy(
      () => import("./posts/we-started-sarvada-because-we-were-lied-to")
    ),
  },
  {
    slug: "vermiwash-what-it-is-how-to-use",
    title: "Vermiwash: What It Is and How to Dilute It",
    seoTitle: "Vermiwash Uses, Dilution and Spray Guide",
    metaDescription:
      "Learn what vermiwash is, how to dilute it safely for foliar spray or soil drench, and when Indian home plants should or should not use it.",
    excerpt:
      "Use 1 cap vermiwash with 10 caps water for most plants. Here is the spray-bottle, spoon and soil-drench guide.",
    category: "Plant Care",
    readTime: "8 min read",
    date: "2025-11-14",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-table.webp",
    coverAlt: "Spraying diluted vermiwash on leafy green plants",
    primaryKeyword: "vermiwash uses plants India",
    keywords: [
      "vermiwash uses plants India",
      "how to use vermiwash",
      "how to dilute vermiwash",
      "vermiwash dilution for plants",
      "vermiwash foliar spray",
      "vermiwash soil drench",
      "vermiwash vs vermicompost",
    ],
    summary:
      "Vermiwash is a light liquid from a vermicompost bed. Dilute it before using it as a leaf spray or mild soil drench.",
    component: lazy(() => import("./posts/vermiwash-what-it-is-how-to-use")),
  },
  {
    slug: "what-growing-your-own-food-does-to-you",
    title: "What growing your own food does to you that nobody talks about",
    seoTitle: "Benefits of Growing Your Own Food at Home",
    metaDescription:
      "Explore the mental, practical and family benefits of growing food at home, with research-backed reasons to start a small Indian balcony garden.",
    excerpt:
      "Not a how-to. Just an honest essay about what a few balcony pots quietly change in your day, your food and your attention.",
    category: "Stories",
    readTime: "6 min read",
    date: "2025-10-30",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-logo-horizontal.webp",
    coverAlt: "Morning light falling on a peaceful home balcony garden",
    primaryKeyword: "benefits of growing your own food India",
    keywords: [
      "benefits of growing your own food India",
      "gardening mental health benefits India",
      "home gardening apartment India",
    ],
    summary:
      "Growing your own food changes attention, routine and food-waste habits before it changes the grocery bill.",
    emotional: true,
    component: lazy(
      () => import("./posts/what-growing-your-own-food-does-to-you")
    ),
  },
  {
    slug: "indian-gardening-calendar-month-by-month",
    title: "The complete season-by-season gardening calendar for Indian home gardeners",
    seoTitle: "Gardening Calendar India: Month-by-Month Guide",
    metaDescription:
      "Plan an Indian kitchen garden by Rabi, Zaid and Kharif seasons with month-by-month planting, feeding, watering and city-specific tips.",
    excerpt:
      "Rabi, Zaid, Kharif: three growing seasons, twelve months and a practical planner for what to plant and when to feed.",
    category: "Seasonal",
    readTime: "9 min read",
    date: "2025-10-09",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-logo-horizontal.webp",
    coverAlt: "Seasonal Indian home garden — monsoon green leafy vegetables",
    primaryKeyword: "gardening calendar India month by month",
    keywords: [
      "when to plant vegetables India",
      "gardening calendar India month by month",
      "monsoon garden India what to plant",
    ],
    summary:
      "Plan Indian home gardens around Rabi from October to February, Zaid from March to May and Kharif from June to September.",
    featured: true,
    component: lazy(
      () => import("./posts/indian-gardening-calendar-month-by-month")
    ),
  },
  {
    slug: "10-mistakes-every-new-plant-parent-makes",
    title: "10 mistakes every new plant parent makes (and how to not make them)",
    seoTitle: "Plant Care Mistakes: 10 Beginner Fixes",
    metaDescription:
      "Avoid the 10 common plant care mistakes that kill beginner plants in India, from overwatering and poor drainage to silt-heavy compost.",
    excerpt:
      "Overwatering, garden soil straight in pots, cheap fertilizer with silt: the ten quiet plant-killers and the fix for each.",
    category: "Beginner",
    readTime: "8 min read",
    date: "2025-09-22",
    updatedDate: "2026-06-30",
    author: "Sarvada Farm Team",
    cover: "/sarvada-pack-table.webp",
    coverAlt: "Wilting plant being revived with proper care and organic fertilizer",
    primaryKeyword: "plant care mistakes India beginners",
    keywords: [
      "plant care mistakes India beginners",
      "why are my plants dying India",
      "overwatering underwatering plants India",
    ],
    summary:
      "Most beginner plant deaths come from watering, drainage, light, soil and feeding mistakes. Fix them one at a time.",
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
