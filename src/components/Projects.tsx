import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Rocket, Sparkles, Code2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";

const projects = [
  {
    title: "Portfolio Revamp",
    image: "/projects/project-1.svg",
    description: "A complete redesign and rebuild of my personal portfolio to be modern, animated, and fully responsive.",
    longDescription: "This project involved a ground-up rebuild using Vite for a fast development experience and TailwindCSS for a utility-first styling approach. I implemented custom hooks for scroll-triggered animations and ensured the entire site was responsive across all devices. The goal was to create a performant and visually engaging showcase of my skills.",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
    links: { github: "#", demo: "#" },
    icon: Rocket,
  },
  {
    title: "Analytics Dashboard",
    image: "/projects/project-2.svg",
    description: "An interactive dashboard for visualizing data with custom charts and a responsive widget-based layout.",
    longDescription: "Built with React and Recharts, this dashboard provides users with interactive and customizable data visualizations. It features a secure authentication flow and a backend powered by Node.js to serve data to the frontend. The layout is fully responsive, allowing users to manage their dashboards on any device.",
    tech: ["React", "Recharts", "Node.js", "TypeScript"],
    links: { github: "#", demo: "#" },
    icon: Code2,
  },
  {
    title: "Automation Toolkit",
    image: "/projects/project-3.svg",
    description: "A collection of scripts and tools to automate repetitive development and testing tasks.",
    longDescription: "This toolkit includes a suite of scripts for automating browser testing with Playwright, API testing with Postman collections, and other common development workflows. The main goal was to reduce manual effort and improve consistency in testing and deployment processes.",
    tech: ["Node.js", "Playwright", "Postman"],
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
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
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

        <div className="flex justify-center flex-wrap gap-2 mb-12">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, index) => (
            <Dialog key={proj.title}>
              <DialogTrigger asChild>
                <div
                  className={`transition-all duration-700 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full cursor-pointer hover:shadow-glow-lg hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" />
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
              <DialogContent className="sm:max-w-[625px] bg-background/95 backdrop-blur-lg border-primary/20">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
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
                <div className="flex items-center gap-4">
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
