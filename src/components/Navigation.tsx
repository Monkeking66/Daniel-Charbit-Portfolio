import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = useMemo(() => [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About & Experience" },
    { id: "contact", label: "Contact" }
  ], []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Update active section based on scroll position
          const sections = navItems.map(item => ({
            id: item.id,
            element: document.getElementById(item.id)
          }));
          
          const currentSection = sections.find(section => {
            if (!section.element) return false;
            const rect = section.element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          });
          
          if (currentSection) {
            setActiveSection(currentSection.id);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    // Use fixed header height to avoid layout read
    const headerHeight = 80;
    const targetTop = element.offsetTop - headerHeight - 8;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between md:justify-center lg:justify-between">
            {/* Left Spacer */}
            <div className="hidden lg:flex w-48" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 md:mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative",
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Badge variant="secondary" className="text-accent animate-pulse">
                Available
              </Badge>
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
            isMobileMenuOpen 
              ? "max-h-96 opacity-100" 
              : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-background/95 backdrop-blur-lg border-t border-border/50 px-4 sm:px-6 py-3 sm:py-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block w-full text-left px-3 py-3 rounded-lg transition-all duration-200",
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border/50">
                <Button
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
