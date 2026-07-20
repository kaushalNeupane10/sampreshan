import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-subtle text-brand">
          <SearchX className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Error 404
        </p>
        <h1 className="mt-3 text-balance text-4xl font-black tracking-tight text-text-heading sm:text-5xl">
          This page couldn&apos;t be found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-7 text-text-muted">
          The page may have moved, or the address might be incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
