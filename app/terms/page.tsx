import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms & Conditions — CompileUp",
  description: "CompileUp's terms and conditions govern your use of our platform and apprenticeship programs.",
  path: "/terms",
});

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the CompileUp platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our platform." },
  { title: "Program Enrollment", content: "Enrollment in a CompileUp program is subject to application and acceptance. We reserve the right to accept or decline any application at our discretion. Enrollment in the Founding Cohort is free for accepted students for the duration of the founding period." },
  { title: "Student Responsibilities", content: "Students are expected to actively participate in their program, communicate openly with their mentor, maintain the weekly time commitment described in their program, follow professional conduct standards, and contribute honestly to projects." },
  { title: "Intellectual Property", content: "Work produced by students as part of CompileUp programs may be owned by the project it contributes to, as determined by the project's license. CompileUp's platform, content, and materials remain the intellectual property of CompileUp." },
  { title: "Certificate Conditions", content: "Certificates are issued upon genuine completion of program requirements. Falsification of completion records or misrepresentation of a certificate may result in certificate revocation. Certificates remain verifiable through our platform indefinitely." },
  { title: "Code of Conduct", content: "All participants in CompileUp programs must treat fellow students and mentors with respect and professionalism. Harassment, discrimination, or abusive behavior of any kind will result in immediate removal from the program." },
  { title: "Limitation of Liability", content: "CompileUp provides its platform and programs on an 'as is' basis. We make no warranties, expressed or implied, regarding the outcome of your participation, including but not limited to employment outcomes." },
  { title: "Modifications", content: "We reserve the right to modify these Terms at any time. Continued use of the platform after such modifications constitutes acceptance of the updated Terms." },
  { title: "Contact", content: "Questions about these Terms may be directed to legal@compileup.dev." },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <h1 className="font-display text-4xl font-bold text-white">Terms & Conditions</h1>
              <p className="mt-2 text-sm text-text-muted">Last updated: June 1, 2025</p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <p className="mt-6 text-text-muted leading-relaxed">
                These Terms and Conditions govern your use of the CompileUp platform and participation in any CompileUp programs. Please read them carefully before using our services.
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
