import { useEffect, type ReactNode } from "react";
import { attachPosthog } from "../lib/analytics";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as
  | string
  | undefined;
const POSTHOG_HOST =
  (import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string | undefined) ??
  "https://us.i.posthog.com";

const DEFER_MS = 2500;

function scheduleAfterFirstPaint(fn: () => void) {
  const run = () => {
    const ric =
      window.requestIdleCallback ??
      ((cb: IdleRequestCallback) =>
        window.setTimeout(() => cb({} as IdleDeadline), 1));
    ric(() => {
      window.setTimeout(fn, DEFER_MS);
    });
  };

  if (document.readyState === "complete") {
    run();
    return;
  }
  window.addEventListener("load", run, { once: true });
}

export default function DeferredPostHog({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY) return;

    let cancelled = false;

    scheduleAfterFirstPaint(() => {
      void import("posthog-js").then(({ default: posthog }) => {
        if (cancelled) return;
        if (posthog.__loaded) {
          attachPosthog({
            capture: (event, props) => posthog.capture(event, props),
            identify: (id, props) => posthog.identify(id, props),
          });
          return;
        }
        posthog.init(POSTHOG_KEY, {
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
          loaded: (client) => {
            attachPosthog({
              capture: (event, props) => client.capture(event, props),
              identify: (id, props) => client.identify(id, props),
            });
            if (import.meta.env.DEV) {
              console.info("[posthog] deferred load ready");
            }
          },
        });
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <>{children}</>;
}
