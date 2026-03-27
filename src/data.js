import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";
import Tools20 from "/assets/tools/Tools20.jpg";
import Tools21 from "/assets/tools/Tools21.jpg";
import Tools22 from "/assets/tools/Tools22.jpg";
import Tools23 from "/assets/tools/Tools23.jpg";
import Tools24 from "/assets/tools/Tools24.jpg";
// import Tools25 from "/assets/tools/Tools25.jpg";

import {
  HiOutlineSparkles,
} from "react-icons/hi2";
import { SiHackerrank, SiLeetcode, SiGithub } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    href: "https://github.com/Uditgoyal09",
    label: "GitHub",
    iconClass: "ri-github-fill",
    color: "#c9c9c9",
    borderColor: "rgba(200,200,200,0.18)",
    backgroundColor: "rgba(200,200,200,0.06)",
  },
  {
    href: "https://www.linkedin.com/in/udit-goyal09/",
    label: "LinkedIn",
    iconClass: "ri-linkedin-fill",
    color: "#084a8c",
    borderColor: "rgba(8,74,140,0.25)",
    backgroundColor: "rgba(8,74,140,0.10)",
  },
  {
    href: "mailto:uditgoyal0905@gmail.com",
    label: "Email",
    iconClass: "ri-mail-line",
    color: "#0e7490",
    borderColor: "rgba(14,116,144,0.25)",
    backgroundColor: "rgba(14,116,144,0.10)",
  },
];

export const featuredStats = [
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Clients Worked With", value: 5, suffix: "+" },
  { label: "Years of Experience", value: 1, suffix: "+" },
 
]

export const achievements = [
  {
    year: "2026",
    title: "HackerRank 4-Star Problem Solving",
    description:
      "Earned strong problem-solving rankings by consistently writing efficient solutions for arrays, strings, recursion, greedy logic, and implementation-heavy coding challenges.",
    metric: "4 Star",
    category: "Coding Profile",
    tag: "Silver-level profile",
    highlights: ["Algorithmic strength", "Clean solutions", "Consistency"],
    verifyLabel: "Open HackerRank",
    verifyUrl: "https://www.hackerrank.com/profile/uditgoyal90532",
    icon: SiHackerrank,
  },
  {
    year: "2026",
    title: "LeetCode 100+ Problems Solved",
    description:
      "Built depth in data structures and algorithms through regular problem solving across trees, graphs, sliding window, binary search, backtracking, and dynamic programming patterns.",
    metric: "100+",
    category: "Coding Practice",
    tag: "Problem solving Badge",
    highlights: ["DSA depth", "Interview prep", "Pattern recognition"],
    verifyLabel: "Open LeetCode",
    verifyUrl: "https://leetcode.com/u/9lKZlecUHV/",
    icon: SiLeetcode,
  },
  {
  year: "2023",
  title: "Open Source Contributor",
  description:
    "Contributed fixes, interface improvements, and documentation updates to public repositories while gaining experience with Git workflows, issue tracking, and pull request reviews.",
  metric: "5+ PRs",
  category: "Open Source",
  tag: "Open Source Work",
  highlights: ["Git workflow", "Team collaboration", "Review process"],
  verifyLabel: "View GitHub",
  verifyUrl: "https://github.com/Uditgoyal09",
  icon: SiGithub,
},
  {
    year: "2024",
    title: "Product Build Sprints",
    description:
      "Delivered multiple portfolio, academic, and client-style builds under short timelines with focus on polished UI, responsive behavior, accessibility, and launch readiness.",
    metric: "3+ Launches",
    category: "Project Delivery",
    tag: "Multi-project delivery",
    highlights: ["Fast execution", "UI polish", "Responsive builds"],
    verifyLabel: "View Projects",
    verifyUrl: "/projects",
    icon: TbBrandVercel,
  },
];

