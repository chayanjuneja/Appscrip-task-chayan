# Appscrip Task — Product Listing Page

A production-ready Product Listing Page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Implements SSR, full SEO coverage, responsive layout, and live product data from a mock API.

## Live Demo

[View on Netlify](#) <!-- replace with your Netlify URL -->

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (zero component libraries)
- **Data**: [Fake Store API](https://fakestoreapi.com)
- **Rendering**: Server-Side Rendering (SSR) via async server components

## Features

- Server-side rendered product grid — HTML is pre-built on the server before reaching the browser
- Category filtering with live product count
- Sort by: Recommended, Newest, Popular, Price High/Low
- Wishlist toggle per product
- Mobile drawer filter sidebar
- Fully responsive: 2-col mobile / 3-col tablet / 4-col desktop
- Sticky header with nav, search, bag, account icons
- Accordion footer with newsletter signup, social links, payment badges

## SEO

- `<title>` and `<meta description>` via Next.js Metadata API
- Open Graph and Twitter card tags
- Semantic `H1` (hero) and `H2` (footer sections, filter categories)
- JSON-LD structured data: `BreadcrumbList` + `Product` schema
- SEO-friendly image `alt` text derived from product titles
- Optimised images via `next/image` with lazy loading

## Project Structure

├── app/ │ ├── layout.tsx # Root layout + SEO metadata │ ├── page.tsx # SSR entry — fetches products & categories │ └── globals.css # Base styles + Tailwind layers ├── components/ │ ├── ProductListingPage.tsx # Client shell — state management │ ├── Header.tsx # Sticky header + nav │ ├── HeroSection.tsx # H1 hero block │ ├── ControlsBar.tsx # Item count + sort dropdown │ ├── FilterSidebar.tsx # Category filter + accordion │ ├── ProductCard.tsx # Product tile with wishlist │ ├── Footer.tsx # Newsletter + links + payments │ └── Icons.tsx # SVG icon components


## Getting Started

```bash
npm install
npm run dev
Open http://localhost:3000

Build & Deploy
npm run build
npm start
Deploying to Netlify
Push this repo to GitHub
Connect the repo on netlify.com
Set build command: npm run build
Set publish directory: .next
Deploy
Design Reference
Figma: Design Task - PLP