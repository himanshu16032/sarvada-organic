import { Package, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import packagingImage from "@/assets/packaging-reference.jpeg";

const products = [
  {
    weight: "5 KG",
    description: "Perfect for small home gardens and potted plants",
    price: "Ideal for balcony gardens",
    image: "https://images.unsplash.com/photo-1585316219795-c4f372df1e93?w=400&h=400&fit=crop",
  },
  {
    weight: "10 KG",
    description: "Great for medium-sized gardens and multiple plants",
    price: "Most popular choice",
    featured: true,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
  },
  {
    weight: "25 KG",
    description: "Best value for large gardens and professional use",
    price: "Professional grade",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=400&fit=crop",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Vermicompost Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect size for your garden's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.weight}
              className={`overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in ${
                product.featured
                  ? "border-2 border-primary bg-gradient-to-br from-card to-primary/5"
                  : "bg-card"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.featured && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={`Vermicompost ${product.weight} package`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-10 w-10 text-primary" />
                  <h3 className="font-display text-3xl font-bold text-foreground">
                    {product.weight}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-3">{product.description}</p>
                
                <p className="text-primary font-semibold mb-4">{product.price}</p>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                Premium Quality Packaging
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our vermicompost comes in durable, eco-friendly packaging that keeps
                the nutrients intact. Each bag is carefully sealed to maintain
                freshness and quality.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">Moisture-proof packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">Easy-to-carry handles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground">Clear usage instructions</span>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <img
                src={packagingImage}
                alt="Sarvada Organic Vermicompost packaging with vibrant green bag"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
