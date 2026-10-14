import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem, FadeUp } from "@/components/shared/motion-wrapper";
import { mentors } from "@/data/mentors";
import { cn } from "@/lib/utils";

export function MentorsSection() {
  const [mentor] = mentors;

  return (
    <section
      className="bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="mentors-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="The Mentors"
          title={
            <>
              Guided by engineers who{" "}
              <span className="text-orange">ship real software.</span>
            </>
          }
          description="Your mentor isn't an instructor who teaches from slides. They're a practitioner who reviews code every day — and brings that judgment to your work."
        />

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Real mentor card */}
          <StaggerItem>
            <article className="group flex h-full flex-col rounded-2xl border border-surface-700 bg-surface-900 p-7 transition-all hover:border-surface-600 hover:-translate-y-1">
              {/* Avatar */}
              <div className="mb-5 flex items-center gap-4">
                <div
                  className={cn(
                    "relative flex size-14 flex-none items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br text-base font-bold text-white",
                    mentor.gradient
                  )}
                >
                  {mentor.avatar ? (
                    <Image
                      src={mentor.avatar}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    mentor.initials
                  )}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{mentor.name}</h3>
                  <p className="text-sm text-text-muted">{mentor.title}</p>
                </div>
              </div>

              {/* Company & exp */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-700 bg-surface-800 px-3 py-1 text-xs text-text-muted">
                  <Building2 className="size-3" />
                  {mentor.company}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs text-orange">
                  {mentor.yearsExperience}+ yrs exp
                </span>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
                {mentor.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {mentor.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-surface-700 bg-surface-800 px-2 py-0.5 font-mono text-xs text-text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>

          {/* Coming soon cards */}
          {[1, 2].map((i) => (
            <StaggerItem key={i}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-surface-700 bg-surface-900/40 p-7 text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-surface-700 bg-surface-800">
                  <Clock className="size-5 text-text-subtle" strokeWidth={1.5} />
                </div>
                <p className="font-display text-sm font-semibold text-white">More mentors coming soon</p>
                <p className="mt-2 text-xs leading-relaxed text-text-subtle">
                  We are vetting senior engineers to join the program. Applications open now.
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/mentors"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange transition-colors hover:text-orange-bright"
            >
              Learn about mentorship
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
