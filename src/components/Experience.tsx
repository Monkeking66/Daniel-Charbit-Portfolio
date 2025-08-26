import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Briefcase, TrendingUp, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GSAP animations for Experience section

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const backgroundRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Stage 1: Header introduction - clean and confident
      gsap.fromTo(headerRef.current, 
        { 
          opacity: 0, 
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stage 2: Timeline line draws progressively - connects the story
      gsap.fromTo(timelineRef.current,
        { 
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.5
          }
        }
      );

      // Stage 3: Each job gets its own moment - storytelling sequence
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Main card entrance - elegant and focused
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Card appears with subtle elegance
        tl.fromTo(card,
          {
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          }
        );

        // Timeline dot appears with the card - connected timing
        if (dotsRef.current[index]) {
          tl.fromTo(dotsRef.current[index],
            {
              scale: 0,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "back.out(1.7)"
            },
            "-=0.6" // Slightly before card finishes
          );
        }

        // Skills appear after job content is readable - subtle and informative
        const skillBadges = card.querySelectorAll('[data-skill-badge]');
        tl.fromTo(skillBadges,
          {
            opacity: 0,
            y: 10
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05
          },
          "-=0.2" // Overlaps slightly with card animation
        );

        // Highlight badge gets a gentle attention pulse
        const highlightBadge = card.querySelector('[data-highlight-badge]');
        if (highlightBadge) {
          tl.fromTo(highlightBadge,
            {
              opacity: 0,
              scale: 0.8
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.2)"
            },
            "-=0.4"
          );
        }
      });

      // Stage 4: Subtle background movement - doesn't compete with content
      backgroundRef.current.forEach((bg, index) => {
        if (!bg) return;
        
        gsap.to(bg, {
          y: index % 2 === 0 ? -20 : 20,
          rotation: index % 2 === 0 ? 45 : -45,
          duration: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: 3
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  const addToDotsRef = (el: HTMLDivElement | null, index: number) => {
    if (el) dotsRef.current[index] = el;
  };

  const addToBackgroundRef = (el: HTMLDivElement | null, index: number) => {
    if (el) backgroundRef.current[index] = el;
  };

  const experiences = [
    {
      title: "Freelance Full-stack Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "April 2025 – Present",
      current: true,
      description: [
        "Designed and developed full-stack applications using React, Next.js, Node.js, and Express",
        "Built and queried PostgreSQL databases, implemented RESTful APIs",
        "Explored No-Code tools (Windsurf, Courser, Cline) and maintained best practices"
      ],
      skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Express", "RESTful APIs"],
      highlight: "Building modern web applications"
    },
    {
      title: "Freelance QA Tester",
      company: "Various Clients",
      location: "Remote",
      period: "January 2025 – May 2025",
      current: false,
      description: [
        "Developed automated test scripts using Playwright and Selenium",
        "Performed manual and automated testing, cross-browser compatibility testing",
        "Collaborated with teams to identify and resolve functional/visual bugs"
      ],
      skills: ["Playwright", "Selenium", "Test Automation", "Cross-browser Testing", "Quality Assurance"],
      highlight: "Ensuring quality delivery"
    },
    {
      title: "Freelance Video Editor",
      company: "Self-Employed",
      location: "Remote",
      period: "January 2024 – January 2025",
      current: false,
      description: [
        "Professional video editing for commercial projects with storytelling expertise",
        "Edited content for podcast 'מבט לאחור' meeting tight deadlines"
      ],
      skills: ["Video Editing", "Storytelling", "Project Management", "Commercial Production"],
      highlight: "Creative storytelling expertise"
    },
    {
      title: "Data Reporting Analyst",
      company: "Israel Defense Forces",
      location: "Israel",
      period: "December 2021 – January 2024",
      current: false,
      description: [
        "Analyzed complex data sets to support strategic initiatives and decision-making",
        "Created detailed reports for stakeholders and identified data trends",
        "Utilized data analysis tools to streamline processes and improve accuracy"
      ],
      skills: ["Data Analysis", "Strategic Reporting", "Team Collaboration", "Process Improvement"],
      highlight: "Strategic data insights"
    },
    {
      title: "IT Support Technician",
      company: "Makor Group",
      location: "Tel Aviv District, Israel",
      period: "July 2020 – August 2021",
      current: false,
      description: [
        "Maintained IT infrastructure, resolved hardware/software issues",
        "Upgraded operating systems from Windows 7 to 10 for seamless transitions",
        "Managed user accounts and improved IT infrastructure efficiency"
      ],
      skills: ["IT Infrastructure", "Windows Administration", "System Troubleshooting", "Hardware Support"],
      highlight: "Technical problem solving"
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div 
        ref={(el) => addToBackgroundRef(el, 0)}
        className="absolute inset-0 bg-gradient-mesh opacity-15" 
      />
      <div 
        ref={(el) => addToBackgroundRef(el, 1)}
        className="absolute top-1/3 right-0 w-32 h-32 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl animate-float" 
      />
      <div 
        ref={(el) => addToBackgroundRef(el, 2)}
        className="absolute bottom-1/3 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: '4s' }} 
      />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div 
          ref={headerRef}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge variant="secondary" className="text-accent font-medium mb-4 sm:mb-6 animate-shimmer">
            <TrendingUp className="w-4 h-4 mr-1" />
            Career Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            A Journey of
            <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Innovation & Impact</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Professional experience across development, testing, and technical roles with focus on quality and efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div 
            ref={timelineRef}
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block" 
          />
          
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={(el) => addToCardsRef(el, index)}
                className="relative"
              >
                {/* Enhanced timeline dot */}
                <div 
                  ref={(el) => addToDotsRef(el, index)}
                  className="absolute left-4 sm:left-6 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-hero border-2 sm:border-4 border-background shadow-glow-lg hidden md:block" 
                />
                
                <Card className="md:ml-16 lg:ml-20 p-4 sm:p-6 lg:p-8 bg-gradient-card hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <div className="relative z-10">
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 group-hover:text-primary transition-colors">
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                          {exp.title}
                        </h3>
                        <p className="text-lg sm:text-xl text-muted-foreground font-semibold">{exp.company}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start lg:items-end gap-2 sm:gap-3">
                        {exp.current && (
                          <Badge className="bg-gradient-hero text-primary-foreground font-bold animate-glow-pulse text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Current Role
                          </Badge>
                        )}
                        <Badge 
                          variant="outline" 
                          data-highlight-badge
                          className="text-accent border-accent/30 font-medium text-xs"
                        >
                          {exp.highlight}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0 group-hover/item:bg-primary transition-colors" />
                            <span className="text-xs sm:text-sm leading-relaxed group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          data-skill-badge
                          className="text-xs px-2 sm:px-3 py-1 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                        >
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
      </div>
    </section>
  );
};

export default Experience;