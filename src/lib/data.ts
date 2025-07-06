export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools' | 'ML/AI';
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
    value: "2+",
    icon: "Briefcase"
  },
  {
    label: "Technologies",
    value: "20+",
    icon: "Code"
  },
  {
    label: "Available for Opportunities",
    value: "✅",
    icon: "CircleCheckBig"
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  
  // Backend
  { name: "Python", level: 95, category: "Backend" },
  { name: "Java", level: 85, category: "Backend" },
  { name: "Go", level: 80, category: "Backend" },
  { name: "Spring Boot", level: 82, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  
  // Databases
  { name: "SQL", level: 88, category: "Databases" },
  { name: "MongoDB", level: 80, category: "Databases" },
  { name: "PostgreSQL", level: 82, category: "Databases" },
  { name: "SQLite", level: 85, category: "Databases" },
  
  // ML/AI
  { name: "NumPy", level: 92, category: "ML/AI" },
  { name: "TensorFlow", level: 88, category: "ML/AI" },
  { name: "PyTorch", level: 85, category: "ML/AI" },
  { name: "Pandas", level: 90, category: "ML/AI" },
  { name: "Matplotlib", level: 88, category: "ML/AI" },
  { name: "Scikit-learn", level: 86, category: "ML/AI" },
  
  // Tools
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "PyCharm", level: 90, category: "Tools" },
  { name: "GoLand", level: 85, category: "Tools" },
  { name: "IntelliJ IDEA", level: 88, category: "Tools" },
  { name: "Docker", level: 82, category: "Tools" },
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "GitHub CLI", level: 85, category: "Tools" },
  { name: "Codespaces", level: 80, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
  { name: "Render", level: 80, category: "Tools" }
];

export const experience: Experience[] = [
  {
    title: "AI Developer Intern",
    company: "VISWAM.AI",
    duration: "May 2025 - June 2025 (Hybrid)",
    description: [
      "Fine-tuned ML models using Python for production-ready AI applications",
      "Deployed models with open-source datasets and integrated DevOps practices",
      "Collaborated cross-functionally to embed AI into systems"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "CodeAlpha",
    duration: "October 2024 - November 2024 (Remote)",
    description: [
      "Focused on model training and ML fundamentals using Python",
      "Preprocessed data and contributed to version-controlled codebases"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Credit Scoring Model",
    description: "Machine learning model using logistic regression and decision trees to predict creditworthiness with high accuracy.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/pavanlost56/credit-scoring-model"
  },
  {
    title: "Emotion Recognition System",
    description: "Deep learning system built with TensorFlow/Keras, trained on FER2013 dataset with data augmentation for real-time emotion detection.",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/pavanlost56/emotion-recognition"
  },
  {
    title: "Ad Blocker Extension",
    description: "JavaScript-based browser extension using DOM manipulation and browser APIs to block intrusive advertisements.",
    techStack: ["JavaScript", "HTML", "CSS", "Browser APIs", "Manifest V3"],
    githubUrl: "https://github.com/pavanlost56/ad-blocker-extension"
  },
  {
    title: "Backend API Development",
    description: "RESTful APIs built with Go and Python following microservices architecture with robust logging and testing.",
    techStack: ["Go", "Python", "REST APIs", "Microservices", "Docker"],
    githubUrl: "https://github.com/pavanlost56/backend-api-services"
  },
  {
    title: "AI-Powered CLI - CodeInsight",
    description: "AI-powered command-line interface designed for Warp terminal, using Go for frontend and Python for backend.",
    techStack: ["Go", "Python", "CLI", "AI/ML", "Warp Terminal"],
    githubUrl: "https://github.com/pavanlost56/codeinsight"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations and dark theme.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/pavanlost56/cosmic-portfolio",
    liveUrl: "https://pavankumar-portfolio.vercel.app"
  }
];

export const learning: LearningItem[] = [
  { name: "Machine Learning", progress: 75 },
  { name: "Deep Learning", progress: 60 },
  { name: "Go", progress: 70 },
  { name: "Cloud Computing (AWS)", progress: 55 },
  { name: "DevOps", progress: 65 },
  { name: "Kubernetes", progress: 45 },
  { name: "GraphQL", progress: 50 },
  { name: "System Design", progress: 60 }
];

export const personalInfo = {
  name: "Ajmeera Pavan Kumar",
  role: "AI/ML Developer | Backend Developer",
  email: "pavankumar22119@gmail.com",
  phone: "+91-9440926408",
  location: "Hyderabad, India",
  github: "https://github.com/pavanlost56",
  linkedin: "https://www.linkedin.com/in/pavan-kumar-ajmeera-8b3ba3318/",
  resume: "/resume.pdf"
};
