import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TestTube, Zap, TrendingUp, CalendarDays, MapPin, Briefcase, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import danielHeadshot from "@/assets/daniel-headshot.jpeg";
import { getTechIcon } from "@/lib/tech-icons";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code,
    title: "Full Stack Mastery",
    description: "Architecting scalable applications with React, Next.js, and Node.js",
    metric: "10+ Technologies"
  },
  {
    icon: Database,
    title: "Data Excellence",
    description: "Advanced PostgreSQL optimization and RESTful API design",
    metric: "99.9% Uptime"
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Comprehensive testing with Playwright and Selenium automation",
    metric: "Zero Bugs"
  },
  {
    icon: Zap,
    title: "Rapid Innovation",
    description: "AI-powered development with cutting-edge No-Code solutions",
    metric: "3x Faster"
  }
];

const experiences = [
  {
    title: "Full-stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "April 2024 – Present",
    current: true,
    description: [
      "Designed and developed full-stack applications using React, Next.js, Node.js, and Express",
      "Built and queried PostgreSQL databases, implemented RESTful APIs",
    ],
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Express", "RESTful APIs"],
  },
  {
    title: "QA Tester",
    company: "Self-Employed",
    location: "Remote",
    period: "January 2025 – May 2025",
    current: false,
    description: [
      "Developed automated test scripts using Playwright and Selenium",
      "Performed manual and automated testing, cross-browser compatibility testing",
    ],
    skills: ["Playwright", "Selenium", "Test Automation", "Cross-browser Testing", "Quality Assurance"],
  },
  {
    title: "Video Editor",
    company: "Self-Employed",
    location: "Remote",
    period: "January 2024 – January 2025",
    current: false,
    description: [
      "Professional video editing for commercial projects with storytelling expertise",
      "Edited content for podcast 'מבט לאחור' meeting tight deadlines"
    ],
    skills: ["Video Editing", "Storytelling", "Project Management", "Commercial Production"],
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
    ],
    skills: ["Data Analysis", "Strategic Reporting", "Team Collaboration", "Process Improvement"],
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
    ],
    skills: ["IT Infrastructure", "Windows Administration", "System Troubleshooting", "Hardware Support"],
    highlight: "Technical problem solving"
  }
];

