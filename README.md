# Khaled Tujjar — E-Portfolio

Personal portfolio site. Live at **https://khaledtujjar.com/**

Single-page React app: hero, about + skills, experience & education, projects, and a
contact form.

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · EmailJS

## Getting started

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```bash
npm install
cp .env.example .env   # fill in EmailJS credentials, see below
npm run dev
```

| Script            | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Dev server with HMR                         |
| `npm run build`   | Type-check (`tsc -b`) then bundle to `dist` |
| `npm run preview` | Serve the production build locally          |
| `npm run lint`    | ESLint, zero warnings tolerated             |

## Environment variables

The contact form posts through [EmailJS](https://dashboard.emailjs.com/). All three are
required; without them the form still renders but reports an error on submit.

| Variable                   | Where to find it               |
| -------------------------- | ------------------------------ |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS → Email Services       |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS → Email Templates      |
| `VITE_EMAILJS_USER_ID`     | EmailJS → Account → Public Key |

The template expects `from_name`, `from_email`, `to_name`, and `message`.

## Updating content

All copy lives in `src/data/` — no strings are hardcoded in components. To refresh the
site after a resume update, edit these and nothing else:

| File                     | Contains                                        |
| ------------------------ | ----------------------------------------------- |
| `src/data/profile.ts`    | Name, tagline, meta line, links, bio paragraphs |
| `src/data/experience.ts` | Roles and bullets                               |
| `src/data/education.ts`  | Degrees                                         |
| `src/data/projects.ts`   | Project cards (name, blurb, tags, link)         |
| `src/data/skills.ts`     | Skill groups                                    |

Replace `src/assets/resume.pdf` to update the resume download.

## Design tokens

Type is Inter (sans) + Geist Mono (labels, dates, tags), both self-hosted via Fontsource
and imported in `src/main.tsx`. Colors and fonts are defined once in the `@theme` block at the top of `src/index.css`
(Tailwind 4 CSS-first config — there is no `tailwind.config.js`). Components use token
utilities (`bg-surface`, `text-fg-muted`, `text-accent`) rather than raw hex values.

## Hero simulation

The hero background (`src/lib/nbody.ts`) is a 2D port of my
[N-Body Particle Renderer](https://github.com/KTujjar/nbody-renderer) — direct O(n²)
pairwise gravity with Plummer softening, integrated semi-implicitly on a canvas. It
pauses when the tab is hidden or scrolled out of view, and renders a single static frame
under `prefers-reduced-motion`.
