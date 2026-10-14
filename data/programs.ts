export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  commitment: string;
  level: string;
  skills: string[];
  technologies: string[];
  projectExamples: string[];
  outcomes: string[];
  color: string;
  icon: string;
}

export const programs: Program[] = [
  {
    id: "backend",
    slug: "backend",
    name: "Backend Development",
    tagline: "Build the engines that power software.",
    description:
      "Master server-side development by building real APIs with NestJS and TypeScript, working with PostgreSQL, and learning the architecture patterns used in production systems. You will work alongside senior engineers on live projects and follow professional engineering workflows.",
    duration: "12 weeks",
    commitment: "15–20 hrs/week",
    level: "Beginner to Intermediate",
    skills: [
      "REST API design",
      "Database design & modeling",
      "Authentication & authorization",
      "NestJS architecture patterns",
      "Testing and CI/CD",
      "Deployment",
    ],
    technologies: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    projectExamples: [
      "Build a production-ready REST API with NestJS and JWT authentication",
      "Design and implement a normalized PostgreSQL schema with TypeORM",
      "Write automated tests and set up a CI pipeline with GitHub Actions",
      "Deploy a NestJS service to a cloud provider",
    ],
    outcomes: [
      "Contribute confidently to NestJS backend codebases",
      "Design and build RESTful APIs from scratch with TypeScript",
      "Write testable, maintainable server-side code",
      "Understand deployment and production operations",
    ],
    color: "from-blue-500/20",
    icon: "Server",
  },
  {
    id: "frontend",
    slug: "frontend",
    name: "Frontend Development",
    tagline: "Craft the interfaces users live in.",
    description:
      "Learn modern frontend development by building real product interfaces with React and Next.js. You will write production-quality TypeScript, handle state management, optimize performance, and ship accessible, pixel-perfect UIs reviewed by senior engineers.",
    duration: "12 weeks",
    commitment: "15–20 hrs/week",
    level: "Beginner to Intermediate",
    skills: [
      "React component architecture",
      "State management",
      "Performance optimization",
      "Accessibility (WCAG 2.2)",
      "Testing",
      "Responsive design",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
    projectExamples: [
      "Build a responsive product interface with React and a design system",
      "Implement accessible forms with complex validation using React Hook Form",
      "Optimize a Next.js page to Lighthouse score 95+",
      "Write component tests with Vitest and end-to-end tests with Playwright",
    ],
    outcomes: [
      "Build production-quality React and Next.js applications",
      "Write accessible, performant frontend code",
      "Navigate and contribute to real frontend codebases",
      "Confidently do frontend code reviews",
    ],
    color: "from-emerald-500/20",
    icon: "Monitor",
  },
  {
    id: "fullstack",
    slug: "fullstack",
    name: "Full Stack Development",
    tagline: "Own the entire product from database to UI.",
    description:
      "The most comprehensive track. Build complete features end-to-end — from PostgreSQL schema through a NestJS API to a Next.js user interface. Learn how frontend and backend concerns interact in a professional codebase and develop the T-shaped skills that make you a highly versatile engineer.",
    duration: "16 weeks",
    commitment: "20–25 hrs/week",
    level: "Intermediate",
    skills: [
      "End-to-end feature development",
      "Full stack architecture",
      "API design and consumption",
      "Database modeling with PostgreSQL",
      "Performance across the stack",
      "System design fundamentals",
    ],
    technologies: ["TypeScript", "NestJS", "React", "Next.js", "PostgreSQL", "Tailwind CSS", "Docker", "Vitest"],
    projectExamples: [
      "Build a complete feature from PostgreSQL schema to Next.js UI",
      "Design and implement an authentication system with NestJS and React",
      "Create a real-time feature with WebSockets across the full stack",
      "Deploy a NestJS + Next.js application to production",
    ],
    outcomes: [
      "Own complete features across the full stack with TypeScript",
      "Make informed architecture decisions between NestJS and Next.js",
      "Collaborate effectively with frontend and backend teams",
      "Ship complete, tested, documented features",
    ],
    color: "from-orange/20",
    icon: "Layers",
  },
];
