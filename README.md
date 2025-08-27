# Daniel Charbit – Portfolio (Vite + React + TS + Tailwind)

A responsive personal portfolio built with Vite, React, TypeScript, Tailwind, and shadcn/ui. Optimized for mobile (390x844), tablet, and desktop with smooth animations, dialogs, and accessible navigation.

## Tech Stack
- React 18, TypeScript, Vite 5
- Tailwind CSS 3, shadcn/ui (Radix UI)
- GSAP (scroll animations), Sonner (toasts)

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

## License
MIT
