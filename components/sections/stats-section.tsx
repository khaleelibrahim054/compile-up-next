import { AnimatedNumber } from "@/components/shared/animated-number";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";

const stats = [
  { value: 6, suffix: "+", label: "Minimum years of mentor experience", description: "Every mentor has at least 6 years of professional engineering experience at top tech companies." },
  { value: 3, suffix: "", label: "Engineering tracks", description: "Backend, Frontend, and Full Stack — each with a dedicated curriculum and mentor pool." },
  { value: 100, suffix: "%", label: "Real project contributions", description: "Every student works on actual software, not tutorial apps. Every line of code is real." },
  { value: 1, suffix: "-on-1", label: "Mentor matching", description: "Each student is personally matched with a mentor based on their track, goals, and background." },
];

export function StatsSection() {
  return (
    <section
      className="bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <h2
            id="stats-heading"
            className="sr-only"
          >
            CompileUp by the numbers
          </h2>
          <p className="mb-12 text-center text-xs font-semibold uppercase tracking-widest text-text-subtle">
            The numbers behind the experience
          </p>
        </FadeUp>

        <StaggerChildren className="grid gap-px overflow-hidden rounded-2xl border border-surface-700 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, label, description }) => (
            <StaggerItem key={label}>
              <div className="flex h-full flex-col bg-surface-900 p-8">
                <p className="font-display text-5xl font-bold text-white">
                  <AnimatedNumber value={value} suffix={suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold text-orange">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
