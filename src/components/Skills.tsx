import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, Zap, Globe, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getTechIcon } from "@/lib/tech-icons";

const Skills = () => {
  const [skillsRef, skillsVisible] = useScrollReveal();

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "Express", "PostgreSQL", "RESTful APIs", "GraphQL", "MongoDB"]
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      skills: ["Playwright", "Selenium", "Manual Testing", "Cross-browser Testing"]
    },
    {
      icon: Settings,
      title: "Tools & Workflow", 
      skills: ["Git", "GitHub", "Postman", "OAuth", "jQuery"]
    },
    {
      icon: Globe,
      title: "Design & AI",
      skills: ["Figma UI/UX", "No-Code Tools", "ChatGPT", "Claude", "Perplexity"]
    },
    {
      icon: Zap,
      title: "Specialties",
      skills: ["Video Editing", "Data Analysis", "Automation", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      <div className="absolute top-0 right-1/4 w-32 h-32 sm:w-80 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div 
          ref={skillsRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Badge variant="secondary" className="text-accent font-medium mb-4 sm:mb-6 animate-shimmer">
            <Zap className="w-4 h-4 mr-1" />
            Technical Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Technology Stack &
            <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive technical skills across the full development stack, from frontend to backend, testing to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="p-4 sm:p-6 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline" 
                        className="text-xs px-2 py-1 hover:bg-primary/10 border-primary/30 hover:text-primary transition-all duration-300 hover:scale-105 flex items-center"
                      >
                        {getTechIcon(skill)}
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;