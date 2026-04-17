import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-sm font-mono text-[color:var(--color-accent)] mb-3">404</div>
          <h1 className="text-4xl font-semibold tracking-tight mb-4">Page not found</h1>
          <p className="text-[color:var(--color-muted)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist — or isn&apos;t here yet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-bg)] px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--color-accent-hover)] transition-colors"
          >
            Go home
            <span aria-hidden>→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
