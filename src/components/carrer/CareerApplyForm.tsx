"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Upload,
  CheckCircle,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  FileText,
  Link2,
  X,
} from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import useCareersApply from "@/hook/career/useCareersApply";
import { CareerApplyPayload } from "@/types/apply";

interface CareerApplyFormProps {
  slug: string;
  onSuccess: () => void;
}

interface FormData {
  full_name: string;
  email: string;
  phone_number: string;
  website: string;
  cover_letter: string;
  cv: File | null;
}

const INITIAL_DATA: FormData = {
  full_name: "",
  email: "",
  phone_number: "",
  website: "",
  cover_letter: "",
  cv: null,
};

export default function CareerApplyForm({
  onSuccess,
  slug,
}: CareerApplyFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [dragActive, setDragActive] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { applyCareer, isPending, isError, error, reset } =
    useCareersApply(slug);

  const getErrorMessage = (): string => {
    if (!error) return "Something went wrong. Please try again.";
    const axiosError = error as {
      response?: { data?: { message?: string } };
      message?: string;
    };
    return (
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Failed to submit application."
    );
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.full_name.trim())
      newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone_number.trim())
      newErrors.phone_number = "Phone number is required";
    if (!formData.cv) newErrors.cv = "Please upload your CV";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          cv: "File size must be under 5MB",
        }));
        return;
      }
      if (
        ![
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type)
      ) {
        setErrors((prev) => ({
          ...prev,
          cv: "Only PDF or DOC files are accepted",
        }));
        return;
      }
    }
    setFormData((prev) => ({ ...prev, cv: file }));
    setErrors((prev) => ({ ...prev, cv: undefined }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload: CareerApplyPayload = {
      full_name: formData.full_name,
      email: formData.email,
      phone_number: formData.phone_number,
      cover_letter: formData.cover_letter,
      cv: formData.cv!,
      website: formData.website || undefined,
    };

    applyCareer(payload, {
      onSuccess: () => {
        setShowSuccess(true);
        setTimeout(() => {
          onSuccess();
        }, 2500);
      },
    });
  };

  const handleRetry = () => {
    reset();
    setErrors({});
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in-95">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle size={40} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-text-heading">
          Application Submitted!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-text-muted">
          Thank you for your interest. We&apos;ve received your application and
          our team will review it shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* API Error Banner */}
      {isError && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <div className="mt-0.5 text-red-500">
            <X size={16} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">
              Submission failed
            </p>
            <p className="text-xs text-red-600">{getErrorMessage()}</p>
          </div>
          <button
            type="button"
            onClick={handleRetry}
            className="text-xs font-medium text-red-700 underline hover:text-red-900"
          >
            Try again
          </button>
        </div>
      )}

      {/* Full Name */}
      <Input
        label="Full Name"
        startIcon={<User size={16} />}
        type="text"
        value={formData.full_name}
        onChange={(e) => handleChange("full_name", e.target.value)}
        placeholder="John Doe"
        error={errors.full_name}
        required
      />

      {/* Email & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email"
          startIcon={<Mail size={16} />}
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@example.com"
          error={errors.email}
          required
        />

        <Input
          label="Phone"
          startIcon={<Phone size={16} />}
          type="tel"
          value={formData.phone_number}
          onChange={(e) => handleChange("phone_number", e.target.value)}
          placeholder="+1 (555) 000-0000"
          error={errors.phone_number}
          required
        />
      </div>

      {/* Website / Portfolio */}
      <Input
        label="Portfolio / LinkedIn"
        startIcon={<Link2 size={16} />}
        type="url"
        value={formData.website}
        onChange={(e) => handleChange("website", e.target.value)}
        placeholder="https://yourportfolio.com"
        helperText="Optional"
      />

      {/* CV Upload */}
      <div>
        <label className="mb-2 block text-sm font-medium text-text-heading">
          Resume / CV <span className="text-error">*</span>
        </label>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`group relative cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200 ${
            dragActive
              ? "border-brand bg-brand/5"
              : formData.cv
                ? "border-emerald-400 bg-emerald-50/50"
                : "border-border bg-bg-page hover:border-brand/50 hover:bg-brand/5"
          } ${errors.cv ? "border-error bg-red-50/50" : ""}`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            className="hidden"
          />
          {formData.cv ? (
            <div className="flex flex-col items-center gap-2">
              <FileText size={28} className="text-emerald-500" />
              <p className="text-sm font-medium text-text-heading">
                {formData.cv.name}
              </p>
              <p className="text-xs text-text-muted">
                {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFileChange(null);
                }}
                className="mt-1 text-xs text-red-500 hover:underline"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload
                size={28}
                className="text-text-muted transition-colors group-hover:text-brand"
              />
              <p className="text-sm font-medium text-text-heading">
                Drop your resume here, or{" "}
                <span className="text-brand underline">browse</span>
              </p>
              <p className="text-xs text-text-muted">PDF, DOC up to 5MB</p>
            </div>
          )}
        </div>
        {errors.cv && <p className="mt-2 text-sm text-error">{errors.cv}</p>}
      </div>

      {/* Cover Letter */}
      <div>
        <label className="mb-2 block text-sm font-medium text-text-heading">
          Cover Letter{" "}
          <span className="text-text-muted text-xs font-normal">
            (Optional)
          </span>
        </label>
        <textarea
          value={formData.cover_letter}
          onChange={(e) => handleChange("cover_letter", e.target.value)}
          placeholder="Tell us why you're a great fit for this role..."
          rows={4}
          className="w-full resize-none rounded-xl border border-border bg-bg-page px-4 py-3 text-sm text-text-body placeholder:text-text-muted outline-none transition-all duration-200 focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isPending}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-200 hover:bg-brand/90 hover:shadow-brand/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting Application...
            </>
          ) : (
            <>
              Submit Application
              <Send
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </Button>
        <p className="mt-3 text-center text-xs text-text-muted">
          By submitting, you agree to our{" "}
          <Link
            href="/privacy"
            className="font-medium text-brand underline underline-offset-2"
          >
            privacy policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms"
            className="font-medium text-brand underline underline-offset-2"
          >
            terms of service
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
