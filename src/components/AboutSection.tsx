import dentistPortrait from "@/assets/dentist-portrait.jpg";
import { Award, GraduationCap, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img
                src={dentistPortrait}
                alt="Dr. Sarah Mitchell"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg gradient-gold opacity-20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase">
              Meet Your Dentist
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Dr. Sarah Mitchell
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              With over 15 years of experience in cosmetic and restorative dentistry, 
              Dr. Mitchell combines cutting-edge technology with an artistic eye to deliver 
              results that exceed expectations. Her gentle approach and attention to detail 
              have made her one of the most sought-after dentists in the region.
            </p>

            <div className="space-y-6">
              {[
                { icon: GraduationCap, title: "Harvard School of Dental Medicine", sub: "Doctor of Dental Medicine" },
                { icon: Award, title: "Board Certified", sub: "American Board of Cosmetic Dentistry" },
                { icon: Users, title: "10,000+ Patients Treated", sub: "With a 98% satisfaction rate" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground font-body">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
