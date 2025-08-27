import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Rocket, Sparkles, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
  
const projects = [
  {
    title: "Invoice Nudger",
    image: "/INVOICE.png",
    description: "An application to track invoices and send automated, personalized payment reminders.",
    longDescription: "Invoice Nudger is a full-stack application built with the MERN stack. It allows users to track the status of their invoices (sent, viewed, overdue, paid) and sends automated, personalized payment reminders to clients. The dashboard provides a clear overview of all invoices, helping users to stay on top of their finances.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Playwright"],
    links: { github: "https://github.com/Monkeking66/INVOICE", demo: "https://invoice-lilac.vercel.app/" },
    icon: Rocket,
  },
  {
    title: "Coming soon", 
    image: "/placeholder.svg",
    description: "New project in progress. Stay tuned for updates.",
    longDescription: "I'm building something new that showcases my latest work. Check back soon for the full reveal.",
    tech: ["Coming soon"],
    links: { github: "#", demo: "#" },
    icon: Sparkles,
  },
];

const Projects = () => {
  const [projectsRef, projectsVisible] = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const allTechs = useMemo(() => ["All", ...new Set(projects.flatMap(p => p.tech))], []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={projectsRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Badge variant="secondary" className="text-accent font-medium mb-4 sm:mb-6 animate-shimmer">
            <Rocket className="w-4 h-4 mr-1" />
            Recent Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Featured
            <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            A selection of projects showcasing my skills across frontend, backend, automation, and UX.
          </p>
        </div>

        <div className="hidden sm:flex justify-center flex-wrap gap-2 mb-12">
          {allTechs.map(tech => (
            <Button
              key={tech}
              variant={activeFilter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "transition-all duration-300 rounded-full flex items-center",
                activeFilter === tech && "bg-gradient-hero hover:shadow-glow"
              )}
            >
              {getTechIcon(tech)}
              {tech}
            </Button>
          ))}
        </div>

        {/* Mobile: Filter chips (scrollable) */}
        <div className="sm:hidden flex gap-2 overflow-x-auto no-scrollbar mb-6">
          {allTechs.map((tech) => (
            <Button
              key={`m-${tech}`}
              variant={activeFilter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "rounded-full flex items-center",
                activeFilter === tech && "bg-gradient-hero hover:shadow-glow"
              )}
            >
              {getTechIcon(tech)}
              {tech}
            </Button>
          ))}
        </div>

        {/* Mobile: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-6 mb-8">
          {filteredProjects.map((proj, index) => (
            <Dialog key={`m-${proj.title}`}>
              <DialogTrigger asChild>
                <div
                  className={`transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full cursor-pointer hover:shadow-glow-lg hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105 project-image" />
                    <CardContent className="p-4 relative z-10">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-1">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{proj.description}</p>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {proj.tech.slice(0, 2).map(t => (
                          <Badge key={t} variant="outline" className="text-xs px-2 py-1 border-primary/30 flex items-center">
                            {getTechIcon(t)}
                            {t}
                          </Badge>
                        ))}
                      </div>
                      {proj.title !== "Invoice Nudger" && proj.tech.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0.5 border-primary/30 inline-flex items-center sm:hidden"
                        >
                          +{proj.tech.length - 2}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-[625px] bg-background/95 backdrop-blur-lg border-primary/20 p-4 sm:p-6 rounded-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <proj.icon className="w-6 h-6 text-primary" />
                    {proj.title}
                  </DialogTitle>
                  <DialogDescription className="pt-2">
                    {proj.longDescription}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <Badge key={t} variant="secondary" className="text-accent font-medium flex items-center">
                        {getTechIcon(t)}
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Button asChild className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300 tap-target">
                    <a href={proj.links.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 tap-target">
                    <a href={proj.links.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" /> View Code
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-2 gap-14 mx-auto w-fit">
          {filteredProjects.map((proj, index) => (
            <Dialog key={proj.title}>
              <DialogTrigger asChild>
                <div
                  className={`transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full cursor-pointer hover:shadow-glow-lg hover:-translate-y-2 max-w-md">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 project-image" />
                    <CardContent className="p-4 sm:p-5 relative z-10">
                      <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{proj.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.slice(0, 3).map(t => (
                          <Badge key={t} variant="outline" className="text-xs px-2 py-1 border-primary/30 flex items-center">
                            {getTechIcon(t)}
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] sm:max-w-[625px] bg-background/95 backdrop-blur-lg border-primary/20 p-4 sm:p-6 rounded-lg max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-xl sm:text-2xl">
                    <proj.icon className="w-6 h-6 text-primary" />
                    {proj.title}
                  </DialogTitle>
                  <DialogDescription className="pt-2">
                    {proj.longDescription}
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <Badge key={t} variant="secondary" className="text-accent font-medium flex items-center">
                        {getTechIcon(t)}
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Button asChild className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300">
                    <a href={proj.links.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href={proj.links.github} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" /> View Code
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;