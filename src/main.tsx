import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { PostHogProvider } from "@posthog/react";
import App from "./App";
import BlogLoader from "./blog/BlogLoader";
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

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as
  | string
  | undefined;
const POSTHOG_HOST =
  (import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string | undefined) ??
  "https://us.i.posthog.com";

const posthogOptions = {
  api_host: POSTHOG_HOST,
  defaults: "2026-01-30",
  capture_pageview: false,
  capture_pageleave: true,
  autocapture: true,
  persistence: "localStorage+cookie",
  disable_session_recording: false,
  enable_recording_console_log: true,
  session_recording: {
    maskAllInputs: false,
    maskTextSelector: "[data-ph-mask]",
    recordCrossOriginIframes: false,
  },
  loaded: () => {
    if (typeof window !== "undefined" && import.meta.env.DEV) {
      console.info("[posthog] loaded");
    }
  },
} as const;

function RouterAnalytics() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.hash);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    installScrollDepthTracker();
    installOutboundLinkTracker();
    installVisibilityTracker();
    installDataAttributeTracker();
  }, []);

  return null;
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    {POSTHOG_KEY ? (
      <PostHogProvider apiKey={POSTHOG_KEY} options={posthogOptions}>
        <AppShell />
      </PostHogProvider>
    ) : (
      <AppShell />
    )}
  </React.StrictMode>
);
