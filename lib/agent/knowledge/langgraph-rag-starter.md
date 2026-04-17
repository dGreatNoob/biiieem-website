# langgraph-rag-starter — open source

## What it is

A minimal LangGraph.js RAG agent Belteshazzar published to show the pattern cleanly. **Runs in 30 seconds with no API key** (stub LLM mode).

Graph shape:

```
[question]
    ↓
retrieve (top-k chunks, TF-IDF over markdown)
    ↓
grade (is top score ≥ threshold?)
    ↓
    ├── sufficient → generate (LLM answer with citations)
    └── insufficient → refuse (canned fallback)
    ↓
END
```

## Why it exists

Most RAG examples are either trivial one-liners with `RetrievalQAChain` or 20-file monsters with a vector DB you have to set up. This is the middle ground: a real LangGraph state machine with conditional routing, embedding-free retrieval so it works offline, and a stub LLM so it runs with `npm install && npm run dry` — no keys, no accounts, no waiting.

## Stack

- `@langchain/langgraph` — state machine
- `@langchain/core` — peer
- `openai` — OpenRouter is OpenAI-compatible
- TypeScript, Node 20, ESM, `tsx` runner

## Swap points (drop-in replacements)

- Retrieval in `retriever.ts` → pgvector / Supabase / Pinecone / Chroma / Weaviate
- LLM in `llm.ts` → Anthropic / OpenAI direct / Bedrock / local Ollama
- Knowledge source → PDF chunker / web scraper / DB dump
- `grade` logic → LLM-as-a-judge scoring instead of score threshold
- Add a node → `reformulateQuery` / `selfCritique` / `humanReview`

## Repo

[github.com/dGreatNoob/langgraph-rag-starter](https://github.com/dGreatNoob/langgraph-rag-starter)

## Use it for

- Showing the modern `Annotation.Root` + `StateGraph` + `addConditionalEdges` pattern in a file small enough to read in one sitting
- Demoing an agentic RAG flow in an interview or workshop without signing up for anything
- Forking as a starter for a production agent

## License

MIT.
