"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import type { AxiosError } from "axios";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import useContactInquiry from "@/hook/contact/useContactInquiry";
import useServiceOption from "@/hook/service/useServiceOption";
import type {
  ContactInquiryErrorResponse,
  ContactInquiryRequest,
  PreferredContactMethod,
} from "@/types/contact";

interface ContactFormValues {
  name: string;
  email: string;
  phone_number: string;
  company_name: string;
  service: string;
  budget_range: string;
  preferred_contact_method: PreferredContactMethod;
  message: string;
  privacy_accepted: boolean;
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone_number: "",
  company_name: "",
  service: "",
  budget_range: "",
  preferred_contact_method: "email",
  message: "",
  privacy_accepted: false,
};

const CONTACT_METHODS: ReadonlyArray<{
  value: PreferredContactMethod;
  label: string;
}> = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
];

const API_FIELD_MAP: Record<string, keyof ContactFormValues> = {
  name: "name",
  email: "email",
  phone_number: "phone_number",
  company_name: "company_name",
  service: "service",
  budget_range: "budget_range",
  preferred_contact_method: "preferred_contact_method",
  message: "message",
  privacy_accepted: "privacy_accepted",
};

function firstErrorMessage(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.find((item): item is string => typeof item === "string");
  }
  return undefined;
}

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.phone_number.trim().length > 30) {
    errors.phone_number = "Phone number must be 30 characters or fewer.";
  }

  if (values.company_name.trim().length > 200) {
    errors.company_name = "Company name must be 200 characters or fewer.";
  }

  if (values.budget_range.trim().length > 200) {
    errors.budget_range = "Budget must be 200 characters or fewer.";
  }

  if (values.service) {
    const serviceId = Number(values.service);
    if (!Number.isInteger(serviceId) || serviceId < 1) {
      errors.service = "Select a valid service.";
    }
  }

  if (!trimmedMessage) {
    errors.message = "Message is required.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }

  if (!values.privacy_accepted) {
    errors.privacy_accepted = "You must accept the Privacy Policy to continue.";
  }

  return errors;
}

