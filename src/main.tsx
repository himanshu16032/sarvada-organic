import React, { lazy, Suspense, useEffect } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import BlogLoader from "./blog/BlogLoader";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import PolicyPage from "./pages/PolicyPage";
import DeferredPostHog from "./components/DeferredPostHog";
import {
  trackPageView,
  installScrollDepthTracker,
  installOutboundLinkTracker,
  installVisibilityTracker,
  installDataAttributeTracker,
} from "./lib/analytics";
import "./index.css";

const BlogIndex = lazy(() => import("./blog/BlogIndex"));
const BlogPostPage = lazy(() => import("./blog/BlogPostPage"));

function RouterAnalytics() {
  const location = useLocation();
  const vercelRoute = `${location.pathname}${location.search}${location.hash}`;
  useEffect(() => {
    trackPageView(location.pathname + location.hash);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    installScrollDepthTracker();
    installOutboundLinkTracker();
    installVisibilityTracker();
    installDataAttributeTracker();
  }, []);

  return (
    <>
      <Analytics mode={import.meta.env.DEV ? "development" : "production"} />
      <SpeedInsights route={vercelRoute} framework="vite-react" />
    </>
  );
}

function AppShell() {
  return (
    <BrowserRouter>
      <RouterAnalytics />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<BlogLoader />}>
              <BlogIndex />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<BlogLoader />}>
              <BlogPostPage />
            </Suspense>
          }
        />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/:slug" element={<PolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <DeferredPostHog>
      <AppShell />
    </DeferredPostHog>
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
