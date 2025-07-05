# Daily Quotes Web App

The web application for Daily Quotes - a marketing site and web presence built with React 19, Vite, and Tailwind CSS.

## 🌟 Features

- **Marketing Site**: Beautiful landing page showcasing the Daily Quotes mobile app
- **Privacy Policy**: Comprehensive privacy policy page
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth interactions powered by Framer Motion
- **Dark/Light Mode**: Supports system preferences and manual theme switching

## 🛠️ Tech Stack

- **React 19**: Latest React with modern hooks and concurrent features
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS v4**: Utility-first CSS framework
- **TypeScript**: Full type safety throughout the application
- **React Router DOM**: Client-side routing with browser router
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Beautiful, customizable icons
- **Biome**: Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js (18+)
- pnpm

### Installation
```bash
# From project root
pnpm install

# Or install web app dependencies only
cd apps/web
pnpm install
```

### Development
```bash
# Start development server
pnpm dev

# Start with hot reload on http://localhost:5173
```

### Build
```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📝 Available Scripts

```bash
# Development
pnpm dev                # Start development server

# Building
pnpm build             # Build for production
pnpm preview           # Preview production build

# Code Quality
pnpm lint              # Run Biome linter
pnpm lint:fix          # Run linter with auto-fix
pnpm format            # Format code with Biome
pnpm format:write      # Format and write changes
pnpm check             # Run both linting and formatting
pnpm check:fix         # Run checks with auto-fix
```

## 📁 Project Structure

```
apps/web/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Layout.tsx     # Main layout component
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page
│   │   └── PrivacyPolicy.tsx # Privacy policy page
│   ├── routes/            # Route definitions
│   │   └── index.tsx      # Route configuration
│   ├── assets/            # Static assets
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── public/                # Static files
│   ├── icons/             # PWA icons
│   ├── manifest.json      # PWA manifest
│   └── favicon.ico        # Favicon
├── dist/                  # Build output
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Styling

### Tailwind CSS v4
The application uses Tailwind CSS v4 with:
- Custom design system and color palette
- Responsive breakpoints for mobile-first design
- Dark mode support via CSS variables
- Typography plugin for rich text content

### Framer Motion
Animations are implemented using Framer Motion:
- Page transitions
- Component entrance animations
- Hover and focus states
- Scroll-triggered animations

## 🔧 Configuration

### Vite Configuration
- React plugin for JSX support
- Tailwind CSS integration
- TypeScript support
- Hot module replacement

### TypeScript
- Strict type checking enabled
- Path aliases for clean imports
- React 19 type definitions

### Biome
- ESLint-style linting rules
- Prettier-style formatting
- Import sorting
- TypeScript-specific rules

## 📱 Responsive Design

The web app is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
The app is configured for Vercel deployment:
```bash
# Deploy to production
vercel --prod

# Preview deployment
vercel
```

### Other Platforms
Build the app and deploy the `dist/` folder:
```bash
pnpm build
# Deploy contents of dist/ folder
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with tree-shaking
- **Loading Speed**: Fast initial load with code splitting
- **SEO**: Optimized meta tags and semantic HTML

## 🤝 Contributing

1. Follow the existing code style
2. Run `pnpm check:fix` before committing
3. Ensure responsive design works on all devices
4. Test both light and dark modes
5. Verify accessibility standards

## 📄 License

This project is part of the Daily Quotes monorepo and follows the same MIT License.

---

Built with ❤️ using React, Vite, and Tailwind CSS