export const certifications = [
  {
    title: "Frontend Development Track",
    issuer: "Portfolio Ready",
    year: "2026",
    focus: "React, Tailwind, UI systems",
    description:
      "Dedicated placeholder space for frontend certificates, bootcamps, or course completions related to web interface development.",
  },
  {
    title: "Backend and API Foundations",
    issuer: "Portfolio Ready",
    year: "2026",
    focus: "Node.js, databases, integration",
    description:
      "A structured slot for certificates covering backend application logic, REST APIs, and server-side development workflows.",
  },
  {
    title: "AI and Applied Computing",
    issuer: "Portfolio Ready",
    year: "2026",
    focus: "Machine learning and intelligent apps",
    description:
      "Reserved section for AI, analytics, or applied computing certifications that support the project experience already shown in the portfolio.",
  },
];

export const resumeSections = [
  {
    title: "Education",
    items: [
      {
        heading: "Computer and application-focused study",
        meta: "Ongoing foundation",
        description:
          "Academic work centered around software development, systems thinking, and practical digital product implementation.",
      },
    ],
  },
  {
    title: "Experience Highlights",
    items: [
      {
        heading: "Full-stack portfolio and product builds",
        meta: "1+ years",
        description:
          "Worked across interface design, frontend implementation, connected systems, and application logic to deliver polished end-to-end experiences.",
      },
      {
        heading: "Project domains",
        meta: "AI, IoT, web",
        description:
          "Hands-on experience in healthcare concepts, monitoring systems, portfolio design, and business-facing web products.",
      },
    ],
  },
  {
    title: "Core Strengths",
    items: [
      {
        heading: "Product-minded development",
        meta: "Design plus engineering",
        description:
          "Comfortable shaping both how a product looks and how it works so the final result feels coherent and useful.",
      },
      {
        heading: "Modern delivery workflow",
        meta: "Responsive and maintainable",
        description:
          "Strong interest in performance, responsiveness, clean implementation, and presenting technical work professionally.",
      },
    ],
  },
];

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Visual Studio Code", ket: "Code Editor", category: "Tools", proficiency: 94 },
  { id: 2, gambar: Tools2, nama: "React JS", ket: "Frontend Framework", category: "Frontend", proficiency: 92 },
  { id: 3, gambar: Tools3, nama: "Next JS", ket: "Full-stack Framework", category: "Frontend", proficiency: 84 },
  { id: 4, gambar: Tools4, nama: "Tailwind CSS", ket: "Styling Framework", category: "Frontend", proficiency: 93 },
  // { id: 5, gambar: Tools5, nama: "Bootstrap", ket: "CSS Framework", category: "Frontend", proficiency: 81 },
  { id: 6, gambar: Tools6, nama: "JavaScript", ket: "Programming Language", category: "Languages", proficiency: 91 },
  { id: 7, gambar: Tools7, nama: "Node JS", ket: "JavaScript Runtime", category: "Backend", proficiency: 83 },
  { id: 8, gambar: Tools8, nama: "GitHub", ket: "Version Control Platform", category: "Tools", proficiency: 90 },
  // { id: 9, gambar: Tools9, nama: "Adobe Illustrator", ket: "Design App", category: "Design", proficiency: 70 },
  { id: 10, gambar: Tools10, nama: "Canva", ket: "Design App", category: "Design", proficiency: 88 },
  { id: 11, gambar: Tools11, nama: "Figma", ket: "UI Design Tool", category: "Design", proficiency: 86 },
  // { id: 12, gambar: Tools12, nama: "Kotlin", ket: "Programming Language", category: "Languages", proficiency: 67 },
  // { id: 13, gambar: Tools13, nama: "Firebase", ket: "Backend Platform", category: "Backend", proficiency: 80 },
  { id: 14, gambar: Tools14, nama: "HTML", ket: "Markup Language", category: "Frontend", proficiency: 95 },
  { id: 15, gambar: Tools15, nama: "CSS", ket: "Styling Language", category: "Frontend", proficiency: 93 },
  // { id: 16, gambar: Tools16, nama: "TypeScript", ket: "Typed JavaScript", category: "Languages", proficiency: 80 },
  { id: 17, gambar: Tools17, nama: "PHP", ket: "Backend Language", category: "Backend", proficiency: 74 },
  { id: 18, gambar: Tools18, nama: "Vite", ket: "Frontend Build Tool", category: "Frontend", proficiency: 84 },
  { id: 19, gambar: Tools19, nama: "MySQL", ket: "Database", category: "Backend", proficiency: 78 },
  { id: 21, gambar: Tools20, nama: "NoSQL", ket: "Non-relational Data Modeling", category: "Backend", proficiency: 76 },
  { id: 22, gambar: Tools22, nama: "C", ket: "Programming Language", category: "Languages", proficiency: 73 },
  { id: 23, gambar: Tools21, nama: "C++", ket: "Programming Language", category: "Languages", proficiency: 82 },
  { id: 24, gambar: Tools23, nama: "Java", ket: "Programming Language", category: "Languages", proficiency: 80 },
  { id: 25, gambar: Tools24, nama: "Antigravity", ket: "Creative Interaction Tooling", category: "Tools", proficiency: 78 },
  // { id: 26, gambar: Tools25, nama: "Atlassian", ket: "Team Workflow Platform", category: "Tools", proficiency: 75 },
];

