import Link from "next/link";
import { ClipboardList, UserCheck, Code, Award, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem, FadeUp } from "@/components/shared/motion-wrapper";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Apply",
    description:
      "Submit a short application telling us your background, goals, and which track interests you. No experience required for beginner tracks — just genuine motivation.",
    detail: "Takes 10 minutes. No coding test.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Get Matched",
    description:
      "We review your application and match you with a mentor whose specialization aligns with your chosen track. You also get introduced to your project and team.",
    detail: "1-on-1 mentor assignment.",
  },
  {
    step: "03",
    icon: Code,
    title: "Build & Learn",
    description:
      "Work in weekly sprints. Pick tickets, write code, open pull requests, receive mentor code reviews. Attend structured sessions on architecture, workflows, and career growth.",
    detail: "Real projects. Real feedback. Real growth.",
  },
  {
    step: "04",
    icon: Award,
    title: "Graduate & Certify",
    description:
      "Complete your program milestones and receive a verifiable certificate. Graduate with a real Git contribution history and the professional experience to back it up.",
    detail: "Certificate verifiable on compileup.dev.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="The Process"
          title={
            <>
              From application to{" "}
              <span className="text-orange">certified engineer</span>
            </>
          }
          description="A clear, guided path from where you are now to where you want to be."
          align="center"
        />

        <StaggerChildren className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ step, icon: Icon, title, description, detail }) => (
            <StaggerItem key={step}>
              <article className="relative flex flex-col rounded-2xl border border-surface-700 bg-surface-900 p-7 transition-all hover:border-orange/30 hover:-translate-y-1">
                {/* Step number */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-orange/20 bg-orange/10">
                    <Icon className="size-5 text-orange" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-4xl font-bold text-surface-600">{step}</span>
                </div>

                <h3 className="mb-3 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-text-muted">{description}</p>
                <p className="mt-5 text-xs font-semibold text-orange">{detail}</p>

                {/* Connector line */}
                {step !== "04" && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="size-5 text-surface-600" />
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange transition-colors hover:text-orange-bright"
            >
              Learn more about the process
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
