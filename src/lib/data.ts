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
  resumeUrl: "/resume.pdf", // Placeholder
};

export const education = [
  {
    institution: "National Institute of Technology, Tiruchirappalli",
    degree: "B.Tech in Chemical Engineering, Minor in Computer Applications",
    duration: "Nov 2022 – May 2026",
    details: "CGPA: 7.6",
  },
  {
    institution: "Senior Secondary (Class XII), CBSE Board",
    degree: "PCMB",
    duration: "May 2022",
    details: "Score: 94%",
  },
  {
    institution: "Secondary (Class X), CBSE Board",
    degree: "",
    duration: "Mar 2020",
    details: "Score: 94% (Maths-100%)",
  },
];

export const skills = {
  languages: ["Python", "Kotlin", "Java", "C++", "TypeScript"],
  tools: [
    "Jetpack Compose",
    "React.js",
    "Tailwind CSS",
    "Android Studio",
    "Docker",
    "SQL",
    "Git",
  ],
};

export const achievements = [
    { text: "Winner, Transfinitte 2024 (flagship internal hackathon of NITT) – Built AI to detect code vulnerabilities.", icon: Award },
    { text: "Selected among Top 20 from 500+ participants across IITs and BITS Pilani for P&G IT SPOTLIGHT ’24 program.", icon: Star },
    { text: "Awarded Best Student award in both Class X and Class XII and ranked School First in Class XII.", icon: GraduationCap },
];

export const experience = [
  {
    company: "GearSec LLP",
    title: "Software Developer Intern",
    duration: "May 2025 – July 2025",
    description: [
      "Developed a user details page using React.js, TypeScript, and AWS Cloudscape Design System.",
      "Implemented React Cosmos fixtures for isolated UI testing and reusable component validation.",
      "Implemented build-time theming with TypeScript scripts and Vite aliases via AWS Cloudscape Library.",
      "Designed and implemented Google Workspace integration allowing users to add a data source via service account authentication with domain-wide delegation and (admin email) impersonation in Go.",
    ],
    logoUrl: "https://placehold.co/100x100.png",
    dataAiHint: "gear logo",
  },
];

export const projects = [
  {
    title: "Attack on Robots ’25",
    year: 2025,
    description: "Developed a 2D real-time multiplayer strategic resource management game for Pragyan’25, NIT Trichy's technical fest.",
    tags: ["Rust", "Phaser.js", "PostgreSQL", "React.js", "TypeScript", "TailwindCSS"],
    links: {
      github: "https://github.com/delta/aor-backend",
      // live: "https://aor.deltaforce.tech/",
    },
    imageUrl: aor,
    dataAiHint: "robot game",
  },
  {
    title: "ICMST 2025 Website",
    year: 2025,
    description: "Developed a responsive website for the International Conference on Membrane Science and Technology (Hosted by NITT) using React, TypeScript, and Tailwind CSS with Swiper JS carousels and Google Maps integration. Containerized with Docker for deployment and achieved 100% SEO score in Lighthouse audits while delivering comprehensive information and registration functionality.",
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
    description: "KMM App for Festember’s 50th edition, achieving 1,500+ downloads on Google Play Store. Used Clean MVVM, Ktor, Realm DB, and Koin.",
    tags: ["Kotlin Multiplatform", "Kotlin", "Jetpack Compose"],
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
    title: "Pragyan '25 Ingenium and Sangam Websites",
    year: 2024,
    description: "Developed applications for flagship technical hackathons, Ingenium and Sangam, hosted by Pragyan, NIT Trichy’s ISO-certified organization. Built user-friendly home, schedule, sponsors, problem statements, and contact pages using React, TypeScript, Tailwind CSS, and Vite. Implemented custom carousels with Swiper JS and popup features for team results.",
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
      github: "https://github.com/itsKhadeer/WeatherApp",
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
    role: "Web Operations Manager, Pragyan",
    duration: "Aug 2024 – March 2025",
    description: "Managed websites, applications, and online game events for NIT Trichy's technical fest. Guided juniors to launch the online game event AOR ’25.",
    icon: Briefcase,
  },
  {
    role: "Software Developer, Delta Force",
    duration: "Aug 2023 – March 2025",
    description: "Official Web and Programming Club of NIT Trichy. Developed and deployed production-ready websites and apps for college fests and administration, reaching over 10,000 unique visitors annually.",
    icon: Briefcase,
  },
  {
    role: "Organizing Committee Member, Aaveg X",
    duration: "Dec 2022 – June 2023",
    description: "Ideated and Organized 50+ Cultural, Sports and Gaming events for more than 1,100+ students in NITT's inter-hostel fest.",
    icon: Briefcase,
  },
];

export const extras = [
    { text: "Facilitated a web workshop for underprivileged students in Trichy under the PSR Initiative.", icon: Lightbulb },
    { text: "Volunteered with Social Council NITT, organizing visits and donations to orphanages, old age homes and government schools during HumaNITTy'23.", icon: HeartHandshake },
    { text: "Secured Second Place in men's cricket at AAVEG '22, NITT’s inter-hostel cultural and sports fest.", icon: Award },
    { text: "Secured the First Place in U-14 Cricket Tournament hosted by Alagu Jothi Academy, Mayiladuthurai.", icon: Award },
];
