import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container-site max-w-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          404
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
          This page isn’t here.
        </h1>
        <p className="mt-4 text-muted">
          The link may be broken, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
