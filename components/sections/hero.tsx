"use client";

import Link from "next/link";
import { ArrowRight, GitPullRequest, CheckCircle, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroFadeUp } from "@/components/shared/motion-wrapper";

function PRCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[340px] rounded-2xl border border-surface-700 bg-surface-900 p-4 shadow-2xl shadow-black/60"
      aria-hidden="true"
    >
      {/* PR Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500/20">
          <GitPullRequest className="size-3 text-emerald-400" />
        </div>
        <span className="text-xs font-medium text-emerald-400">Open — PR #47</span>
        <span className="ml-auto text-xs text-text-subtle">2 min ago</span>
      </div>
      <p className="text-sm font-medium text-white mb-3">feat: add JWT refresh token rotation</p>

      {/* Code diff */}
      <div className="rounded-lg bg-surface-950 p-3 font-mono text-xs mb-3 border border-surface-700">
        <div className="text-text-subtle mb-1">{"auth/token.service.ts"}</div>
        <div className="text-red-400/80">{"- const token = signJWT(payload)"}</div>
        <div className="text-emerald-400">{"+ const { access, refresh } = await rotateTokens(user)"}</div>
        <div className="text-emerald-400">{"+ await storeRefreshToken(user.id, refresh)"}</div>
        <div className="text-emerald-400">{"+ return { access, refresh }"}</div>
      </div>

      {/* Review comment */}
      <div className="rounded-lg border border-surface-700 bg-surface-800/60 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex size-5 items-center justify-center rounded-full bg-orange/20 text-[10px] font-bold text-orange">
            JK
          </div>
          <span className="text-xs font-medium text-white">Jordan Kim</span>
          <span className="text-xs text-text-subtle">• Mentor review</span>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">
          Excellent approach! Consider adding a blacklist check for invalidated tokens before rotation completes.
        </p>
        <div className="mt-2 flex items-center gap-1">
          <CheckCircle className="size-3 text-emerald-400" />
          <span className="text-xs text-emerald-400 font-medium">Approved with suggestion</span>
        </div>
      </div>
    </motion.div>
  );
}

function StatBadge({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-xl border border-surface-700 bg-surface-900/80 px-5 py-4 backdrop-blur-sm"
    >
      <span className="text-2xl font-display font-bold text-white">{value}</span>
      <span className="text-xs text-text-muted mt-0.5">{label}</span>
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 700], [0, -180]);
  const blob2Y = useTransform(scrollY, [0, 700], [0, 100]);
  const gridOpacity = useTransform(scrollY, [0, 350], [0.4, 0]);
  // Content parallax: lags behind the scroll → creates depth as hero transitions into next section
  const contentY = useTransform(scrollY, [0, 800], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24"
      aria-label="Hero"
    >
      {/* Background elements with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0 grid-dot-pattern"
        style={{ opacity: gridOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-orange/8 blur-[120px]"
        style={{ y: blob1Y }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange/5 blur-[100px]"
        style={{ y: blob2Y }}
        aria-hidden="true"
      />

      <motion.div className="relative mx-auto max-w-7xl" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="lg:relative lg:pr-[380px]">
          {/* Eyebrow */}
          <HeroFadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-sm text-orange">
              <Star className="size-3 fill-orange" />
              <span className="font-medium">Free Founding Cohort Now Open</span>
            </div>
          </HeroFadeUp>

          {/* Headline */}
          <HeroFadeUp delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Learn Software<br />
              Engineering{" "}
              <em className="not-italic text-orange">the</em>
              <br />
              Professional Way.
            </h1>
          </HeroFadeUp>

          {/* Sub */}
          <HeroFadeUp delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
              CompileUp is a remote apprenticeship where aspiring developers contribute to{" "}
              <strong className="font-medium text-white">real software projects</strong>, get{" "}
              <strong className="font-medium text-white">real code reviews</strong>, and are mentored by
              engineers with 6+ years of industry experience.
            </p>
          </HeroFadeUp>

          {/* CTAs */}
          <HeroFadeUp delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-orange-dim hover:-translate-y-0.5 glow-orange-sm active:translate-y-0"
              >
                Apply for Free
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-6 py-3.5 text-base font-medium text-white transition-all hover:border-surface-500 hover:bg-surface-800"
              >
                How It Works
              </Link>
            </div>
          </HeroFadeUp>

          {/* Trust row */}
          <HeroFadeUp delay={0.4}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { initials: "AR", color: "bg-violet-500" },
                  { initials: "JK", color: "bg-blue-500" },
                  { initials: "PP", color: "bg-emerald-500" },
                ].map(({ initials, color }) => (
                  <div
                    key={initials}
                    className={`flex size-8 items-center justify-center rounded-full border-2 border-surface-950 text-[10px] font-bold text-white ${color}`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                Mentored by engineers from{" "}
                <span className="font-medium text-white">Google, Microsoft, Amazon</span> and more
              </p>
            </div>
          </HeroFadeUp>
        </div>

        {/* PR Card visual */}
        <PRCard />

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[calc(100%-380px)] lg:pr-8">
          <StatBadge value="100%" label="Real project contributions" delay={0.5} />
          <StatBadge value="6+" label="Years mentor experience" delay={0.55} />
          <StatBadge value="3" label="Engineering tracks" delay={0.6} />
          <StatBadge value="Free" label="Founding cohort enrollment" delay={0.65} />
        </div>
      </motion.div>
    </section>
  );
}
