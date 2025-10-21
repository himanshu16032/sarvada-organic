import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <div>
                <h3 className="font-display font-bold text-xl">Sarvada Organic</h3>
                <p className="text-sm opacity-80">Nurturing Nature's Full Potential</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-md">
              Premium organic vermicompost for healthier gardens and thriving plants.
              Committed to sustainable agriculture and environmental stewardship.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#products" className="hover:opacity-100 transition-opacity">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:opacity-100 transition-opacity">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Sarvada Organic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
