import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="work" className="relative py-24 border-t border-[color:var(--color-border)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="text-sm font-mono text-[color:var(--color-accent)] mb-2">
                  01 / Work
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Things I&apos;ve built
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative py-24 border-t border-[color:var(--color-border)]"
        >
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="text-sm font-mono text-[color:var(--color-accent)] mb-2">
                02 / About
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Who I am
              </h2>
            </div>
            <div className="md:col-span-3 space-y-6 text-[color:var(--color-muted)] leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-[color:var(--color-fg)]">Belteshazzar Marquez</span> — a
                full-stack developer based in Manila. I studied Computer Engineering (embedded
                systems, IoT, real-time applications) at the University of Mindanao, and for
                the past few years I&apos;ve been building production software for small and
                medium businesses.
              </p>
              <p>
                My current focus is{" "}
                <span className="text-[color:var(--color-fg)]">AI-powered SaaS</span> —
                specifically the Next.js + LangGraph + Supabase stack. I like the full path:
                modeling agent loops as state machines, RAG pipelines operators can actually
                audit, multi-tenant RLS, and the operator UIs that make the whole thing usable
                by non-technical owners.
              </p>
              <p>
                I work at{" "}
                <span className="text-[color:var(--color-fg)]">CliqueHA Information Services</span>{" "}
                — a startup where I&apos;m part of the dev team delivering client engagements
                (NDA — operations ERP, retail inventory, e-commerce).{" "}
                <span className="text-[color:var(--color-fg)]">Aya is my own side project</span>,
                independent of CliqueHA.
              </p>
              <p className="pt-4 border-t border-[color:var(--color-border)]">
                Looking for mid-level remote full-stack or AI/automations engineer roles, or
                serious freelance engagements on AI SaaS. If that&apos;s you —{" "}
                <a
                  href="#contact"
                  className="text-[color:var(--color-accent)] hover:underline underline-offset-4"
                >
                  let&apos;s talk
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative py-24 border-t border-[color:var(--color-border)]"
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-sm font-mono text-[color:var(--color-accent)] mb-2">
              03 / Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
              Let&apos;s build something
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="mailto:mbelteshazzar.bm.1247@gmail.com"
                className="group rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 hover:border-[color:var(--color-accent)]/40 transition-colors"
              >
                <div className="text-xs font-mono text-[color:var(--color-subtle)] mb-2">
                  email
                </div>
                <div className="text-base font-medium">mbelteshazzar.bm.1247@gmail.com</div>
                <div className="mt-4 text-sm text-[color:var(--color-subtle)] group-hover:text-[color:var(--color-accent)] transition-colors">
                  Send →
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/belteshazzar-marquez-733771340/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 hover:border-[color:var(--color-accent)]/40 transition-colors"
              >
                <div className="text-xs font-mono text-[color:var(--color-subtle)] mb-2">
                  linkedin
                </div>
                <div className="text-base font-medium">belteshazzar-marquez</div>
                <div className="mt-4 text-sm text-[color:var(--color-subtle)] group-hover:text-[color:var(--color-accent)] transition-colors">
                  Connect →
                </div>
              </a>
              <a
                href="https://github.com/dGreatNoob"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-6 hover:border-[color:var(--color-accent)]/40 transition-colors"
              >
                <div className="text-xs font-mono text-[color:var(--color-subtle)] mb-2">
                  github
                </div>
                <div className="text-base font-medium">@dGreatNoob</div>
                <div className="mt-4 text-sm text-[color:var(--color-subtle)] group-hover:text-[color:var(--color-accent)] transition-colors">
                  Follow →
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
