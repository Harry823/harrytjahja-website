# Harry Tjahja — Personal Portfolio

Personal portfolio site built with Next.js 16 App Router and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for theming
- **Fonts:** DM Sans (body), DM Mono (labels/tags) via Google Fonts
- **Package manager:** pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

```bash
pnpm dev      # start dev server at localhost:3000
pnpm build    # production build
pnpm lint     # ESLint on src/
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # CSS custom properties (color tokens, light/dark)
│   ├── layout.tsx        # Root layout — font loading, dark mode cookie, ThemeProvider
│   └── page.tsx          # Single page with all sections
├── components/
│   ├── MobileNav.tsx     # Sticky top nav shown below md breakpoint
│   ├── NameBlock.tsx     # Name and title display
│   ├── SectionHeading.tsx
│   ├── Sidebar.tsx       # Fixed 220px sidebar (nav, social links, theme toggle)
│   ├── Tag.tsx           # Skill/tech tag pill
│   └── ThemeProvider.tsx # Context for { dark, toggle }; exposes useTheme()
├── hooks/
│   └── useActiveSection.ts  # IntersectionObserver hook for sidebar nav active state
└── shared/
    ├── constants.ts      # All portfolio content (bio, experience, projects, skills)
    └── types.ts          # WorkExperience, Project, SkillCategory types
```

## Layout

**Desktop (md and above):** Fixed 220px sidebar + scrollable main content offset with `ml-[220px]`. The sidebar has three zones — name/logo, nav links with scroll-spy active state, and social links with dark mode toggle.

**Mobile (below md):** Sidebar hidden; sticky top nav replaces it.

## Theming

Dark mode is persisted via a `darkMode` cookie (written on toggle, read server-side in `layout.tsx`). The resolved class is pre-applied on `<html>` to prevent hydration flash. Color tokens are defined as CSS custom properties in `globals.css` and aliased in `tailwind.config.ts` so they're usable as `bg-bg`, `text-accent`, etc.

## Content

All portfolio content lives in `src/shared/constants.ts` — bio paragraphs, work experience, projects, and skill categories. Update this file to change site content without touching any component.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a production deploy.
