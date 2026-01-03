import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl gradient-navy p-12 lg:p-20">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your{" "}
              <span className="text-gradient-gold">Vision</span> into Reality?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Whether you're exploring hotel development, seeking affordable housing 
              solutions, or need expert property management, our team is ready to 
              partner with you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="tel:+18001234567">
                  <Phone className="h-5 w-5" />
                  Call (800) 123-4567
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
