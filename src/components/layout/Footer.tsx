import { Link } from "react-router-dom";
import { Building2, Home, KeyRound, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const divisions = [
  { name: "Hotel Development", href: "/hotel-development", icon: Building2 },
  { name: "Affordable Housing", href: "/affordable-housing", icon: Home },
  { name: "Property Management", href: "/property-management", icon: KeyRound },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-xl font-bold font-display text-navy-dark">
                  HIG
                </span>
              </div>
              <span className="font-display text-xl font-bold">
                HIG Companies
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              A diversified business holding company committed to building communities, 
              creating value, and delivering excellence across hotel development, 
              affordable housing, and property management.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Our Divisions */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Our Divisions
            </h4>
            <ul className="space-y-4">
              {divisions.map((division) => (
                <li key={division.name}>
                  <Link
                    to={division.href}
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors group"
                  >
                    <division.icon className="h-4 w-4 group-hover:text-gold transition-colors" />
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>
                    1200 Corporate Drive<br />
                    Suite 500<br />
                    Houston, TX 77002
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  (800) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@higcompanies.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  info@higcompanies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} HIG Companies. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
