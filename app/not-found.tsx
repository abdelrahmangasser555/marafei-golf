import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">404</p>
      <h1 className="mt-4 text-4xl font-heading font-bold text-heading">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-body">
        This URL is not a Marafei Golf page. Return home or explore golf
        simulator installations across the GCC.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg"
        >
          Home
        </Link>
        <Link
          href="/golf-simulator-installer"
          className="rounded-full border border-primary/40 px-6 py-3 text-sm text-primary"
        >
          Golf simulator installer
        </Link>
      </div>
    </main>
  );
}
