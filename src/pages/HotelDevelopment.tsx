import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import hotelImage from "@/assets/hotel-development.jpg";

const features = [
  "Site selection and acquisition",
  "Feasibility studies and market analysis",
  "Financing and capital structuring",
  "Design and construction management",
  "Brand partnership and franchise relations",
  "Pre-opening and grand opening support",
];

const HotelDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotelImage}
            alt="Hotel Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              Hotel Development Division
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Creating Exceptional{" "}
              <span className="text-gradient-gold">Hospitality</span> Experiences
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              From boutique hotels to large-scale hospitality projects, we bring
              visionary hotel concepts to life with comprehensive development
              expertise.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start Your Project
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
                Our Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Full-Service Hotel Development
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our hotel development team guides projects from initial concept
                through grand opening and beyond. With decades of hospitality
                experience, we navigate every aspect of development to deliver
                exceptional results.
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
                  <p className="text-4xl font-bold text-gold">45+</p>
                  <p className="text-muted-foreground">Hotels Developed</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">12,000+</p>
                  <p className="text-muted-foreground">Guest Rooms</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">8</p>
                  <p className="text-muted-foreground">Brand Partners</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-bold text-gold">$1.2B</p>
                  <p className="text-muted-foreground">Total Development</p>
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

export default HotelDevelopment;
