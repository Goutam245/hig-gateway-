import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-corporate.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HIG Companies Corporate Headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Diversified Excellence Since 1995
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Building Tomorrow's{" "}
            <span className="text-gradient-gold">Communities</span>{" "}
            Today
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            HIG Companies is a premier diversified holding company with expertise spanning 
            hotel development, affordable housing, and property management. We transform 
            visions into landmark projects that enrich communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Division Pills */}
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
            <DivisionPill
              icon={Building2}
              label="Hotel Development"
              href="/hotel-development"
            />
            <DivisionPill
              icon={Home}
              label="Affordable Housing"
              href="/affordable-housing"
            />
            <DivisionPill
              icon={KeyRound}
              label="Property Management"
              href="/property-management"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function DivisionPill({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="group flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-gold hover:border-gold transition-all duration-300"
    >
      <Icon className="h-5 w-5 text-gold group-hover:text-navy-dark transition-colors" />
      <span className="text-primary-foreground group-hover:text-navy-dark font-medium transition-colors">
        {label}
      </span>
    </Link>
  );
}
