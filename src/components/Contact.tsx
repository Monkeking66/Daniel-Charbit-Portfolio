import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Rocket, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [contactRef, contactVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    projectType: "Web Application",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, message } = formValues;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    if (!emailRegex.test(email)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast("Please complete all fields with a valid email.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/4cf4a176d1121a860a5a086f5eb8f6eb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formValues.name,
          Email: formValues.email,
          "Project Type": formValues.projectType,
          Message: formValues.message,
          _subject: "New Portfolio Contact",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast("Thanks! Your message was sent. I'll get back to you within 24 hours.");
      setFormValues({ name: "", email: "", projectType: "Web Application", message: "" });
    } catch (err) {
      toast("Something went wrong while sending. Please try again shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Danieldod60@gmail.com",
      href: "mailto:Danieldod60@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+972-546222592", 
      href: "tel:+972546222592",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Netanya, Israel",
      href: null,
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Monkeking66",
      color: "hover:text-foreground hover:bg-foreground/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/daniel-charbit-851b302a8/",
      color: "hover:text-primary hover:bg-primary/10"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div 
          ref={contactRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Badge variant="secondary" className="text-accent font-medium mb-4 sm:mb-6 animate-glow-pulse">
            <Rocket className="w-4 h-4 mr-1" />
            Let's Launch Your Project
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Ready to Build Something
            <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Extraordinary?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Your next breakthrough is just one conversation away. Let's transform your vision 
            into a digital reality that exceeds every expectation and drives real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 items-stretch">
          {/* Contact Information */}
          <div
            className={`transition-all duration-700 ${contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <Card className="p-4 sm:p-6 bg-gradient-card border-primary/20 shadow-glow-lg relative overflow-hidden group flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 sm:gap-6 group/item">
                      <div className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                        item.primary 
                          ? 'bg-primary/20 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground' 
                          : 'bg-accent/10 text-accent group-hover/item:bg-accent/20'
                      }`}>
                        <item.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="font-bold text-sm sm:text-lg hover:text-primary transition-colors group-hover/item:text-primary break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-bold text-sm sm:text-lg">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-border/30 mt-auto">
                  <h4 className="font-bold text-base sm:text-lg mb-4">Connect & Follow</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 sm:p-4 rounded-full bg-secondary transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 ${contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <Card className="p-4 sm:p-6 bg-gradient-card border-accent/20 shadow-glow relative overflow-hidden flex flex-col h-full">
              <div className="absolute inset-0 bg-gradient-hero opacity-5" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  Start Your Project
                </h3>
                <div className="space-y-4 flex-1">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Ready to bring your ideas to life? Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                  
                  <form id="contact-form" className="space-y-3" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs sm:text-sm font-medium text-foreground">Name</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formValues.name}
                          onChange={handleChange}
                          className="w-full px-3 py-3 text-sm bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs sm:text-sm font-medium text-foreground">Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          required
                          value={formValues.email}
                          onChange={handleChange}
                          className="w-full px-3 py-3 text-sm bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-xs sm:text-sm font-medium text-foreground">Project Type</label>
                      <select id="projectType" name="projectType" className="w-full px-3 py-3 text-sm bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300" value={formValues.projectType} onChange={handleChange} required>
                        <option>Web Application</option>
                        <option>Mobile App</option>
                        <option>E-commerce Site</option>
                        <option>API Development</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs sm:text-sm font-medium text-foreground">Message</label>
                      <textarea 
                        rows={3}
                        id="message"
                        name="message"
                        required
                        value={formValues.message}
                        onChange={handleChange}
                        className="w-full px-3 py-3 text-sm bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-hero hover:shadow-glow-lg hover:scale-105 transition-bounce py-4 sm:py-6 h-auto text-sm sm:text-base"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                  
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground pt-3 border-t border-border/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Typically responds within 24 hours</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          ref={ctaRef}
          className={`text-center transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Card className="p-6 sm:p-8 lg:p-12 bg-gradient-card border-primary/30 shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-10" />
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
                <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse" />
                  <Badge className="bg-gradient-hero text-primary-foreground font-bold px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-lg animate-glow-pulse">
                    Limited Availability
                  </Badge>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-pulse" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Your Success Story Starts Here
                </h3>
                
                <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-4">
                  I'm currently accepting a limited number of new projects. If you're ready to elevate your product with clean code, great UX, and fast delivery—let's talk.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:shadow-glow-lg hover:scale-110 transition-bounce text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-8 h-auto animate-glow-pulse font-bold"
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                  }}
                >
                  <Rocket className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Let's Build Your Empire
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;