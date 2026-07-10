"use client";

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      required,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-text-heading"
          >
            {label}

            {required && <span className="ml-1 text-error">*</span>}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={`
              h-12
              w-full
              rounded-xl
              border
              bg-bg-page
              px-4
              text-sm
              text-text-body
              placeholder:text-text-muted
              outline-none
              transition-all
              duration-200

              ${
                error
                  ? "border-error focus:border-error"
                  : "border-border focus:border-brand"
              }

              ${startIcon ? "pl-12" : ""}

              ${endIcon ? "pr-12" : ""}

              disabled:cursor-not-allowed
              disabled:opacity-60

              ${className}
            `}
            {...props}
          />

          {endIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
              {endIcon}
            </div>
          )}
        </div>

        {error ? (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-error">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-text-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
