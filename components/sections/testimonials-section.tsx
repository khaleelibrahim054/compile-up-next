import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerChildren, StaggerItem } from "@/components/shared/motion-wrapper";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section
      className="px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="Student Stories"
          title={
            <>
              Real outcomes from{" "}
              <span className="text-orange">real engineers.</span>
            </>
          }
          description="Hear from the developers who built their engineering foundation through CompileUp."
        />

        <StaggerChildren className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map(({ id, name, role, company, track, quote, initials, gradient }) => (
            <StaggerItem key={id}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-surface-700 bg-surface-900 p-8 transition-all hover:border-surface-600">
                <Quote className="mb-5 size-8 text-orange/40" />

                <p className="flex-1 text-base leading-relaxed text-text-muted">
                  &ldquo;{quote}&rdquo;
                </p>

                <footer className="mt-6 flex items-center gap-4 border-t border-surface-700 pt-5">
                  <div
                    className={cn(
                      "flex size-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white",
                      gradient
                    )}
                  >
                    {initials}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-white">{name}</cite>
                    <p className="text-xs text-text-muted">{role} · {company}</p>
                    <p className="mt-0.5 inline-flex rounded-full border border-orange/20 bg-orange/5 px-2 py-0.5 text-[10px] font-medium text-orange">
                      {track} Track
                    </p>
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
