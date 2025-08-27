import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import resumePdf from "@/assets/Resume Daniel Charbit.pdf";

const Hero = () => {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <section id="hero" className="min-h-[80vh] flex justify-center relative overflow-hidden px-3 sm:px-6 pt-24 sm:pt-28">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div ref={heroRef} className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Daniel <span className="text-primary bg-gradient-hero bg-clip-text text-transparent">Charbit</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Full Stack Developer
            </p>
            <p className="text-md sm:text-lg text-accent font-medium">
              Transforming Ideas into Digital Excellence
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-2 sm:pt-4">
              I craft cutting-edge web applications that drive business growth. 
              From concept to deployment, I deliver scalable solutions that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow-lg hover:scale-105 transition-bounce px-6 sm:px-8 animate-glow-pulse text-base w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById('contact-form');
                  if (el) {
                    const header = document.querySelector('header') as HTMLElement | null;
                    const headerHeight = header?.offsetHeight ?? 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <a href={resumePdf} download className="w-full">
                  <Button variant="outline" size="lg" className="hover:bg-accent/10 hover:scale-105 transition-bounce border-accent/30 text-base w-full">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </Button>
                </a>
                <a href="https://github.com/Monkeking66" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:scale-105 transition-bounce text-base w-full">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;