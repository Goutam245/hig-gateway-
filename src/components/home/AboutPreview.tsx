import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  "Integrity in every transaction",
  "Excellence without compromise",
  "Community-focused development",
  "Sustainable and responsible growth",
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              About HIG Companies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Legacy of{" "}
              <span className="text-gradient-gold">Trust</span> and{" "}
              <span className="text-gradient-gold">Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over three decades, HIG Companies has been at the forefront of 
              real estate development and property management. Founded on principles 
              of integrity, innovation, and community impact, we've grown from a 
              single-project venture to a diversified holding company with a 
              portfolio spanning the nation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our success is built on understanding that real estate is more than 
              buildings—it's about creating spaces where businesses thrive, families 
              grow, and communities flourish.
            </p>

            {/* Values List */}
            <ul className="space-y-3 mb-8">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="gold" size="lg">
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                <div className="text-6xl lg:text-7xl font-display font-bold text-gradient-gold mb-4">
                  1995
                </div>
                <p className="text-xl font-semibold text-foreground mb-2">
                  Year Founded
                </p>
                <p className="text-muted-foreground">
                  Three decades of building communities and creating lasting value
                </p>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-4 shadow-lg animate-float">
                <p className="text-2xl font-bold text-gold">$2B+</p>
                <p className="text-sm text-muted-foreground">Total Development Value</p>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-2xl font-bold text-navy">15</p>
                <p className="text-sm text-muted-foreground">States Served</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
