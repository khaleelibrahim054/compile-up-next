import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";
import { CertificateVerifyForm } from "./certificate-verify-form";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "Verify a CompileUp Certificate — Certificate Verification",
  description:
    "Verify the authenticity of any CompileUp certificate instantly. Enter the certificate ID to see the holder's name, program, and completion details.",
  path: "/verify-certificate",
});

export default function VerifyCertificatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Verify Certificate", url: `${siteUrl}/verify-certificate` },
      ])) }} />

      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-xl text-center">
            <FadeUp><SectionBadge>Certificate Verification</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Verify a CompileUp certificate.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-5 text-lg leading-relaxed text-text-muted">
                Enter the certificate ID found on any CompileUp certificate to verify its authenticity and view the holder's completion details.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <CertificateVerifyForm />

            <FadeUp delay={0.1}>
              <div className="mt-10 rounded-2xl border border-surface-700 bg-surface-900 p-6">
                <h2 className="mb-4 font-display text-base font-semibold text-white">About CompileUp Certificates</h2>
                <div className="space-y-3 text-sm text-text-muted leading-relaxed">
                  <p>CompileUp certificates are issued upon successful completion of an engineering apprenticeship program. Each certificate contains a unique, non-transferable ID that can only be verified through this page.</p>
                  <p>If a certificate ID returns no result, the certificate may not exist, may have been issued under a different ID format, or may have been revoked.</p>
                  <p>For verification inquiries, contact <a href="mailto:certificates@compileup.dev" className="text-orange hover:underline">certificates@compileup.dev</a>.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
