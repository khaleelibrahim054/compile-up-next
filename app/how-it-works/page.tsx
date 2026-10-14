import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { ClipboardList, UserCheck, Code, Award, GitPullRequest, MessageSquare, RefreshCw, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "How CompileUp Works — The Software Engineering Apprenticeship Process",
  description:
    "Learn how CompileUp's apprenticeship model works: apply, get matched with a mentor, build real software, and earn a verifiable certificate.",
  path: "/how-it-works",
});

const phases = [
  { phase: "Phase 1", icon: ClipboardList, title: "Apply", duration: "Day 1",
    steps: ["Submit your application (10 minutes)", "Tell us your background and goals", "Choose your engineering track", "Receive a decision within 48 hours"],
    note: "No coding test. No technical interview. Just a genuine conversation about your goals." },
  { phase: "Phase 2", icon: UserCheck, title: "Onboard & Match", duration: "Week 1",
    steps: ["Get matched with your 1-on-1 mentor", "Meet your project team", "Set up your development environment", "Attend your first mentor sync session"],
    note: "We match mentors based on your track, goals, and communication style." },
  { phase: "Phase 3", icon: Code, title: "Build & Learn", duration: "Weeks 2–11",
    steps: ["Work in weekly agile sprints", "Pick up real tickets from the project board", "Write code and open pull requests", "Receive detailed mentor code reviews", "Attend structured sessions on architecture and workflows", "Participate in team stand-ups and retros"],
    note: "This is the heart of the program. Real work, real feedback, real growth." },
  { phase: "Phase 4", icon: Award, title: "Complete & Certify", duration: "Week 12+",
    steps: ["Complete your final project milestone", "Receive a mentor-signed completion review", "Earn your verifiable CompileUp certificate", "Join the alumni network"],
    note: "Your certificate can be verified instantly at compileup.dev/verify-certificate." },
];

const weeklyRhythm = [
  { icon: GitPullRequest, title: "Open Pull Requests", desc: "Pick up 1–2 tickets and open PRs with clear descriptions." },
  { icon: MessageSquare, title: "Receive Code Reviews", desc: "Your mentor reviews every PR with line-by-line feedback." },
  { icon: RefreshCw, title: "Iterate & Merge", desc: "Address feedback, revise, and get your code merged." },
  { icon: Users, title: "Team Sync", desc: "Weekly 1-hour session with your mentor + team stand-up." },
];

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "How It Works", url: `${siteUrl}/how-it-works` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>The Process</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                How CompileUp works.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                A structured, mentor-guided apprenticeship from application to certified engineer. Here's exactly what happens at every stage.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Phases */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6">
            {phases.map(({ phase, icon: Icon, title, duration, steps, note }, i) => (
              <FadeUp key={phase} delay={i * 0.08}>
                <article className="rounded-2xl border border-surface-700 bg-surface-900 p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-orange/20 bg-orange/10">
                        <Icon className="size-5 text-orange" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">{phase}</p>
                        <h2 className="font-display text-xl font-bold text-white">{title}</h2>
                      </div>
                    </div>
                    <span className="rounded-full border border-surface-700 bg-surface-800 px-3 py-1 text-xs text-text-muted shrink-0">{duration}</span>
                  </div>
                  <ul className="mb-5 space-y-2.5" role="list">
                    {steps.map((step) => (
                      <li key={step} className="flex items-center gap-3 text-sm text-text-muted">
                        <span className="size-1.5 rounded-full bg-orange flex-none" />
                        {step}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-orange/20 bg-orange/5 px-4 py-3">
                    <p className="text-sm font-medium text-orange">{note}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Weekly rhythm */}
        <section className="bg-surface-900/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <h2 className="mb-10 text-center font-display text-3xl font-bold text-white">A typical week</h2>
            </FadeUp>
            <StaggerChildren className="grid gap-5 sm:grid-cols-2">
              {weeklyRhythm.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="flex gap-4 rounded-xl border border-surface-700 bg-surface-900 p-5">
                    <div className="flex size-9 flex-none items-center justify-center rounded-lg border border-surface-700 bg-surface-800">
                      <Icon className="size-4 text-orange" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-white">{title}</h3>
                      <p className="text-sm text-text-muted">{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