const About = () => {
  const [aboutRef, aboutVisible] = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const experienceHeaderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expanded, setExpanded] = useState<boolean[]>(Array(experiences.length).fill(false));
  const [aboutExpanded, setAboutExpanded] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(experienceHeaderRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: experienceHeaderRef.current, start: "top 85%", toggleActions: "play none none reverse" } }
      );

      gsap.fromTo(timelineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        { scaleY: 1, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: timelineRef.current, start: "top 70%", end: "bottom 30%", scrub: 0.5, invalidateOnRefresh: true } }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" } });
        tl.fromTo(card, { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" });
        if (dotsRef.current[index]) {
          tl.fromTo(dotsRef.current[index], { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.6");
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-15 pointer-events-none" />
      <div className="hidden sm:block absolute top-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 right-0 w-32 h-32 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 space-y-12 sm:space-y-24">
        {/* --- ABOUT ME PART --- */}
        <div ref={aboutRef}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image Section */}
            <div className={`transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative group mx-auto w-fit">
                <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-glow-lg relative group-hover:shadow-elevated transition-all duration-500 hover:scale-105">
                  <img 
                    src={danielHeadshot}
                    alt="Daniel Charbit - Elite Full Stack Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/30 blur-2xl animate-float" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-accent/30 blur-xl animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>

            {/* Text Content Section */}
            <div className={`space-y-8 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="text-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight mx-auto">
                  Full Stack
                  <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Developer</span>
                </h2>
                {/* Mobile: concise intro + expandable details (left aligned) */}
                <div className="block sm:hidden">
                  <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                    Practical experience building responsive apps with JavaScript, React, Next.js, and Node.js. Strong in front-end/back-end integration, RESTful APIs, and PostgreSQL.
                  </p>
                  {aboutExpanded && (
                    <p className="text-base text-muted-foreground leading-relaxed max-w-md mt-2">
                      Background in UI/UX testing using Playwright and Selenium. Driven by automation and rapid prototyping with No‑Code tools and AI platforms. I love working with AI daily—leveraging it to accelerate development, improve quality, and create better user experiences.
                    </p>
                  )}
                  <button
                    className="mt-3 text-xs text-primary underline-offset-2 hover:underline"
                    onClick={() => setAboutExpanded((v) => !v)}
                  >
                    {aboutExpanded ? 'Show less' : 'Read more'}
                  </button>
                </div>
                {/* Tablet/Desktop: full paragraph */}
                <p className="hidden sm:block text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto lg:mx-0">
                  Practical experience in building responsive web applications using JavaScript, React, Next.js, and Node.js. Strong in front-end and back-end integration, RESTful APIs, and PostgreSQL databases. Background in UI/UX testing using Playwright and Selenium. Driven by automation and rapid prototyping with No-Code tools and AI platforms. I love working with AI daily and believe AI is the future—leveraging it to accelerate development, improve quality, and create better user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="p-3 sm:p-6 bg-gradient-card hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-2 sm:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm sm:text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="hidden sm:block text-muted-foreground text-sm leading-relaxed px-3 sm:px-0">{item.description}</p>
                      <Badge variant="outline" className="hidden sm:inline-flex text-accent border-accent/30 font-semibold text-[11px] sm:text-xs">{item.metric}</Badge>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* --- EXPERIENCE PART --- */}
        <div>
          <div ref={experienceHeaderRef} className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="text-accent font-medium mb-4 sm:mb-6 animate-shimmer">
              <TrendingUp className="w-4 h-4 mr-1" />
              Career Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A History of
              <span className="text-primary bg-gradient-hero bg-clip-text text-transparent"> Innovation & Impact</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              Professional experience across development, testing, and technical roles with focus on quality and efficiency.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div ref={timelineRef} className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 hidden md:block" />
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} ref={el => cardsRef.current[index] = el} className="relative">
                  <div ref={el => dotsRef.current[index] = el} className="absolute left-4 sm:left-6 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-hero border-2 sm:border-4 border-background shadow-glow-lg hidden md:block" />
                  <Card className="md:ml-16 lg:ml-20 p-4 sm:p-6 lg:p-8 bg-gradient-card hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="space-y-2">
                          <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3 group-hover:text-primary transition-colors">
                            <Briefcase className="w-6 h-6 text-primary" />
                            {exp.title}
                          </h3>
                          <p className="text-lg text-muted-foreground font-semibold">{exp.company}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" />{exp.period}</span>
                            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
                          {exp.current && (
                            <Badge className="bg-gradient-hero text-primary-foreground font-bold animate-glow-pulse"><CheckCircle className="w-3 h-3 mr-1" />Current Role</Badge>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-2 text-muted-foreground mb-2 sm:mb-6">
                        {(expanded[index] ? exp.description : exp.description.slice(0, 2)).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover/item:bg-primary transition-colors" />
                            <span className="text-sm leading-relaxed group-hover/item:text-foreground transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Show more/less only on mobile */}
                      {exp.description.length > 2 && (
                        <button
                          className="sm:hidden text-xs text-primary mb-4 underline-offset-2 hover:underline"
                          onClick={() => setExpanded((prev) => prev.map((v, i) => i === index ? !v : v))}
                        >
                          {expanded[index] ? "Show less" : `Show ${exp.description.length - 2} more`}
                        </button>
                      )}
                      {/* Skills as horizontal scroller on mobile, wrap on larger screens */}
                      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0 snap-x snap-mandatory">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs px-2 py-1 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default flex items-center whitespace-nowrap snap-start">
                            {getTechIcon(skill)}{skill}
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
      </div>
    </section>
  );
};

export default About;
