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
    duration: "Nov 2022 – May 2026",
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
  languages: ["Kotlin", "Java", "Python", "C++", "SQL", "TypeScript", "Go", "Rust"],
  tools: [
    "Jetpack Compose",
    "React.js",
    "FastAPI",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Excel",
    "Slack",
    "Google Workspace",
    "Notion",
    "PgAdmin",
    "GitHub",
    "Android Studio",
    "Redis",
    "Temporal",
    "Realm DB",
    "Ktor",
    "AWS Cloudscape",
    "GitHub Actions",
    "React Cosmos"
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
    duration: "May 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Engineered a user details page using React.js, TypeScript, and the AWS Cloudscape Design System.",
      "Created React Cosmos fixtures to enable isolated UI testing and validate reusable component integrity.",
      "Implemented AWS Cloudscape design system’s build-time theming with scripts and Vite aliases.",
      "Designed and built a Google Workspace Integration for data source addition (data ingestion) via service account authentication, domain-wide delegation, and admin impersonation using Go.",
      "Orchestrated data source synchronization with Temporal workflows for periodic scans.",
      "Worked on an Agent feature that lives on a customer’s servers to check for database vulnerabilities. Wrote a multi-stage Dockerfile for the binary and a GitHub Action to build & push the image to the container registry."
    ],
    logoUrl: "https://placehold.co/100x100.png",
    dataAiHint: "gear security",
  },
];

