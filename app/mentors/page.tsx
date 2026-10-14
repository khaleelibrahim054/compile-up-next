import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { Building2, Clock } from "lucide-react";
import { mentors } from "@/data/mentors";
import { buildMetadata } from "@/lib/metadata";
import { personSchema, breadcrumbSchema } from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "Meet the Mentors — Senior Engineers with 6+ Years Experience",
  description:
    "CompileUp mentors are professional software engineers with a minimum of 6 years of industry experience. They review production code daily and bring that same standard to your work.",
  path: "/mentors",
});

export default function MentorsPage() {
  return (
    <>
      {mentors.map((m) => (
        <script key={m.id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema({
          name: m.name,
          jobTitle: m.title,
          company: m.company,
          url: `${siteUrl}/mentors`,
          description: m.bio,
        })) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Mentors", url: `${siteUrl}/mentors` },
      ])) }} />

      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>The Mentors</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Learn from engineers who{" "}
                <span className="text-orange">ship every day.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                Every CompileUp mentor is an active professional software engineer with a minimum of 6 years of industry experience. They review production code daily — and they bring that same standard to your work.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Mentor cards */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8" aria-label="Mentor profiles">
          <div className="mx-auto max-w-7xl">
            <StaggerChildren className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {/* Real mentor */}
              {mentors.map(({ id, name, title, company, yearsExperience, bio, skills, specialization, initials, gradient, avatar }) => (
                <StaggerItem key={id}>
                  <article className="flex h-full flex-col rounded-2xl border border-surface-700 bg-surface-900 p-8 transition-all hover:border-surface-600 hover:-translate-y-1">
                    {/* Avatar & name */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className={cn("relative flex size-16 flex-none items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br text-xl font-bold text-white", gradient)}>
                        {avatar ? (
                          <Image src={avatar} alt={name} fill className="object-cover" unoptimized />
                        ) : (
                          initials
                        )}
                      </div>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-white">{name}</h2>
                        <p className="text-sm text-text-muted">{title}</p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-700 bg-surface-800 px-3 py-1 text-xs text-text-muted">
                        <Building2 className="size-3" /> {company}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/20 bg-orange/5 px-3 py-1 text-xs text-orange">
                        {yearsExperience}+ yrs exp
                      </span>
                    </div>

                    {/* Specialization */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {specialization.map((s) => (
                        <span key={s} className="rounded-md border border-surface-700 bg-surface-800 px-2.5 py-0.5 text-xs font-medium text-text-muted">{s}</span>
                      ))}
                    </div>

                    <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted">{bio}</p>

                    <div className="flex flex-wrap gap-1.5 border-t border-surface-700 pt-5">
                      {skills.map((s) => (
                        <span key={s} className="rounded-md border border-surface-700 bg-surface-800 px-2 py-0.5 font-mono text-xs text-text-muted">{s}</span>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              ))}

              {/* Coming soon slots */}
              {[1, 2, 3, 4, 5].map((i) => (
                <StaggerItem key={`soon-${i}`}>
                  <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-surface-700 bg-surface-900/40 p-8 text-center">
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-surface-700 bg-surface-800">
                      <Clock className="size-5 text-text-subtle" strokeWidth={1.5} />
                    </div>
                    <p className="font-display text-sm font-semibold text-white">Mentor coming soon</p>
                    <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-text-subtle">
                      We are vetting senior engineers to expand our mentor roster.
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Mentor requirements */}
        <section className="bg-surface-900/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeUp>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our mentor standard</h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Every mentor who joins CompileUp goes through a rigorous vetting process. They must demonstrate not only technical expertise, but the communication skills and teaching mindset to give students the kind of feedback that actually accelerates growth.
              </p>
            </FadeUp>
            <StaggerChildren className="grid gap-4 sm:grid-cols-3 text-left">
              {["6+ years of professional software engineering experience", "Currently working as an engineer at a recognized company", "Demonstrated ability to give clear, constructive code review feedback"].map((req) => (
                <StaggerItem key={req}>
                  <div className="rounded-xl border border-surface-700 bg-surface-900 p-5">
                    <div className="mb-2 size-2 rounded-full bg-orange" />
                    <p className="text-sm text-text-muted">{req}</p>
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
