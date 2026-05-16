import { Leaf } from "lucide-react";

export default function BlogLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-cream-100">
      <div className="flex flex-col items-center gap-3 text-forest-700">
        <span className="grid h-12 w-12 animate-pulse place-items-center rounded-2xl bg-forest-700 text-cream-50">
          <Leaf className="h-6 w-6" />
        </span>
        <p className="text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}
