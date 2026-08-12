import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";

type VentureCardProps = {
  name: string;
  description: string;
  href: string;
  image: string;
  accent: string;
  icon: "spark" | "shirt" | "book" | "code" | "wallet";
  external?: boolean;
};

export function VentureCard({
  name,
  description,
  href,
  image,
  accent,
  icon,
  external,
}: VentureCardProps) {
  const content = (
    <>
      <div className="relative mb-4 aspect-square overflow-hidden rounded-[12px] bg-surface-soft">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 80vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-md text-white"
          style={{ backgroundColor: accent }}
        >
          <Icon name={icon} className="h-4 w-4" />
        </div>
      </div>
      <h3 className="mb-2 text-base font-semibold tracking-tight text-ink">{name}</h3>
      <p className="mb-3 text-sm leading-relaxed text-muted">{description}</p>
      <span className="link-arrow text-ink">
        Explore <Icon name="arrow" className="h-4 w-4" />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="group block">
      {content}
    </Link>
  );
}
