# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Business landing page for a shiatsu and tuina massage therapist. SEO is a top priority — the site must be server-rendered and Google-indexable.

## Stack

- **Framework**: Next.js (App Router) with React
- **Styling**: TBD (Tailwind CSS preferred)
- **Language**: TypeScript

## Commands

Once the project is scaffolded, standard Next.js commands apply:

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Run production build locally
npm run lint      # ESLint
```

## SEO Requirements

- Use Next.js App Router with server components by default — avoid `"use client"` unless necessary for interactivity
- Every page must export a `generateMetadata()` function with title, description, Open Graph, and canonical URL
- Use semantic HTML (`<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`) — only one `<h1>` per page
- Images: use `next/image` with meaningful `alt` text; provide `width`/`height` to avoid CLS
- Structured data (JSON-LD) should be added for the business (LocalBusiness schema)
- Target language is Hebrew — set `<html lang="he" dir="rtl">`

## Architecture Notes

- Components live in `src/components/` organized by section (e.g. `Hero`, `About`, `Services`, `Contact`)
- Page content (text, metadata) should be kept in a `src/content/` or `src/data/` layer, separate from layout/UI components, so copy can be updated without touching component code
- User-supplied images go in `public/images/`
