# Active Context: FOLMADI Nigeria Website with Admin CMS

## Current State

**Status**: Full-featured NGO website with admin content management system

The project is a FOLMADI Nigeria website built with Next.js 16, featuring a complete admin CMS for managing news, blogs, events, and file uploads.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] Custom 404 not-found page (`src/app/not-found.tsx`)
- [x] Installed missing `clsx` dependency
- [x] Database setup (Drizzle ORM + SQLite via `@kilocode/app-builder-db`)
- [x] User authentication (JWT + bcrypt, HTTP-only cookies)
- [x] Admin CMS panel with sidebar navigation
- [x] News management (CRUD + publish/unpublish)
- [x] Blog management (CRUD + publish/unpublish)
- [x] Events management (CRUD + publish/unpublish + featured toggle)
- [x] File upload manager (upload, copy path, delete)
- [x] Frontend pages updated to read from database with fallback content

## Database Schema

| Table  | Purpose                    | Key Fields                                                       |
| ------ | -------------------------- | ---------------------------------------------------------------- |
| users  | Admin accounts             | id, name, email, password (bcrypt), role, createdAt              |
| news   | News articles              | id, title, slug, excerpt, content, category, imageUrl, published |
| blogs  | Blog posts                 | id, title, slug, excerpt, content, authorName, authorRole, tags, published |
| events | Upcoming/past events       | id, title, slug, description, eventDate, eventTime, location, eventType, featured, published |
| files  | Uploaded file metadata     | id, filename, originalName, mimeType, size, path, uploadedBy     |

## Admin Access

- **Login URL**: `/admin/login`
- **Default credentials**: `admin@folmadi.org` / `admin123`
- **Seed endpoint**: POST `/api/auth/seed` (creates first admin user)

## API Routes

| Route                   | Methods           | Auth Required |
| ----------------------- | ----------------- | ------------- |
| `/api/auth/login`       | POST              | No            |
| `/api/auth/logout`      | POST              | No            |
| `/api/auth/seed`        | POST              | No            |
| `/api/news`             | GET, POST, PUT, DEL | Write ops require auth |
| `/api/blogs`            | GET, POST, PUT, DEL | Write ops require auth |
| `/api/events`           | GET, POST, PUT, DEL | Write ops require auth |
| `/api/files`            | GET, POST, DEL    | Yes           |

## Current Structure

| File/Directory                 | Purpose                    | Status   |
| ------------------------------ | -------------------------- | -------- |
| `src/app/page.tsx`             | Home page                  | ✅ Ready |
| `src/app/layout.tsx`           | Root layout                | ✅ Ready |
| `src/app/globals.css`          | Global styles              | ✅ Ready |
| `src/db/schema.ts`             | Database tables            | ✅ Ready |
| `src/db/index.ts`              | Database client            | ✅ Ready |
| `src/lib/auth.ts`              | Auth helpers (JWT/bcrypt)  | ✅ Ready |
| `src/lib/utils.ts`             | Slug/format utilities      | ✅ Ready |
| `src/app/admin/`               | Admin CMS (7 pages)        | ✅ Ready |
| `src/app/api/`                 | API routes (7 endpoints)   | ✅ Ready |
| `src/app/news-and-events/`     | Frontend content pages     | ✅ DB-connected |
| `.kilocode/`                   | AI context & recipes       | ✅ Ready |

## Session History

| Date       | Changes |
| ---------- | ------- |
| Initial    | Template created with base setup |
| 2026-03-01 | Cloned FOLMADI Nigeria homepage — Header, HeroBanner, ImpactStats, Footer, brand colors (terracotta #c0613a), Oswald + Lato + Nunito fonts |
| 2026-03-28 | Added custom 404 not-found page. Installed `clsx`. |
| 2026-03-28 | Full admin CMS: Drizzle + SQLite database, JWT auth (bcrypt), admin panel with news/blogs/events/file management, API CRUD routes, frontend pages connected to DB with fallback content |
