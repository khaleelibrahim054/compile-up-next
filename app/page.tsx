import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Differentiators } from "@/components/sections/differentiators";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProgramsSection } from "@/components/sections/programs-section";
import { RealExperience } from "@/components/sections/real-experience";
import { SkillsSection } from "@/components/sections/skills-section";
import { MentorsSection } from "@/components/sections/mentors-section";
import { CertificateSection } from "@/components/sections/certificate-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQPreview } from "@/components/sections/faq-preview";
import { ApplyCTA } from "@/components/sections/apply-cta";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CompileUp — Software Engineering Apprenticeship | Learn by Building Real Software",
  description:
    "CompileUp is a remote software engineering apprenticeship where aspiring developers learn by contributing to real projects — mentored by senior engineers from Google, Microsoft, Amazon, and more. Free Founding Cohort now open.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />

      <Header />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Differentiators />
        <HowItWorks />
        <ProgramsSection />
        <RealExperience />
        <SkillsSection />
        <MentorsSection />
        <CertificateSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQPreview />
        <ApplyCTA />
      </main>

      <Footer />
    </>
  );
}
