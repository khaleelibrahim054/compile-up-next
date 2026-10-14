import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { Target, Eye, Heart, Users, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema, breadcrumbSchema } from "@/lib/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "About CompileUp — Software Engineering Apprenticeship Platform",
  description:
    "Learn about CompileUp's mission to bridge the gap between learning to code and working as a professional software engineer through real-world apprenticeship.",
  path: "/about",
});

const values = [
  { icon: Target, title: "Real over simulated", description: "We believe the most effective way to learn engineering is to do engineering — on real software, with real stakes, under real mentorship." },
  { icon: Eye, title: "Transparency", description: "We are honest about what our program is and what it isn't. We set clear expectations, measure real outcomes, and hold ourselves accountable to them." },
  { icon: Heart, title: "Developer-first", description: "Every decision we make is optimized for student success — not optics, not marketing, not shortcuts. If it doesn't make our students better engineers, we don't do it." },
  { icon: Users, title: "Community over competition", description: "Our apprentices collaborate, not compete. The most effective learning environments are ones where people help each other grow." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "About", url: `${siteUrl}/about` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>Our Mission</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Closing the gap between{" "}
                <span className="text-orange">learning</span> and{" "}
                <span className="text-orange">working.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                CompileUp exists because the path from "I can write code" to "I am a professional software engineer" is broken. Tutorials teach syntax. Bootcamps teach frameworks. Neither teaches you what it actually feels like to work on a team, ship to production, or have your code reviewed by someone who knows more than you do.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Story */}
        <section className="bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">The problem we're solving</h2>
            </FadeUp>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-muted">
              <FadeUp delay={0.05}>
                <p>
                  Every year, thousands of developers complete coding courses, bootcamps, and CS degrees — and then struggle to get hired. Not because they lack intelligence or work ethic, but because they lack one thing: <strong className="text-white">professional experience</strong>.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  Employers want engineers who know how to work in a real codebase, collaborate on a team, and operate with professional judgment. These aren't things you can learn from a tutorial. They can only be learned by doing them.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p>
                  CompileUp is our answer to this problem. We built a structured apprenticeship model — grounded in real projects, real code reviews, and real mentorship — that gives aspiring engineers the professional foundation they need to succeed.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeUp>
              <h2 className="mb-12 text-center font-display text-3xl font-bold text-white sm:text-4xl">
                What we believe
              </h2>
            </FadeUp>
            <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ icon: Icon, title, description }) => (
                <StaggerItem key={title}>
                  <div className="flex flex-col rounded-2xl border border-surface-700 bg-surface-900 p-6">
                    <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-orange/20 bg-orange/10">
                      <Icon className="size-5 text-orange" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-display text-base font-semibold text-white">{title}</h3>
                    <p className="text-sm leading-relaxed text-text-muted">{description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface-900/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
                {[
                  { value: "6+", label: "Yrs min mentor exp" },
                  { value: "3", label: "Engineering tracks" },
                  { value: "100%", label: "Real project work" },
                  { value: "Free", label: "Founding cohort" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display text-4xl font-bold text-orange">{value}</p>
                    <p className="mt-1 text-sm text-text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
