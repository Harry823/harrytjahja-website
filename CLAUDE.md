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

**Active migration:** The codebase is mid-migration from **Material UI → Tailwind CSS**. `src/app/globals.css` and `tailwind.config.ts` are already set up; `src/components/ThemeProvider.tsx` is already rewritten. However, `src/app/page.tsx` and `src/components/styles.tsx` still use MUI. The `design_handoff_portfolio/README.md` is the authoritative spec for completing this migration — refer to it for exact Tailwind classes, layout structure, and component shapes.

**Styling system:** Tailwind utility classes with CSS custom properties for theming. All color tokens (`--color-bg`, `--color-accent`, etc.) are defined in `globals.css` for both light and dark modes, then aliased in `tailwind.config.ts` so they're usable as `bg-bg`, `text-accent`, etc.

**Dark mode:** `ThemeProvider` reads/writes `localStorage` and toggles `class="dark"` on `<html>`. Use `useTheme()` from `src/components/ThemeProvider.tsx` to access `{ dark, toggle }` in any client component.

**Target layout** (from design handoff): Fixed 220px sidebar + scrollable main content (`ml-[220px]`). Sidebar has three zones: name/logo, nav links (with `IntersectionObserver` active state), and social links + dark mode toggle. Mobile: hide sidebar, show sticky top nav below `md` breakpoint.

**Fonts:** DM Sans (body) and DM Mono (labels, tags, timestamps) — loaded via Google Fonts in `layout.tsx`.
