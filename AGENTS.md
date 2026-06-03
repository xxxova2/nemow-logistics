# AGENTS.md — Nemow Logistics Project Knowledge

## Project Overview
Next.js 16 app router logistics website with Arabic i18n, 3D Three.js scene (MovingVan), GSAP scroll animations.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Lint (not currently configured)

## Tech Stack
- **Next.js 16** (app router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (with `@tailwindcss/postcss`)
- **next-intl** — Internationalization (en/ar)
- **GSAP** + **ScrollTrigger** — Scroll animations
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — 3D scene (MovingVan)
- **Lenis** — Smooth scrolling
- **Framer Motion** — Reveal animations
- **lucide-react** — Icons

## Project Structure
- `src/app/[locale]/` — All routes under locale folder for i18n
- `src/app/page.tsx` — Root redirect to /en
- `src/app/[locale]/layout.tsx` — Renders html with correct lang/dir, NextIntlClientProvider, fonts
- `src/components/3d/` — Three.js scene (MovingVan, RoadLine)
- `src/components/sections/` — Homepage sections (hero, package, services, cta)
- `src/components/ui/` — shadcn-style Button, Input
- `src/i18n/` — next-intl routing, navigation, request config
- `messages/` — Translation files (en.json, ar.json)

## Key Conventions

### i18n
- All routes under `[locale]` folder, no middleware
- Use `useTranslations()` in client components
- Server components use static JSON imports + client content wrapper for Arabic support
- Use `Link` from `@/i18n/navigation` (not `next/link`) for locale-aware links

### Routing
- All routes prefixed with locale: `/en/about`, `/ar/about`
- `localePrefix: "always"` in routing.ts
- Active routes: `[locale]`, `[locale]/{about,services,contact,coverage,testimonials,tracking,blog,faq,privacy}`

### Styling
- Tailwind v4, CSS variables for theme
- Light theme: blue primary (#2563EB), orange accent (#F97316), light blue background
- RTL support via `ltr:` and `rtl:` Tailwind prefixes
- `.scene-container` + `.content-layer` classes for 3D fixed background overlay

### Component Patterns
- Homepage is Client Component (dynamic 3D scene with ssr: false)
- Inner pages follow server-wrapper + client-content pattern for correct Arabic rendering
- Footer + CTASection exported from `sections/cta-section.tsx`
- Navigation at `components/Navigation.tsx`

## Active Routes
- `/` → redirect to `/en`
- `/[locale]/` — Homepage (hero, package tracking, services, CTA, footer)
- `/[locale]/about` — About page with story and values
- `/[locale]/services` — Services page (P2P, Warehousing, Land Transport, Last-Mile, Express)
- `/[locale]/contact` — Contact form
- `/[locale]/coverage` — Saudi-wide coverage regions and hubs
- `/[locale]/testimonials` — Client testimonials
- `/[locale]/tracking` — Track shipment + instant quote (SAR/kg)
- `/[locale]/blog` — Blog listing (external Saudi logistics articles)
- `/[locale]/faq` — FAQ accordion
- `/[locale]/privacy` — Privacy policy

## Notes
- Saudi-focused: all locations are KSA cities (Riyadh, Jeddah, Dammam, etc.)
- No air/sea/cross-border offerings — land-only KSA delivery
- Google Fonts (Geist, Tajawal) need internet during build
- 3D scene background matches light theme (#EFF6FF)
- No phone number available — uses sales@nemow.net / operations@nemow.net