export const projects = [
  {
    title: "Alchemy 2026 Website",
    year: 2026,
    description: "Currently leading web operations to deliver the official symposium website for the 2026 edition, managing event listings, and streamlining registration.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Docker"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Alchemy+2026", 
    dataAiHint: "upcoming science website",
  },
  {
    title: "Google Workspace Data Integration",
    year: 2025,
    description: "Standalone service built for GearSec for data source ingestion via service account authentication, domain-wide delegation, and admin impersonation.",
    tags: ["Go", "Temporal", "Google Workspace APIs"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=GWS+Integration",
    dataAiHint: "workspace integration",
  },
  {
    title: "Database Vulnerability Agent",
    year: 2025,
    description: "Agent feature built for GearSec that resides on customer servers to check for database vulnerabilities. Automated with multi-stage Dockerfiles and GitHub Actions.",
    tags: ["Go", "Docker", "GitHub Actions"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Vuln+Agent",
    dataAiHint: "vulnerability agent",
  },
  {
    title: "Attack on Robots ’25",
    year: 2025,
    description: "Co-developed a 2D real-time multiplayer strategic resource management game for Pragyan’25, NITT's ISO-certified organization, engaging 350+ participants in base-building and tactical combat. Built a comprehensive shop feature in the backend, building API endpoints for upgrade transactions and currency transfers using Diesel ORM (Rust) and PostgreSQL. Implemented PostgreSQL migrations in Diesel ORM for schema updates. Enforced single active user sessions by integrating Google OAuth 2.0 in Rust and using Redis for token management to prevent multiple simultaneous logins. Integrated all features with the frontend using React.js, TypeScript, and TailwindCSS.",
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
    title: "Alchemy 2025 Website",
    year: 2025,
    description: "Launched the official website for Alchemy, the annual chemical engineering symposium of NIT Trichy, built as a SPA (Single Page Application). Developed using React.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion for fluid animations. Containerized the application using Docker and coordinated technical discussions with the college's Computer Support Group (CSG) to deploy and host the website on official NIT Trichy servers.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "GSAP", "Framer Motion", "Docker"],
    links: {
      github: "https://github.com/Alchemy-NITT-Webops/alchemy-25-frontend",
      live: "https://alchemy2025.vercel.app/",
    },
    imageUrl: alchemy25,
    dataAiHint: "science website",
  },
  {
    title: "VulnaiBot",
    year: 2024,
    description: "LLM-powered code vulnerability detection chatbot built during Transfinitte '24. Won first place at NIT Trichy's flagship internal hackathon.",
    tags: ["Python", "LLM", "AI", "Security"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=VulnaiBot",
    dataAiHint: "ai security bot",
  },
  {
    title: "Festember ’24 Mobile App",
    year: 2024,
    description: "Worked with a team to develop a Kotlin Multiplatform App for Festember’s 50th edition (National Level intercollegiate Annual Cultural Festival of NIT Trichy), achieving 1,500+ downloads on the Google Play Store. Architected the app using Clean MVVM Architecture for scalable and maintainable code structure, implementing ViewModels for the hospitality, signup, and login screens. Integrated Ktor for API communication, Realm DB for offline data caching, and Koin for dependency injection to manage app services, view models, and repositories. Integrated the app with Delta OAuth 2.0 (Dauth) to enable participants to register for events and receive real-time updates.",
    tags: ["Kotlin Multiplatform", "Jetpack Compose", "Ktor", "Realm DB"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.festember.app24",
    },
    imageUrl: festemberapp2024,
    dataAiHint: "mobile festival",
  },
  {
    title: "Festember Hospitality Portal",
    year: 2024,
    description: "Contributed to the development of the official website's hospitality page for Festember.",
    tags: ["Web Development", "React.js"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Festember+Hospitality",
    dataAiHint: "festember hospitality",
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
    title: "Pragyan '24 Web Platforms",
    year: 2024,
    description: "Contributed to the development of various web platforms and interfaces for Pragyan '24, the annual technical fest.",
    tags: ["Web Development"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Pragyan+24",
    dataAiHint: "pragyan 24 sites",
  },
  {
    title: "Color Wars",
    year: 2024,
    description: "Developed a 2D chain reaction game using Kotlin and Jetpack Compose. Built the game grid utilizing LazyVerticalGrid and utilized the Array data structure for game logic, including win conditions and split mechanics.",
    tags: ["Kotlin", "Jetpack Compose"],
    links: {
      github: "https://github.com/itsKhadeer/color_wars.git",
    },
    imageUrl: color_wars,
    dataAiHint: "colorful game",
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
    title: "Festember Inductions Website",
    year: 2023,
    description: "Developed the inductions website to manage recruitment for the Festember '24 team.",
    tags: ["Web Development"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Festember+Inductions",
    dataAiHint: "festember inductions",
  },
  {
    title: "Alien Shooter",
    year: 2023,
    description: "Developed a 2D two-joystick native Android game using Java and Android Canvas. Utilized Object Oriented Design (OOP) concepts to implement core game logic. Implemented random enemy spawns, collision detection, dual-joystick shooting and movement mechanics, and dynamic health and scoring systems.",
    tags: ["Java", "Android Canvas", "OOP"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=Alien+Shooter", 
    dataAiHint: "alien game",
  },
  {
    title: "Chase Runner",
    year: 2023,
    description: "Created a native Android infinite runner/chase game from scratch using Java and Android Canvas on Android Studio in which Mario (player) is being chased by Bowser (enemy) indefinitely until the player loses. Coded core game mechanics including physics, gravity, jump mechanics, obstacles, power-ups, sprite animations, and collisions. Devised a scoring multiplier system and dynamic chaser logic using projectile motion equations for adaptive game difficulty. Incorporated a tips API using Retrofit to fetch and display dynamic game tips on the splash screen.",
    tags: ["Java", "XML", "Android Canvas", "Retrofit API"],
    links: {
      github: "https://github.com/itsKhadeer/chaseRunner2.git",
    },
    imageUrl: mario,
    dataAiHint: "running game",
  },
  {
    title: "WeatherApp",
    year: 2023,
    description: "Built a native Android weather app using Java, XML, and Retrofit, integrating OpenWeatherMap and Google Maps APIs to fetch and display real-time weather data.",
    tags: ["Java", "XML", "Android", "Retrofit API"],
    links: {
      github: "https://github.com/itsKhadeer/deltaOS2.git",
    },
    imageUrl: weather,
    dataAiHint: "weather app",
  },
  {
    title: "CLI Games Collection",
    year: 2022,
    description: "A collection of command-line interface games including a Guessing Game, Tic Tac Toe, and Rock Paper Scissors built while mastering core programming fundamentals.",
    tags: ["C++", "Python", "CLI"],
    links: {},
    imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff.png?text=CLI+Games",
    dataAiHint: "cli games",
  },
];

export const positions = [
  {
    role: "Head of Web Operations, Alchemy ‘25 & '26",
    duration: "Sep 2024 – Present",
    description: "Leading a team to deliver the official symposium website, managing event listings, and streamlining registration. Designed UI in Figma and developed using React.js, TypeScript, and Tailwind CSS. Containerized with Docker.",
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
    description: "As part of a collaborative team, contributed to developing and maintaining high-traffic web applications for college administration and major festivals like Pragyan and Festember, reaching over 10,000 unique visitors. Mentored 38 aspiring developers to build production-ready websites and apps.",
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
