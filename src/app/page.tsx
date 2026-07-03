"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("portfolio-theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const featuredProjects = [
    {
      title: "High-converting portfolio homepage",
      summary:
        "Designed and implemented a minimalist homepage in React + TypeScript focused on faster recruiter and client scanning.",
      details: [
        "Role: Front-end developer + UX designer",
        "Stack: React, TypeScript, Tailwind",
        "Outcome: clearer positioning and faster contact flow",
      ],
    },
    {
      title: "Design system for personal brand site",
      summary:
        "Created a reusable UI system with consistent spacing, typography, and components to keep delivery elegant and efficient.",
      details: [
        "Role: UX/UI direction",
        "Focus: minimalist visual language",
        "Outcome: stronger professional brand presence",
      ],
    },
    {
      title: "Full-stack web app foundation",
      summary:
        "Built a scalable front-end architecture with Node-powered APIs and clean TypeScript patterns to support future features.",
      details: [
        "Role: Front-end and API integration",
        "Stack: React, TypeScript, Node.js",
        "Outcome: production-ready baseline",
      ],
    },
  ];

  const strengths = [
    "UX design",
    "Front-end development",
    "React + TypeScript",
    "Node.js",
    "Java (learning path)",
    "Spring Boot (learning path)",
    "Figma",
    "Next.js",
    "Design-to-code execution",
  ];

  const services = [
    "Portfolio websites for developers and creatives",
    "Front-end implementation with React and TypeScript",
    "UX structure and visual hierarchy optimization",
    "Minimalist, elegant, and professional web interfaces",
  ];

  const isDark = theme === "dark";

  const shellClasses = isDark
    ? "min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_36%),linear-gradient(180deg,#111111_0%,#090909_100%)] text-stone-100"
    : "min-h-screen bg-[radial-gradient(circle_at_top,_rgba(28,25,23,0.08),_transparent_36%),linear-gradient(180deg,#faf8f5_0%,#f4f1eb_100%)] text-stone-900";

  const headerClasses = isDark
    ? "sticky top-4 z-20 mb-10 rounded-full border border-stone-700/80 bg-stone-950/75 px-5 py-4 backdrop-blur"
    : "sticky top-4 z-20 mb-10 rounded-full border border-stone-200/80 bg-white/75 px-5 py-4 backdrop-blur";

  const cardSurfaceClasses = isDark
    ? "rounded-[1.75rem] border border-stone-700 bg-stone-900 p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
    : "rounded-[1.75rem] border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(28,25,23,0.09)]";

  const subCardClasses = isDark
    ? "rounded-3xl border border-stone-700 bg-stone-900 p-5"
    : "rounded-3xl border border-stone-200 bg-white p-5";

  const pillClasses = isDark
    ? "rounded-full border border-stone-700 bg-stone-900 px-4 py-2 text-sm text-stone-200"
    : "rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700";

  return (
    <div className={shellClasses}>
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className={headerClasses}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500 dark:text-stone-400">
                Portfolio
              </p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
                Minimalist, elegant, efficient, professional
              </p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-stone-600 dark:text-stone-300">
              <a
                className="transition hover:text-stone-950 dark:hover:text-white"
                href="#work"
              >
                Work
              </a>
              <a
                className="transition hover:text-stone-950 dark:hover:text-white"
                href="#services"
              >
                Services
              </a>
              <a
                className="transition hover:text-stone-950 dark:hover:text-white"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition hover:text-stone-950 dark:hover:text-white"
                href="#contact"
              >
                Contact
              </a>
              <button
                type="button"
                aria-label="Toggle between light and dark theme"
                aria-pressed={isDark}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="ml-2 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-950 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white transition hover:bg-stone-800 dark:border-stone-700 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
              >
                <span className="text-sm leading-none">
                  {isDark ? "◐" : "◑"}
                </span>
                {isDark ? "LIGHT" : "DARK"}
              </button>
            </nav>
          </div>
        </header>

        <section className="grid gap-8 pb-20 pt-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-stone-500 dark:text-stone-400">
              Open to opportunities
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-stone-950 dark:text-white sm:text-6xl lg:text-7xl">
              Software developer focused on UX design and front-end engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300 sm:text-xl">
              I build digital products with React, TypeScript, and Node.js,
              blending thoughtful UX with clean implementation. I am currently
              expanding my back-end depth with Java and Spring Boot.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                href="#contact"
              >
                Start a project
              </a>
              <a
                className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:text-white"
                href="#work"
              >
                View selected work
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(28,25,23,0.08)] dark:border-stone-700 dark:bg-stone-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
                  Profile
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950 dark:text-white">
                  Abraham G. Olague
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-sm font-semibold text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                AO
              </div>
            </div>

            <dl className="mt-8 grid gap-5 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 dark:border-stone-800">
                <dt className="text-stone-500 dark:text-stone-400">Role</dt>
                <dd className="font-medium text-stone-900 dark:text-stone-100">
                  UX-focused Front-end Developer
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-stone-100 pb-4 dark:border-stone-800">
                <dt className="text-stone-500 dark:text-stone-400">Location</dt>
                <dd className="font-medium text-stone-900 dark:text-stone-100">
                  Remote, open to hybrid
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-stone-500 dark:text-stone-400">
                  Availability
                </dt>
                <dd className="font-medium text-stone-900 dark:text-stone-100">
                  Open to freelance and full-time roles
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-sm leading-6 text-stone-600 dark:text-stone-300">
              The avatar uses initials as a placeholder. You can replace it with
              a personal photo if you want, but it is optional. For recruiters
              and clients, strong positioning and clear outcomes matter most.
            </p>
          </aside>
        </section>

        <section className="grid gap-4 border-y border-stone-200 py-8 sm:grid-cols-3 dark:border-stone-800">
          {[
            [
              "Clear positioning",
              "Your technical focus is visible within seconds.",
            ],
            ["Proof first", "Projects and outcomes lead before visual extras."],
            [
              "Efficient flow",
              "Navigation and contact paths stay simple and direct.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-3xl bg-white/80 p-5 shadow-sm dark:bg-stone-900/90"
            >
              <h2 className="text-base font-semibold text-stone-950 dark:text-white">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                {text}
              </p>
            </article>
          ))}
        </section>

        <section id="work" className="py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 dark:text-white sm:text-4xl">
                Selected work that balances design quality and technical depth.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-stone-600 dark:text-stone-300">
              Recruiters and clients look for product thinking, execution, and
              communication. These summaries are optimized for that quick read.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className={cardSurfaceClasses}>
                <h3 className="text-xl font-semibold tracking-tight text-stone-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                  {project.summary}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-stone-500 dark:text-stone-400">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400 dark:bg-stone-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-stone-200 py-20 dark:border-stone-800 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="services">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 dark:text-white">
              Services aligned with product teams and client needs.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-stone-600 dark:text-stone-300">
              I design and build interfaces that feel polished while staying
              practical, performant, and easy to maintain.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service} className={subCardClasses}>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  {service}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-8 border-t border-stone-200 py-20 dark:border-stone-800 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 dark:text-stone-400">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 dark:text-white">
              Skills and stack recruiters can scan quickly.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {strengths.map((strength) => (
              <span key={strength} className={pillClasses}>
                {strength}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mb-8 rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-10 dark:border-stone-700"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let us build something clean, useful, and professional.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
                Use this section for your email, LinkedIn, and project
                inquiries. The current layout is optimized to communicate your
                strengths in UX-driven front-end development.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <a
                className="rounded-full bg-white px-5 py-3 font-medium text-stone-950 transition hover:bg-stone-200"
                href="mailto:hello@yourdomain.com"
              >
                hello@yourdomain.com
              </a>
              <a
                className="rounded-full border border-white/20 px-5 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
