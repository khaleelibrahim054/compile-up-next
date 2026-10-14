import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { SectionBadge } from "@/components/shared/section-badge";
import { Clock, BarChart2, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { programs } from "@/data/programs";
import { courseSchema, breadcrumbSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return {};
  return buildMetadata({
    title: `${program.name} Apprenticeship — CompileUp`,
    description: program.description,
    path: `/programs/${slug}`,
    keywords: [program.name, ...program.technologies, "software engineering apprenticeship", "coding mentorship"],
  });
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema({
        name: program.name,
        description: program.description,
        url: `${siteUrl}/programs/${slug}`,
        skills: program.skills,
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Programs", url: `${siteUrl}/programs` },
        { name: program.name, url: `${siteUrl}/programs/${slug}` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl">
            <FadeUp>
              <Link href="/programs" className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white">
                <ArrowLeft className="size-4" /> All Programs
              </Link>
            </FadeUp>
            <FadeUp delay={0.05}><SectionBadge>{program.level}</SectionBadge></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">{program.name}</h1>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-3 text-xl font-medium text-orange">{program.tagline}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">{program.description}</p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-700 bg-surface-800 px-4 py-2 text-sm text-text-muted">
                  <Clock className="size-4" /> {program.duration}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-700 bg-surface-800 px-4 py-2 text-sm text-text-muted">
                  <BarChart2 className="size-4" /> {program.commitment}
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8">
                <Link href="/apply" className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-orange-dim glow-orange-sm">
                  Apply for this Program <ArrowRight className="size-5" />
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Details grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
            {/* Skills */}
            <div className="rounded-2xl border border-surface-700 bg-surface-900 p-7">
              <h2 className="mb-5 font-display text-lg font-semibold text-white">Skills You'll Build</h2>
              <ul className="space-y-3" role="list">
                {program.skills.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-text-muted">
                    <CheckCircle className="size-4 flex-none text-orange" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="rounded-2xl border border-surface-700 bg-surface-900 p-7">
              <h2 className="mb-5 font-display text-lg font-semibold text-white">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {program.technologies.map((t) => (
                  <span key={t} className="rounded-lg border border-surface-700 bg-surface-800 px-3 py-1.5 font-mono text-sm text-text-muted">{t}</span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="rounded-2xl border border-orange/20 bg-orange/5 p-7">
              <h2 className="mb-5 font-display text-lg font-semibold text-white">Outcomes</h2>
              <ul className="space-y-3" role="list">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-text-muted">
                    <CheckCircle className="mt-0.5 size-4 flex-none text-orange" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Project Examples */}
          <div className="mx-auto mt-8 max-w-7xl">
            <div className="rounded-2xl border border-surface-700 bg-surface-900 p-7">
              <h2 className="mb-6 font-display text-xl font-semibold text-white">Example Project Work</h2>
              <StaggerChildren className="grid gap-4 sm:grid-cols-2">
                {program.projectExamples.map((example) => (
                  <StaggerItem key={example}>
                    <div className="flex items-start gap-3 rounded-xl border border-surface-700 bg-surface-800 p-4">
                      <div className="mt-0.5 size-2 rounded-full bg-orange flex-none" />
                      <p className="text-sm text-text-muted">{example}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
