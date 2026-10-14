import Link from "next/link";
import { Award, ShieldCheck, Search, ArrowRight } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/shared/motion-wrapper";

function CertificateMockup() {
  return (
    <div className="relative mx-auto max-w-sm rounded-2xl border border-surface-700 bg-surface-900 p-8 shadow-2xl shadow-black/60">
      {/* Orange top bar */}
      <div className="absolute left-0 right-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-orange to-orange-bright" />

      <div className="flex items-center gap-3 mb-6">
        <div className="flex size-10 items-center justify-center rounded-xl bg-orange/10 border border-orange/20">
          <Award className="size-5 text-orange" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-orange">CompileUp</p>
          <p className="text-sm font-semibold text-white">Certificate of Completion</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs text-text-subtle uppercase tracking-wider mb-1">Awarded to</p>
          <p className="font-display text-xl font-bold text-white">Jane Developer</p>
        </div>
        <div>
          <p className="text-xs text-text-subtle uppercase tracking-wider mb-1">Program</p>
          <p className="text-sm font-medium text-white">Full Stack Development</p>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="text-xs text-text-subtle uppercase tracking-wider mb-1">Duration</p>
            <p className="text-sm font-medium text-white">16 Weeks</p>
          </div>
          <div>
            <p className="text-xs text-text-subtle uppercase tracking-wider mb-1">Issued</p>
            <p className="text-sm font-medium text-white">June 2025</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">Verified</span>
        </div>
        <span className="font-mono text-xs text-text-subtle">CU-2025-4F7A</span>
      </div>
    </div>
  );
}

export function CertificateSection() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="certificate-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: visual */}
          <ScaleIn className="lg:w-1/2">
            <CertificateMockup />
          </ScaleIn>

          {/* Right: content */}
          <div className="lg:w-1/2">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-orange">
                <span className="size-1.5 rounded-full bg-orange animate-pulse" />
                Certificate of Completion
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A certificate that{" "}
                <span className="text-orange">actually means something.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                Upon completing your program, you receive a verifiable digital certificate. Anyone — employers, hiring managers, recruiters — can verify its authenticity in seconds at compileup.dev.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: "Cryptographically Verified", desc: "Each certificate has a unique ID that can only be verified through our platform. It cannot be fabricated." },
                  { icon: Search, title: "Publicly Verifiable", desc: "Employers visit compileup.dev/verify-certificate and enter the certificate ID to see your full achievement record." },
                  { icon: Award, title: "Earned, Not Issued", desc: "You earn the certificate by hitting real milestones — merged PRs, mentor approval, and program completion." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-0.5 flex size-8 flex-none items-center justify-center rounded-lg border border-surface-700 bg-surface-800">
                      <Icon className="size-4 text-orange" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-0.5 text-sm text-text-muted">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-dim glow-orange-sm"
                >
                  Start earning yours
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/verify-certificate"
                  className="inline-flex items-center gap-2 rounded-xl border border-surface-600 px-6 py-3 text-sm font-medium text-white transition-all hover:border-surface-500 hover:bg-surface-800"
                >
                  Verify a certificate
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
