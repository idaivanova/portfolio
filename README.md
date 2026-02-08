# Portfolio Website

A modern, fast React SPA built with [Bun](https://bun.sh) - the all-in-one JavaScript runtime.

## Tech Stack

| Category | Tool |
|----------|------|
| **Runtime** | [Bun](https://bun.sh) - Runtime, package manager, bundler, and test runner |
| **Framework** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **API** | [Hono](https://hono.dev) - Lightweight web framework |
| **Utilities** | clsx + tailwind-merge |

## Why Bun?

This project uses Bun's native toolchain instead of separate tools:

- **Bun Runtime** - Execute TypeScript directly without build steps
- **Bun Bundler** - Production builds with `Bun.build()`
- **Bun Package Manager** - Fast installs with `bun install`
- **Bun Test Runner** - Jest-compatible testing with `bun test`
- **Bun Dev Server** - Hot reload with `Bun.serve()`

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed (`curl -fsSL https://bun.sh/install | bash`)

### Installation

```bash
# Install dependencies (uses bun.lock exclusively)
bun install
```

### Development

```bash
# Start development server with hot reload
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

**API endpoints available:**
- `GET http://localhost:3000/api/health` - Health check
- `GET http://localhost:3000/api/version` - Version info

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit.

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run typecheck` | Run TypeScript type checking |
| `bun test` | Run tests once |
| `bun run test:watch` | Run tests in watch mode |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Fix ESLint issues |

## Project Structure

```
my-app/
├── src/                    # Source code
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Root component
│   ├── styles.css         # Tailwind + global styles
│   ├── components/        # React components
│   │   ├── ui/           # Base UI components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── lib/              # Utilities
│   │   └── utils.ts      # cn() helper
│   ├── data/             # Static data
│   └── __tests__/        # Test files
├── public/               # Static assets
├── dev.ts                # Bun dev server with Hono API
├── build.ts              # Bun production build script
├── index.html            # HTML template
├── package.json          # Dependencies (Bun native)
├── tsconfig.json         # TypeScript config
├── eslint.config.js      # ESLint config
└── bun.lock              # Bun lockfile
```

## Key Features

### 🏎️ Fast Development
- **Bun's dev server** with hot reload
- TypeScript transpilation on-the-fly
- CSS handled automatically

### 📦 Production Build
- Code splitting enabled
- Minification with source maps
- Static file generation

### 🧪 Testing
- Bun's built-in test runner (Jest-compatible)
- Watch mode support
- TypeScript-first

### 🔌 API Routes (Hono)
Simple API endpoints powered by Hono:

```typescript
// Add new endpoints in dev.ts
const api = new Hono()
  .get('/health', (c) => c.json({ status: 'ok' }))
  .get('/my-endpoint', (c) => c.json({ data: [] }));
```

### 🎨 Styling
- Tailwind CSS v4 with PostCSS
- `cn()` utility for conditional classes
- CSS imports in TypeScript

## Learn More

- [Bun Documentation](https://bun.sh/docs) - Bun features and API
- [React Documentation](https://react.dev) - React 19 features
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind v4
- [Hono Documentation](https://hono.dev) - API framework
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - TypeScript

## Deployment

Build output goes to `dist/` directory:

```bash
bun run build
```

The `dist/` folder contains:
- `index.html` - Entry HTML
- `main.js` - Bundled JavaScript
- `*.css` - Styles (if extracted)

Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
