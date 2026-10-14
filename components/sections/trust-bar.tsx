import { FadeUp } from "@/components/shared/motion-wrapper";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Atlassian",
  "MongoDB",
  "HashiCorp",
];

export function TrustBar() {
  return (
    <section
      className="border-y border-surface-700 bg-surface-900/50 px-4 py-10 sm:px-6 lg:px-8"
      aria-label="Mentor companies"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-subtle">
            Mentors with experience from
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {companies.map((company) => (
              <span
                key={company}
                className="font-display text-lg font-semibold text-surface-500 transition-colors hover:text-text-muted"
              >
                {company}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
