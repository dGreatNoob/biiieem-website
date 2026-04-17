import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-[color:var(--color-accent)]">~</span>
          <span className="text-[color:var(--color-fg)]">/belteshazzar</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-[color:var(--color-muted)]">
          <Link href="/#work" className="hover:text-[color:var(--color-fg)] transition-colors">
            Work
          </Link>
          <Link href="/#about" className="hover:text-[color:var(--color-fg)] transition-colors">
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-[color:var(--color-fg)] transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
