# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start dev server with HMR
bun run build.ts # Build to dist/ (minified, linked source maps)
bun start        # Run production build
```

No linting or test commands are configured.

## Architecture

This is a single-page React 19 portfolio site built with Bun, TypeScript, Tailwind CSS 4, and Three.js.

**Entry points:**
- `src/index.html` → HTML shell with `<div id="root">`
- `src/index.tsx` → React DOM render with HMR support
- `src/frontend.tsx` → Bun HTTP server (serves `index.html` for all routes, sample API endpoints)
- `src/App.tsx` → Main portfolio component (nav, hero, work, projects, contact sections)

**Build:** `build.ts` scans `src/` for `.html` files and bundles via `bun-plugin-tailwind`. Output goes to `dist/`.

**Key components in `src/components/`:**
- `LiquidEther.jsx` — Full-page WebGL fluid simulation background (Three.js). Complex: implements BFECC advection, Poisson pressure solving, viscous damping. Auto-pauses when off-screen via IntersectionObserver. Uses HalfFloat textures on iOS.
- `TextType.jsx` — Typewriter animation with GSAP cursor blink, intersection-observer trigger, cycling phrases.
- `GooeyNav.jsx` — Blobby navigation with CSS filter goo effect and particle explosion on selection.

**Styling:** Tailwind CSS 4 configured via `bunfig.toml` (plugin) and `styles/globals.css`. Dark theme throughout (black bg, white text). Shadcn/ui components available (New York style, Zinc base color) per `components.json`.

**State:** No global state management — all state is local React hooks within `App.tsx` and individual components.
