"use client";

import { useEffect, useState } from "react";

const phrases = [
  "AI-powered SaaS.",
  "production agents.",
  "RAG systems.",
  "operator dashboards.",
  "offline-first apps.",
  "e-commerce stores.",
  "landing pages.",
  "websites.",
];

const HOLD_MS = 2800;

export function RotatingBuild() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % phrases.length);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      key={i}
      className="inline-block whitespace-nowrap text-[color:var(--color-accent)] animate-[slideUpFade_500ms_cubic-bezier(0.22,1,0.36,1)]"
    >
      {phrases[i]}
    </span>
  );
}
