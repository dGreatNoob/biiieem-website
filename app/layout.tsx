import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://biiieem.website"),
  title: {
    default: "Belteshazzar Marquez — Full-Stack Developer · AI SaaS",
    template: "%s · Belteshazzar Marquez",
  },
  description:
    "Full-stack developer from Manila. I build AI-powered SaaS on Next.js + LangGraph + Supabase — agent state machines, RAG pipelines, and the operator UIs that make them usable.",
  keywords: [
    "Belteshazzar Marquez",
    "Full-Stack Developer",
    "AI SaaS",
    "Next.js",
    "LangGraph",
    "Supabase",
    "Philippines",
    "Remote",
  ],
  authors: [{ name: "Belteshazzar Marquez" }],
  openGraph: {
    type: "website",
    title: "Belteshazzar Marquez — Full-Stack Developer · AI SaaS",
    description:
      "I build AI-powered SaaS end to end. Currently running Aya, a multi-tenant AI receptionist with real paying clients.",
    url: "https://biiieem.website",
    siteName: "Belteshazzar Marquez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belteshazzar Marquez — Full-Stack Developer · AI SaaS",
    description:
      "I build AI-powered SaaS end to end. Currently running Aya, a multi-tenant AI receptionist with real paying clients.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