export default function ContactForm() {
  const pathname = usePathname();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const inquiry = useContactInquiry();
  const services = useServiceOption();

  const updateField = <Field extends keyof ContactFormValues>(
    field: Field,
    value: ContactFormValues[Field],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmissionError(null);

    if (inquiry.isError || inquiry.isSuccess) {
      inquiry.reset();
    }
  };

  const handleApiError = (
    error: AxiosError<ContactInquiryErrorResponse>,
  ) => {
    const response = error.response;
    const payload = response?.data;
    const nextErrors: ContactFormErrors = {};

    if (payload?.errors) {
      Object.entries(payload.errors).forEach(([apiField, value]) => {
        const formField = API_FIELD_MAP[apiField];
        const message = firstErrorMessage(value);

        if (formField && message) {
          nextErrors[formField] = message;
        }
      });
    }

    setErrors((current) => ({ ...current, ...nextErrors }));

    if (response?.status === 429) {
      setSubmissionError(
        "Too many inquiries were submitted from this connection. Please wait before trying again.",
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
    setSubmissionError(null);

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmissionError("Please correct the highlighted fields.");
      return;
    }

    const request: ContactInquiryRequest = {
      name: values.name.trim(),
      email: values.email.trim().toLowerCase(),
      phone_number: values.phone_number.trim(),
      company_name: values.company_name.trim(),
      service: values.service ? Number(values.service) : null,
      is_studio: false,
      budget_range: values.budget_range.trim(),
      preferred_contact_method: values.preferred_contact_method,
      message: values.message.trim(),
      source_page: pathname,
      privacy_accepted: true,
    };

    inquiry.mutate(request, {
      onSuccess: () => {
        setValues(INITIAL_VALUES);
        setErrors({});
        setSubmissionError(null);
      },
      onError: handleApiError,
    });
  };

  const startAnotherInquiry = () => {
    inquiry.reset();
    setValues(INITIAL_VALUES);
    setErrors({});
    setSubmissionError(null);
  };

  if (inquiry.isSuccess) {
    return (
      <section className="flex min-h-[34rem] flex-col items-center justify-center rounded-3xl border border-success/25 bg-bg-surface p-8 text-center shadow-md md:p-12">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success-light text-success">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </span>
        <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-success">
          Inquiry received
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-text-heading">
          Thank you for reaching out
        </h2>
        <p className="mt-4 max-w-md text-base leading-7 text-text-body">
          Your message has been sent successfully. Our team will review it and
          get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={startAnotherInquiry}
        >
          Send another inquiry
        </Button>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-border bg-bg-surface p-6 shadow-md md:p-8">
      <div>
        <h2 className="text-3xl font-bold text-text-heading">
          Send us a message
        </h2>
        <p className="mt-3 text-text-body">
          Tell us what you&apos;re planning and we&apos;ll get back to you shortly.
        </p>
      </div>

      {submissionError && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-error/25 bg-error-light px-4 py-3 text-error"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-sm leading-6">{submissionError}</p>
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="John Doe"
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
            placeholder="john@example.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            error={errors.email}
            disabled={inquiry.isPending}
            maxLength={254}
            required
          />

          <Input
            label="Company"
            type="text"
            name="company_name"
            autoComplete="organization"
            placeholder="Your company (optional)"
            value={values.company_name}
            onChange={(event) =>
              updateField("company_name", event.target.value)
            }
            error={errors.company_name}
            disabled={inquiry.isPending}
            maxLength={200}
          />

          <Input
            label="Phone number"
            type="tel"
            name="phone_number"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+977 9800000000 (optional)"
            value={values.phone_number}
            onChange={(event) =>
              updateField("phone_number", event.target.value)
            }
            error={errors.phone_number}
            disabled={inquiry.isPending}
            maxLength={30}
          />

          <div>
            <label
              htmlFor="contact-service"
              className="mb-2 block text-sm font-medium text-text-heading"
            >
              Service
            </label>
            <select
              id="contact-service"
              name="service"
              value={values.service}
              onChange={(event) => updateField("service", event.target.value)}
              disabled={inquiry.isPending || services.isLoading}
              aria-invalid={!!errors.service}
              aria-describedby={
                errors.service
                  ? "contact-service-error"
                  : services.isError
                    ? "contact-service-helper"
                    : undefined
              }
              className={`h-12 w-full rounded-xl border bg-bg-page px-4 text-sm text-text-body outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${errors.service ? "border-error focus:border-error" : "border-border focus:border-brand"}`}
            >
              <option value="">
                {services.isLoading
                  ? "Loading services..."
                  : "Select a service (optional)"}
              </option>
              {services.data?.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p id="contact-service-error" className="mt-2 text-sm text-error">
                {errors.service}
              </p>
            ) : services.isError ? (
              <p
                id="contact-service-helper"
                className="mt-2 text-sm text-text-muted"
              >
                Services could not be loaded. You can still send your inquiry.
              </p>
            ) : null}
          </div>

          <Input
            label="Estimated budget"
            type="text"
            name="budget_range"
            placeholder="e.g. NPR 5–10 lakh or Flexible"
            value={values.budget_range}
            onChange={(event) =>
              updateField("budget_range", event.target.value)
            }
            error={errors.budget_range}
            helperText="Optional — include the currency that suits your project."
            disabled={inquiry.isPending}
            maxLength={200}
          />
        </div>

        <fieldset
          disabled={inquiry.isPending}
          aria-describedby={
            errors.preferred_contact_method
              ? "contact-method-error"
              : undefined
          }
        >
          <legend className="text-sm font-medium text-text-heading">
            Preferred contact method
          </legend>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {CONTACT_METHODS.map((method) => (
              <label
                key={method.value}
                className={`cursor-pointer rounded-xl border px-3 py-3 text-center text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 ${values.preferred_contact_method === method.value ? "border-brand bg-brand-subtle text-brand" : "border-border bg-bg-page text-text-body hover:border-brand/40"}`}
              >
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value={method.value}
                  checked={values.preferred_contact_method === method.value}
                  onChange={() =>
                    updateField("preferred_contact_method", method.value)
                  }
                  className="sr-only"
                />
                {method.label}
              </label>
            ))}
          </div>
          {errors.preferred_contact_method && (
            <p id="contact-method-error" className="mt-2 text-sm text-error">
              {errors.preferred_contact_method}
            </p>
          )}
        </fieldset>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-medium text-text-heading"
          >
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell us about your project..."
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            disabled={inquiry.isPending}
            maxLength={5000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-count"
            }
            className={`w-full resize-y rounded-xl border bg-bg-page p-4 text-sm text-text-body outline-none transition-colors placeholder:text-text-muted disabled:cursor-not-allowed disabled:opacity-60 ${errors.message ? "border-error focus:border-error" : "border-border focus:border-brand"}`}
          />
          <div className="mt-2 flex items-start justify-between gap-4">
            {errors.message ? (
              <p id="contact-message-error" className="text-sm text-error">
                {errors.message}
              </p>
            ) : (
              <span />
            )}
            <p
              id="contact-message-count"
              className="ml-auto shrink-0 text-xs text-text-muted"
            >
              {values.message.length}/5000
            </p>
          </div>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-6 text-text-body">
            <input
              type="checkbox"
              name="privacy_accepted"
              checked={values.privacy_accepted}
              onChange={(event) =>
                updateField("privacy_accepted", event.target.checked)
              }
              disabled={inquiry.isPending}
              aria-invalid={!!errors.privacy_accepted}
              aria-describedby={
                errors.privacy_accepted ? "privacy-accepted-error" : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 accent-brand"
              required
            />
            <span>
              I agree to the processing of my information as described in the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-brand underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.privacy_accepted && (
            <p id="privacy-accepted-error" className="mt-2 text-sm text-error">
              {errors.privacy_accepted}
            </p>
          )}
        </div>

        <div aria-live="polite">
          <Button
            type="submit"
            disabled={inquiry.isPending}
            className="min-w-40 gap-2"
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
                {inquiry.isError ? "Try again" : "Send message"}
              </>
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}
