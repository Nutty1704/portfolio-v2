export const links = {
  github: "https://github.com/Nutty1704",
  linkedin: "https://www.linkedin.com/in/upadhyay-abhijit/",
  mail: "mailto:abhijitupadhyay03@gmail.com",
};

export const languageSkills = ["Go", "Python", "TypeScript", "SQL"];

export const cloudPlatformSkills = ["AWS", "Kubernetes", "Terraform", "Buildkite"];

export const backendDataSkills = ["FastAPI", "PostgreSQL", "Kafka", "Node.js"];

export const engineeringSkills = ["CI/CD", "Datadog", "OAuth", "React"];

export const experienceColumnInfo = [
  {
    title: "Software Engineer",
    subtitle: "Rokt",
    dateText: "Sep 2025 - Aug 2026",
    highlights: [
      "Built high-throughput Go auction services processing millions of transactions daily with p99 latency below 99 ms.",
      "Developed a self-service experimentation platform spanning Kubernetes, RDS PostgreSQL, Buildkite, FastAPI, React, TypeScript, and Kubeflow.",
      "Migrated 13 Kubeflow pipelines from v1 to v2.",
      "Built anomaly-detection and telemetry tooling to improve operational visibility.",
      "Improved simulator-to-production agreement from 95% to 99.9%.",
    ],
  },
  {
    title: "Private Tutor",
    subtitle: "Freelance (via Vicky's Classroom)",
    dateText: "Nov 2023 - Feb 2024, Nov 2024 - Feb 2025",
    highlights: [
      "Delivered personalized mathematics instruction to six middle-school students.",
      "Created 50+ custom problem sets and improved average test scores by 15 marks in three months.",
    ],
  },
  {
    title: "Packaging Supervisor",
    subtitle: "Chhattisgarh Agro Biotech Lab",
    dateText: "Aug 2021 - May 2022",
    highlights: [
      "Oversaw 50+ packaging cycles with 96% on-time completion.",
      "Conducted quality assurance on 80+ batches and improved packaging efficiency by resolving bottlenecks.",
    ],
  },
];

export const educationColumnInfo = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "Monash University, Clayton, VIC",
    dateText: "July 2022 - July 2025",
    highlights: [
      "Major in Advanced Computer Science. WAM: 88.711, GPA: 3.875/4.00. Relevant modules: Full Stack Development, Algorithms and Data Structures, Object Oriented Programming.",
    ],
  },
  {
    title: "High School Diploma",
    subtitle: "Delhi Public School, Raipur, Chhattisgarh, India",
    dateText: "Graduated July 2021",
    highlights: [
      "Major in Science (Physics, Chemistry & Math). Grade: 97.6%. Received Excellence Award for highest grade in Computer Science.",
    ],
  },
];

