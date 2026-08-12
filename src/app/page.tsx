import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { VentureCard } from "@/components/VentureCard";
import { principles, site, values, ventures } from "@/lib/site";

export const metadata: Metadata = {
  title: "Venture Studio",
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[5.5rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(107,47,214,0.16),transparent_40%),radial-gradient(circle_at_88%_12%,rgba(107,47,214,0.14),transparent_36%),linear-gradient(180deg,#f7f5f2_0%,#f3f0fb_48%,#f7f5f2_100%)]" />
        <div className="container-site grid items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-20 lg:py-24">
          <div>
            <p className="reveal mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Venture Studio
            </p>
            <h1 className="reveal reveal-delay-1 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
              {site.tagline}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              The Blacklight Group partners with ambitious founders and builds
              its own ventures—turning overlooked opportunities into products,
              brands, and companies with lasting impact.
            </p>
            <div className="reveal reveal-delay-3 mt-8">
              <Button href="/ventures">
                Explore Our Ventures
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="hero-glow absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,47,214,0.55),rgba(107,47,214,0.18)_45%,transparent_70%)] blur-3xl" />
            <div className="hero-media relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[16px] bg-[#111]">
              <Image
                src="/images/lightbulb.jpg"
                alt="Light bulb illuminated as a symbol of ideas"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 460px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(107,47,214,0.35),transparent_55%)] mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <div className="container-site">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:mb-14">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Selected Ventures
              </p>
              <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                Different ventures. One purpose.
              </h2>
            </div>
            <div className="md:text-right">
              <p className="mb-3 text-sm leading-relaxed text-muted md:ml-auto md:max-w-md">
                From consumer products to publishing and technology, every
                Blacklight venture is built to create clarity, craft, and
                compounding value.
              </p>
              <a href="/ventures" className="link-arrow text-ink">
                View All Ventures <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {ventures.map((venture) => (
              <VentureCard key={venture.id} {...venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-site grid gap-8 py-16 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10 md:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Ideas are everywhere. Impact is not.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            We exist to turn ambitious thinking into tangible products and
            companies—built with intention, guided by craft, and designed to
            create lasting value for the communities they serve.
          </p>
          <Button href="/about" variant="ghost-light" className="justify-self-start md:justify-self-end">
            Our Approach
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-10 md:grid-cols-3 md:gap-0">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`md:px-8 ${index > 0 ? "md:border-l md:border-border" : "md:pl-0"} ${index === 0 ? "" : "border-t border-border pt-10 md:border-t-0 md:pt-0"}`}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-border text-ink">
                <Icon name={value.icon} className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-site">
          <div className="rounded-[20px] bg-surface-soft px-6 py-12 md:px-12 md:py-16 lg:px-16">
            <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              We build with clarity. We create with purpose.
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="mb-2 text-base font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
