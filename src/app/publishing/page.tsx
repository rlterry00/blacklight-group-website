import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Publishing",
  description:
    "Blacklight Publishing shares stories, frameworks, and ideas that help founders and communities see what others miss.",
};

const titles = [
  {
    title: "Seeing in Blacklight",
    description:
      "Essays on discovering opportunities that aren’t obvious—and building around them with intention.",
  },
  {
    title: "Craft Notes",
    description:
      "Short frameworks for product builders who care about depth, clarity, and lasting quality.",
  },
  {
    title: "Studio Field Guide",
    description:
      "Lessons from forming teams, shipping ventures, and creating compounding impact.",
  },
];

export default function PublishingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Publishing"
        title="Ideas worth putting into the world."
        description="Our publishing practice captures the thinking behind the studio—stories, frameworks, and narratives that help people build with clarity."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {titles.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-border bg-surface p-7"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Series
              </p>
              <h2 className="mb-3 font-serif text-2xl tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="container-site mt-14">
          <Button href="/contact" variant="ghost">
            Discuss a collaboration
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
