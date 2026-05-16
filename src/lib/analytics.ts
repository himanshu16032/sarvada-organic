import posthog from "posthog-js";
import { useEffect, useRef } from "react";

export const ANALYTICS_ENABLED = Boolean(
  import.meta.env.VITE_PUBLIC_POSTHOG_KEY
);

type Props = Record<string, unknown>;

function safeWindowProps(): Props {
  if (typeof window === "undefined") return {};
  return {
    $current_url: window.location.href,
    page_path: window.location.pathname + window.location.hash,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  };
}

export function track(event: string, props: Props = {}) {
  try {
    posthog.capture(event, { ...safeWindowProps(), ...props });
  } catch {
    /* swallow — analytics must never break UX */
  }
}

export function trackPageView(path?: string) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture("$pageview", {
      $current_url: window.location.href,
      page_path: path ?? window.location.pathname + window.location.hash,
      page_title: document.title,
      referrer: document.referrer,
    });
  } catch {
    /* swallow */
  }
}

export function identifyVisitor(distinctId: string, props: Props = {}) {
  try {
    posthog.identify(distinctId, props);
  } catch {
    /* swallow */
  }
}

export function useTrackVisible<T extends HTMLElement = HTMLElement>(
  eventName: string,
  props: Props = {},
  opts: { threshold?: number; once?: boolean } = {}
) {
  const ref = useRef<T | null>(null);
  const fired = useRef(false);
  const propsKey = JSON.stringify(props);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const once = opts.once ?? true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            track(eventName, props);
            if (once) io.disconnect();
          }
        }
      },
      { threshold: opts.threshold ?? 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eventName, propsKey, opts.threshold, opts.once]);

  return ref;
}

const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

export function installScrollDepthTracker() {
  if (typeof window === "undefined") return;
  const fired = new Set<number>();
  let pathSnapshot = window.location.pathname + window.location.hash;

  const reset = () => {
    fired.clear();
    pathSnapshot = window.location.pathname + window.location.hash;
  };

  const onScroll = () => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
    for (const m of SCROLL_MILESTONES) {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        track("scroll_depth_reached", {
          depth_pct: m,
          page_path: pathSnapshot,
        });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("popstate", reset);
  window.addEventListener("hashchange", reset);
}

export function installOutboundLinkTracker() {
  if (typeof window === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (!href) return;
      const isMail = href.startsWith("mailto:");
      const isTel = href.startsWith("tel:");
      const isExternal =
        /^(https?:)?\/\//i.test(href) && !href.includes(window.location.host);
      if (!isMail && !isTel && !isExternal) return;
      track("outbound_link_clicked", {
        href,
        kind: isMail ? "mailto" : isTel ? "tel" : "external",
        target: link.target || "_self",
        text: link.innerText?.trim().slice(0, 120) || "",
      });
    },
    true
  );
}

export function installVisibilityTracker() {
  if (typeof document === "undefined") return;
  document.addEventListener("visibilitychange", () => {
    track("page_visibility_changed", {
      state: document.visibilityState,
    });
  });
}

/**
 * Delegated tracker: walks up from the clicked element looking for the
 * nearest ancestor with a `data-event` attribute. Any sibling attributes
 * of the form `data-event-<key>` become event properties (kebab-case is
 * converted to snake_case, JSON values are parsed).
 *
 * Usage in any future component — no import, no `track()` call needed:
 *   <a data-event="cta_clicked" data-event-cta="hero_shop" data-event-position="0">
 *   <button data-event="filter_applied" data-event-tags='["wood","fresh"]'>
 */
export function installDataAttributeTracker() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-event]"
      ) as HTMLElement | null;
      if (!el) return;
      const event = el.getAttribute("data-event");
      if (!event) return;
      const props: Record<string, unknown> = {};
      for (const attr of Array.from(el.attributes)) {
        if (!attr.name.startsWith("data-event-")) continue;
        const key = attr.name.slice("data-event-".length).replace(/-/g, "_");
        const raw = attr.value;
        try {
          props[key] = JSON.parse(raw);
        } catch {
          props[key] = raw;
        }
      }
      track(event, props);
    },
    true
  );
}
