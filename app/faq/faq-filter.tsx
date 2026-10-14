"use client";

import { useState } from "react";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { FAQItem } from "@/data/faq";
import { cn } from "@/lib/utils";

interface FAQFilterProps {
  faqs: FAQItem[];
  categories: string[];
}

export function FAQFilter({ faqs, categories }: FAQFilterProps) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? faqs : faqs.filter((f) => f.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              active === cat
                ? "bg-orange text-white"
                : "border border-surface-700 bg-surface-900 text-text-muted hover:border-surface-600 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <FAQAccordion items={filtered.map((f) => ({ question: f.question, answer: f.answer }))} />
    </div>
  );
}
