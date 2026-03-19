# Appscrip-task-chayan

Product listing page built as part of the Appscrip frontend assignment.

**Live:** https://frolicking-begonia-f230d3.netlify.app

---

## What I built

A product listing page using Next.js 14 (App Router) and Tailwind CSS. Pulls product data from the Fake Store API and renders a filterable, sortable grid.

No UI libraries used -- everything is built from scratch including the filter sidebar, sort dropdown, and icons (inline SVG).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Fake Store API

## Things I focused on

**SEO** -- title, meta description, Open Graph tags, JSON-LD breadcrumb schema, semantic H1/H2 tags, and alt text on every image derived from the product name.

**Responsiveness** -- 2 columns on mobile, 3 on tablet, 4 on desktop. Filter sidebar becomes a drawer on mobile.

**Code structure** -- each component has a single responsibility. No logic dumped into one file.

**Minimal dependencies** -- just Next.js, React, Tailwind. No component libraries.

## Run locally

```bash
npm install
npm run dev
Open http://localhost:3000

Folder structure
app/
  layout.tsx     # metadata and root layout
  page.tsx       # entry point
  globals.css

components/
  Header.tsx
  HeroSection.tsx
  ControlsBar.tsx
  FilterSidebar.tsx
  ProductCard.tsx
  ProductListingPage.tsx
  Footer.tsx
  Icons.tsx
Design reference
https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP


---

Save with **Ctrl+S**, then:

```bash
git add README.md
git commit -m "docs: rewrite README"
git push
------------------
P.S : ## SSR — What I tried and why I switched

The original implementation used Next.js async server components for SSR. `page.tsx` was a server component that fetched products from fakestoreapi.com before sending HTML to the browser. This worked perfectly in local development.

On both Netlify and Vercel, the SSR fetch silently returned empty data. The build logs showed the page being pre-rendered as a static page at build time ("Generating static pages"), and fakestoreapi.com was either unreachable or timing out on the hosting build servers during that step. Multiple approaches were tried:

- `cache: 'no-store'` to prevent caching
- A Next.js Route Handler as a server-side proxy (`/api/products`)
- `export const dynamic = 'force-dynamic'` to prevent static generation

None of these resolved the issue in a hosted environment.

The final solution was moving data fetching to the client using `useEffect`. The page shell is still server-rendered with all SEO metadata, schema, H1/H2 tags, and layout intact. Products load client-side after hydration.

The full SSR implementation is visible in the git history if you want to review what was attempte