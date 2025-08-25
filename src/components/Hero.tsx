import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Hero = () => {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div ref={heroRef} className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              Daniel <span className="text-primary bg-gradient-hero bg-clip-text text-transparent">Charbit</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-accent font-medium">
              Transforming Ideas into Digital Excellence
            </p>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4">
              I craft cutting-edge web applications that drive business growth. 
              From concept to deployment, I deliver scalable solutions that exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow-lg hover:scale-105 transition-bounce px-8 animate-glow-pulse text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="hover:bg-accent/10 hover:scale-105 transition-bounce border-accent/30 text-base">
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:scale-105 transition-bounce text-base">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;