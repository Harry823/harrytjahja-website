# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server at localhost:3000
pnpm build      # production build
pnpm lint       # ESLint on src/
```

This project uses **pnpm** exclusively — don't use npm or yarn.

There are no tests in this project.

## Architecture

**Next.js 16 App Router** personal portfolio site. The only page is `src/app/page.tsx`.

**Key directories:**
- `src/app/` — layout, global CSS, and the single page
- `src/components/` — React components
- `src/shared/constants.ts` — all portfolio content (bio, experience, projects, skills)
- `src/shared/types.ts` — `WorkExperience` and `Project` types
- `design_handoff_portfolio/` — design prototype (`Harry Portfolio.html`) and implementation spec (`README.md`) — **not production code**

**Styling migration:** The MUI → Tailwind CSS migration is complete. `src/app/page.tsx`, `src/app/layout.tsx`, and all components are fully on Tailwind; `src/components/styles.tsx` has been deleted. For exact Tailwind classes, layout structure, and component shapes, refer to `design_handoff_portfolio/README.md` — it remains the authoritative spec and documents the 220px fixed sidebar, `md:ml-[220px]` main offset, and mobile sticky nav behavior.

**Styling system:** Tailwind utility classes with CSS custom properties for theming. All color tokens (`--color-bg`, `--color-accent`, etc.) are defined in `globals.css` for both light and dark modes, then aliased in `tailwind.config.ts` so they're usable as `bg-bg`, `text-accent`, etc.

**Dark mode:** Persisted via a `darkMode` cookie (written on toggle, read server-side in `layout.tsx` via `cookies()` from `next/headers`). `layout.tsx` passes the resolved value as `defaultDark` to `ThemeProvider` and pre-applies `class="dark"` on `<html>` to avoid hydration mismatch. Use `useTheme()` from `src/components/ThemeProvider.tsx` to access `{ dark, toggle }` in any client component.

**Target layout** (from design handoff): Fixed 220px sidebar + scrollable main content (`ml-[220px]`). Sidebar has three zones: name/logo, nav links (with `IntersectionObserver` active state), and social links + dark mode toggle. Mobile: hide sidebar, show sticky top nav below `md` breakpoint.

**Fonts:** DM Sans (body) and DM Mono (labels, tags, timestamps) — loaded via Google Fonts in `layout.tsx`.
