"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { AxiosError } from "axios";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  PackageCheck,
  Send,
  X,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import usePackageInquiry from "@/hook/pricing/usePackageInquiry";
import type { PackageInquiryErrorResponse } from "@/types/packageInquiry";
import type { PricingPlan } from "@/types/pricing";

interface PackageInquiryModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

interface PackageInquiryValues {
  name: string;
  email: string;
  phone_number: string;
  company_name: string;
  message: string;
}

type PackageInquiryErrors = Partial<
  Record<keyof PackageInquiryValues, string>
>;

const INITIAL_VALUES: PackageInquiryValues = {
  name: "",
  email: "",
  phone_number: "",
  company_name: "",
  message: "",
};

const API_FIELD_MAP: Record<string, keyof PackageInquiryValues> = {
  name: "name",
  email: "email",
  phone_number: "phone_number",
  company_name: "company_name",
  message: "message",
};

function firstErrorMessage(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.find((item): item is string => typeof item === "string");
  }
  return undefined;
}

function validate(values: PackageInquiryValues): PackageInquiryErrors {
  const errors: PackageInquiryErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone_number.trim().length > 30) {
    errors.phone_number = "Phone number must be 30 characters or fewer.";
  }

  if (values.company_name.trim().length > 200) {
    errors.company_name = "Company name must be 200 characters or fewer.";
  }

  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }

  return errors;
}

export default function PackageInquiryModal({
  plan,
  onClose,
}: Readonly<PackageInquiryModalProps>) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<PackageInquiryValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<PackageInquiryErrors>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const inquiry = usePackageInquiry();
  const isPendingRef = useRef(inquiry.isPending);

  useEffect(() => {
    isPendingRef.current = inquiry.isPending;
  }, [inquiry.isPending]);

  useEffect(() => {
    if (!plan) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusFirstElement = () => {
      const firstElement = dialogRef.current?.querySelector<HTMLElement>(
        focusableSelector,
      );
      firstElement?.focus();
    };

    const animationFrame = requestAnimationFrame(focusFirstElement);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isPendingRef.current) {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ??
          [],
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrame);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [plan, onClose]);

  const updateField = <Field extends keyof PackageInquiryValues>(
    field: Field,
    value: PackageInquiryValues[Field],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmissionError(null);

    if (inquiry.isError) inquiry.reset();
  };

  const handleApiError = (
    error: AxiosError<PackageInquiryErrorResponse>,
  ) => {
    const response = error.response;
    const payload = response?.data;
    const nextErrors: PackageInquiryErrors = {};

    if (payload?.errors) {
      Object.entries(payload.errors).forEach(([apiField, value]) => {
        const formField = API_FIELD_MAP[apiField];
        const message = firstErrorMessage(value);

        if (formField && message) nextErrors[formField] = message;
      });
    }

    setErrors((current) => ({ ...current, ...nextErrors }));

    if (response?.status === 429) {
      setSubmissionError(
        "Too many package inquiries were submitted from this connection. Please wait before trying again.",
      );
      return;
    }

    setSubmissionError(
      payload?.message ||
        (response
          ? "We could not send your inquiry. Review the form and try again."
          : "We could not reach the server. Check your connection before trying again."),
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!plan) return;

    setSubmissionError(null);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionError("Please correct the highlighted fields.");
      return;
    }

    inquiry.mutate(
      {
        package: plan.id,
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        phone_number: values.phone_number.trim(),
        company_name: values.company_name.trim(),
        message: values.message.trim(),
      },
      {
        onSuccess: () => {
          setValues(INITIAL_VALUES);
          setErrors({});
          setSubmissionError(null);
        },
        onError: handleApiError,
      },
    );
  };

  const closeModal = () => {
    if (inquiry.isPending) return;
    inquiry.reset();
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmissionError(null);
    onClose();
  };

  if (!plan) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="package-inquiry-title"
        aria-describedby="package-inquiry-description"
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface shadow-2xl"
      >
        <header className="relative border-b border-border bg-linear-to-br from-brand-subtle via-bg-surface to-bg-surface px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={closeModal}
            disabled={inquiry.isPending}
            aria-label="Close package inquiry"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-surface text-text-body transition-colors hover:border-error/40 hover:bg-error-light hover:text-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="pr-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-subtle px-3 py-1 text-xs font-bold text-brand">
              <PackageCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {plan.service.name}
            </span>
            <h2
              id="package-inquiry-title"
              className="mt-3 text-2xl font-black tracking-tight text-text-heading sm:text-3xl"
            >
              Ask about {plan.name}
            </h2>
            <p
              id="package-inquiry-description"
              className="mt-2 text-sm leading-6 text-text-muted"
            >
              Share your details and we&apos;ll follow up about this package.
            </p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {inquiry.isSuccess ? (
            <div className="flex min-h-96 flex-col items-center justify-center py-8 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success-light text-success">
                <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-success">
                Inquiry received
              </p>
              <h3 className="mt-3 text-2xl font-black text-text-heading">
                We&apos;ll be in touch
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-text-body">
                Your inquiry about {plan.name} was sent successfully. Our team
                will review it and contact you shortly.
              </p>
              <Button type="button" className="mt-7" onClick={closeModal}>
                Done
              </Button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {submissionError && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-error/25 bg-error-light px-4 py-3 text-error"
                >
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6">{submissionError}</p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  error={errors.name}
                  disabled={inquiry.isPending}
                  maxLength={200}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  error={errors.email}
                  disabled={inquiry.isPending}
                  maxLength={254}
                  required
                />
                <Input
                  label="Phone number"
                  type="tel"
                  name="phone_number"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Optional"
                  value={values.phone_number}
                  onChange={(event) =>
                    updateField("phone_number", event.target.value)
                  }
                  error={errors.phone_number}
                  disabled={inquiry.isPending}
                  maxLength={30}
                />
                <Input
                  label="Company"
                  name="company_name"
                  autoComplete="organization"
                  placeholder="Optional"
                  value={values.company_name}
                  onChange={(event) =>
                    updateField("company_name", event.target.value)
                  }
                  error={errors.company_name}
                  disabled={inquiry.isPending}
                  maxLength={200}
                />
              </div>

              <div>
                <label
                  htmlFor="package-inquiry-message"
                  className="mb-2 block text-sm font-medium text-text-heading"
                >
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="package-inquiry-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Tell us about your project and what you'd like to know..."
                  disabled={inquiry.isPending}
                  maxLength={5000}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "package-message-error" : undefined
                  }
                  className={`w-full resize-y rounded-xl border bg-bg-page p-4 text-sm text-text-body outline-none transition-colors placeholder:text-text-muted disabled:cursor-not-allowed disabled:opacity-60 ${errors.message ? "border-error focus:border-error" : "border-border focus:border-brand"}`}
                />
                {errors.message && (
                  <p id="package-message-error" className="mt-2 text-sm text-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <p className="text-xs leading-5 text-text-muted">
                By submitting, you acknowledge our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-brand underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={closeModal}
                  disabled={inquiry.isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={inquiry.isPending}
                  className="gap-2"
                >
                  {inquiry.isPending ? (
                    <>
                      <LoaderCircle
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {inquiry.isError ? "Try again" : "Send inquiry"}
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
