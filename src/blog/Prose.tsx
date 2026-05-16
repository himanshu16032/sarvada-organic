import { useEffect, type ReactNode } from "react";
import { Plus, Minus, Quote as QuoteIcon } from "lucide-react";
import { useState } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-[17px] leading-[1.75] text-forest-800/95 md:text-[18px]">
      {children}
    </div>
  );
}

export function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 font-display text-2xl font-semibold leading-tight tracking-tight text-forest-800 md:mt-16 md:text-4xl"
    >
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="mt-8 font-display text-xl font-semibold leading-snug text-forest-800 md:mt-10 md:text-2xl"
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 text-[17px] leading-[1.75] md:text-[18px]">{children}</p>;
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 font-display text-xl font-medium leading-snug text-forest-800 md:text-2xl">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-5 space-y-2.5 pl-1 text-[17px] leading-[1.75] md:text-[18px]">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach-400" />
      <span>{children}</span>
    </li>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return (
    <aside className="my-10 rounded-3xl border-l-4 border-peach-400 bg-cream-50 p-6 md:p-8">
      <QuoteIcon className="h-6 w-6 text-peach-400" />
      <blockquote className="mt-3 font-display text-xl leading-snug text-forest-800 md:text-2xl">
        {children}
      </blockquote>
    </aside>
  );
}

export function Callout({
  title,
  children,
  tone = "sage",
}: {
  title: string;
  children: ReactNode;
  tone?: "sage" | "peach" | "forest";
}) {
  const styles = {
    sage: "border-sage-200 bg-sage-100/50",
    peach: "border-peach-200 bg-peach-100/60",
    forest: "border-forest-200 bg-forest-50",
  }[tone];
  return (
    <div className={`my-8 rounded-3xl border ${styles} p-6 md:p-7`}>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-peach-500 md:text-xs">
        {title}
      </p>
      <div className="mt-2 text-[15px] leading-[1.7] text-forest-800/90 md:text-base">
        {children}
      </div>
    </div>
  );
}

export function Table({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-cream-300/70 bg-cream-50">
      <table className="w-full text-left text-sm md:text-base">
        {caption && (
          <caption className="bg-cream-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-peach-500">
            {caption}
          </caption>
        )}
        <thead className="bg-forest-700 text-cream-50">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-[12px] font-semibold uppercase tracking-wider md:px-5 md:text-xs">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-cream-300/70">
          {rows.map((r, i) => (
            <tr key={i} className="text-forest-800/90">
              {r.map((c, j) => (
                <td key={j} className="px-4 py-3 align-top md:px-5 md:py-4">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BlogFAQ({ items, postSlug }: { items: { q: string; a: string }[]; postSlug: string }) {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `faq-${postSlug}`;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById(`faq-${postSlug}`)?.remove();
    };
  }, [postSlug, items]);

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="font-display text-2xl font-semibold leading-tight text-forest-800 md:text-4xl">
        Frequently asked questions
      </h2>
      <ul className="mt-6 space-y-2.5">
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <li
              key={f.q}
              className="overflow-hidden rounded-2xl border border-cream-300/70 bg-cream-50"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-forest-800 md:px-6 md:py-5 md:text-base"
              >
                <span>{f.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                    isOpen
                      ? "bg-peach-400 text-cream-50"
                      : "bg-cream-200 text-forest-700"
                  }`}
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-[15px] leading-[1.7] text-muted md:px-6 md:text-base">
                    {f.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
