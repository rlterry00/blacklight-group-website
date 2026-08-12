import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site, ventures } from "@/lib/site";

const serviceLinks = [
  { label: "Product Strategy", href: "/services" },
  { label: "Venture Building", href: "/services" },
  { label: "Design & Brand", href: "/services" },
  { label: "Engineering", href: "/services" },
  { label: "Consulting", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-20">
        <div className="lg:col-span-1">
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <Image
              src="/images/blacklightlogo.png"
              alt=""
              width={34}
              height={34}
              className="h-8 w-8 object-contain brightness-0 invert"
            />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
              The Blacklight Group
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            A venture studio building products, brands, and ideas that create
            lasting impact.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { name: "linkedin" as const, href: "https://www.linkedin.com" },
              { name: "x" as const, href: "https://x.com" },
              { name: "instagram" as const, href: "https://instagram.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
                aria-label={social.name}
              >
                <Icon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Ventures
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            {ventures.map((venture) => (
              <li key={venture.id}>
                <Link href={venture.href} className="transition hover:text-white">
                  {venture.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Stay Connected
          </h3>
          <p className="mb-4 text-sm text-white/65">
            Get studio updates and new venture announcements.
          </p>
          <form className="flex overflow-hidden rounded-md border border-white/20">
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              className="bg-white px-3 text-ink transition hover:bg-white/90"
              aria-label="Subscribe"
            >
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-white/40">{site.email}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Blacklight Group LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
