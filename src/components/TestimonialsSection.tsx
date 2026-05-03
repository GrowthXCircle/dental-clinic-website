import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Johnson",
    text: "Dr. Mitchell transformed my smile completely. The veneers look so natural, and the entire process was comfortable. I couldn't be happier!",
    rating: 5,
    treatment: "Porcelain Veneers",
  },
  {
    name: "Michael Chen",
    text: "The best dental experience I've ever had. The clinic is gorgeous, the staff is incredibly warm, and Dr. Mitchell explains everything clearly.",
    rating: 5,
    treatment: "Dental Implants",
  },
  {
    name: "Sarah Williams",
    text: "I used to dread going to the dentist until I found Lumière. Now I actually look forward to my appointments. The results speak for themselves.",
    rating: 5,
    treatment: "Teeth Whitening",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-display font-semibold text-primary-foreground">{t.name}</div>
                <div className="text-sm text-gold font-body">{t.treatment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
