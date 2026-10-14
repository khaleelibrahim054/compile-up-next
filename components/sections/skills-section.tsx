import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";

const skillCategories = [
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "Branching strategies", "Commit conventions", "Merge / Rebase"],
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
  },
  {
    title: "Backend",
    skills: ["TypeScript", "NestJS", "REST APIs", "PostgreSQL", "Authentication", "Testing"],
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility", "Performance"],
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
  {
    title: "Professional Practice",
    skills: ["Pull Requests", "Code Review", "Agile / Scrum", "Issue Tracking", "Documentation"],
    color: "text-orange",
    border: "border-orange/20",
    bg: "bg-orange/5",
  },
];

export function SkillsSection() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="What You'll Learn"
          title={
            <>
              Skills built for the{" "}
              <span className="text-orange">real world.</span>
            </>
          }
          description="Not a list of technologies to memorize — a set of professional competencies you'll develop by actually using them."
        />

        <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, skills, color, border, bg }) => (
            <StaggerItem key={title}>
              <div className={`rounded-2xl border p-6 ${border} ${bg}`}>
                <h3 className={`mb-4 text-sm font-semibold uppercase tracking-widest ${color}`}>
                  {title}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-text-muted"
                    >
                      <span className={`size-1.5 rounded-full flex-none ${color} opacity-60`} style={{ backgroundColor: "currentColor" }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
