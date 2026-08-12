import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Blacklight Group.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s build something worth putting into the world."
        description="Share a venture idea, partnership opportunity, or project brief. We’ll get back to you soon."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-lg text-ink transition hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Phone
              </p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-2 inline-block text-lg text-ink transition hover:text-accent"
              >
                {site.phone}
              </a>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Prefer a short brief? Include context on the opportunity, timeline,
              and how we can help—strategy, product, or venture building.
            </p>
          </div>

          <form className="rounded-[16px] border border-border bg-surface p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium text-ink">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none transition focus:border-ink"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block font-medium text-ink">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none transition focus:border-ink"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm">
              <span className="mb-2 block font-medium text-ink">Company / Venture</span>
              <input
                type="text"
                name="company"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none transition focus:border-ink"
              />
            </label>
            <label className="mt-5 block text-sm">
              <span className="mb-2 block font-medium text-ink">How can we help?</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full resize-y rounded-md border border-border bg-background px-3 py-2.5 outline-none transition focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-[#222]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
