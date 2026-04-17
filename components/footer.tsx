export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-32">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[color:var(--color-subtle)]">
        <div>© {new Date().getFullYear()} Belteshazzar Marquez</div>
        <div className="flex gap-5">
          <a
            href="https://github.com/dGreatNoob"
            className="hover:text-[color:var(--color-fg)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/belteshazzar-marquez-733771340/?locale=en_US"
            className="hover:text-[color:var(--color-fg)] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mbelteshazzar.bm.1247@gmail.com"
            className="hover:text-[color:var(--color-fg)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
