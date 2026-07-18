"use client";

import { useEffect, useRef } from "react";
import { X, Briefcase, MapPin, Clock } from "lucide-react";
import { Careers } from "@/types/career";
import CareerApplyForm from "./CareerApplyForm";

interface CareerApplyModalProps {
  open: boolean;
  career: Careers | null;
  onClose: () => void;
}

export default function CareerApplyModal({
  open,
  career,
  onClose,
}: CareerApplyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener("keydown", handleTabTrap);
    firstElement?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("keydown", handleTabTrap);
    };
  }, [open, onClose]);

  if (!open || !career) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="career-modal-title"
    >
      <div
        ref={modalRef}
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface shadow-2xl animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-linear-to-br from-brand/10 via-bg-surface to-bg-surface px-6 py-7 md:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-bg-page/80 text-text-body transition-all duration-200 hover:border-red-400 hover:bg-red-50 hover:text-red-500"
          >
            <X size={16} />
          </button>

          <div className="pr-10">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <Briefcase size={12} />
                {career.department || "Engineering"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                <Clock size={12} />
                {career.employment_type_display || "Full-time"}
              </span>
            </div>

            <h2
              id="career-modal-title"
              className="text-2xl font-bold text-text-heading md:text-3xl"
            >
              {career.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-text-body">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-text-muted" />
                {career.location || "Remote"}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Complete the application form below. Please ensure all information
              is accurate before submitting your application.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 pt-4 md:px-8">
          <CareerApplyForm onSuccess={onClose} slug={career.slug} />
        </div>
      </div>
    </div>
  );
}
