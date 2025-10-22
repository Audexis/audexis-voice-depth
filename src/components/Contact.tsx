import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    datetime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would integrate with a calendar API
    toast({
      title: "Your session is booked.",
      description: "We look forward to connecting.",
    });
    
    setFormData({ name: "", company: "", email: "", datetime: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light mb-6 text-center text-gradient">
          Let's Talk.
        </h2>
        
        <p className="text-xl text-muted-foreground font-light text-center mb-16">
          Book a 30-minute Zoom call with our team to explore what's possible.
        </p>
        
        <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/50 border-white/10 text-lg py-6 rounded-2xl focus:border-white/30 transition-colors"
            />
          </div>
          
          <div>
            <Input
              name="company"
              placeholder="Company / Organization"
              value={formData.company}
              onChange={handleChange}
              className="bg-background/50 border-white/10 text-lg py-6 rounded-2xl focus:border-white/30 transition-colors"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/50 border-white/10 text-lg py-6 rounded-2xl focus:border-white/30 transition-colors"
            />
          </div>
          
          <div>
            <Input
              name="datetime"
              type="datetime-local"
              value={formData.datetime}
              onChange={handleChange}
              required
              className="bg-background/50 border-white/10 text-lg py-6 rounded-2xl focus:border-white/30 transition-colors"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="bg-background/50 border-white/10 text-lg rounded-2xl focus:border-white/30 transition-colors resize-none"
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full glass-button text-lg py-6 rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Schedule Call
          </Button>
        </form>
      </div>
    </section>
  );
};
