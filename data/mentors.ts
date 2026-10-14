export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  yearsExperience: number;
  specialization: string[];
  bio: string;
  skills: string[];
  gradient: string;
  initials: string;
  avatar: string;
}

export const mentors: Mentor[] = [
  {
    id: "ibrahim-khaleel",
    name: "Ibrahim Khaleel",
    title: "Founder & Senior Software Engineer",
    company: "MVP Applications and Game Design",
    yearsExperience: 6,
    specialization: ["Full Stack", "NestJS", "React / Next.js"],
    bio: "Ibrahim builds production software at MVP Applications and Game Design, where he leads full stack development across web apps and interactive products. He is passionate about helping aspiring engineers bridge the gap between learning and professional practice — through real code, real reviews, and real workflows.",
    skills: ["TypeScript", "NestJS", "React", "Next.js", "PostgreSQL", "Docker"],
    gradient: "from-orange/30 to-violet-500/20",
    initials: "IK",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=ibrahim-khaleel&backgroundColor=1e1e2e&style=circle&mouth=smile",
  },
];
