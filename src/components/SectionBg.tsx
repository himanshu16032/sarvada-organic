type Variant = "peach" | "sage" | "forest" | "warm" | "cool" | "split";

type BlobConfig = {
  className: string;
  color: string;
};

const VARIANTS: Record<Variant, BlobConfig[]> = {
  peach: [
    { className: "-left-32 -top-20 h-72 w-72 md:h-[28rem] md:w-[28rem]", color: "bg-peach-200/55" },
    { className: "-right-24 bottom-10 h-64 w-64 md:h-96 md:w-96", color: "bg-sage-200/55" },
  ],
  sage: [
    { className: "-left-20 top-10 h-72 w-72 md:h-96 md:w-96", color: "bg-sage-200/60" },
    { className: "-right-32 -bottom-24 h-80 w-80 md:h-[28rem] md:w-[28rem]", color: "bg-peach-200/40" },
  ],
  forest: [
    { className: "-right-24 -top-16 h-72 w-72 md:h-96 md:w-96", color: "bg-forest-200/40" },
    { className: "-left-32 bottom-0 h-72 w-72 md:h-96 md:w-96", color: "bg-peach-200/40" },
  ],
  warm: [
    { className: "left-1/4 -top-32 h-80 w-80 md:h-[30rem] md:w-[30rem]", color: "bg-peach-200/50" },
    { className: "-right-20 top-1/3 h-64 w-64 md:h-96 md:w-96", color: "bg-cream-300/70" },
    { className: "-left-24 bottom-0 h-64 w-64 md:h-96 md:w-96", color: "bg-sage-200/50" },
  ],
  cool: [
    { className: "-right-32 top-0 h-80 w-80 md:h-[28rem] md:w-[28rem]", color: "bg-sage-200/55" },
    { className: "left-1/3 -bottom-20 h-72 w-72 md:h-96 md:w-96", color: "bg-peach-200/40" },
  ],
  split: [
    { className: "-left-20 -top-20 h-72 w-72 md:h-[26rem] md:w-[26rem]", color: "bg-peach-200/55" },
    { className: "-right-20 -bottom-20 h-72 w-72 md:h-[26rem] md:w-[26rem]", color: "bg-sage-200/55" },
  ],
};

export default function SectionBg({ variant = "warm" }: { variant?: Variant }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {VARIANTS[variant].map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.color} ${b.className}`}
        />
      ))}
    </div>
  );
}
