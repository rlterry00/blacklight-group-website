import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { PageIntro } from "@/components/PageIntro";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product strategy, venture building, design, engineering, and consulting from The Blacklight Group.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Build with a studio that ships."
        description="Whether you need a partner for a new venture or deeper product craft inside an existing team, we bring clarity, design, and execution."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[14px] border border-border bg-surface p-7"
            >
              <h2 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                {service.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="container-site mt-16 rounded-[18px] bg-ink px-8 py-12 text-white md:flex md:items-center md:justify-between md:px-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl tracking-tight">
              Ready to build something that lasts?
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Tell us about the opportunity. We’ll help you shape the path from idea to impact.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/contact" variant="ghost-light">
              Get In Touch
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
