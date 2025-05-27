export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools';
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface LearningItem {
  name: string;
  progress?: number;
}

export interface StatItem {
  label: string;
  value: string;
  icon?: string;
}

// Portfolio Data
export const stats: StatItem[] = [
  {
    label: "Experience",
    value: "1+ year",
    icon: "Clock"
  },
  {
    label: "ML Projects",
    value: "10+",
    icon: "Briefcase"
  },
  {
    label: "Technologies",
    value: "15+",
    icon: "Code"
  },
  {
    label: "Available for Opportunities",
    value: "✅",
    icon: "CheckCircle"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React.js", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 80, category: "Backend" },
  { name: "REST APIs", level: 85, category: "Backend" },
  
  // Databases
  { name: "SQL", level: 85, category: "Databases" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "ChromaDB", level: 75, category: "Databases" },
  { name: "SQLite", level: 80, category: "Databases" },  // Tools
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "GoLand IDE", level: 85, category: "Tools" },
  { name: "Docker", level: 85, category: "Tools" },
  { name: "Git/GitHub", level: 85, category: "Tools" },
  { name: "npm", level: 88, category: "Tools" },
  { name: "Vite", level: 82, category: "Tools" }
];

export const experience: Experience[] = [
  {
    title: "AI Developer Intern",
    company: "VISWAM.AI – Summer of AI 2025",
    duration: "May 2025 - June 2025",
    description: [
      "Selected for the prestigious Summer of AI internship organized by IIIT Hyderabad, Swecha, Meta, TASK & HYSEA",
      "Gained hands-on experience in Python, AI engineering, DevOps, and collaborative software development",
      "Worked on real-world AI models using local datasets and deployed them into production environments",
      "Contributed to open-source AI projects and collaborated with a national cohort of developers and mentors"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "October 2024 - November 2024",
    description: [
      "Built a Credit Score Prediction system using supervised ML techniques",
      "Applied data preprocessing, model evaluation, and Python-based libraries such as Pandas and Scikit-learn",
      "Learned collaborative development with Git and remote team communication"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/ajmeerakumar/ecommerce-platform",
    liveUrl: "https://demo-ecommerce.vercel.app"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    githubUrl: "https://github.com/ajmeerakumar/task-manager"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
    techStack: ["Vue.js", "Python", "FastAPI", "Chart.js", "TailwindCSS"],
    githubUrl: "https://github.com/ajmeerakumar/weather-dashboard",
    liveUrl: "https://weather-dash.netlify.app"
  },
  {
    title: "Personal Finance Tracker",
    description: "Comprehensive personal finance management tool with expense tracking, budget planning, and financial goal setting.",
    techStack: ["React Native", "Firebase", "Chart.js", "Redux"],
    githubUrl: "https://github.com/ajmeerakumar/finance-tracker"
  },
  {
    title: "Blog Platform",
    description: "Modern blog platform with markdown support, SEO optimization, and content management system for multiple authors.",
    techStack: ["Gatsby", "GraphQL", "Contentful", "Netlify", "SCSS"],
    githubUrl: "https://github.com/ajmeerakumar/blog-platform",
    liveUrl: "https://techblog-demo.netlify.app"
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, and integrated mortgage calculator.",
    techStack: ["Angular", "Spring Boot", "MySQL", "AWS S3", "Bootstrap"],
    githubUrl: "https://github.com/ajmeerakumar/real-estate-portal"
  }
];

export const learning: LearningItem[] = [
  { name: "GraphQL", progress: 75 },
  { name: "Rust", progress: 45 },
  { name: "Web3/Blockchain", progress: 60 },
  { name: "Astro", progress: 70 },
  { name: "Three.js", progress: 55 },
  { name: "Machine Learning", progress: 40 },
  { name: "Kubernetes", progress: 50 },
  { name: "Go", progress: 35 }
];

export const personalInfo = {
  name: "Ajmeera Pavan Kumar",
  role: "Full Stack Developer & Problem Solver",  email: "pavankumar22119@gmail.com",
  location: "Hyderabad, India",
  github: "https://github.com/pavanlost56",
  linkedin: "https://www.linkedin.com/in/pavan-kumar-ajmeera-8b3ba3318/",
  resume: "/resume.pdf"
};
