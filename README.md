# biiieem.dev

Portfolio site for Belteshazzar Marquez — deployed to [biiieem.dev](https://biiieem.dev).

## Stack

- Next.js 15 App Router, fully statically generated
- React 19, TypeScript 5
- Tailwind CSS v4
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
```

All pages prerendered to static HTML. First Load JS ≈ 106 kB.

## Structure

```
app/
├── layout.tsx           Global metadata, font, color scheme
├── page.tsx             Home — Hero, Work grid, About, Contact
├── work/[slug]/page.tsx Case study pages (statically generated)
├── not-found.tsx        404
├── robots.ts            Robots config
├── sitemap.ts           Sitemap
└── globals.css          Tailwind + CSS variables

components/
├── nav.tsx
├── hero.tsx
├── project-card.tsx
└── footer.tsx

lib/
└── projects.ts          Single source of truth for case studies
```

To add or edit a case study, update `lib/projects.ts` — the home grid, case study pages, and sitemap all regenerate from that list.

## License

Source MIT. Content © Belteshazzar Marquez.
