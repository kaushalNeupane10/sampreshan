import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-brand text-brand-foreground hover:bg-brand-dark border border-brand shadow-md hover:shadow-brand",

    outline:
      "bg-bg-surface text-text-heading border border-border hover:border-brand hover:text-brand",

    ghost:
      "bg-transparent text-text-heading hover:bg-brand-subtle hover:text-brand",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-brand
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${fullWidth ? "w-full" : ""}
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
