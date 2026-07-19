"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function ErrorPage({
  error,
  unstable_retry,
}: Readonly<ErrorPageProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-error">
          Something went wrong
        </p>
        <h2 className="mt-3 text-balance text-4xl font-black tracking-tight text-text-heading sm:text-5xl">
          We hit an unexpected snag.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-7 text-text-muted">
          Please try again. If the problem continues, our team will investigate.
        </p>
        <button
          type="button"
          onClick={unstable_retry}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
      </div>
    </main>
  );
}