export const techLogos = {
  html: { name: "HTML", logo: "/logos/html.svg" },
  css: { name: "CSS", logo: "/logos/css.svg" },
  typescript: { name: "TypeScript", logo: "/logos/ts.svg" },
  haskell: { name: "Haskell", logo: "/logos/haskell-dark.svg" },
  javascript: { name: "JavaScript", logo: "/logos/js.svg" },
  python: { name: "Python", logo: "/logos/python.svg" },
  angular: { name: "Angular", logo: "/logos/angular.svg" },
  bootstrap: { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  express: { name: "Express", logo: "/logos/express-inverted.svg" },
  mongodb: { name: "MongoDB", logo: "/logos/mongo.svg" },
  react: { name: "React", logo: "/logos/re.svg" },
  tailwind: { name: "TailwindCSS", logo: "/logos/tail.svg" },
  clerk: { name: "Clerk Auth", logo: "/logos/clerk.svg" },
  discord: { name: "Discord.js", logo: "/logos/discord.svg" },
  supabase: { name: "Supabase", logo: "/logos/supabase.svg" },
  gemini: { name: "Gemini", logo: "/logos/gemini.svg" },
  githubactions: { name: "GitHub Actions", logo: "/logos/githubactions.svg" },
  digitalocean: { name: "Digital Ocean", logo: "/logos/digitalocean.svg" },
};

export const projects = [
  {
    id: "proj-ema",
    year: 2023,
    title: "Events Management App",
    des: "A full-stack platform for creating, managing, and browsing events with real-time state tracking and secure CRUD operations. Features include category management, ticket availability, and form validation. Designed with responsive UI and built for collaborative development.",
    shortDes: "Create, manage, and browse events in real time.",
    mediumDes:
      "Full-stack platform for managing events with ticketing, categories, and secure CRUD support.",
    src: "/projects/p3.png",
    alt: "Events Management App dashboard page",
    skills: ["angular", "bootstrap", "express", "typescript", "mongodb"],
    repo: "https://github.com/Nutty1704/events-mangement-app",
  },
  {
    id: "proj-md-to-html",
    year: 2024,
    title: "Markdown to HTML Convertor",
    des: "A web-based tool that converts Markdown to clean HTML using a fully functional backend. The frontend offers a lightweight, real-time preview experience, while the backend ensures accurate parsing and transformation through pure functional logic and strong type safety.",
    shortDes: "Convert Markdown to clean HTML.",
    mediumDes:
      "Real-time Markdown-to-HTML converter with strong typing and a clean UI.",
    src: "/projects/p5.png",
    alt: "Markdown input on the left and html output on the right; screenshot of the application",
    skills: ["haskell", "javascript", "html", "css"],
    repo: "https://github.com/Nutty1704/md-to-html-convertor",
  },
  {
    id: "proj-chatty",
    year: 2024,
    title: "Chatty",
    des: "A real-time chat application with private messaging, user authentication, and online presence indicators. Enables low-latency communication through WebSockets, delivering a responsive and engaging user experience.",
    shortDes: "Real-time chat with private messaging.",
    mediumDes:
      "Low-latency chat app with auth, presence indicators, and WebSocket support.",
    src: "/projects/p2.png",
    alt: "Chat screen",
    skills: ["react", "tailwind", "express", "javascript", "mongodb"],
    repo: "https://github.com/Nutty1704/chat-app",
  },
  {
    id: "proj-inbox-auto",
    year: 2025,
    title: "Inbox Automation & Alert System",
    des: "Automated email triage by fetching and parsing Gmail threads, storing metadata in a database, and pushing real-time alerts via a Discord bot. Includes slash commands to retrieve summaries by priority or sender. Daily ingestion is handled by GitHub Actions, with CI/CD deployment to a DigitalOcean server.",
    shortDes: "Automated Gmail alerts to Discord.",
    mediumDes:
      "Fetch, parse, and summarize emails with daily updates and real-time Discord alerts.",
    src: "/projects/p7.png",
    alt: "Inbox Automation & Alert System interface",
    skills: [
      "python",
      "javascript",
      "discord",
      "supabase",
      "gemini",
      "githubactions",
      "digitalocean",
    ],
    repo: "https://github.com/Nutty1704/email-inbox-automation",
  },
  {
    id: "project-tastemonash",
    year: 2025,
    title: "TasteMonash - UniEats App",
    des: "A restaurant discovery platform for the Monash community, featuring anonymous reviews, business dashboards, and role-based access. Includes advanced features like scheduled deal expiry, image uploads, and robust error handling. CI/CD pipelines ensure reliable updates across frontend and backend.",
    shortDes: "Discover restaurants around Monash.",
    mediumDes:
      "Review-based food app with roles, business tools, and automated deployment.",
    src: "/projects/p6.png",
    alt: "Taste Monash home page",
    skills: [
      "react",
      "tailwind",
      "express",
      "javascript",
      "mongodb",
      "githubactions",
      "digitalocean",
    ],
    repo: "https://github.com/Nutty1704/eprp-frontend",
  },
  {
    id: "proj-donezo",
    year: 2025,
    title: "Donezo - Task Management App",
    des: "A real-time collaborative Kanban board built for teams. Includes features like labels, due dates, task assignments, and checkpoints. Supports secure multi-device access with authentication via Clerk and live task updates using WebSockets. Designed for modern usability with a responsive, intuitive UI.",
    shortDes: "Collaborative Kanban board for teams.",
    mediumDes:
      "Real-time task manager with labels, due dates, assignments, and live updates.",
    src: "/projects/p1.png",
    alt: "donezo kanban board",
    skills: [
      "react",
      "tailwind",
      "express",
      "javascript",
      "mongodb",
      "clerk",
      "githubactions",
      "digitalocean",
    ],
    repo: "https://github.com/Nutty1704/taskmanager",
  },
];
