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
                full-stack developer based in Manila, Philippines. I studied Computer Engineering (embedded
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

            {/* Primary — talk to biiieem */}
            <div className="relative rounded-xl border border-[color:var(--color-accent)]/30 bg-[color:color-mix(in_srgb,var(--color-accent)_6%,var(--color-bg-elevated))] p-6 sm:p-8 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl" />
              </div>
              <div className="relative grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)] animate-ping opacity-60" />
                      <span className="relative h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                    </span>
                    <span className="text-xs font-mono tracking-wider uppercase text-[color:var(--color-accent)]">
                      Preferred · fastest
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
                    Talk to <span className="text-[color:var(--color-accent)]">biiieem</span>
                  </h3>
                  <p className="text-[color:var(--color-muted)] leading-relaxed max-w-xl">
                    My AI assistant lives in the bottom-right corner of this page.
                    Ask anything about the work, scope a project, or leave your email —
                    I get back within 24 hours.
                  </p>
                </div>
                <div
                  aria-hidden
                  className="hidden sm:flex items-center gap-2 text-sm font-mono text-[color:var(--color-accent)] select-none"
                >
                  <span>look for the bubble</span>
                  <span className="inline-block animate-[nudge_1.8s_ease-in-out_infinite] text-lg">↘</span>
                </div>
                <div className="sm:hidden text-sm font-mono text-[color:var(--color-accent)]">
                  look for the bubble ↘
                </div>
              </div>
            </div>

            {/* Secondary — email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mbelteshazzar.bm.1247@gmail.com" target="_blank" rel="noopener noreferrer"
              className="group mt-5 flex items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elevated)] p-5 sm:p-6 hover:border-[color:var(--color-accent)]/40 transition-colors"
            >
              <div>
                <div className="text-xs font-mono tracking-wider uppercase text-[color:var(--color-subtle)] mb-1">
                  Or email directly
                </div>
                <div className="text-base sm:text-lg font-medium break-all">
                  mbelteshazzar.bm.1247@gmail.com
                </div>
              </div>
              <span className="shrink-0 ml-4 text-sm text-[color:var(--color-subtle)] group-hover:text-[color:var(--color-accent)] transition-colors">
                Open →
              </span>
            </a>

            {/* Tertiary — socials + location */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[color:var(--color-subtle)]">
              <a
                href="https://www.linkedin.com/in/belteshazzar-marquez-733771340/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--color-fg)] transition-colors"
              >
                LinkedIn
              </a>
              <span aria-hidden>·</span>
              <a
                href="https://github.com/dGreatNoob"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[color:var(--color-fg)] transition-colors"
              >
                GitHub
              </a>
              <span aria-hidden>·</span>
              <span>Manila, Philippines · UTC+8</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
