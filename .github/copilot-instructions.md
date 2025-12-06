# AI Coding Agent Instructions for greencloud-portfolio

## Project Architecture
- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS via PostCSS (`postcss.config.mjs`)
- **Lint/Format:** Biome (`biome.json`)
- **Static Data:** All data is imported as modules, not fetched from APIs
- **No backend/server code** — this is a static portfolio site

### Key Directories & Files
- `src/app/` — Next.js App Router entry, global styles (`globals.css`), layout (`layout.tsx`), and main page (`page.tsx`)
- `src/app/data/projects.tsx` — Array of project objects for the gallery
- `src/components/` — UI components: `Nav.tsx`, `Footer.tsx`, `ProjectsGallery.tsx`
- `public/` — Static assets: `/icons/` (SVGs), `/projects/` (images)

## Developer Workflows
- **Start dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (Biome)
- **Format:** `npm run format` (Biome)
- **Add dependencies:** Use `npm install`, prefer exact versions as in `package.json`
- **Styling:** Use Tailwind utility classes in JSX; global styles in `globals.css`

## Project-Specific Patterns & Conventions
- **Component Imports:** Use relative imports from `src/components/` and `src/app/data/`
- **Data Flow:** Project data is imported (not fetched); see `projects.tsx`
- **Image Handling:** Use Next.js `<Image>` for local and allowlisted remote images (see `next.config.ts`)
- **Gallery:** `ProjectsGallery.tsx` uses `yet-another-react-lightbox` with `thumbnails`, `zoom`, and `captions` plugins
- **Font:** Uses `next/font` for Geist (see `layout.tsx`)
- **Navigation:** All navigation is anchor-based (no client-side routing for sections)
- **No API routes:** All data is static or imported

## Integration Points
- **Lightbox:** `ProjectsGallery.tsx` integrates `yet-another-react-lightbox` and plugins
- **Remote Images:** Only allowlisted domains in `next.config.ts` (e.g., `portfolio.sectorzlabs.com`)

## Examples
- **Add a new project:** Edit `src/app/data/projects.tsx` and add an object to the `projects` array
- **Add a new icon:** Place SVG in `public/icons/` and reference in `page.tsx`

## Special Notes
- **No test suite** currently present
- **Strict TypeScript:** All code is type-checked; see `tsconfig.json` for path aliases

---
For more, see `README.md`, `package.json`, and referenced config files.
