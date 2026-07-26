import { useEffect, useRef } from "react";

export const ANALYTICS_ENABLED = Boolean(
  import.meta.env.VITE_PUBLIC_POSTHOG_KEY
);

type Props = Record<string, unknown>;
type CaptureFn = (event: string, props?: Props) => void;

let captureImpl: CaptureFn | null = null;
let identifyImpl: ((id: string, props?: Props) => void) | null = null;
const eventQueue: Array<[string, Props]> = [];

function safeWindowProps(): Props {
  if (typeof window === "undefined") return {};
  return {
    $current_url: window.location.href,
    page_path: window.location.pathname + window.location.hash,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  };
}

export function attachPosthog(api: {
  capture: CaptureFn;
  identify: (id: string, props?: Props) => void;
}) {
  captureImpl = api.capture;
  identifyImpl = api.identify;
  while (eventQueue.length) {
    const [event, props] = eventQueue.shift()!;
    try {
      captureImpl(event, props);
    } catch {
      /* swallow */
    }
  }
}

export function track(event: string, props: Props = {}) {
  const payload = { ...safeWindowProps(), ...props };
  if (captureImpl) {
    try {
      captureImpl(event, payload);
    } catch {
      /* swallow — analytics must never break UX */
    }
    return;
  }
  if (eventQueue.length < 50) eventQueue.push([event, payload]);
}

export function trackPageView(path?: string) {
  if (typeof window === "undefined") return;
  track("$pageview", {
    $current_url: window.location.href,
    page_path: path ?? window.location.pathname + window.location.hash,
    page_title: document.title,
    referrer: document.referrer,
  });
}

export function identifyVisitor(distinctId: string, props: Props = {}) {
  try {
    identifyImpl?.(distinctId, props);
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
