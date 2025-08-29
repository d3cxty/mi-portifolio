# Next Portfolio Starter

A clean, fast portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Features
- Sections: About, Tech Stack, Projects, Contact
- Project cards with tags and external links
- Dark/light theme toggle (next-themes)
- SEO metadata (OpenGraph + Twitter)
- Responsive, accessible, minimal UI
- Easy to customize

## Quickstart
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Customize
- Edit `components/hero.tsx` with your name & bio.
- Replace tech icons in `public/tech/` or change list in `components/tech-stack.tsx`.
- Add your projects in `lib/projects.ts`.
- Put your resume at `public/resume.pdf` and update brand name in `components/navbar.tsx`.
- Update SEO in `app/layout.tsx` (title, description, social image).
