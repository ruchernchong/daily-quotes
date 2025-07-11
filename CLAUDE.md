# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pnpm monorepo containing a Daily Quotes application with two main apps:
- **Web App**: React + Vite + Tailwind CSS marketing site
- **Mobile App**: React Native + Expo cross-platform mobile app

## Project Structure

```
daily-quotes/
├── apps/
│   ├── web/           # React web app (marketing site)
│   └── mobile/        # React Native + Expo mobile app
├── packages/          # Shared packages (currently empty)
└── pnpm-workspace.yaml
```

## Common Commands

### Root Level (pnpm workspace)
```bash
# Install all dependencies
pnpm install

# Run commands for specific workspace
pnpm --filter @dailyquotes/web <command>
pnpm --filter @dailyquotes/mobile <command>
```

### Web App (apps/web)
```bash
# Development
pnpm dev

# Build
pnpm build

# Type check and build
tsc -b && vite build

# Lint
pnpm lint

# Lint with auto-fix
pnpm lint:fix

# Format
pnpm format

# Format with write
pnpm format:write

# Check (lint + format)
pnpm check

# Check with auto-fix
pnpm check:fix

# Preview production build
pnpm preview
```

### Mobile App (apps/mobile)
```bash
# Start development server
pnpm start

# Start with Expo Go
pnpm start:go

# Run on iOS simulator
pnpm ios

# Run on Android emulator
pnpm android

# Run on web
pnpm web

# Lint
pnpm lint

# Lint with auto-fix
pnpm lint:fix

# Format
pnpm format

# Format with write
pnpm format:write

# Check (lint + format)
pnpm check

# Check with auto-fix
pnpm check:fix
```

## Architecture

### Web App
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM with browser router
- **Structure**: Marketing site with homepage and privacy policy
- **Components**: Functional components with hooks
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Linting**: Biome (replaces ESLint)

### Mobile App
- **Framework**: React Native with Expo (file-based routing)
- **Routing**: Expo Router with Stack navigation
- **State Management**: React hooks (useState, useEffect)
- **Styling**: StyleSheet with theme support (light/dark)
- **Data**: Local quotes array in `lib/quotes/quotes.ts`
- **Features**: Random quotes, daily quotes, favorites, theme toggle
- **Fonts**: Custom PlayfairDisplay-Regular font
- **Icons**: Lucide React Native
- **Linting**: Biome (replaces ESLint)

### Shared Data
- Quotes are stored in `apps/mobile/lib/quotes/quotes.ts`
- Each quote has: `{ quote: string, author: string }`
- 200+ inspirational quotes from various authors

## Key Files

### Web App
- `src/pages/Home.tsx` - Main marketing page component
- `src/components/Layout.tsx` - Reusable layout component
- `src/main.tsx` - App entry point with routing
- `src/pages/PrivacyPolicy.tsx` - Privacy policy page
- `src/routes/index.tsx` - Route definitions
- `vite.config.ts` - Vite configuration with React and Tailwind plugins

### Mobile App
- `app/index.tsx` - Main quote display screen
- `app/_layout.tsx` - Root layout with navigation stack
- `app/components/Quote.tsx` - Quote display component
- `app/hooks/` - Custom hooks (useQuote, useFavorites, useNotifications)
- `app/constants/` - Theme and color constants
- `lib/quotes/quotes.ts` - Quote data source

## Development Notes

### Code Style
- TypeScript is used throughout both apps
- Functional components with hooks pattern
- **Biome** configured for linting and formatting (replaced ESLint)
- No tests currently implemented

### Mobile App Features
- Theme switching (light/dark mode)
- Random quote generation
- Daily quote based on current date
- Favorites functionality (using AsyncStorage)
- Push notifications setup
- Custom fonts loaded via expo-font

### Web App Features
- Responsive design with Tailwind CSS
- Marketing site structure
- Privacy policy page
- React Router for navigation

### Build & Deployment
- **Web**: Vite build process, outputs to `dist/`
- **Mobile**: EAS (Expo Application Services) for builds
- **Type Checking**: TypeScript with strict mode

## Code Quality & Tooling

### Biome Configuration
The project uses **Biome** for linting and formatting (configured in `biome.json`):
- **Formatter**: 2-space indentation, 80-character line width, single quotes for JS/TS
- **Linter**: Recommended rules enabled with custom overrides
- **Overrides**: Web app enforces import types, mobile app allows array index keys
- **Commands**: `lint`, `format`, `check` (with auto-fix variants)

### Common Biome Commands
```bash
# Root level (affects all apps)
pnpm biome check .
pnpm biome check --write .

# App-specific
pnpm --filter @dailyquotes/web lint
pnpm --filter @dailyquotes/mobile format:write
```

## Monorepo Management

This project uses pnpm workspaces. When adding dependencies:
- Use `pnpm add <package>` in the specific app directory
- Or use `pnpm --filter @dailyquotes/web add <package>` from root
- Shared packages should go in `packages/` directory

## Mobile Development

The mobile app uses Expo with development builds. Key points:
- Uses file-based routing with Expo Router
- Supports iOS, Android, and web platforms
- Custom fonts require expo-font
- Uses AsyncStorage for local data persistence
- Configured for EAS builds and submissions