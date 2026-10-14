import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy — CompileUp",
  description: "CompileUp's privacy policy explains how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

const sections = [
  { title: "Information We Collect", content: "We collect information you provide directly to us, such as your name, email address, and application details when you apply to CompileUp. We also collect information automatically when you use our website, including your IP address, browser type, and pages visited." },
  { title: "How We Use Your Information", content: "We use the information we collect to process your application, communicate with you about your application and program status, provide and improve our services, send you updates about CompileUp (which you can opt out of at any time), and comply with legal obligations." },
  { title: "Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform, conducting our business, or serving our users, so long as those parties agree to keep this information confidential." },
  { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us at privacy@compileup.dev." },
  { title: "Cookies", content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." },
  { title: "Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date." },
  { title: "Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at privacy@compileup.dev." },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="mt-2 text-sm text-text-muted">Last updated: June 1, 2025</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="mt-6 text-text-muted leading-relaxed">
                CompileUp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
              </p>
            </FadeUp>

            <div className="mt-10 space-y-8">
              {sections.map(({ title, content }, i) => (
                <FadeUp key={title} delay={i * 0.03}>
                  <div className="border-t border-surface-700 pt-8">
                    <h2 className="mb-3 font-display text-lg font-semibold text-white">{title}</h2>
                    <p className="text-sm leading-relaxed text-text-muted">{content}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
