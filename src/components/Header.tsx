import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">
              Sarvada Organic
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">
              Nurturing Nature's Full Potential
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("products")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
