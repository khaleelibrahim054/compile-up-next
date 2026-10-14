"use client";

import { GitBranch, GitPullRequest, MessageSquare, RefreshCw, Kanban, Users } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem, FadeUp } from "@/components/shared/motion-wrapper";

const gitLog = [
  { hash: "a3f9c12", msg: "feat: add JWT refresh token rotation", author: "you", branch: "feature/auth", color: "text-emerald-400" },
  { hash: "b8e2d45", msg: "fix: resolve race condition in queue", author: "mentor", branch: "main", color: "text-blue-400" },
  { hash: "c1d7f88", msg: "refactor: extract payment service", author: "you", branch: "feature/payments", color: "text-orange" },
  { hash: "d4a0e21", msg: "test: add edge cases for auth flow", author: "you", branch: "feature/auth", color: "text-violet-400" },
  { hash: "e9b3c67", msg: "docs: update API contract spec", author: "mentor", branch: "main", color: "text-blue-400" },
];

function GitTerminal() {
  return (
    <div className="rounded-xl border border-surface-700 bg-surface-950 overflow-hidden shadow-2xl shadow-black/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-surface-700 bg-surface-900 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-yellow-500/70" />
          <span className="size-3 rounded-full bg-emerald-500/70" />
        </div>
        <span className="ml-2 font-mono text-xs text-text-subtle">~/projects/compileup-api</span>
      </div>
      {/* Git log output */}
      <div className="p-4 space-y-2 font-mono text-xs">
        <div className="text-text-subtle mb-3">$ git log --oneline --graph</div>
        {gitLog.map(({ hash, msg, author, branch, color }) => (
          <div key={hash} className="flex items-start gap-2">
            <span className="text-surface-500 shrink-0">*</span>
            <span className="text-surface-400 shrink-0">{hash}</span>
            <span className="text-text-muted flex-1 truncate">{msg}</span>
            <span className={`shrink-0 ${color}`}>({branch})</span>
          </div>
        ))}
        <div className="mt-3 flex items-center gap-2 text-text-subtle">
          <span className="text-emerald-400">✓</span>
          <span>3 PRs merged this sprint</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="animate-pulse text-orange">▋</span>
        </div>
      </div>
    </div>
  );
}

const workflows = [
  {
    icon: GitBranch,
    title: "Feature Branching",
    description:
      "Every feature starts with a branch. You learn to scope your work, name branches clearly, and keep commits atomic and well-described.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Requests",
    description:
      "Open structured PRs with clear descriptions, linked tickets, and self-reviewed diffs — the same standard expected at top engineering teams.",
  },
  {
    icon: MessageSquare,
    title: "Code Reviews",
    description:
      "Your mentor reviews every PR. You receive line-by-line feedback on logic, style, edge cases, performance, and architecture.",
  },
  {
    icon: RefreshCw,
    title: "Agile Sprints",
    description:
      "Work in time-boxed sprints. Participate in stand-ups, sprint planning, and retrospectives — the cadence of a real product team.",
  },
  {
    icon: Kanban,
    title: "Issue Tracking",
    description:
      "Pick up tickets, estimate complexity, update status, and close issues — full professional lifecycle management of your work.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Collaborate with other apprentices and mentors. Learn to communicate blockers, ask good questions, and give constructive feedback.",
  },
];

export function RealExperience() {
  return (
    <section
      className="overflow-hidden bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="real-experience-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Left: header */}
          <div className="lg:sticky lg:top-24 lg:w-[380px] lg:flex-none">
            <SectionHeader
              badge="Professional Workflows"
              title={
                <>
                  The real experience,{" "}
                  <span className="text-orange">from day one.</span>
                </>
              }
              description="Most developers don't encounter professional engineering workflows until their first job. At CompileUp, they are the foundation of everything."
              align="left"
            />
            <FadeUp delay={0.15}>
              <div className="mt-8 rounded-xl border border-orange/20 bg-orange/5 p-5">
                <p className="text-sm font-semibold text-white">What this means for you:</p>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  When you walk into your first engineering interview or start your first job, you won't be learning these workflows for the first time. You'll already know them.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-8">
                <GitTerminal />
              </div>
            </FadeUp>
          </div>

          {/* Right: grid */}
          <div className="flex-1">
            <StaggerChildren className="grid gap-5 sm:grid-cols-2">
              {workflows.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <div className="flex flex-col gap-3 rounded-xl border border-surface-700 bg-surface-900 p-5 transition-all hover:border-surface-600">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-surface-700 bg-surface-800">
                      <Icon className="size-4 text-orange" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-display text-base font-semibold text-white">
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted">{description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
