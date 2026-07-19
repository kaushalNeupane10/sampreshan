export default function Loading() {
  return (
    <main
      className="flex min-h-[70vh] items-center justify-center px-6 py-32"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-subtle border-t-brand motion-reduce:animate-none" />
        <p className="text-sm font-semibold text-text-muted">Loading…</p>
      </div>
    </main>
  );
}
