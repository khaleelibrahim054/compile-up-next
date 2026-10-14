import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { ApplyForm } from "./apply-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "Apply Now — Free Founding Cohort | CompileUp",
  description:
    "Apply for CompileUp's free Founding Cohort. Limited spots available for the first students in our software engineering apprenticeship program.",
  path: "/apply",
});

const benefits = [
  { icon: CheckCircle, text: "Completely free for founding students" },
  { icon: Clock, text: "10-minute application. Decision within 48 hours." },
  { icon: Users, text: "1-on-1 mentor matching included" },
  { icon: Award, text: "Verifiable certificate upon completion" },
];

export default function ApplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Apply", url: `${siteUrl}/apply` },
      ])) }} />

      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
              {/* Left: info */}
              <div>
                <FadeUp><SectionBadge>Free Founding Cohort</SectionBadge></FadeUp>
                <FadeUp delay={0.05}>
                  <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Apply for CompileUp.
                  </h1>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <p className="mt-4 text-lg leading-relaxed text-text-muted">
                    The Founding Cohort is free for a limited number of students. You get the full experience — real projects, 1-on-1 mentorship, code reviews, and a verifiable certificate — at zero cost.
                  </p>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <ul className="mt-8 space-y-3" role="list">
                    {benefits.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-center gap-3 text-sm text-text-muted">
                        <Icon className="size-4 flex-none text-orange" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <div className="mt-8 rounded-2xl border border-orange/20 bg-orange/5 p-6">
                    <p className="text-sm font-semibold text-white mb-2">Why free?</p>
                    <p className="text-sm leading-relaxed text-text-muted">
                      Founding students help us build and refine the program. In return, you get full access at no cost and become part of CompileUp's founding alumni — the engineers who were here first.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Right: form */}
              <FadeUp delay={0.1}>
                <ApplyForm />
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
