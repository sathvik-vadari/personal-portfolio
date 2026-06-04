# personal-portfolio

Source for [sathvikvadari.com](https://sathvikvadari.com) — a single-page portfolio for an AI engineer who occasionally writes papers about why GPUs cost so much to leave on.

Built with React 19, Bun, TypeScript, Tailwind CSS 4, and Three.js. The background is a real-time WebGL fluid simulation (BFECC advection + Poisson pressure solve), which is overkill for a portfolio site and that is precisely the point.

## Stack

- **Runtime:** [Bun](https://bun.sh) 1.2+
- **Framework:** React 19 with HMR
- **Styling:** Tailwind CSS 4 (via `bun-plugin-tailwind`) + shadcn/ui (New York, Zinc)
- **Graphics:** Three.js — see `src/components/LiquidEther.jsx`
- **Animations:** GSAP for the typewriter cursor, CSS goo filters for the nav blobs

## Development

```bash
bun install
bun dev          # HMR dev server, ports 3000 → 3001 → 3002 → 3003 → OS-assigned
bun run build.ts # Bundle to dist/ (minified, source maps)
bun start        # Run the production build
```

There is no linter and no test suite. The portfolio is small enough that the type-checker and the eyeballs do the work.

## Layout

```
src/
├── index.html        HTML shell — single #root div
├── index.tsx         React DOM render + HMR wiring + Bun HTTP server
├── frontend.tsx      Server entry (serves index.html for all routes)
├── App.tsx           The whole site: nav, hero, research, work, projects, contact
└── components/
    ├── LiquidEther.jsx   WebGL fluid background, pauses off-screen
    ├── TextType.jsx      Typewriter with cycling phrases
    └── GooeyNav.jsx      Blob nav with particle explosion on select
```

`build.ts` scans `src/` for `.html` files and bundles each via the Tailwind plugin into `dist/`.

## Notes

- Dark theme only. Black background, white text, neutral-800 borders. There is no light mode and there will not be one.
- All state is local React hooks. No Redux, no Zustand, no context gymnastics.
- The fluid background uses `HalfFloat` textures on iOS to avoid Safari precision issues, and an `IntersectionObserver` to stop the simulation when scrolled out of view.

## License

Personal project. Code is here to read; please don't lift the design wholesale.
