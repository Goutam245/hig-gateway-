import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Target, Heart, Users, Award, TrendingUp } from "lucide-react";
import leadershipImage from "@/assets/leadership-team.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue excellence in every project, every interaction, and every decision. Our commitment to quality is unwavering.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Trust is the foundation of our relationships. We conduct business with honesty, transparency, and ethical standards.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We develop with purpose, creating spaces that strengthen neighborhoods and improve quality of life.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We embrace forward-thinking solutions and sustainable practices to build for the future.",
  },
];

const timeline = [
  {
    year: "1995",
    title: "Foundation",
    description:
      "HIG Companies was founded with a vision to transform real estate development through integrity and innovation.",
  },
  {
    year: "2002",
    title: "Hotel Division Launch",
    description:
      "Expanded into hospitality development, completing our first boutique hotel project in Houston.",
  },
  {
    year: "2008",
    title: "Affordable Housing Initiative",
    description:
      "Launched our affordable housing division, committed to providing quality homes for all income levels.",
  },
  {
    year: "2015",
    title: "Property Management Expansion",
    description:
      "Formalized property management services, creating a comprehensive real estate services platform.",
  },
  {
    year: "2020",
    title: "Sustainable Development",
    description:
      "Committed to LEED certification and sustainable building practices across all new developments.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "Surpassed $2 billion in total development value with projects spanning 15 states.",
  },
];

const leadership = [
  {
    name: "James Harrison",
    role: "Chief Executive Officer",
    bio: "30+ years of real estate development experience",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    bio: "Former executive at Fortune 500 REIT",
  },
  {
    name: "Michael Chen",
    role: "Chief Financial Officer",
    bio: "Expert in real estate finance and capital markets",
  },
  {
    name: "Elena Rodriguez",
    role: "VP, Affordable Housing",
    bio: "20 years in community development",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Building Excellence for{" "}
              <span className="text-gradient-gold">Three Decades</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Since 1995, HIG Companies has been at the forefront of real estate
              development, creating lasting value for communities, investors, and
              partners across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background -mt-10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To create exceptional real estate developments that generate
                sustainable returns for our investors while making meaningful
                contributions to the communities we serve. We believe that
                profitable development and positive community impact are not
                mutually exclusive—they are mutually reinforcing.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the most trusted name in diversified real estate
                development, known for our unwavering commitment to excellence,
                innovation, and community partnership. We envision a future where
                every HIG project stands as a testament to thoughtful development
                that enriches lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              Our Foundation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Core Values That Guide Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
                Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Experienced Team,{" "}
                <span className="text-gradient-gold">Proven Results</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our leadership team brings together decades of experience across
                real estate development, finance, operations, and community
                relations. Together, we guide HIG Companies with strategic vision
                and unwavering commitment to our values.
              </p>

              <div className="space-y-4">
                {leadership.map((leader) => (
                  <div
                    key={leader.name}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-primary-foreground font-bold">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {leader.name}
                      </p>
                      <p className="text-sm text-gold">{leader.role}</p>
                      <p className="text-sm text-muted-foreground">
                        {leader.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={leadershipImage}
                alt="HIG Companies Leadership Team"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-gold" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">25+</p>
                    <p className="text-sm text-muted-foreground">
                      Industry Awards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold tracking-wider uppercase text-sm mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Three Decades of Growth
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative grid lg:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 mt-2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 ${
                      index % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:col-start-2 lg:pl-16"
                    }`}
                  >
                    <span className="inline-block text-gold font-bold text-2xl mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
