import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, CheckCircle2 } from "lucide-react";
import housingImage from "@/assets/affordable-housing.jpg";

const features = [
  "LIHTC and tax credit financing expertise",
  "Public-private partnership navigation",
  "Community engagement and planning",
  "Sustainable and energy-efficient design",
  "Mixed-income development strategies",
  "Long-term compliance management",
];

const AffordableHousing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={housingImage}
            alt="Affordable Housing Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-sm font-medium mb-6">
              <Home className="h-4 w-4" />
              Affordable Housing Division
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building{" "}
              <span className="text-gradient-gold">Communities</span> That Thrive
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              We create quality, affordable housing that transforms neighborhoods
              and provides safe, comfortable homes for families and individuals.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Partner With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Thoughtful Development for All
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our affordable housing developments combine thoughtful design with
                sustainable practices. We work with communities, government
                agencies, and partners to create housing that enhances
                neighborhoods and improves lives.
              </p>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">8,500+</p>
                  <p className="text-muted-foreground">Units Developed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">75+</p>
                  <p className="text-muted-foreground">Communities</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">15</p>
                  <p className="text-muted-foreground">States Served</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">$800M</p>
                  <p className="text-muted-foreground">Total Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffordableHousing;
