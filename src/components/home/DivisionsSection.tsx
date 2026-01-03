import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import hotelImage from "@/assets/hotel-development.jpg";
import housingImage from "@/assets/affordable-housing.jpg";
import managementImage from "@/assets/property-management.jpg";

const divisions = [
  {
    title: "Hotel Development",
    subtitle: "Luxury Hospitality",
    description:
      "From boutique hotels to large-scale hospitality projects, we bring visionary hotel concepts to life. Our team navigates every aspect of development—from site selection and financing to construction and grand opening.",
    icon: Building2,
    image: hotelImage,
    href: "/hotel-development",
    color: "gold" as const,
    stats: [
      { label: "Hotels Developed", value: "45+" },
      { label: "Guest Rooms", value: "12,000+" },
    ],
  },
  {
    title: "Affordable Housing",
    subtitle: "Community Living",
    description:
      "We create quality, affordable housing that transforms neighborhoods. Our developments combine thoughtful design with sustainable practices to provide safe, comfortable homes for families and individuals.",
    icon: Home,
    image: housingImage,
    href: "/affordable-housing",
    color: "navy" as const,
    stats: [
      { label: "Units Developed", value: "8,500+" },
      { label: "Communities Served", value: "75+" },
    ],
  },
  {
    title: "Property Management",
    subtitle: "Expert Services",
    description:
      "Our comprehensive property management services ensure assets perform at their highest potential. We handle everything from day-to-day operations to strategic long-term planning for maximum value.",
    icon: KeyRound,
    image: managementImage,
    href: "/property-management",
    color: "success" as const,
    stats: [
      { label: "Properties Managed", value: "150+" },
      { label: "Sq. Ft. Under Management", value: "5M+" },
    ],
  },
];

export function DivisionsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Our Divisions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Pillars of{" "}
            <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Each division operates with specialized expertise while sharing our 
            core commitment to quality, integrity, and community impact.
          </p>
        </div>

        {/* Division Cards */}
        <div className="space-y-8 lg:space-y-12">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.title}
              {...division}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionCard({
  title,
  subtitle,
  description,
  icon: Icon,
  image,
  href,
  color,
  stats,
  reversed,
}: {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  href: string;
  color: "gold" | "navy" | "success";
  stats: { label: string; value: string }[];
  reversed?: boolean;
}) {
  const colorClasses = {
    gold: {
      badge: "bg-gold/10 text-gold border-gold/20",
      icon: "bg-gold/10 text-gold",
      button: "gold" as const,
    },
    navy: {
      badge: "bg-navy/10 text-navy border-navy/20",
      icon: "bg-navy/10 text-navy",
      button: "navy" as const,
    },
    success: {
      badge: "bg-success/10 text-success border-success/20",
      icon: "bg-success/10 text-success",
      button: "default" as const,
    },
  };

  const colors = colorClasses[color];

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative group ${reversed ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          
          {/* Stats Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="glass-card-dark rounded-xl p-4 flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-3xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <span
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border mb-4 ${colors.badge}`}
        >
          <Icon className="h-4 w-4" />
          {subtitle}
        </span>

        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {title}
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {description}
        </p>

        <Button asChild variant={colors.button} size="lg">
          <Link to={href}>
            Explore {title.split(" ")[0]}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
