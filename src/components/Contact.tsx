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

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Contact = () => {
  const { toast } = useToast();
  const { elementRef, scrollProgress } = useScrollAnimation();
  
  const scale = 0.95 + scrollProgress * 0.05;
  const opacity = Math.min(1, scrollProgress * 2);
  const blur = Math.max(0, 8 - scrollProgress * 8);
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
    <section 
      id="contact" 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        transform: `scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        transition: 'filter 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Glassmorphic background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-white/3 rounded-full blur-3xl" 
           style={{ transform: `translateY(${scrollProgress * -60}px)` }} />
      
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <h2 
          className="text-5xl md:text-6xl font-light mb-6 text-center text-gradient"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
            opacity: opacity 
          }}
        >
          Let's Talk.
        </h2>
        
        <p 
          className="text-xl text-muted-foreground font-light text-center mb-16"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 35}px)`,
            opacity: opacity 
          }}
        >
          Book a 30-minute Zoom call with our team to explore what's possible.
        </p>
        
        <form 
          onSubmit={handleSubmit} 
          className="glass-card p-10 rounded-3xl space-y-6"
          style={{ 
            transform: `translateY(${(1 - scrollProgress) * 40}px)`,
            opacity: opacity 
          }}
        >
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
