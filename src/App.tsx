import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./sections/Hero";
import CategoryStrip from "./sections/CategoryStrip";
import TrustStrip from "./sections/TrustStrip";
import Products from "./sections/Products";
import Footer from "./components/Footer";
import { lazy, Suspense, type ReactNode } from "react";

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

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
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
