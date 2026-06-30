import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../blog/BlogChrome";
import {
  EMAIL,
  ORG_ID,
  SITE_URL,
  breadcrumbSchema,
  organizationSchema,
} from "../lib/aeo";

type PolicyPageData = {
  slug: string;
  title: string;
  description: string;
  updatedDate: string;
  schemaType: "WebPage" | "ContactPage";
  sections: { heading: string; items: string[] }[];
};

const POLICIES: Record<string, PolicyPageData> = {
  "shipping-policy": {
    slug: "shipping-policy",
    title: "Shipping Policy",
    description:
      "Sarvada Organic ships vermicompost and plant-care products across India, with free delivery above ₹499 and Cash on Delivery where available.",
    updatedDate: "2026-07-01",
    schemaType: "WebPage",
    sections: [
      {
        heading: "Shipping area",
        items: [
          "We ship Sarvada Organic products across India.",
          "Free delivery applies on eligible orders above ₹499.",
          "Cash on Delivery is available on supported pincodes.",
        ],
      },
      {
        heading: "Dispatch and delivery",
        items: [
          "Most available products are packed fresh and dispatched within 1-2 business days.",
          "Typical delivery time after dispatch is 3-7 business days, depending on pincode and courier movement.",
          "Bulk orders may need extra packing time because vermicompost is heavy and packed by weight.",
        ],
      },
    ],
  },
  "returns-refunds": {
    slug: "returns-refunds",
    title: "Returns and Refunds",
    description:
      "Sarvada Organic accepts return requests for unopened packs within 7 days and replaces damaged or wrong items after order verification.",
    updatedDate: "2026-07-01",
    schemaType: "WebPage",
    sections: [
      {
        heading: "Return window",
        items: [
          "Unopened packs can be returned within 7 days of delivery.",
          "Opened organic products cannot be returned because soil products can be contaminated after use.",
          "Damaged, leaking or wrong items are eligible for replacement after photo verification.",
        ],
      },
      {
        heading: "How to request help",
        items: [
          `Email ${EMAIL} with your order ID, delivery date and photos if the item arrived damaged.`,
          "Refunds are processed to the original payment method after the return is accepted.",
          "Cash on Delivery refunds may require bank or UPI details from the customer.",
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "Sarvada Organic uses customer information to process orders, support deliveries, answer questions and improve the store experience.",
    updatedDate: "2026-07-01",
    schemaType: "WebPage",
    sections: [
      {
        heading: "Information we use",
        items: [
          "We use name, email, phone, address and order details to process purchases and delivery support.",
          "Payment details are handled by payment providers such as Razorpay and are not stored as raw card data by Sarvada Organic.",
          "Analytics tools may collect page views, clicks and device information to improve the site.",
        ],
      },
      {
        heading: "Customer control",
        items: [
          `Customers can email ${EMAIL} to request corrections or deletion of account-related information where legally possible.`,
          "We do not sell customer personal data.",
          "Transactional messages may still be sent for orders, delivery and support.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    description:
      "Sarvada Organic's terms explain product use, pricing, order acceptance, delivery support and customer responsibilities.",
    updatedDate: "2026-07-01",
    schemaType: "WebPage",
    sections: [
      {
        heading: "Product use",
        items: [
          "Sarvada Organic products are for gardening and plant-care use only.",
          "Use product quantities as directed on the product page or blog guide.",
          "Results vary by plant condition, soil, weather, light, watering and drainage.",
        ],
      },
      {
        heading: "Orders and pricing",
        items: [
          "Prices, offers and availability may change without notice.",
          "An order is accepted after payment confirmation or Cash on Delivery confirmation.",
          "Sarvada Organic may cancel an order if an address is incomplete, a pincode is not serviceable or a listing error is found.",
        ],
      },
    ],
  },
  "corrections-policy": {
    slug: "corrections-policy",
    title: "Corrections Policy",
    description:
      "Sarvada Organic reviews plant-care and vermicompost content when readers report factual issues, outdated guidance or unclear instructions.",
    updatedDate: "2026-07-01",
    schemaType: "WebPage",
    sections: [
      {
        heading: "How we update content",
        items: [
          "Blog posts show published and updated dates when the guidance changes.",
          "We correct factual errors, unclear quantities, broken links and outdated product information.",
          "Gardening advice is reviewed against farm experience, product use and cited agricultural references where available.",
        ],
      },
      {
        heading: "Report a correction",
        items: [
          `Email ${EMAIL} with the page URL, the sentence in question and the source or experience behind your correction.`,
          "We review correction requests before changing published content.",
          "Major content updates may change the updated date on the article.",
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    title: "Contact Sarvada Organic",
    description:
      "Contact Sarvada Organic for product questions, order support, bulk vermicompost enquiries, corrections and plant-care guidance.",
    updatedDate: "2026-07-01",
    schemaType: "ContactPage",
    sections: [
      {
        heading: "Customer support",
        items: [
          `Email: ${EMAIL}`,
          "Support covers orders, product questions, delivery issues, corrections and bulk vermicompost enquiries.",
          "Please include your order ID for delivery or refund questions.",
        ],
      },
      {
        heading: "Business information",
        items: [
          "Brand: Sarvada Organic",
          "Legal name: Sarvada Organic Pvt. Ltd.",
          "Address: Sarvada Organic Farm, India",
        ],
      },
    ],
  },
};

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? POLICIES[slug] : undefined;

  if (!page) return <Navigate to="/" replace />;

  return <PolicyContent page={page} />;
}

function PolicyContent({ page }: { page: PolicyPageData }) {
  const canonical = `${SITE_URL}/${page.slug}`;

  useDocumentMeta({
    title: `${page.title} — Sarvada Organic`,
    description: page.description,
    canonical,
    type: "website",
    modifiedTime: page.updatedDate,
    keywords: ["sarvada organic", page.title.toLowerCase(), "vermicompost India"],
    jsonLd: [
      organizationSchema(),
      {
        "@context": "https://schema.org",
        "@type": page.schemaType,
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        dateModified: page.updatedDate,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
        ...(page.slug === "contact" && {
          mainEntity: {
            "@type": "Organization",
            "@id": ORG_ID,
          },
        }),
      },
      breadcrumbSchema([
        { name: "Home", item: SITE_URL },
        { name: page.title, item: canonical },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main className="container-wide py-10 md:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-700 hover:text-peach-500 md:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>

        <section className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-peach-500">
            Updated {new Date(page.updatedDate).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {page.description}
          </p>
        </section>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-7"
            >
              <h2 className="text-xl font-semibold text-forest-800">
                {section.heading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-cream-200 bg-cream-50 p-6 md:p-7">
          <h2 className="text-xl font-semibold text-forest-800">
            Need help?
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800"
          >
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { POLICIES };
