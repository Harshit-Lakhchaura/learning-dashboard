# 🎓 Learning Dashboard

A futuristic, animated student learning dashboard built with Next.js, Supabase, Framer Motion, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🏗️ Architecture

### Server vs Client Component Split

**Server Components (no 'use client'):**
- `app/page.tsx` — Fetches courses data from Supabase on the server. No API keys exposed to browser.

**Client Components ('use client'):**
- `Sidebar.tsx` — Needs useState for collapse/expand
- `BentoGrid.tsx` — Framer Motion animations
- `CourseCard.tsx` — Hover animations, Framer Motion
- `HeroTile.tsx` — Entrance animations
- `ActivityTile.tsx` — Animated grid
- `ProgressBar.tsx` — Animated progress on mount

### Why this split?
Data fetching happens on the server (secure, fast, no loading flash).
Animations and interactivity happen on the client (Framer Motion requires browser APIs).

## 🗄️ Database Schema

```sql
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER DEFAULT 0,
  icon_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## ✨ Features

- **Bento Grid Layout** — Hero tile, course cards, activity tile
- **Staggered Animations** — Cards animate in sequentially on load
- **Spring Physics** — Natural feel using Framer Motion spring
- **Collapsible Sidebar** — Smooth width animation with layoutId
- **Animated Progress Bars** — Fill from 0% to value on mount
- **Skeleton Loaders** — Pulsing placeholders while data loads
- **Dark Theme** — Deep blacks with violet/cyan accents

## 🔧 Setup

1. Clone the repo
2. Install dependencies:
```bash
   npm install
```
3. Copy env file:
```bash
   cp .env.example .env.local
```
4. Fill in your Supabase credentials in `.env.local`
5. Run the dev server:
```bash
   npm run dev
```

## 🌐 Environment Variables

See `.env.example` for required variables.

## 📦 Deployment

Deployed on Vercel. Environment variables are configured in Vercel dashboard.

## ⚡ Challenges Faced

- **Hydration Error** — `Math.random()` in ActivityTile caused server/client mismatch. Fixed by using static seed data.
- **Server Component Data Fetching** — Used `@supabase/ssr` package with cookie-based client for secure server-side fetching.
- **Layout Shifts** — Used `transform` and `opacity` exclusively for animations to avoid repaints.