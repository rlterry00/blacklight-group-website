"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [venturesOpen, setVenturesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setVenturesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/85 backdrop-blur-md">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={site.name}
          onClick={closeMenu}
        >
          <Image
            src="/images/blacklightlogo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink">
            The Blacklight Group
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            if ("children" in link && link.children) {
              return (
                <div key={link.href} className="relative group">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-sm transition-colors ${
                      active ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                    aria-expanded="false"
                  >
                    {link.label}
                    <Icon name="chevron" className="h-4 w-4" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-20 w-48 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-[10px] border border-border bg-surface p-2 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-soft hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="ghost" className="!px-4 !py-2.5">
            Get In Touch
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <div key={link.href} className="border-b border-border/70 py-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 text-left text-base"
                      onClick={() => setVenturesOpen((value) => !value)}
                    >
                      {link.label}
                      <Icon name="chevron" className="h-4 w-4" />
                    </button>
                    {venturesOpen ? (
                      <div className="mb-2 ml-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-sm text-muted"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-border/70 py-3 text-base"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4" onClick={closeMenu}>
              <Button href="/contact" className="w-full">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
