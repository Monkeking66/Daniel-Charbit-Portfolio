import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiSelenium,
  SiFramer,
  SiGreensock as SiGsap
} from "react-icons/si";
import { FaCode, FaDatabase, FaUsers } from "react-icons/fa";

export const techIcons: { [key: string]: React.ElementType } = {
  react: SiReact,
  "next.js": SiNextdotjs,
  "node.js": SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  tailwindcss: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  vite: SiVite,
  playwright: FaCode, // Using a generic icon as SiPlaywright is not available
  selenium: SiSelenium,
  "restful apis": FaDatabase,
  "test automation": FaCode,
  "quality assurance": FaCode,
  "team collaboration": FaUsers,
  "framer motion": SiFramer,
  gsap: SiGsap
};

export const getTechIcon = (tech: string) => {
  const Icon = techIcons[tech.toLowerCase()];
  return Icon ? <Icon className="w-4 h-4 mr-2" /> : null;
};
