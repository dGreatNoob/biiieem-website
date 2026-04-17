export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 backdrop-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6 text-sm text-[color:var(--color-muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)] animate-ping opacity-60" />
            <span className="relative rounded-full h-2 w-2 bg-[color:var(--color-accent)]" />
          </span>
          <span>Open to remote roles and serious freelance engagements</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          I build <span className="text-[color:var(--color-accent)]">AI-powered SaaS</span>
          <br />
          end to end.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-[color:var(--color-muted)] leading-relaxed">
          Full-stack developer from Manila. I specialize in Next.js + LangGraph + Supabase —
          from the agent state machine and RAG pipeline down to the Postgres schema and the
          operator UI. Currently running <span className="text-[color:var(--color-fg)]">Aya</span>,
          a multi-tenant AI receptionist with real paying clients.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-5 py-2.5 font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
          >
            See the work
            <span aria-hidden>→</span>
          </a>
          <a
            href="mailto:mbelteshazzar.bm.1247@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-5 py-2.5 hover:bg-[color:var(--color-bg-elevated)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
