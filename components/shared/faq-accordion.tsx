"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map(({ question, answer }, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={question}
            className={cn(
              "rounded-xl border bg-surface-900 px-6 transition-colors",
              isOpen ? "border-orange/30" : "border-surface-700"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={cn("text-base font-medium transition-colors", isOpen ? "text-orange" : "text-white")}>
                {question}
              </span>
              <span className="flex-none">
                {isOpen ? (
                  <Minus className="size-4 text-orange" />
                ) : (
                  <Plus className="size-4 text-text-muted" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-text-muted">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
