import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusStyles: Record<Project["status"], string> = {
  live: "bg-[color:var(--color-accent)]/15 text-[color:var(--color-accent)] border-[color:var(--color-accent)]/30",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  public: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  public: "Public repo",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 transition-all hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-bg-elevated)]/80"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${statusStyles[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>
      <p className="text-sm text-[color:var(--color-muted)] leading-relaxed mb-4">
        {project.blurb}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-0.5 rounded border border-[color:var(--color-border)] text-[color:var(--color-muted)]"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 6 && (
          <span className="text-[11px] font-mono px-2 py-0.5 text-[color:var(--color-subtle)]">
            +{project.stack.length - 6}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--color-subtle)] group-hover:text-[color:var(--color-accent)] transition-colors">
        <span>Read case study</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}
