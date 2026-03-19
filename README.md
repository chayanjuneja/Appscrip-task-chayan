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