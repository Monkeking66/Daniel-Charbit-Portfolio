// Import icons individually for better tree-shaking
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiGreensock as SiGsap } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaMagic } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaMousePointer } from "react-icons/fa";

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
  gsap: SiGsap,
  // Design
  "figma ui/ux": SiFigma,
  // AI tools & platforms
  "n8n": FaBolt,
  lovable: FaMagic,
  deepseek: FaRobot,
  perplexity: FaQuestionCircle,
  "gemini cli": FaTerminal,
  "claude code": FaCode,
  cursor: FaMousePointer
};

export const getTechIcon = (tech: string) => {
  const Icon = techIcons[tech.toLowerCase()];
  return Icon ? <Icon className="w-4 h-4 mr-2" /> : null;
};

