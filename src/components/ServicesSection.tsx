import { Smile, Shield, Zap, Heart, Eye, Crown } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Teeth Whitening",
    description: "Professional-grade whitening for a radiant, confident smile that lasts.",
  },
  {
    icon: Crown,
    title: "Dental Crowns",
    description: "Custom-crafted porcelain crowns that restore strength and beauty.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive cleanings and exams to keep your oral health pristine.",
  },
  {
    icon: Eye,
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers tailored to your vision.",
  },
  {
    icon: Zap,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements that feel like your own teeth.",
  },
  {
    icon: Heart,
    title: "Orthodontics",
    description: "Invisible aligners and braces for a perfectly aligned smile.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            From routine care to advanced cosmetic procedures, we deliver exceptional results with a gentle touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-500 border border-border hover:border-accent/30 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
