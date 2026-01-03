import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, KeyRound, CheckCircle2 } from "lucide-react";
import managementImage from "@/assets/property-management.jpg";

const features = [
  "Day-to-day operations management",
  "Financial reporting and budgeting",
  "Tenant relations and leasing",
  "Maintenance and capital improvements",
  "Regulatory compliance oversight",
  "Asset optimization strategies",
];

const PropertyManagement = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={managementImage}
            alt="Property Management Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-sm font-medium mb-6">
              <KeyRound className="h-4 w-4" />
              Property Management Division
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Maximizing{" "}
              <span className="text-gradient-gold">Asset Value</span> Through Expertise
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Comprehensive property management services that ensure assets
              perform at their highest potential while maintaining the highest
              standards of service.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a Proposal
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
                Our Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Expert Management, Exceptional Results
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our property management team handles everything from day-to-day
                operations to strategic long-term planning. We treat every
                property as if it were our own, ensuring maximum value and
                satisfaction for owners and residents alike.
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
                  <p className="text-4xl font-bold text-gold">150+</p>
                  <p className="text-muted-foreground">Properties Managed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">5M+</p>
                  <p className="text-muted-foreground">Sq. Ft. Under Management</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">98%</p>
                  <p className="text-muted-foreground">Client Retention</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">24/7</p>
                  <p className="text-muted-foreground">Support Available</p>
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

export default PropertyManagement;
