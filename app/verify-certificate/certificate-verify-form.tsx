"use client";

import { useState } from "react";
import { Search, ShieldCheck, XCircle, Loader2 } from "lucide-react";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";

type VerifyState = "idle" | "loading" | "found" | "not-found";

const DEMO_CERTIFICATE = {
  id: "CU-2025-4F7A",
  name: "Jane Developer",
  program: "Full Stack Development",
  duration: "16 Weeks",
  issued: "June 2025",
  mentor: "Jordan Kim",
};

export function CertificateVerifyForm() {
  const [value, setValue] = useState("");
  const [state, setState] = useState<VerifyState>("idle");
  const [result, setResult] = useState<typeof DEMO_CERTIFICATE | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    if (value.toUpperCase() === "CU-2025-4F7A") {
      setResult(DEMO_CERTIFICATE);
      setState("found");
    } else {
      setState("not-found");
      setResult(null);
    }
  }

  return (
    <div>
      <FadeUp>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-subtle" />
            <input
              type="text"
              value={value}
              onChange={(e) => { setValue(e.target.value); setState("idle"); }}
              placeholder="e.g. CU-2025-4F7A"
              className="h-12 w-full rounded-xl border border-surface-700 bg-surface-900 pl-11 pr-4 text-sm text-white placeholder-text-subtle outline-none transition-colors focus:border-orange focus:ring-1 focus:ring-orange"
              aria-label="Certificate ID"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <button
            type="submit"
            disabled={!value.trim() || state === "loading"}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange px-6 text-sm font-semibold text-white transition-all hover:bg-orange-dim disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "loading" ? (
              <><Loader2 className="size-4 animate-spin" /> Verifying...</>
            ) : "Verify"}
          </button>
        </form>
        <p className="mt-2 text-xs text-text-subtle">Try the demo: enter <code className="text-orange">CU-2025-4F7A</code></p>
      </FadeUp>

      {state === "found" && result && (
        <FadeUp>
          <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="absolute left-0 right-0 h-1 bg-emerald-500" />
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="size-5 text-emerald-400" />
                <span className="font-semibold text-emerald-400">Certificate Verified</span>
              </div>
              <dl className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Awarded to", value: result.name },
                  { label: "Program", value: result.program },
                  { label: "Duration", value: result.duration },
                  { label: "Date Issued", value: result.issued },
                  { label: "Certificate ID", value: result.id },
                  { label: "Mentor", value: result.mentor },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs text-text-subtle uppercase tracking-wider">{label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeUp>
      )}

      {state === "not-found" && (
        <FadeUp>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
            <XCircle className="mt-0.5 size-5 flex-none text-red-400" />
            <div>
              <p className="text-sm font-semibold text-white">Certificate not found</p>
              <p className="mt-1 text-sm text-text-muted">No certificate matching <code className="font-mono text-red-400">{value}</code> was found. Please check the ID and try again.</p>
            </div>
          </div>
        </FadeUp>
      )}
    </div>
  );
}
