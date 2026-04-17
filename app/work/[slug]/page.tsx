import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { projects, findProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.blurb,
  };
}

const statusLabel = {
  live: "Live",
  "in-progress": "In progress",
  public: "Public repo",
} as const;

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)] transition-colors mb-10"
          >
            <span aria-hidden>←</span>
            Back to work
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-subtle)] mb-5">
            <span className="font-mono">{statusLabel[project.status]}</span>
            <span>·</span>
            <span>{project.role}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-[color:var(--color-muted)] leading-relaxed mb-8">
            {project.blurb}
          </p>

          {project.link && (
            <div className="mb-10">
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
              >
                {project.link.label}
                <span aria-hidden>→</span>
              </a>
            </div>
          )}

          <section className="mb-12">
            <h2 className="text-xs font-mono text-[color:var(--color-accent)] tracking-widest uppercase mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-mono px-3 py-1 rounded border border-[color:var(--color-border)] text-[color:var(--color-muted)] bg-[color:var(--color-bg-elevated)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xs font-mono text-[color:var(--color-accent)] tracking-widest uppercase mb-4">
              What&apos;s interesting
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden
                    className="shrink-0 w-6 h-6 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] flex items-center justify-center text-xs font-mono text-[color:var(--color-muted)]"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[color:var(--color-muted)] leading-relaxed pt-0.5">{h}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-10 border-t border-[color:var(--color-border)]">
            <p className="text-sm text-[color:var(--color-muted)]">
              Want a walkthrough or architecture deep-dive? Reach me at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mbelteshazzar.bm.1247@gmail.com" target="_blank" rel="noopener noreferrer"
                className="text-[color:var(--color-accent)] hover:underline underline-offset-4"
              >
                mbelteshazzar.bm.1247@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
