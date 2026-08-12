import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "ghost-light";
  className?: string;
  external?: boolean;
};

const variants = {
  solid:
    "bg-ink text-white hover:bg-[#222] border border-ink",
  ghost:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  "ghost-light":
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-ink",
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-250 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
