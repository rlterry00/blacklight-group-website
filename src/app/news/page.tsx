import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageIntro } from "@/components/PageIntro";
import { newsItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "News",
  description: "Updates from The Blacklight Group studio, ventures, and community.",
};

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="News"
        title="Studio notes and venture updates."
        description="A living record of what we’re building, learning, and sharing across the Blacklight ecosystem."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-site divide-y divide-border border-y border-border">
          {newsItems.map((item) => (
            <article key={item.title} className="grid gap-3 py-8 md:grid-cols-[160px_1fr_auto] md:items-start md:gap-8">
              <time className="text-sm text-muted">{item.date}</time>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.excerpt}
                </p>
              </div>
              <Link href={item.href} className="link-arrow mt-1 text-ink md:justify-self-end">
                Read <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
