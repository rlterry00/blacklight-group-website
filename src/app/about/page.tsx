import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { PageIntro } from "@/components/PageIntro";
import { principles, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Blacklight Group—our culture, approach, and belief in building with clarity and purpose.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="We see what others overlook."
        description="The blacklight is our metaphor: revealing opportunities that aren’t obvious at first glance. We build products centered on community enhancement through technology, craft, and teamwork."
      />

      <section className="pb-16 md:pb-24">
        <div className="container-site grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-ink">Our culture</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The Blacklight Group is a place where professionals learn new skills
              and take leadership roles that may not exist elsewhere. We check
              egos at the door. Teamwork is the culture. Each product is built by
              a Blacklight Team that collaborates across the studio and beyond.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-ink">Our approach</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We find overlooked opportunities, build with intention, and create
              lasting value. From first principles through launch and growth, we
              care about depth, clarity, and compounding impact—not short-lived
              hype.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-3 md:gap-0">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`md:px-8 ${index > 0 ? "md:border-l md:border-border" : "md:pl-0"}`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-border">
                <Icon name={value.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <h2 className="mb-10 font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Principles we build by
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t border-border pt-5">
                <h3 className="mb-2 font-semibold text-ink">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-28 pb-20 md:pb-28">
        <div className="container-site rounded-[18px] bg-surface-soft px-8 py-12 md:flex md:items-center md:justify-between md:px-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl tracking-tight text-ink">Build with us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We’re always interested in people who care about craft, ownership,
              and community impact. Reach out if you want to create with us.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button href="/contact">
              Get In Touch
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
