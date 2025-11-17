import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const Contact = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "Choose a date and time for your call.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real implementation, this would integrate with a calendar API
    toast({
      title: "Your session is booked.",
      description: "We look forward to connecting.",
    });
    
    setFormData({ name: "", company: "", email: "", message: "" });
    setSelectedDate(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={sectionRef} id="contact" className="animate-section relative py-32 px-6 section-container overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="ambient-orb ambient-orb-1" style={{ top: '15%', left: '8%', animationDelay: '1.5s' }} />
        <div className="ambient-orb ambient-orb-2" style={{ bottom: '15%', right: '12%', animationDelay: '3.5s' }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_var(--tw-gradient-stops))] from-white/8 via-transparent to-transparent" />
      
      <div className="section-glow" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="section-heading text-5xl md:text-6xl font-light mb-6 text-center text-gradient premium-text-shadow">
          Let's Talk.
        </h2>
        
        <p className="section-content text-xl text-muted-foreground font-light text-center mb-16">
          Book a 30-minute Zoom call with our team to explore what's possible.
        </p>
        
        <form onSubmit={handleSubmit} className="section-card glass-card p-10 rounded-3xl space-y-6 hover:shadow-[0_0_80px_rgba(255,255,255,0.1)] transition-all duration-500 relative overflow-hidden">
          {/* Form glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-background/50 border-white/10 text-lg py-6 rounded-2xl hover:border-white/30 transition-colors",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
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
