import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { PageIntro } from "@/components/PageIntro";
import { ventures } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Explore ventures built by The Blacklight Group—from consumer products to publishing and technology.",
};

export default function VenturesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Ventures"
        title="Ideas shaped into companies."
        description="Each Blacklight venture starts with a clear purpose and is built with craft, independence, and a long view on impact."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-site space-y-16 md:space-y-24">
          {ventures.map((venture, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={venture.id}
                id={venture.id}
                className="grid items-center gap-8 scroll-mt-28 md:grid-cols-2 md:gap-14"
              >
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[16px] bg-surface-soft ${reverse ? "md:order-2" : ""}`}>
                  <Image
                    src={venture.image}
                    alt={venture.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className={reverse ? "md:order-1" : ""}>
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: venture.accent }}
                  >
                    <Icon name={venture.icon} className="h-4 w-4" />
                  </div>
                  <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                    {venture.name}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    {venture.description}
                  </p>
                  <div className="mt-7">
                    <Button
                      href={venture.href}
                      external={"external" in venture && venture.external}
                      variant="ghost"
                    >
                      Explore {venture.name}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
