export type Project = {
  slug: string;
  title: string;
  blurb: string;
  role: string;
  stack: string[];
  status: "live" | "in-progress" | "public";
  link?: { label: string; href: string };
  repo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "aya",
    title: "Aya",
    blurb:
      "Multi-tenant AI receptionist platform — live at 4 dental clinics in the Philippines, producing 50+ qualified leads. Niche-agnostic agent core, deterministic LangGraph loop, RAG with operator-visible citations, HMAC-signed booking.",
    role: "Designer & engineer — end to end",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "LangGraph",
      "OpenRouter",
      "pgvector",
      "Resend",
      "Vercel",
    ],
    status: "live",
    link: { label: "Case study", href: "https://github.com/dGreatNoob/aya-showcase" },
    highlights: [
      "Deterministic agent state machine — agent cannot skip lead capture or double-save a contact.",
      "RAG over operator-managed FAQs, services, and policies with chunk-level citations visible to the operator.",
      "Pre-inference availability injection — LLM never fabricates appointment times.",
      "Row-level security on every table for zero cross-business data leakage by design.",
      "Multi-language: English, Filipino, Taglish, Cebuano.",
    ],
  },
  {
    slug: "langgraph-rag-starter",
    title: "LangGraph RAG Starter",
    blurb:
      "Minimal LangGraph.js RAG agent — retrieve → grade → generate | refuse. Zero embeddings required, runs in 30 seconds with no API key. A clean starter for agentic RAG patterns.",
    role: "Creator",
    stack: ["LangGraph.js", "TypeScript", "Node 20", "OpenRouter"],
    status: "public",
    link: { label: "View on GitHub", href: "https://github.com/dGreatNoob/langgraph-rag-starter" },
    repo: "https://github.com/dGreatNoob/langgraph-rag-starter",
    highlights: [
      "Conditional routing in a real LangGraph state machine — the thing LangGraph actually adds over plain chains.",
      "Embedding-free retrieval (TF-IDF over markdown) so the graph is decoupled from any vector store.",
      "Dual-mode: live LLM via OpenRouter, or a stub LLM for zero-setup demos.",
      "Swap-points table in the README for moving to pgvector, Pinecone, Chroma, Supabase.",
    ],
  },
  {
    slug: "simple-pos",
    title: "simple-pos",
    blurb:
      "Offline-first point-of-sale designed for small and medium retail stores. Works without internet — local writes hit IndexedDB immediately; a background sync manager pushes changes when connectivity returns.",
    role: "Creator",
    stack: ["SvelteKit", "Dexie.js", "Laravel 12", "Tailwind", "PWA"],
    status: "in-progress",
    link: { label: "View on GitHub", href: "https://github.com/dGreatNoob/simple-pos" },
    repo: "https://github.com/dGreatNoob/simple-pos",
    highlights: [
      "Local-first writes — the cashier never waits on the network.",
      "Conflict resolution: last-write-wins for products, append-only for transactions, server reconciliation for stock.",
      "Bundle target under 1MB for fast first load on slow connections.",
    ],
  },
  {
    slug: "client-work",
    title: "Client engagements — anonymized",
    blurb:
      "Production work delivered through CliqueHA Information Services OPC. Client names are under NDA, so this section lists the problem shape and the interesting technical work.",
    role: "Full-stack engineer",
    stack: ["Laravel 12", "Livewire / Flux", "MySQL 8", "Redis", "Laravel Reverb", "Docker", "WordPress"],
    status: "live",
    highlights: [
      "Operations & order management ERP — sales orders, purchase orders, shipments, FEFO allocation, commissions, receivables/payables; realtime via Reverb + Redis queues; audit trails and approval-state workflow logging.",
      "Multi-branch retail inventory system — real-time stock, customer & supplier management, role-based access across owners, managers, and staff.",
      "E-commerce platform — conversion-focused WooCommerce storefront for a consumer retail brand; custom theming, catalog, payment integration.",
    ],
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
