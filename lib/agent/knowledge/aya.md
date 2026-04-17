# Aya — AI Receptionist Platform

## What it is

A multi-tenant AI receptionist platform Belteshazzar built end-to-end. **His personal project, not a CliqueHA product.** Live in production. Serves paying business owners through an embedded chat widget and a public `/talk/[slug]` page.

**Niche #1:** Dental clinics in the Philippines — agent name "Aya" (the platform + its primary niche agent share the name). **Traction:** 4 paying clinics live, 50+ qualified leads captured to date.

Same codebase is designed to power agents across dental, salon, law, and spa niches via config-only swaps — nothing about "dental" is hardcoded.

## Stack

- **Framework:** Next.js 16 App Router, React 19
- **Language:** TypeScript 5
- **Database:** Supabase — Postgres + Row-Level Security + Realtime + Storage
- **Vector search:** pgvector + `baai/bge-m3` embeddings
- **Agent orchestration:** LangGraph (deterministic state machine)
- **LLM:** OpenRouter — model-agnostic; running Gemini 2.5 Flash today, per-environment config
- **Email:** Resend (transactional)
- **SMS:** Semaphore (PH outbound)
- **Styling:** Tailwind CSS v4 + DaisyUI v5
- **Hosting:** Vercel

## Deterministic LangGraph agent loop

```
greet → qualify → collect_contact → save_lead → done
```

Every node has explicit entry/exit logic. Not a ReAct agent. This matters because free-form LLM pipelines skip lead capture, double-save contacts, or wander off-script. Modeling the loop as a state machine eliminates those failure modes at the graph level — the agent cannot transition to `done` without passing through `collect_contact`.

## RAG with operator-visible citations

The operator uploads FAQs, services, pricing, and policies. Content is chunked, embedded with `baai/bge-m3`, and retrieved with cosine similarity at query time. Retrieved chunks are injected into the system prompt **and cited back to the operator** in the conversation panel — business owners see exactly which knowledge chunk the agent used to answer. No black box.

## No hallucinated appointment times

For booking-enabled businesses:
- The agent detects scheduling intent in the customer message (including Tagalog and Cebuano signals).
- Queries real provider schedules from Postgres.
- Injects available slots directly into the system prompt **before** the LLM call — no tool-call round trips, no hallucinated times.
- Slot tokens are HMAC-signed.
- Appointments are written with a partial unique index on `(provider_id, starts_at)` — double-booking is impossible at the database layer.

## Multi-tenant isolation by schema

Every Supabase table has row-level security enforcing `business_id` isolation. Cross-business data leakage is a schema guarantee, not an application-layer hope. If an auth bug somewhere tried to read another tenant's leads, Postgres itself refuses.

## Streaming SSE chat

`/api/chat` streams responses as Server-Sent Events. Each chunk is a typed JSON event — `text`, `state`, `done`, `error`. Consumed by both an embeddable widget and a public `/talk/[slug]` page. CORS is intentionally open — security comes from per-session and per-business rate limits, not origin pinning, so the widget embeds on any customer site without whitelisting.

## Multi-language

Customer conversations support English, Filipino, Taglish, and Cebuano. The agent mirrors whatever language the customer writes in; defaults to Taglish when ambiguous.

## Operator dashboard

Used daily by business owners. Features:

- **Realtime inbox** — every live conversation visible as it happens
- **Lead funnel** — new → qualified → booked → contacted
- **Knowledge management** — upload FAQs, services, policies with chunk-level visibility
- **Live training sandbox** — owners send test messages, see the agent's response + retrieved knowledge, submit correction pairs that tighten future answers
- **Analytics** — summary, chart, funnel, top services
- **Branding** — logo, banner, custom greeting per business

## Case study

Public architecture writeup with screenshots: [github.com/dGreatNoob/aya-showcase](https://github.com/dGreatNoob/aya-showcase).
On-site case study: [biiieem.website/work/aya](https://biiieem.website/work/aya).
