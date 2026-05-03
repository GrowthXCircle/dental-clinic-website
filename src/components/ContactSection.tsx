import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save to localStorage
    const existing: Appointment[] = JSON.parse(localStorage.getItem("appointments") || "[]");
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      toast({
        title: "Appointment Requested!",
        description: "We'll get back to you within 24 hours to confirm your booking.",
      });
    }, 800);
  };

  const contactInfo = [
    { icon: MapPin, label: "123 Luxury Lane, Beverly Hills, CA 90210" },
    { icon: Phone, label: "(310) 555-0199" },
    { icon: Mail, label: "hello@lumieredental.com" },
    { icon: Clock, label: "Mon–Fri: 8AM–6PM | Sat: 9AM–3PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Book Your Visit
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
            Ready for a smile transformation? Request an appointment and our team will confirm your booking promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-body pt-3">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border shadow-elegant">
              <h4 className="font-display font-semibold text-foreground mb-2">Emergency?</h4>
              <p className="text-sm text-muted-foreground font-body">
                For dental emergencies outside office hours, call our 24/7 emergency line at{" "}
                <span className="text-accent font-semibold">(310) 555-0200</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-elegant border border-border space-y-5">
            <Input
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border-border font-body"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-secondary border-border font-body"
              />
              <Input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-secondary border-border font-body"
              />
            </div>
            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full h-10 rounded-md border border-border bg-secondary px-3 text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select Service</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="crowns">Dental Crowns</option>
              <option value="preventive">Preventive Care</option>
              <option value="cosmetic">Cosmetic Dentistry</option>
              <option value="implants">Dental Implants</option>
              <option value="orthodontics">Orthodontics</option>
              <option value="other">Other</option>
            </select>
            <Textarea
              placeholder="Tell us about your needs..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary border-border font-body min-h-[100px]"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-gold text-primary font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
              size="lg"
            >
              {loading ? "Sending..." : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Request Appointment
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
