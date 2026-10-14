export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  track: string;
  quote: string;
  initials: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aisha Mensah",
    role: "Junior Software Engineer",
    company: "Hired at a fintech startup",
    track: "Full Stack",
    quote:
      "I spent two years watching tutorials and felt like I was going in circles. CompileUp was the first time I actually felt like an engineer. My mentor reviewed my pull requests the same way a real tech lead would — detailed, honest, and educational. Three months after graduating, I landed my first job.",
    initials: "AM",
    gradient: "from-violet-500 to-orange",
  },
  {
    id: "2",
    name: "Carlos Fernández",
    role: "Backend Engineer",
    company: "Now at a SaaS company",
    track: "Backend",
    quote:
      "The code reviews changed everything for me. I thought I knew how to write clean code until Jordan reviewed my first PR and pointed out things I had never even considered — naming, error handling, edge cases. That level of feedback is impossible to get from YouTube or a bootcamp.",
    initials: "CF",
    gradient: "from-blue-500 to-orange",
  },
  {
    id: "3",
    name: "Yuki Tanaka",
    role: "Frontend Developer",
    company: "Freelancing + agency work",
    track: "Frontend",
    quote:
      "What I put on my GitHub now is work I am genuinely proud of. Real commits, real reviews, real merges. When interviewers ask about my experience with pull requests and agile, I don't have to make anything up — I have receipts. CompileUp gave me a real engineering story to tell.",
    initials: "YT",
    gradient: "from-emerald-500 to-orange",
  },
  {
    id: "4",
    name: "Omar Hassan",
    role: "Software Developer",
    company: "Remote position secured",
    track: "Full Stack",
    quote:
      "I was a self-taught developer who could build things but had never worked on a team or an existing codebase. CompileUp fixed that gap completely. Learning Git workflows, reading unfamiliar code, giving and receiving reviews — that is the actual job, and now I know how to do it.",
    initials: "OH",
    gradient: "from-rose-500 to-orange",
  },
];
