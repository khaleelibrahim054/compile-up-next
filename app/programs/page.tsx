import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { Server, Monitor, Layers, Clock, ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { buildMetadata } from "@/lib/metadata";
import { courseSchema, breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "Programs — Backend, Frontend & Full Stack Development Apprenticeships",
  description:
    "Choose your engineering track: Backend, Frontend, or Full Stack. Each program is built around real project contributions, 1-on-1 mentorship, and professional workflows.",
  path: "/programs",
});

const iconMap = { Server, Monitor, Layers } as const;
const cardColors = [
  { accent: "text-blue-400", border: "border-blue-500/20 hover:border-blue-500/40", bg: "bg-blue-500/5" },
  { accent: "text-emerald-400", border: "border-emerald-500/20 hover:border-emerald-500/40", bg: "bg-emerald-500/5" },
  { accent: "text-orange", border: "border-orange/20 hover:border-orange/40", bg: "bg-orange/5" },
];

export default function ProgramsPage() {
  return (
    <>
      {programs.map((p) => (
        <script key={p.id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema({
          name: p.name,
          description: p.description,
          url: `${siteUrl}/programs/${p.slug}`,
          skills: p.skills,
        })) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Programs", url: `${siteUrl}/programs` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>Engineering Tracks</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Choose your{" "}
                <span className="text-orange">engineering path.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                Three focused apprenticeship tracks, each designed around real project contributions. Every track includes 1-on-1 mentorship, professional workflows, and a verifiable certificate.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Programs */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <StaggerChildren className="grid gap-8 lg:grid-cols-3">
              {programs.map((program, i) => {
                const Icon = iconMap[program.icon as keyof typeof iconMap] ?? Server;
                const colors = cardColors[i];
                return (
                  <StaggerItem key={program.id}>
                    <article className={cn("group flex h-full flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1", colors.border, colors.bg)}>
                      <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-surface-700 bg-surface-800">
                        <Icon className="size-5 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800/80 px-3 py-1 text-xs text-text-muted">
                          <Clock className="size-3" /> {program.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800/80 px-3 py-1 text-xs text-text-muted">
                          {program.commitment}
                        </span>
                      </div>
                      <h2 className="mb-1 font-display text-xl font-semibold text-white">{program.name}</h2>
                      <p className={cn("mb-3 text-sm font-medium", colors.accent)}>{program.tagline}</p>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">{program.description}</p>

                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-subtle">Key skills</h3>
                      <ul className="mb-6 space-y-1.5" role="list">
                        {program.skills.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-text-muted">
                            <span className={cn("size-1.5 rounded-full flex-none", colors.accent)} style={{ backgroundColor: "currentColor" }} />
                            {s}
                          </li>
                        ))}
                      </ul>

                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {program.technologies.map((t) => (
                          <span key={t} className="rounded-md border border-surface-700 bg-surface-800 px-2.5 py-1 font-mono text-xs text-text-muted">{t}</span>
                        ))}
                      </div>

                      <Link href={`/programs/${program.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-orange">
                        Full curriculum <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
