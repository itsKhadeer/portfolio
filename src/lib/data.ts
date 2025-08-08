import { Award, Briefcase, GraduationCap, HeartHandshake, Lightbulb, Rss, Star } from "lucide-react";
import aor from "../lib/AOR_ATTACK_PHASE.jpg"
import alchemy25 from "../lib/alchemy25.png"
import festemberapp2024 from "../lib/festember2024.png"
import festember2023 from "../lib/festember2023.png"
import color_wars from "../lib/color_wars.png"
import mario from "../lib/mario.jpg"
import sangam from "../lib/sangam.png"
import weather from "../lib/weather.png"
import icmst2025 from "../lib/icmst2025.png";

export const personalInfo = {
  name: "Khadeer Ahmed",
  email: "khadeerahmed.dev@gmail.com",
  phone: "+91 95001 40779",
  linkedin: "https://www.linkedin.com/in/khadeer-ahmed/",
  github: "https://github.com/itsKhadeer",
  resumeUrl: "https://drive.google.com/file/d/18ptYrEvqOorHEQGjQILGH8XKWz8L-Fyp/view?usp=drive_link",
};

export const education = [
  {
    institution: "NIT, Trichy",
    degree: "B.Tech in Chemical Eng. (Minor in CA)",
    duration: "2022 – Present",
    details: "CGPA: 7.60",
  },
  {
    institution: "Narayana School, Chennai, CBSE",
    degree: "Class XII",
    duration: "2022",
    details: "Percentage: 94%",
  },
  {
    institution: "Narayana School, Chennai, CBSE",
    degree: "Class X",
    duration: "2020",
    details: "Percentage: 94%",
  },
];

export const skills = {
  languages: ["Kotlin", "Java", "Python", "C++", "SQL", "TypeScript"],
  tools: [
    "Jetpack Compose",
    "React.js",
    "FastAPI",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "Excel",
    "Slack",
    "Google Workspace",
    "Notion",
    "PgAdmin",
    "GitHub",
  ],
};

export const achievements = [
    { text: "Winner, Transfinitte 2024 (flagship internal hackathon of NITT) – Built AI to detect code vulnerabilities.", icon: Award },
    { text: "Selected among top 20 from 1000+ applicants across IITs and BITS Pilani for P&G IT Spotlight ’24.", icon: Star },
    { text: "Awarded Best Student award in both Class X and Class XII and ranked School First in Class XII.", icon: GraduationCap },
    { text: "Achieved Exclusive Distinction as the sole recipient of a Perfect Centum score in Class X Mathematics.", icon: Award },
];

export const experience = [
  {
    company: "GearSec",
    title: "Software Developer Intern",
    duration: "May 2025 – Present",
    description: [
      "Built a user details page using React.js, TypeScript, and the AWS Cloudscape Design System.",
      "Wrote sandbox components with React Cosmos to test UI states and data flow during development.",
      "Implemented AWS Cloudscape design system’s build-time theming with scripts and Vite aliases.",
      "Designed and built a Google Workspace Integration for data source addition (data ingestion) via service account authentication, domain-wide delegation, and admin impersonation.",
      "Orchestrated data source synchronization with Temporal workflows for periodic scans.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    dataAiHint: "gear security",
  },
];

export const projects = [
  {
    title: "VulnaiBot, Code Vulnerability Detection Chatbot",
    year: 2024,
    description: "Fine-tuned LLaMA 3.2-3B model on CVEFixes dataset. Built a Next.js app with a FastAPI backend and Google OAuth for users to scan GitHub repos for vulnerabilities.",
    tags: ["LLM", "LLaMA", "LoRA", "Hugging Face", "Next.js", "FastAPI", "Python", "GGUF"],
    links: {
      github: "https://github.com/itsKhadeer", // Placeholder
    },
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "ai chatbot security",
  },
  {
    title: "Attack on Robots ’25",
    year: 2025,
    description: "Developed a 2D real-time multiplayer strategic resource management game for Pragyan’25, NIT Trichy's technical fest, engaging 350+ participants.",
    tags: ["Rust", "Phaser.js", "PostgreSQL", "React.js", "TypeScript", "TailwindCSS", "Diesel ORM", "Redis"],
    links: {
      github: "https://github.com/delta/aor-backend",
    },
    imageUrl: aor,
    dataAiHint: "robot game",
  },
  {
    title: "ICMST 2025 Website",
    year: 2025,
    description: "Developed a responsive website for the International Conference on Membrane Science and Technology (Hosted by NITT) using React, TypeScript, and Tailwind CSS.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Swiper JS", "Docker", "Google Maps"],
    links: {
      live: "https://icmst2025.nitt.edu/",
    },
    imageUrl: icmst2025,
    dataAiHint: "conference website",
  },
  {
    title: "Festember ’24 Mobile App",
    year: 2024,
    description: "KMM App for Festember’s 50th edition, achieving 1,500+ downloads. Used Clean MVVM, Ktor, Realm DB, and Koin.",
    tags: ["Kotlin Multiplatform", "Jetpack Compose", "Ktor", "Realm DB"],
    links: {
      github: "https://github.com/delta/festember-24",
      live: "https://play.google.com/store/apps/details?id=dev.festember.festember_24",
    },
    imageUrl: festemberapp2024,
    dataAiHint: "mobile festival",
  },
  {
    title: "Alchemy 2025 Website",
    year: 2024,
    description: "Official website for the Chemical Engineering Symposium of NIT Trichy, built with GSAP and Framer Motion for animations.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "GSAP", "Framer Motion"],
    links: {
      github: "https://github.com/Alchemy-NITT-Webops/alchemy-25-frontend",
      live: "https://alchemy2025.vercel.app/",
    },
    imageUrl: alchemy25,
    dataAiHint: "science website",
  },
  {
    title: "Color Wars",
    year: 2024,
    description: "A 2D chain reaction game built with Kotlin and Jetpack Compose.",
    tags: ["Kotlin", "Jetpack Compose"],
    links: {
      github: "https://github.com/itsKhadeer/color_wars.git",
    },
    imageUrl: color_wars,
    dataAiHint: "colorful game",
  },
  {
    title: "Pragyan '25 Ingenium & Sangam Websites",
    year: 2024,
    description: "Developed applications for flagship technical hackathons, Ingenium and Sangam, hosted by Pragyan, NIT Trichy’s ISO-certified organization.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Vite", "Swiper JS"],
    links: {
      live: "https://pragyan.org/sangam-25/",
    },
    imageUrl: sangam,
    dataAiHint: "hackathon website",
  },
  {
    title: "FESTEMBER'23 App",
    year: 2023,
    description: "Native Android App for Festember'23 using Kotlin and XML, achieving 1,000+ downloads.",
    tags: ["Kotlin", "XML"],
    links: {},
    imageUrl: festember2023,
    dataAiHint: "event app",
  },
  {
    title: "Chase Runner",
    year: 2023,
    description: "A native Android infinite chase game with gravity, jumps, obstacles, and dynamic scoring.",
    tags: ["Java", "XML", "Android Canvas"],
    links: {
      github: "https://github.com/itsKhadeer/chaseRunner2.git",
    },
    imageUrl: mario,
    dataAiHint: "running game",
  },
  {
    title: "WeatherApp",
    year: 2023,
    description: "Native Android weather app built in May–June 2023. Displays current weather using public APIs.",
    tags: ["Java", "XML", "Android"],
    links: {
      github: "https://github.com/itsKhadeer/deltaOS2.git",
    },
    imageUrl: weather,
    dataAiHint: "weather app",
  },
];

