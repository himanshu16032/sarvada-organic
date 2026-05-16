import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MobileBottomNav from "./components/MobileBottomNav";
import Hero from "./sections/Hero";
import CategoryStrip from "./sections/CategoryStrip";
import TrustStrip from "./sections/TrustStrip";
import PressStats from "./sections/PressStats";
import Products from "./sections/Products";
import About from "./sections/About";
import Subscribe from "./sections/Subscribe";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Newsletter from "./sections/Newsletter";
import Footer from "./components/Footer";

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
        <About />
        <Subscribe />
        <PressStats />
        <Process />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
