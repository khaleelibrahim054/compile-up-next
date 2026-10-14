import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { faqs } from "@/data/faq";
import { faqPageSchema } from "@/lib/structured-data";

export function FAQPreview() {
  const preview = faqs.slice(0, 5);

  const schemaData = faqPageSchema(
    preview.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section
      className="bg-surface-900/30 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="faq-preview-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="FAQ"
          title="Common questions, answered."
          description="Everything you need to know to decide if CompileUp is right for you."
        />

        <FadeUp delay={0.1}>
          <div className="mt-12">
            <FAQAccordion items={preview.map((f) => ({ question: f.question, answer: f.answer }))} />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange transition-colors hover:text-orange-bright"
            >
              View all {faqs.length} questions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
