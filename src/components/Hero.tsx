import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// Using public folder - guaranteed to work
const heroImage = "/hero-plants.jpg";
const transformImage = "/plant-transformation.jpg";
const vermicompostImage = "/vermicompost-hands.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const images = [
    { src: heroImage, alt: "Lush green plants growing in rich soil" },
    { src: transformImage, alt: "Plant transformation with vermicompost" },
    { src: vermicompostImage, alt: "Rich organic vermicompost" },
  ];

  // Debug: Log image sources
  console.log('Hero images:', { heroImage, transformImage, vermicompostImage });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel setApi={setApi} className="w-full h-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-screen object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', image.src, e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', image.src);
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Nurturing Nature's{" "}
            <span className="text-primary">Full Potential</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transform your garden with premium organic vermicompost. Watch your
            plants flourish with nature's most powerful fertilizer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-glow"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">100% Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Nutrient-Rich</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
