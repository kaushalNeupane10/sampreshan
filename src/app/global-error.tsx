"use client";

import { useEffect } from "react";
import "./globals.css";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function GlobalError({
  error,
  unstable_retry,
}: Readonly<GlobalErrorProps>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-page font-sans text-text-body antialiased">
        <title>Something went wrong | Sampreshan Media</title>
        <main className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-error">
              Application error
            </p>
            <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-text-heading sm:text-5xl">
              We couldn&apos;t load the website.
            </h1>
            <p className="mx-auto mt-5 max-w-md text-pretty leading-7 text-text-muted">
              Please retry the request. This is usually temporary.
            </p>
            <button
              type="button"
              onClick={unstable_retry}
              className="mt-8 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
