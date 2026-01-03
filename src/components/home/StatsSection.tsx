import { useEffect, useRef, useState } from "react";
import { Calendar, Building, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 30,
    suffix: "+",
    label: "Years of Excellence",
    description: "Delivering results since 1995",
  },
  {
    icon: Building,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
    description: "Across all divisions",
  },
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Residents and guests served",
  },
  {
    icon: Award,
    value: 25,
    suffix: "",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  isVisible,
  delay,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div
      className="text-center group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${delay}s`,
      }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
        <Icon className="h-8 w-8 text-gold" />
      </div>
      <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-lg font-semibold text-primary-foreground mb-1">
        {label}
      </p>
      <p className="text-sm text-primary-foreground/60">{description}</p>
    </div>
  );
}
