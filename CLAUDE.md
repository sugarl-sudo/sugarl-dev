# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for showcasing research papers, internship experience, and projects. Built with a modern "rich & dynamic" stack emphasizing visual polish and smooth animations.

## Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animation**: Framer Motion
- **CMS**: Notion API or microCMS (content is managed externally, fetched at build/request time)
- **Hosting**: Vercel

## Commands

```bash
# Install dependencies
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Lint
pnpm lint

# Add shadcn/ui component (example)
pnpm dlx shadcn@latest add button
```

## Architecture

### App Router Structure (src/app/)

- `layout.tsx` — Root layout with fonts, metadata, global providers
- `page.tsx` — Landing / hero section
- Sections are composed as components rendered on the main page (single-page portfolio style)

### Key Directories

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable React components
- `src/components/ui/` — shadcn/ui primitives (Button, Card, etc.)
- `src/components/sections/` — Page sections (Hero, About, Papers, Experience, Projects, Contact)
- `src/lib/` — Utility functions, CMS client, constants
- `src/lib/notion.ts` or `src/lib/microcms.ts` — CMS data fetching logic
- `src/types/` — Shared TypeScript type definitions

### Design Patterns

- **Bento Grid layout**: Cards arranged in a CSS Grid with varying spans (`col-span-2`, `row-span-2`) for visual hierarchy. Use Tailwind grid utilities.
- **Scroll-triggered animations**: Use Framer Motion's `useInView` / `whileInView` for reveal effects as sections enter the viewport.
- **Server Components by default**: Fetch CMS data in Server Components. Use `"use client"` only for interactive/animated components.
- **shadcn/ui convention**: Components installed into `src/components/ui/` via CLI. Customize through `cn()` utility and Tailwind classes, not by modifying the component source directly.

### Environment Variables

```
NOTION_API_KEY=       # or MICROCMS_API_KEY / MICROCMS_SERVICE_DOMAIN
```

Store in `.env.local` (gitignored). Access via `process.env` in Server Components or Route Handlers only.

## Style Guide

- Use `cn()` (from `src/lib/utils.ts`) to merge Tailwind classes conditionally.
- Prefer Tailwind utilities over custom CSS. Use `globals.css` only for CSS variables (theme colors, fonts).
- Framer Motion variants should be defined as constants near the component, not inline.
- Japanese text content is expected. Set `lang="ja"` on `<html>` and use appropriate font (e.g., Noto Sans JP via `next/font`).
