import { Truck, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Truck, text: "Free delivery on orders above ₹499" },
  { icon: Sparkles, text: "Flat 10% off your first order, code WELCOME10" },
  { icon: ShieldCheck, text: "Cash on Delivery available · 7-day return" },
  { icon: Truck, text: "Next-day dispatch from our farm" },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-forest-800 text-cream-100">
      <div className="overflow-hidden">
        <div className="flex animate-[abscroll_30s_linear_infinite] gap-10 whitespace-nowrap py-2 text-[11px] font-medium md:text-xs">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((it, i) => (
            <span key={i} className="flex items-center gap-2">
              <it.icon className="h-3.5 w-3.5 text-peach-300" />
              {it.text}
              <span className="ml-8 h-1 w-1 rounded-full bg-peach-300/60" />
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes abscroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
