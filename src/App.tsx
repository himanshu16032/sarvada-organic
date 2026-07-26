import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./sections/Hero";
import CategoryStrip from "./sections/CategoryStrip";
import TrustStrip from "./sections/TrustStrip";
import Products from "./sections/Products";
import Footer from "./components/Footer";
import { lazy, Suspense, type ReactNode } from "react";
import { useDocumentMeta } from "./blog/BlogChrome";
import {
  SITE_LASTMOD,
  SITE_URL,
  WEBSITE_ID,
  breadcrumbSchema,
  organizationSchema,
  storeSchema,
  websiteSchema,
} from "./lib/aeo";

const BrandMarquee = lazy(() => import("./sections/BrandMarquee"));
const About = lazy(() => import("./sections/About"));
const PressStats = lazy(() => import("./sections/PressStats"));
const Process = lazy(() => import("./sections/Process"));
const LabReport = lazy(() => import("./sections/LabReport"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Blog = lazy(() => import("./sections/Blog"));
const Newsletter = lazy(() => import("./sections/Newsletter"));
const SeoCopy = lazy(() => import("./components/SeoCopy"));

function Deferred({ children }: { children: ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

function HomeMeta() {
  useDocumentMeta({
    title: "Buy Pure Vermicompost Online | Sarvada Organic",
    description:
      "Buy lab-certified vermicompost online in India — Nitrogen 3.16% (SV Testing Laboratories, NABL). No silt, no preservatives. Free delivery above ₹499. Updated July 2026.",
    canonical: `${SITE_URL}/`,
    type: "website",
    modifiedTime: SITE_LASTMOD,
    keywords: [
      "buy vermicompost",
      "vermicompost online",
      "sarvada organic",
      "lab tested vermicompost",
    ],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      storeSchema(),
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: "Buy Pure Vermicompost Online | Sarvada Organic",
        isPartOf: { "@id": WEBSITE_ID },
        dateModified: SITE_LASTMOD,
        inLanguage: "en-IN",
      },
      breadcrumbSchema([{ name: "Home", item: SITE_URL }]),
    ],
  });
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomeMeta />
      <AnnouncementBar />
      <Header />
      <CategoryStrip />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Deferred>
          <BrandMarquee />
        </Deferred>
        <Deferred>
          <About />
        </Deferred>
        <Deferred>
          <PressStats />
        </Deferred>
        <Deferred>
          <Process />
        </Deferred>
        <Deferred>
          <LabReport />
        </Deferred>
        <Deferred>
          <Testimonials />
        </Deferred>
        <Deferred>
          <FAQ />
        </Deferred>
        <Deferred>
          <Blog />
        </Deferred>
        <Deferred>
          <Newsletter />
        </Deferred>
        <Deferred>
          <SeoCopy />
        </Deferred>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
