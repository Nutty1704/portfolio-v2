export const links = {
  github: "https://github.com/Nutty1704",
  linkedin: "https://www.linkedin.com/in/upadhyay-abhijit/",
  mail: "mailto:abhijitupadhyay03@gmail.com",
};

export const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

export const backendSkills = [
  "Node.js",
  "Express",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
];

export const otherSkills = ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"];


export const techLogos = {
  html: { name: 'HTML', logo: '/logos/html.svg' },
  css: { name: 'CSS', logo: '/logos/css.svg' },
  typescript: { name: 'TypeScript', logo: '/logos/ts.svg' },
  haskell: { name: 'Haskell', logo: '/logos/haskell-dark.svg' },
  javascript: { name: 'JavaScript', logo: '/logos/js.svg' },
  angular: { name: 'Angular', logo: '/logos/angular.svg' },
  bootstrap: { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
  express: { name: 'Express', logo: '/logos/express.svg' },
  mongodb: { name: 'MongoDB', logo: '/logos/mongo.svg' },
  react: { name: 'React', logo: '/logos/re.svg' },
  tailwind: { name: 'TailwindCSS', logo: '/logos/tail.svg' },
  clerk: { name: 'Clerk Auth', logo: '/logos/clerk.svg' },
}

export const projects = [
  {
    id: "proj-guitar-hero",
    year: 2024,
    title: "Vanilla Guitar Hero",
    des: "A vanilla typescript game based on the popular Guitar Hero series. It is built using pure HTML, CSS, and TypeScript.",
    src: "/projects/p4.png",
    alt: "Guitar Hero screenshot",
    skills: [ 'html', 'css', 'typescript' ],
    live: undefined,
    repo: "https://github.com/Nutty1704/guitar-hero-vanilla",
  },
  {
    id: "proj-md-to-html",
    year: 2024,
    title: "Markdown to HTML convertor",
    des: "A simple markdown to HTML convertor app made using haskell and javascript.",
    src: "/projects/p5.png",
    alt: "Markdown input on the left and html output on the right; screenshot of the application",
    skills: [ 'haskell', 'javascript', 'html', 'css' ],
    live: undefined,
    repo: "https://github.com/Nutty1704/md-to-html-convertor",
  },
  {
    id: "proj-ema",
    year: 2023,
    title: "Events Management App",
    des: "A simple event management app that allows users to create and manage events.",
    src: "/projects/p3.png",
    alt: "Events Management App dashboard page",
    skills: [ 'angular', 'bootstrap', 'express', 'typescript', 'mongodb' ],
    live: undefined,
    repo: "https://github.com/Nutty1704/events-mangement-app",
  },
  {
    id: "proj-chatty",
    year: 2024,
    title: "Chatty",
    des: "Created a real-time chat app using MERN stack and Socket.io",
    src: "/projects/p2c.png",
    alt: "Chat screen",
    skills: [ 'react', 'tailwind', 'express', 'javascript', 'mongodb' ],
    live: undefined,
    repo: "https://github.com/Nutty1704/chat-app",
  },
  {
    id: "proj-donezo",
    year: 2025,
    title: "Donezo - Task Management App",
    des: "A fast, intuitive task management tool for teams and individuals, built for seamless collaboration.",
    src: "/projects/p1.png",
    alt: "donezo kanban board",
    skills: [ 'react', 'tailwind', 'express', 'javascript', 'mongodb', 'clerk' ],
    live: "https://donezo.me/",
    repo: "https://github.com/Nutty1704/taskmanager",
  },
  {
    id: "project-tastemonash",
    year: 2025,
    title: "TasteMonash - UniEats App",
    des: "A responsive, user-friendly, and anonymous food browsing app with role based authentication.",
    src: "/projects/p6.png",
    alt: "Taste Monash home page",
    skills: [ 'react', 'tailwind', 'express', 'javascript', 'mongodb' ],
    live: "https://www.tastemonash.app/",
    repo: "https://github.com/Nutty1704/eprp-frontend",
  },
];
