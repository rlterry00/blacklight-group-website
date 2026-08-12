type IconName =
  | "spark"
  | "shirt"
  | "book"
  | "code"
  | "wallet"
  | "search"
  | "build"
  | "value"
  | "linkedin"
  | "x"
  | "instagram"
  | "arrow"
  | "menu"
  | "close"
  | "chevron";

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "shirt":
      return (
        <svg {...common}>
          <path d="M9 4 12 6.5 15 4l4 2.5v3l-3-1.2V20H8V8.3L5 9.5v-3L9 4Z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z" />
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18M16 14.5h2" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <path d="M4 20h16M7 20V9l5-5 5 5v11M10 13h4" />
        </svg>
      );
    case "value":
      return (
        <svg {...common}>
          <path d="M12 3 4.5 7.5v9L12 21l7.5-4.5v-9L12 3Z" />
          <path d="M12 12v9M12 12 4.5 7.5M12 12l7.5-4.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M6.5 9.5V18M6.5 6.5v.01M10.5 18v-5.2c0-1.8 2.4-2 2.4 0V18M17.5 18v-4.3c0-3.2-3.4-3.1-4.6-1.5" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="m5 5 14 14M19 5 5 19" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m7 10 5 5 5-5" />
        </svg>
      );
    default:
      return null;
  }
}
