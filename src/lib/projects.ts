export type Project = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  websiteUrl: string;
  websiteLabel: string;
  imageLabel: string;
  screenshotPath?: string;
  challenge: string;
  solution: string;
  impact: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-homepage",
    title: "High-converting portfolio homepage",
    summary:
      "Designed and implemented a minimalist homepage in React + TypeScript focused on clarity, speed, and user flow.",
    details: [
      "Role: Front-end developer + UX designer",
      "Stack: React, TypeScript, Tailwind",
      "Outcome: clearer positioning and faster contact flow",
    ],
    websiteUrl: "https://example.com/portfolio-homepage",
    websiteLabel: "Live website",
    imageLabel: "Portfolio homepage visual",
    screenshotPath: "/work/apaoil-site.png",
    challenge:
      "The original page had useful content, but visitors needed too much time to understand value and decide what to do next.",
    solution:
      "I redesigned the structure around headline clarity, service proof, and a tighter call-to-action path while preserving a minimalist visual language.",
    impact: [
      "Cleaner first impression in the first screen",
      "Faster path from landing to contact",
      "More consistent visual rhythm across sections",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "design-system-personal-brand",
    title: "Design system for personal brand site",
    summary:
      "Created a reusable UI system with consistent spacing, typography, and components to keep delivery elegant and efficient.",
    details: [
      "Role: UX/UI direction",
      "Focus: minimalist visual language",
      "Outcome: stronger professional brand presence",
    ],
    websiteUrl: "https://example.com/design-system",
    websiteLabel: "Live website",
    imageLabel: "Design system visual",
    screenshotPath: "/work/miso-balance-site.png",
    challenge:
      "The project required a polished visual identity that could stay consistent as new pages and sections were added.",
    solution:
      "I defined reusable component patterns, spacing tokens, and interaction rules that made design decisions faster and implementation more predictable.",
    impact: [
      "Consistent UI quality across pages",
      "Faster implementation for future sections",
      "Clearer brand expression with less visual noise",
    ],
    stack: ["Figma", "Design tokens", "Component architecture", "Next.js"],
  },
  {
    slug: "full-stack-foundation",
    title: "Full-stack web app foundation",
    summary:
      "Built a scalable front-end architecture with Node-powered APIs and clean TypeScript patterns to support future features.",
    details: [
      "Role: Front-end and API integration",
      "Stack: React, TypeScript, Node.js",
      "Outcome: production-ready baseline",
    ],
    websiteUrl: "https://example.com/full-stack-foundation",
    websiteLabel: "Live website",
    imageLabel: "Full-stack architecture visual",
    screenshotPath: "/work/think-academy-site.png",
    challenge:
      "The application needed a robust baseline that balanced speed of development with long-term maintainability.",
    solution:
      "I set up modular front-end patterns, API integration boundaries, and reusable TypeScript utilities to reduce coupling and simplify feature growth.",
    impact: [
      "Stable structure for iterative releases",
      "Cleaner API consumption flow",
      "Lower friction when adding new modules",
    ],
    stack: ["Node.js", "React", "TypeScript", "REST APIs"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
