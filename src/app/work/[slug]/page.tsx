import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(28,25,23,0.08),_transparent_36%),linear-gradient(180deg,#faf8f5_0%,#f4f1eb_100%)] px-6 py-10 text-stone-900 sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:text-stone-950"
        >
          <span aria-hidden="true">←</span>
          Back to work
        </Link>

        <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(28,25,23,0.08)] sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Case Study
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-stone-600">
                {project.summary}
              </p>
            </div>

            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-stone-950 px-5 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              {project.websiteLabel}
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
            {project.screenshotPath ? (
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.screenshotPath}
                  alt={project.imageLabel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                />
              </div>
            ) : (
              <div
                className="flex min-h-64 items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 p-8 text-center"
                role="img"
                aria-label={project.imageLabel}
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                    Project preview
                  </p>
                  <p className="mt-2 text-lg font-medium text-stone-700">
                    {project.imageLabel}
                  </p>
                  <p className="mt-3 text-sm text-stone-500">
                    Add a screenshot to /public/projects/{project.slug}.jpg and
                    set screenshotPath in src/lib/projects.ts.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <article>
                <h2 className="text-xl font-semibold text-stone-950">
                  Challenge
                </h2>
                <p className="mt-2 leading-7 text-stone-600">
                  {project.challenge}
                </p>
              </article>

              <article>
                <h2 className="text-xl font-semibold text-stone-950">
                  Solution
                </h2>
                <p className="mt-2 leading-7 text-stone-600">
                  {project.solution}
                </p>
              </article>

              <article>
                <h2 className="text-xl font-semibold text-stone-950">Impact</h2>
                <ul className="mt-3 space-y-2 text-stone-600">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <h2 className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
