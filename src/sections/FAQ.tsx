import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is vermicompost and why is it better than regular fertilizer?",
    a: "Vermicompost is 100% organic plant food made by earthworms digesting organic matter. Unlike chemical fertilizers, it releases nutrients slowly, contains billions of beneficial microbes, humic acid and trace minerals, improves soil aeration, and never burns roots. Sarvada Organic vermicompost has no silt and no preservatives — only pure earthworm castings.",
  },
  {
    q: "Is Sarvada Organic the same as Sarva Organic or Sarvaorganic?",
    a: "Yes. Sarvada Organic is also commonly searched as 'Sarva Organic', 'Sarvaorganic' or simply 'Sarvada'. We are India's homegrown vermicompost brand serving plant parents since 2018.",
  },
  {
    q: "Where can I buy Sarvada Organic vermicompost online in India?",
    a: "You can buy Sarvada Organic vermicompost directly from sarvadaorganic.com. We deliver pan-India with free shipping on orders above ₹499, Cash on Delivery available, and next-day dispatch from our farm.",
  },
  {
    q: "How much vermicompost does my plant need?",
    a: "For small indoor pots (6–8 inch), mix 200–300 grams of Sarvada vermicompost into the top soil once a month. For 12-inch pots and balcony beds, use 500g–1kg monthly. For terrace gardens and grow bags, 1kg per square foot every 30–45 days works best.",
  },
  {
    q: "Is Sarvada vermicompost safe for kitchen herbs and edible plants?",
    a: "Absolutely. Our vermicompost is 100% organic, chemical-free and preservative-free. It is completely safe for tulsi, mint, coriander, tomatoes, chillies, methi and all edible plants. You can use it freely on your kitchen garden and terrace garden.",
  },
  {
    q: "What is the difference between vermicompost and cow dung manure?",
    a: "Cow dung manure is raw or partially decomposed waste with higher salt content and inconsistent nutrients. Vermicompost is the next stage — cow dung digested by earthworms — making it richer in NPK, packed with living microbes, fully matured, odour-free and gentler on roots.",
  },
  {
    q: "How is Sarvada Organic vermicompost made?",
    a: "We feed organic cow dung and farm waste to native earthworm species. Over 60–90 days they convert it into rich castings. We then sun-cure and hand-sieve every batch — never adding silt, sand or preservatives — and pack it fresh in breathable bags so microbes stay alive.",
  },
  {
    q: "What are the available pack sizes and prices?",
    a: "Sarvada Organic vermicompost is available in 1 kg (₹149), 5 kg (₹599), 10 kg (₹1,099) and 25 kg (₹2,499). We also offer a monthly subscription at ₹509/month for the 5kg pack, with free priority delivery and skip-anytime flexibility.",
  },
  {
    q: "Does Sarvada Organic offer Cash on Delivery and returns?",
    a: "Yes. We offer Cash on Delivery across India, UPI/Visa/Mastercard/RuPay/Razorpay payments, free delivery above ₹499, and a 7-day no-questions-asked return policy if the pack is unopened.",
  },
  {
    q: "What other organic products does Sarvada sell?",
    a: "Alongside vermicompost we are rolling out Plant Growth Serum, Liquid Vermiwash, Neem-Karanja Cake and a Seed Starter Mix. All Sarvada products are 100% organic, preservative-free and hand-made on our farm.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    script.id = "faq-schema";
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, []);

  return (
    <section id="faq" className="bg-cream-100 py-12 md:py-20">
      <div className="container-wide">
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-forest-800 md:text-5xl">
              Questions, <span className="italic text-peach-500">answered</span>.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Everything plant parents ask us about vermicompost, organic
              fertilizer and Sarvada Organic.
            </p>
            <a
              href="mailto:hello@sarvadaorganic.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-forest-800"
            >
              Ask us anything →
            </a>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-2.5">
              {FAQS.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <li
                    key={f.q}
                    className="overflow-hidden rounded-2xl border border-cream-200 bg-cream-50"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIdx(isOpen ? null : i)}
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
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:text-[15px]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
