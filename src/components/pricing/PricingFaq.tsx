"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PricingFaqItem } from "@/types/pricing";

interface PricingFaqProps {
  faqs: PricingFaqItem[];
}

export default function PricingFaq({ faqs }: PricingFaqProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-bg-sunken py-16 md:py-20 lg:py-24">
      <div className="container-custom px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Questions
          </span>

          <h2 className="mt-3 text-3xl font-bold text-text-heading md:text-4xl">
            Pricing FAQs
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-md">
          {faqs.map((faq, index) => {
            const open = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className={
                  index !== faqs.length - 1 ? "border-b border-border" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={open}
                  aria-controls={`pricing-faq-answer-${faq.id}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-brand-subtle"
                >
                  <span className="text-base font-semibold text-text-heading md:text-lg">
                    {faq.question}
                  </span>

                  {open ? (
                    <Minus className="shrink-0 text-brand" size={22} />
                  ) : (
                    <Plus className="shrink-0 text-brand" size={22} />
                  )}
                </button>

                <div
                  id={`pricing-faq-answer-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 text-base leading-7 text-text-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
