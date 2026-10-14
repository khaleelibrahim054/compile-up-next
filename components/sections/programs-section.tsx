import Link from "next/link";
import { Server, Monitor, Layers, Clock, BarChart2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { programs } from "@/data/programs";
import { cn } from "@/lib/utils";

const iconMap = { Server, Monitor, Layers } as const;

const cardAccents = [
  "border-blue-500/20 hover:border-blue-500/40",
  "border-emerald-500/20 hover:border-emerald-500/40",
  "border-orange/20 hover:border-orange/40",
];

export function ProgramsSection() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Programs"
          title={
            <>
              Choose your{" "}
              <span className="text-orange">engineering track</span>
            </>
          }
          description="Three focused tracks, each built around real project contributions and 1-on-1 mentorship."
        />

        <StaggerChildren className="mt-16 grid gap-6 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon as keyof typeof iconMap] ?? Server;
            return (
              <StaggerItem key={program.id}>
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border bg-surface-900 p-8 transition-all hover:-translate-y-1",
                    cardAccents[i]
                  )}
                >
                  {/* Icon */}
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl border border-surface-700 bg-surface-800">
                    <Icon className="size-5 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Meta */}
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800 px-3 py-1 text-xs text-text-muted">
                      <Clock className="size-3" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-800 px-3 py-1 text-xs text-text-muted">
                      <BarChart2 className="size-3" />
                      {program.level}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold text-white">
                    {program.name}
                  </h3>
                  <p className="mb-1 text-sm font-medium text-orange">{program.tagline}</p>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">
                    {program.description}
                  </p>

                  {/* Skills preview */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {program.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-surface-700 bg-surface-800 px-2.5 py-1 font-mono text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {program.technologies.length > 4 && (
                      <span className="rounded-md border border-surface-700 bg-surface-800 px-2.5 py-1 font-mono text-xs text-text-subtle">
                        +{program.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-orange"
                  >
                    View curriculum
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
