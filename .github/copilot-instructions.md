# Copilot Instructions for AI Coding Agents

## Project Overview
- **Framework:** Next.js (App Router, React 19)
- **Language:** TypeScript, React
- **Styling:** Tailwind CSS (via PostCSS)
- **Lint/Format:** Biome (see `biome.json`)
- **Image Handling:** Next.js `<Image>` and remote images (see `next.config.ts`)
- **Gallery:** Uses `yet-another-react-lightbox` with plugins (see `ProjectsGallery.tsx`)

## Key Structure
- `src/app/` — App Router entry, global styles, layout, and data
- `src/components/` — UI components (Nav, Footer, ProjectsGallery)
- `src/app/data/projects.tsx` — Project data (array of objects, used in gallery)
- `public/` — Static assets (icons, project images)

## Developer Workflows
- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (Biome)
- **Format:** `npm run format` (Biome)
- **Styling:** Use Tailwind utility classes in JSX; global styles in `globals.css`
- **Add dependencies:** Use npm, prefer exact versions as in `package.json`

## Patterns & Conventions
- **Component Import:** Use relative imports from `src/components/` and `src/app/data/`
- **Data Flow:** Project data is imported as a module, not fetched from API
- **Image Paths:** Use `/projects/` and `/icons/` under `public/` for images
- **Font:** Uses `next/font` for Geist (see `layout.tsx`)
- **Strict TypeScript:** All code is type-checked; see `tsconfig.json` for path aliases
- **No API routes:** All data is static or imported

## Integration Points
- **Lightbox:** `ProjectsGallery.tsx` integrates `yet-another-react-lightbox` with `thumbnails`, `zoom`, and `captions` plugins
- **Remote Images:** Allowlisted in `next.config.ts` for `portfolio.sectorzlabs.com`

## Examples
- To add a new project: Edit `src/app/data/projects.tsx` and add an object to the `projects` array
- To add a new icon: Place SVG in `public/icons/` and reference in `page.tsx`

## Special Notes
- **No backend/server code** in this repo
- **No test suite** currently present
- **All navigation is anchor-based** (no client-side routing for sections)

---
For more, see `README.md`, `package.json`, and referenced config files.
