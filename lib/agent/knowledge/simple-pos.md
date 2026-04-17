# simple-pos — personal project, in progress

## What it is

An offline-first point-of-sale system designed for small and medium retail stores. **Works without internet.** Local-first writes hit IndexedDB immediately so the cashier never waits on the network; a background sync manager pushes changes to a Laravel API and reconciles conflicts when connectivity returns.

## Why offline-first

Retail counters in the Philippines (and most of the world) lose connectivity often — flaky LTE, brownouts, ISP downtime. A POS that freezes when the network drops is a POS that loses sales. This one keeps selling.

## Stack

| Layer | Tech |
|---|---|
| Frontend | SvelteKit (PWA, adapter-static) |
| Local DB | Dexie.js (IndexedDB wrapper, reactive queries, version-migrated schema) |
| Styling | Tailwind CSS (JIT, bundle target < 1MB) |
| Backend | Laravel 12 + Laravel Sanctum (SPA auth) |
| API | RESTful, versioned at `/api/v1/` |

## Architecture

```
[UI Action] → [Local DB Write] → [Sync Queue] → [Sync Manager] → [Laravel API]
                ↓                                      ↓
        [Immediate UI Update]                 [Background Sync]
```

**Core principle:** every write succeeds locally first, then syncs asynchronously.

## Conflict resolution

- Products → last-write-wins by `updated_at`
- Transactions → append-only (immutable once created)
- Stock adjustments → server-side reconciliation against the queue
- Settings → client-push with server validation

## Status

Active development. See the repo's `IMPLEMENTATION_PLAN.md` and `docs/` for the phased roadmap.

## Repo

[github.com/dGreatNoob/simple-pos](https://github.com/dGreatNoob/simple-pos)
