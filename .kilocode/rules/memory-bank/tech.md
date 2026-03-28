# Technical Context: FOLMADI Nigeria Website

## Technology Stack

| Technology            | Version | Purpose                         |
| --------------------- | ------- | ------------------------------- |
| Next.js               | 16.x    | React framework with App Router |
| React                 | 19.x    | UI library                      |
| TypeScript            | 5.9.x   | Type-safe JavaScript            |
| Tailwind CSS          | 4.x     | Utility-first CSS               |
| Drizzle ORM           | 0.45.x  | Database ORM (SQLite)           |
| @kilocode/app-builder-db | latest | SQLite database driver          |
| bcryptjs              | 3.x     | Password hashing                |
| jsonwebtoken          | 9.x     | JWT authentication              |
| lucide-react          | 0.575.x | Icon library                    |
| clsx                  | 2.x     | Class name utility              |
| Bun                   | Latest  | Package manager & runtime       |

## Development Environment

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (for compatibility)

### Commands

```bash
bun install        # Install dependencies
bun build          # Production build
bun lint           # Run ESLint
bun typecheck      # Run TypeScript type checking
bun db:generate    # Generate database migrations
bun db:migrate     # Run migrations (sandbox only)
```

**Never run `bun dev`** — the sandbox handles this automatically.

## Database

### Schema Tables

- **users** — Admin accounts (id, name, email, password, role, createdAt)
- **news** — News articles (id, title, slug, excerpt, content, category, imageUrl, readTime, published, timestamps)
- **blogs** — Blog posts (id, title, slug, excerpt, content, authorName, authorRole, imageUrl, tags, readTime, published, timestamps)
- **events** — Events (id, title, slug, description, eventDate, eventTime, location, eventType, imageUrl, ctaText, ctaColor, featured, published, timestamps)
- **files** — Uploaded files (id, filename, originalName, mimeType, size, path, uploadedBy, createdAt)

### Migration Files

```
src/db/
├── schema.ts        # Table definitions
├── index.ts         # Database client
├── migrate.ts       # Migration runner
└── migrations/      # Generated SQL migrations
```

## Authentication

- JWT tokens stored in HTTP-only cookies
- bcrypt password hashing (10 rounds)
- Token expiry: 24 hours
- Cookie name: `admin_token`
- **Auth library**: `src/lib/auth.ts`

## File Uploads

- Stored in `public/uploads/`
- Unique filenames generated (timestamp + random string)
- Metadata tracked in `files` database table
- Max size: browser default (no server-side limit configured)

## Project Configuration

### Next.js Config (`next.config.ts`)
- App Router enabled
- Default settings

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- Path alias: `@/*` → `src/*`
- Target: ESNext

### Tailwind CSS 4 (`postcss.config.mjs`)
- Uses `@tailwindcss/postcss` plugin
- CSS-first configuration (v4 style)

### ESLint (`eslint.config.mjs`)
- Uses `eslint-config-next`
- Flat config format

### Drizzle (`drizzle.config.ts`)
- SQLite dialect
- Schema: `./src/db/schema.ts`
- Migrations output: `./src/db/migrations`

## File Structure

```
/
├── drizzle.config.ts       # Drizzle ORM config
├── package.json
├── public/
│   └── uploads/            # User-uploaded files
├── src/
│   ├── app/
│   │   ├── admin/          # Admin CMS pages
│   │   │   ├── layout.tsx  # Admin sidebar layout
│   │   │   ├── login/      # Admin login
│   │   │   ├── dashboard/  # Admin dashboard
│   │   │   ├── news/       # News management
│   │   │   ├── blogs/      # Blog management
│   │   │   ├── events/     # Event management
│   │   │   └── files/      # File manager
│   │   ├── api/            # API routes
│   │   │   ├── auth/       # Login/logout/seed
│   │   │   ├── news/       # News CRUD
│   │   │   ├── blogs/      # Blogs CRUD
│   │   │   ├── events/     # Events CRUD
│   │   │   └── files/      # Files upload/delete
│   │   ├── news-and-events/ # Public content pages
│   │   └── ...             # Other public pages
│   ├── components/         # Shared components
│   ├── db/                 # Database (schema, client, migrations)
│   └── lib/                # Utilities (auth, helpers)
```

## Environment Variables

| Variable    | Purpose            | Default                        |
| ----------- | ------------------ | ------------------------------ |
| JWT_SECRET  | JWT signing secret | `folmadi-secret-key-...`       |
| DB_URL      | Database URL       | Provided by sandbox            |
| DB_TOKEN    | Database token     | Provided by sandbox            |

## Browser Support

- Modern browsers (ES2020+)
- No IE11 support
