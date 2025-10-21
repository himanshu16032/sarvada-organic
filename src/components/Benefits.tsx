import { Sprout, Shield, Leaf, TrendingUp, Droplets, Heart } from "lucide-react";
import transformationImage from "@/assets/plant-transformation.jpg";
import vermicompostImage from "@/assets/vermicompost-hands.jpg";

const benefits = [
  {
    icon: Sprout,
    title: "Enhanced Growth",
    description: "Provides essential nutrients that help plants reach their maximum potential",
  },
  {
    icon: Shield,
    title: "Disease Resistance",
    description: "Strengthens plant immunity and protects against common diseases",
  },
  {
    icon: Droplets,
    title: "Better Water Retention",
    description: "Improves soil structure to retain moisture and reduce watering needs",
  },
  {
    icon: TrendingUp,
    title: "Increased Yield",
    description: "Boosts flowering and fruiting for abundant, healthy harvests",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Completely natural with no harmful chemicals or synthetic additives",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description: "Sustainable solution that enriches soil while protecting the environment",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Power of Vermicompost
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our premium organic fertilizer transforms your garden
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Transformation Story */}
        <div className="bg-gradient-growth rounded-2xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card/95">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                See the Transformation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Experience the remarkable difference vermicompost makes. Watch your
                plants transform from struggling seedlings to thriving, vibrant
                specimens bursting with life and vitality.
              </p>
              <p className="text-foreground font-medium mb-4">
                Our customers report:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">2-3x faster growth rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Healthier, greener foliage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">More abundant flowers and fruits</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src={transformationImage}
                alt="Before and after: small plant transformed into large, healthy plant with vermicompost"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={vermicompostImage}
                alt="Hands holding nutrient-rich vermicompost with earthworms"
                className="rounded-xl shadow-soft w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nature's Perfect Fertilizer
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Vermicompost is created through the natural decomposition of organic
                matter by earthworms. This process produces a nutrient-rich, living
                fertilizer that's teeming with beneficial microorganisms.
              </p>
              <p className="text-foreground leading-relaxed">
                Each handful contains millions of helpful bacteria and enzymes that
                work together to create the perfect growing environment for your
                plants. It's not just food for plants—it's a complete ecosystem that
                nurtures growth from root to bloom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
