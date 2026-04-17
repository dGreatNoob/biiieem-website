# physics-engine — side project

## What it is

A 2D physics sandbox Belteshazzar built from scratch in vanilla JavaScript. No physics library, no engine wrappers — just collision detection, impulse resolution, broad-phase culling, and a position-correction pass on top of `requestAnimationFrame`.

## What's interesting technically

- **Broad + narrow phase collision** — AABB pre-check before SAT-style narrow phase
- **Stable stacking** — Baumgarte position correction so towers of boxes don't sink or jitter apart
- **Restitution + friction** per body
- **Sub-stepping** to keep large delta-times from blowing up high-velocity collisions
- **Pure DOM/Canvas rendering** — no WebGL, no library

## Why he built it

To see if he could. Side-project curiosity, not a product. It shows comfort with the math and the render loop at a lower level than most full-stack work demands.

## Repo

[github.com/dGreatNoob/physics-engine](https://github.com/dGreatNoob/physics-engine) — includes screenshots of the sandbox in action.
