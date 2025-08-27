# Daniel Charbit – Portfolio (Vite + React + TS + Tailwind)

A responsive personal portfolio built with Vite, React, TypeScript, Tailwind, and shadcn/ui. Optimized for mobile (390x844), tablet, and desktop with smooth animations, dialogs, and accessible navigation.

## Tech Stack
- React 18, TypeScript, Vite 5
- Tailwind CSS 3, shadcn/ui (Radix UI)
- GSAP (scroll animations), Sonner (toasts)

## Getting Started
```bash
# Install deps
npm install

# Start dev server
npm run dev

# Type-check (optional)
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure
- `src/components/*`: Feature sections (Hero, Projects, Skills, About, Contact) and UI primitives
- `src/pages/*`: Routes (`/` Splash → `/home` Index)
- `src/index.css` + `tailwind.config.ts`: Design tokens and utilities
- `public/*`: Static assets

## Responsiveness
- Navigation centered on desktop; mobile menu with slide-down.
- Projects: mobile grid with dialogs, compact badges.
- Skills: cards show 3 chips on mobile with "Show more" per card; all chips visible on larger screens.
- About: centered heading on all sizes; tighter spacing on mobile.
- Contact: larger touch targets, required fields, and toasts.

## Contact Form (FormSubmit)
The form posts to FormSubmit with a tokenized endpoint to deliver messages to `Danieldod60@gmail.com`:
- Endpoint: `https://formsubmit.co/ajax/4cf4a176d1121a860a5a086f5eb8f6eb`
- Required fields: name, email, project type, message
- Success/error toasts are shown to the user

No server is required; it works on localhost and Vercel. If you change recipient email, create a new tokenized endpoint and replace it in `src/components/Contact.tsx`.

## Deploy (Vercel)
- Push to GitHub and import the repo in Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Scripts
- `dev`: start Vite dev server
- `build`: production build
- `build:dev`: dev-mode build
- `lint`: run ESLint
- `preview`: serve `dist`

## Notes
- Bundle warning for size is expected for a UI-rich portfolio; can be optimized with code-splitting if needed.
- Animations are disabled/hardened on mobile where appropriate to avoid tap interception.

## License
MIT
