import { GitPullRequest, Users, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    icon: Briefcase,
    title: "Real Project Contributions",
    description:
      "You don't build toy apps for a portfolio. You contribute to actual software with real codebases, real tickets, and real stakes. Every commit you make is real.",
    highlight: "Not tutorial projects. Real software.",
    color: "text-orange",
    borderColor: "border-orange/20",
    bgColor: "bg-orange/5",
  },
  {
    icon: GitPullRequest,
    title: "Professional Engineering Workflows",
    description:
      "Git, branches, pull requests, code reviews, agile sprints — you follow the exact same workflows used at companies like Google and Atlassian from day one.",
    highlight: "Industry-standard from day one.",
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    bgColor: "bg-blue-400/5",
  },
  {
    icon: Users,
    title: "Expert Mentor Guidance",
    description:
      "Every student is matched 1-on-1 with a mentor who has 6+ years of professional engineering experience. Your code is reviewed by someone who ships production software.",
    highlight: "6+ years of real-world experience.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400/5",
  },
];

export function Differentiators() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="differentiators-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Why CompileUp"
          title={
            <>
              Built for the gap between{" "}
              <span className="text-orange">learning</span> and{" "}
              <span className="text-orange">working.</span>
            </>
          }
          description="Most developers struggle to get their first job because they've never worked in a real engineering environment. CompileUp closes that gap."
        />

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-3">
          {differentiators.map(({ icon: Icon, title, description, highlight, color, borderColor, bgColor }) => (
            <StaggerItem key={title}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1",
                  borderColor,
                  bgColor
                )}
              >
                <div
                  className={cn(
                    "mb-5 flex size-12 items-center justify-center rounded-xl border",
                    borderColor,
                    bgColor
                  )}
                >
                  <Icon className={cn("size-5", color)} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-text-muted">{description}</p>
                <p className={cn("mt-5 text-sm font-semibold", color)}>{highlight}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
