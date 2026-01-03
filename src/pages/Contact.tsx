import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react";

const interests = [
  { value: "hotel", label: "Hotel Development" },
  { value: "housing", label: "Affordable Housing Development" },
  { value: "management", label: "Property Management Services" },
  { value: "general", label: "General Inquiry" },
  { value: "partnership", label: "Partnership Opportunities" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Corporate Headquarters",
    details: ["1200 Corporate Drive", "Suite 500", "Houston, TX 77002"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com",
    },
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Main: (800) 123-4567", "Fax: (800) 123-4568"],
    action: {
      label: "Call Now",
      href: "tel:+18001234567",
    },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@higcompanies.com", "careers@higcompanies.com"],
    action: {
      label: "Send Email",
      href: "mailto:info@higcompanies.com",
    },
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday - Sunday: Closed"],
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some required fields are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 1-2 business days.",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a{" "}
              <span className="text-gradient-gold">Conversation</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Whether you're exploring a development opportunity, seeking property
              management services, or have questions about our work, we'd love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background -mt-10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. A member of our team will
                      contact you within 1-2 business days.
                    </p>
                    <Button
                      variant="gold"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          interest: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Smith"
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com"
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Interested In
                        </label>
                        <Select
                          value={formData.interest}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, interest: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-card">
                            {interests.map((interest) => (
                              <SelectItem
                                key={interest.value}
                                value={interest.value}
                              >
                                {interest.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or inquiry..."
                          rows={5}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground text-sm"
                        >
                          {detail}
                        </p>
                      ))}
                      {item.action && (
                        <a
                          href={item.action.href}
                          target={item.action.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-block text-gold font-medium text-sm mt-2 hover:underline"
                        >
                          {item.action.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2876785548687!2d-95.36357668490007!3d29.760426781988994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3f7f0c5fff%3A0x5b0f0f0f0f0f0f0f!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HIG Companies Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