export const listProyek = [
  {
    id: 1,
    title: "Helping Hand - NGO Website",
    subtitle: "A static, responsive donation website with WCAG-compliant UI/UX and optimized mobile-first flow...",
    fullDescription:
      "Built a static, responsive donation website with WCAG-compliant UI/UX and an optimized mobile-first flow to enhance donor experience and reduce drop-offs.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Uditgoyal09/Helping-Hands-NGO",
  },
  // {
  //   id: 2,
  //   title: "Carbon Tracker",
  //   subtitle: "Sustainability dashboard to log activities, visualize emissions, and track reduction goals...",
  //   fullDescription:
  //     "Sustainability dashboard to log activities, visualize emissions, and track reduction goals over time.",
  //   borderColor: "#10B981",
  //   gradient: "linear-gradient(180deg, #10B981, #000)",
  //   url: "https://carbon-tracker-main1.onrender.com/",
  // },
  {
    id: 3,
    title: "Ganesh Jeweller - Wholesale Ordering Platform",
    subtitle: "A wholesale jewelry ordering platform for retailers to browse collections and place bulk orders...",
    fullDescription:
      "Built a wholesale jewelry ordering platform for retailers to browse collections, place bulk orders, and securely manage order data with real-time database integration.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Uditgoyal09/Jewellery-Webiste",
  },
  {
    id: 4,
    title: "Credit Score - Personal Finance Tracker",
    subtitle: "Credit score tracking dashboard with reports, alerts, and credit health insights...",
    fullDescription:
      "Credit score tracking dashboard with reports, alerts, and credit health insights for better financial decisions.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
  {
    id: 5,
    title: "FinanceAI",
    subtitle: "AI-powered financial analytics platform for smart forecasting and advanced financial analysis...",
    fullDescription:
      "AI-powered financial analytics platform designed to broaden access to smart forecasting and advanced financial analysis tools.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Uditgoyal09/FinanceAI",
  },
  {
    id: 6,
    title: "YouTube Clone",
    subtitle: "Video platform clone with search, categories, and responsive player UI powered by external APIs...",
    fullDescription:
      "Video platform clone with search, categories, and responsive player UI powered by external APIs.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://yt-clone-five-murex.vercel.app/",
  },
  {
    id: 7,
    title: "Coseverse Academy - Learning Platform",
    subtitle: "A learning platform delivering training programs, business-aligned outcomes, and learner engagement...",
    fullDescription:
      "A learning platform delivering training programs, business-aligned outcomes, and long-term learner engagement.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/Uditgoyal09/LMS-File",
  },
  {
    id: 8,
    title: "Chat App",
    subtitle: "Real-time chat application with typing indicators, media sharing, and user presence...",
    fullDescription:
      "Real-time chat application with typing indicators, media sharing, and user presence.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
];
