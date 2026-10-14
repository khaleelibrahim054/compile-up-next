import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildMetadata } from "@/lib/metadata";
import { faqPageSchema, breadcrumbSchema } from "@/lib/structured-data";
import { faqs, faqCategories } from "@/data/faq";
import { FAQFilter } from "./faq-filter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://compileup.dev";

export const metadata = buildMetadata({
  title: "FAQ — Frequently Asked Questions About CompileUp",
  description:
    "Answers to the most common questions about CompileUp's software engineering apprenticeship: how it works, who it's for, what you'll learn, and more.",
  path: "/faq",
});

export default function FAQPage() {
  const schemaData = faqPageSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "FAQ", url: `${siteUrl}/faq` },
      ])) }} />

      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 grid-dot-pattern opacity-30" aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange/8 blur-[100px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl text-center">
            <FadeUp><SectionBadge>FAQ</SectionBadge></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Frequently asked questions.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
                Everything you need to know about CompileUp's software engineering apprenticeship.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FAQFilter faqs={faqs} categories={faqCategories} />
          </div>
        </section>

        <ApplyCTA />
      </main>
      <Footer />
    </>
  );
}
