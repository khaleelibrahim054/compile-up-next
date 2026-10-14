export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    category: "About CompileUp",
    question: "What is CompileUp?",
    answer:
      "CompileUp is a remote software engineering apprenticeship platform where aspiring developers learn by contributing to real software projects. Unlike coding bootcamps or tutorial platforms, students work on actual codebases alongside experienced engineers, following the same professional workflows — Git, pull requests, code reviews, agile sprints — used at top tech companies. Every student is guided by a mentor with 6+ years of industry experience.",
  },
  {
    category: "About CompileUp",
    question: "How is CompileUp different from a coding bootcamp?",
    answer:
      "Bootcamps teach you to write code. CompileUp trains you to work as a professional software engineer. The difference is significant. Here, you contribute to real projects with real codebases, get real pull requests reviewed by real senior engineers, and follow real agile workflows. You don't just learn syntax — you develop the collaboration, judgment, and professional habits that employers actually hire for. The experience you put on your resume is real, not fabricated.",
  },
  {
    category: "How It Works",
    question: "How does the CompileUp apprenticeship work?",
    answer:
      "After applying and being accepted, you are matched with a mentor and assigned to a real software project that aligns with your chosen track (Backend, Frontend, or Full Stack). You work in weekly sprints, pick up tickets, write code, open pull requests, and receive detailed code reviews from your mentor. You also attend structured sessions covering professional workflows, architecture, and career development. At the end of the program, you have a portfolio of real contributions and a verifiable certificate.",
  },
  {
    category: "How It Works",
    question: "What does a typical week look like?",
    answer:
      "A typical week includes: picking up 1–2 development tickets from the project board, writing code and opening a pull request, receiving a detailed code review from your mentor, attending a 1-hour mentor sync session, and participating in a team stand-up. The weekly time commitment is 15–20 hours for the Backend and Frontend tracks, and 20–25 hours for Full Stack.",
  },
  {
    category: "How It Works",
    question: "What kind of projects will I work on?",
    answer:
      "You will work on real software products — web applications, APIs, and tools that are actively developed and maintained. These are not sandbox exercises or tutorial apps built and discarded. Your contributions live in real codebases, go through real code review, and are merged into real production branches. The exact projects depend on your track and cohort, but all are professional-grade and reflect real engineering work.",
  },
  {
    category: "Requirements",
    question: "Do I need prior coding experience to apply?",
    answer:
      "You need a foundational understanding of programming to benefit from the program. For the Backend and Frontend tracks, you should be comfortable writing basic code in a language like JavaScript or Python, understand what functions and variables are, and have some familiarity with HTML/CSS (for Frontend). You do not need professional experience. The Full Stack track requires slightly more experience — some exposure to both frontend and backend concepts is recommended.",
  },
  {
    category: "Requirements",
    question: "How much time do I need to commit each week?",
    answer:
      "Plan for 15–20 hours per week for the Backend and Frontend tracks (12 weeks total), and 20–25 hours per week for the Full Stack track (16 weeks total). This is a serious program designed to produce real results. Students who treat it like a part-time job get the most out of it. CompileUp is fully remote, so you can schedule your work around your existing commitments.",
  },
  {
    category: "Mentors",
    question: "Who are the mentors?",
    answer:
      "CompileUp mentors are professional software engineers with a minimum of 6 years of industry experience at companies like Stripe, GitHub, Vercel, Shopify, and Cloudflare. They are practitioners, not instructors — they do real engineering work every day and bring that perspective to every code review and sync session. Each student is matched 1-on-1 with a mentor who specializes in their chosen track.",
  },
  {
    category: "Certificate",
    question: "What is the CompileUp certificate, and how is it verified?",
    answer:
      "Upon successful completion of the program, you receive a verifiable certificate issued by CompileUp. The certificate includes your name, the program you completed, the duration, and the skills you demonstrated. Employers, hiring managers, and anyone else can verify the authenticity of any CompileUp certificate in real time at compileup.dev/verify-certificate by entering the certificate ID. Verified certificates cannot be fabricated.",
  },
  {
    category: "Certificate",
    question: "What counts as 'successful completion'?",
    answer:
      "To earn your certificate, you must complete your program's full duration, open and have merged a minimum number of pull requests (varies by track), receive satisfactory code review scores from your mentor, complete all required structured sessions, and pass a final project milestone review. The bar is real because the certificate should mean something to employers.",
  },
  {
    category: "Founding Cohort",
    question: "What is the Free Founding Cohort?",
    answer:
      "The Free Founding Cohort is a limited-time offer for the first students to enroll in CompileUp. Founding students get access to the full program — mentorship, real projects, code reviews, structured sessions, and a verifiable certificate — completely free. In exchange, founding students help us refine the program, provide feedback, and become the first alumni of CompileUp. Spots are strictly limited.",
  },
  {
    category: "Founding Cohort",
    question: "How long is the free offer available?",
    answer:
      "The Free Founding Cohort is available for a limited time. Once all founding spots are filled, the program will move to its standard pricing model. If you are considering applying, the sooner you apply, the better your chances of securing a free spot. We will notify everyone on the waitlist if founding spots run out before they can be reviewed.",
  },
];

export const faqCategories = ["All", "About CompileUp", "How It Works", "Requirements", "Mentors", "Certificate", "Founding Cohort"];
