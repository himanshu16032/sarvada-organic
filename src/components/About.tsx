import { Target, Award, Users } from "lucide-react";
import processImage from "@/assets/process-diagram.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Sarvada Organic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to sustainable agriculture and organic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Sarvada Organic, we believe every plant deserves the chance to
              reach its full potential. Our mission is to provide gardeners and
              farmers with the highest quality organic fertilizer that not only
              nourishes plants but also enriches the soil for generations to come.
            </p>
            <p className="text-foreground leading-relaxed mb-8">
              "Sarvada" means "always" or "forever" in Sanskrit—a testament to our
              commitment to sustainable, lasting solutions for healthy plant growth
              and environmental stewardship.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Quality First</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">100% Organic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Trust Built</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={processImage}
              alt="Vermicomposting process diagram showing how earthworms create nutrient-rich compost"
              className="rounded-xl shadow-soft w-full"
            />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Us?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-3">
                Premium Quality Control
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Every batch undergoes rigorous testing to ensure optimal nutrient
                content and purity. We maintain strict quality standards from
                production to packaging.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-3">
                Sustainable Practices
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Our vermicomposting facility operates with minimal environmental
                impact, recycling organic waste into valuable fertilizer that
                completes nature's cycle.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-3">
                Expert Guidance
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We provide comprehensive usage instructions and ongoing support to
                help you get the best results from our vermicompost.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-3">
                Proven Results
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Trusted by home gardeners and professional cultivators alike, our
                vermicompost has a track record of transforming gardens across the
                region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
