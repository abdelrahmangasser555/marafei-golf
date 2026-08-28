"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { FAQItem } from "@/data/faqs";

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  items,
  title = "Golf simulator questions",
  subtitle = "Straight answers for clients searching for a golf simulator installer, golf partner, or indoor golf room in the GCC.",
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-border/30 bg-surface/50"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-heading font-semibold text-heading md:text-base">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={18}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-body">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isOpen && (
                  <p className="sr-only">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
