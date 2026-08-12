export const site = {
  name: "The Blacklight Group",
  shortName: "Blacklight",
  tagline: "We build ventures, products, and ideas worth putting into the world.",
  description:
    "The Blacklight Group is a venture studio that turns ambitious ideas into lasting products, brands, and companies.",
  url: "https://theblacklightgroup.org",
  email: "support@theblacklightgroup.org",
  phone: "704 269 8727",
};

export const navLinks = [
  {
    label: "Ventures",
    href: "/ventures",
    children: [
      { label: "All Ventures", href: "/ventures" },
      { label: "Dopamine", href: "/ventures#dopamine" },
      { label: "Penny Bank", href: "/ventures#penny-bank" },
      { label: "Publishing", href: "/publishing" },
    ],
  },
  { label: "Publishing", href: "/publishing" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
] as const;

export const ventures = [
  {
    id: "dopamine",
    name: "Dopamine",
    description:
      "A digital experience designed to help people build better habits and reclaim their attention.",
    href: "/ventures#dopamine",
    image: "/images/dopamine-phone.jpg",
    accent: "#6B3FA0",
    icon: "spark",
  },
  {
    id: "dopamine-collective",
    name: "Dopamine Collective",
    description:
      "Apparel and culture for people who create with intention and live with energy.",
    href: "/ventures#dopamine-collective",
    image: "/images/apparel.jpg",
    accent: "#2F6B4F",
    icon: "shirt",
  },
  {
    id: "publishing",
    name: "Publishing",
    description:
      "Stories, frameworks, and ideas that help founders and communities see what others miss.",
    href: "/publishing",
    image: "/images/publishing-book.jpg",
    accent: "#8B6B4A",
    icon: "book",
  },
  {
    id: "tech-product",
    name: "Tech & Product Dev",
    description:
      "Product strategy, design, and engineering for ventures built to endure.",
    href: "/services",
    image: "/images/tech-laptop.jpg",
    accent: "#2F5C8F",
    icon: "code",
  },
  {
    id: "penny-bank",
    name: "Penny Bank",
    description:
      "Family productivity and financial literacy that turns everyday habits into lasting wealth.",
    href: "https://pennybank.online",
    external: true,
    image: "/images/homescreen.png",
    accent: "#1A1A1A",
    icon: "wallet",
  },
] as const;

export const values = [
  {
    title: "We Find Opportunities",
    description:
      "We look for problems others overlook—then shape ventures around what truly matters.",
    icon: "search",
  },
  {
    title: "We Build With Intention",
    description:
      "Every product, brand, and system is crafted with clarity, craft, and long-term thinking.",
    icon: "build",
  },
  {
    title: "We Create Lasting Value",
    description:
      "We measure success by impact that compounds—for communities, customers, and creators.",
    icon: "value",
  },
] as const;

export const principles = [
  {
    title: "Purpose First",
    description: "We focus on solving meaningful problems that strengthen communities.",
  },
  {
    title: "Independent Mindset",
    description: "We think long-term and build with ownership, not hype cycles.",
  },
  {
    title: "Craft Over Hype",
    description: "Quality, depth, and detail matter more than noise or novelty.",
  },
  {
    title: "Compounding Impact",
    description: "We build things designed to grow, endure, and keep creating value.",
  },
] as const;

export const services = [
  {
    title: "Product Strategy",
    description:
      "Clarify the opportunity, define the product thesis, and map a path from idea to launch.",
  },
  {
    title: "Venture Building",
    description:
      "Partner with us to design, build, and grow ventures from first principles.",
  },
  {
    title: "Design & Brand",
    description:
      "Create distinctive brand systems and product experiences that feel intentional.",
  },
  {
    title: "Engineering",
    description:
      "Ship robust web and mobile products with modern stacks and durable architecture.",
  },
  {
    title: "Consulting",
    description:
      "Bring Blacklight thinking into your team—strategy, product, and execution support.",
  },
  {
    title: "Publishing & Narrative",
    description:
      "Shape the story, frameworks, and content that make your idea unmistakable.",
  },
] as const;

export const newsItems = [
  {
    title: "Building in the open: how Blacklight approaches venture creation",
    date: "March 12, 2026",
    excerpt:
      "A look at the studio model we use to turn early ideas into products with lasting impact.",
    href: "/news",
  },
  {
    title: "Penny Bank continues expanding family financial literacy tools",
    date: "January 28, 2026",
    excerpt:
      "New features help families practice responsibility, goals, and shared progress together.",
    href: "https://pennybank.online",
  },
  {
    title: "Why craft still wins in a noisy product market",
    date: "November 4, 2025",
    excerpt:
      "Depth, clarity, and restraint remain the difference between momentary attention and trust.",
    href: "/news",
  },
] as const;