export const positions = [
  {
    role: "Head of Web Operations, Alchemy ‘25",
    duration: "Sep 2024 – Present",
    description: "Leading design and development of the official symposium website. Designed UI in Figma and developed using React.js, TypeScript, and Tailwind CSS. Containerized with Docker.",
    icon: Briefcase,
  },
  {
    role: "Festember Web Operations Manager",
    duration: "Aug 2024 – Oct 2024",
    description: "Managed and led the development of the Festember '24 Android app and contributed to the official website's hospitality page.",
    icon: Briefcase,
  },
  {
    role: "Web Operations Manager, Pragyan",
    duration: "Aug 2024 – Mar 2025",
    description: "Managed websites, applications, and online game events. Guided juniors to launch the online game event AOR ’25 and led technical decisions.",
    icon: Briefcase,
  },
   {
    role: "Pragyan Web Operations Coordinator",
    duration: "Nov 2023 – Feb 2024",
    description: "Contributed to the development of various web platforms for Pragyan '24, the annual technical fest.",
    icon: Briefcase,
  },
  {
    role: "Festember Web Operations Coordinator",
    duration: "Aug 2023 – Nov 2023",
    description: "Contributed to the Festember '23 native Android app and developed the inductions website for the Festember '24 team.",
    icon: Briefcase,
  },
  {
    role: "Software Developer, Delta Force",
    duration: "Aug 2023 – Mar 2025",
    description: "Developed and deployed production-ready websites and apps for college fests, reaching over 10,000 unique visitors. Mentored 38 aspiring developers.",
    icon: Briefcase,
  },
  {
    role: "Organizing Committee Member, Social Council",
    duration: "Aug 2023 – Aug 2024",
    description: "Supported and coordinated campus-wide initiatives addressing social issues through events and outreach, including HumaNITTy and Daan Utsav.",
    icon: HeartHandshake,
  },
  {
    role: "Organizing Committee Member, Aaveg X",
    duration: "Dec 2022 – Jun 2023",
    description: "Ideated and organized 50+ cultural, sports, and gaming events for over 1,100 students in NITT's inter-hostel fest.",
    icon: Briefcase,
  },
];

export const extras = [
    { text: "Facilitated a web workshop for underprivileged students in Trichy under the PSR Initiative.", icon: Lightbulb },
    { text: "Volunteered with Social Council NITT, organizing visits and donations to orphanages, old age homes and government schools during HumaNITTy'23.", icon: HeartHandshake },
    { text: "Secured Second Place in men's cricket at AAVEG '22, NITT’s inter-hostel cultural and sports fest.", icon: Award },
    { text: "Secured the First Place in U-14 Cricket Tournament hosted by Alagu Jothi Academy, Mayiladuthurai.", icon: Award },
];
