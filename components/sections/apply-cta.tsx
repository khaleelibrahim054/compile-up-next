import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/shared/motion-wrapper";

export function ApplyCTA() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="apply-cta-heading"
    >
      <div className="mx-auto max-w-4xl">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl border border-orange/20 bg-gradient-to-br from-orange/10 via-surface-900 to-surface-900 px-8 py-16 text-center sm:px-16">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/20 blur-3xl"
              aria-hidden="true"
            />

            <FadeUp>
              <div className="relative mb-4 inline-flex size-14 items-center justify-center rounded-2xl border border-orange/30 bg-orange/10">
                <Zap className="size-6 text-orange" />
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2
                id="apply-cta-heading"
                className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                Your free spot is{" "}
                <span className="text-orange">waiting.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
                The Founding Cohort is free for a limited number of students. Don't pay for a bootcamp when you can build real software for free.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange-dim hover:-translate-y-0.5 glow-orange-sm active:translate-y-0"
                >
                  Apply for the Free Cohort
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-8 py-4 text-base font-medium text-white transition-all hover:border-surface-500 hover:bg-surface-800"
                >
                  Browse Programs
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 text-sm text-text-subtle">
                No credit card. No commitment. Cancel anytime.
              </p>
            </FadeUp>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
