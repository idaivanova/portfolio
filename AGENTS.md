# OpenCode Agent Guidelines

## Project Overview
- **Project Name**: Portfolio Website
- **Tech Stack**: Bun, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Hono

## Key Conventions

### Tech Stack Preferences
- Use **Bun** as the runtime, package manager, bundler, and test runner
- Use **Tailwind CSS 4** for styling (not CSS modules or styled-components)
- Use **clsx + tailwind-merge** for conditional classes (via `cn()` utility)
- Use **Framer Motion** for animations

### File Structure
```
src/
├── main.tsx           # React entry point
├── App.tsx            # Root component
├── styles.css         # Tailwind + global styles
├── components/        # React components
│   ├── ui/           # Base UI components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── lib/              # Utilities
│   └── utils.ts      # cn() helper
├── data/             # Static data
└── __tests__/        # Test files
```

### Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun test` - Run tests
- `bun run lint` - Run ESLint

### API Routes
- Add API routes in `dev.ts` using Hono
- Endpoints available at `/api/*`

## When to Use MCPs
- **context7**: Look up React, Tailwind, Framer Motion docs
- **playwright**: For E2E testing
- **filesystem**: For reading/writing multiple files
- **sequential-thinking**: For complex problem-solving

## Code Style
- Use TypeScript with strict typing
- Follow existing component patterns in `src/components/`
- Use functional components with hooks
- Prefer composition over inheritance
