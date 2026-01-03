import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, Home, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const divisions = [
  {
    name: "Hotel Development",
    href: "/hotel-development",
    icon: Building2,
    description: "Premium hospitality projects",
  },
  {
    name: "Affordable Housing",
    href: "/affordable-housing",
    icon: Home,
    description: "Community-focused residential",
  },
  {
    name: "Property Management",
    href: "/property-management",
    icon: KeyRound,
    description: "Expert property services",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-xl font-bold font-display text-primary-foreground">
                HIG
              </span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-display text-xl font-bold transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                HIG Companies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 font-medium transition-colors py-2",
                        isScrolled
                          ? "text-foreground hover:text-accent"
                          : "text-primary-foreground/90 hover:text-primary-foreground"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300",
                        isServicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="glass-card rounded-xl p-2 min-w-[280px] shadow-lg">
                        {divisions.map((division) => (
                          <Link
                            key={division.name}
                            to={division.href}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                              <division.icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {division.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {division.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "font-medium transition-colors py-2 relative",
                      isScrolled
                        ? "text-foreground hover:text-accent"
                        : "text-primary-foreground/90 hover:text-primary-foreground",
                      isActive(link.href) && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              variant={isScrolled ? "gold" : "hero"}
              size="lg"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-wide py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-3 text-lg font-medium text-foreground"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isServicesOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="pl-4 space-y-2 py-2">
                        {divisions.map((division) => (
                          <Link
                            key={division.name}
                            to={division.href}
                            className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <division.icon className="h-5 w-5 text-accent" />
                            {division.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-3 text-lg font-medium transition-colors",
                      isActive(link.href)
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild variant="gold" size="lg" className="w-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
