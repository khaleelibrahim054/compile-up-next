"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

const tracks = [
  { value: "backend", label: "Backend Development" },
  { value: "frontend", label: "Frontend Development" },
  { value: "fullstack", label: "Full Stack Development" },
];

const experience = [
  { value: "beginner", label: "Beginner (< 6 months coding)" },
  { value: "intermediate", label: "Some experience (6 months – 2 years)" },
  { value: "cs-student", label: "CS student / graduate" },
  { value: "self-taught", label: "Self-taught developer" },
  { value: "career-switcher", label: "Career switcher" },
];

export function ApplyForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.track) newErrors.track = "Please select a track";
    if (!data.experience) newErrors.experience = "Please select your experience level";
    if (!data.motivation || String(data.motivation).length < 20) newErrors.motivation = "Please tell us a bit more (at least 20 characters)";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <CheckCircle className="size-8 text-emerald-400" />
        </div>
        <h2 className="font-display text-xl font-bold text-white">Application received!</h2>
        <p className="text-sm text-text-muted leading-relaxed max-w-xs">
          Thank you for applying to CompileUp. We'll review your application and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-surface-700 bg-surface-900 p-8"
      aria-label="CompileUp application form"
    >
      <h2 className="mb-6 font-display text-xl font-semibold text-white">Your application</h2>

      <div className="space-y-5">
        <Field label="Full name" error={errors.name}>
          <input name="name" type="text" placeholder="Jane Developer" className={inputClass(!!errors.name)} aria-required="true" />
        </Field>

        <Field label="Email address" error={errors.email}>
          <input name="email" type="email" placeholder="jane@example.com" className={inputClass(!!errors.email)} aria-required="true" />
        </Field>

        <Field label="Which track interests you?" error={errors.track}>
          <select name="track" className={inputClass(!!errors.track)} aria-required="true" defaultValue="">
            <option value="" disabled>Select a track…</option>
            {tracks.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </Field>

        <Field label="Your experience level" error={errors.experience}>
          <select name="experience" className={inputClass(!!errors.experience)} aria-required="true" defaultValue="">
            <option value="" disabled>Select your level…</option>
            {experience.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </Field>

        <Field label="Why do you want to join CompileUp?" error={errors.motivation}>
          <textarea
            name="motivation"
            rows={4}
            placeholder="Tell us about your goals and what draws you to the apprenticeship model…"
            className={cn(inputClass(!!errors.motivation), "resize-none")}
            aria-required="true"
          />
        </Field>

        <button
          type="submit"
          disabled={formState === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange py-3.5 text-base font-semibold text-white transition-all hover:bg-orange-dim disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formState === "loading" ? (
            <><Loader2 className="size-4 animate-spin" /> Submitting…</>
          ) : "Submit Application"}
        </button>

        <p className="text-center text-xs text-text-subtle">
          No credit card required. Founding cohort is completely free.
        </p>
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-white">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-surface-800 px-4 py-3 text-sm text-white placeholder-text-subtle outline-none transition-colors focus:ring-1",
    hasError
      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
      : "border-surface-700 focus:border-orange focus:ring-orange/30"
  );
}
