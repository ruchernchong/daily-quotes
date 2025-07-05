# Daily Quotes

A cross-platform application for daily inspiration through curated quotes. Built with React Native (mobile) and React (web) in a pnpm monorepo.

## 🌟 Features

- **Daily Quotes**: Get a new inspirational quote each day
- **Random Quotes**: Access 200+ curated quotes from various authors
- **Favorites**: Save your favorite quotes for quick access
- **Themes**: Light and dark mode support
- **Cross-Platform**: Native mobile apps (iOS/Android) and web application

## 🏗️ Architecture

### Monorepo Structure
```
daily-quotes/
├── apps/
│   ├── web/           # React web app (marketing site)
│   └── mobile/        # React Native + Expo mobile app
├── packages/          # Shared packages (currently empty)
├── biome.json         # Code quality configuration
└── pnpm-workspace.yaml
```

### Technology Stack
- **Web App**: React 19, Vite, Tailwind CSS v4, React Router, Framer Motion
- **Mobile App**: React Native, Expo, Expo Router, AsyncStorage
- **Icons**: Lucide (consistent across platforms)
- **Monorepo**: pnpm workspaces
- **Code Quality**: Biome (linting & formatting)
- **Type Safety**: TypeScript throughout

## 🚀 Quick Start

### Prerequisites
- Node.js (18+)
- pnpm
- For mobile development: Expo CLI and mobile development setup

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd daily-quotes

# Install all dependencies
pnpm install
```

### Development

#### Web App
```bash
# Start development server
pnpm --filter @dailyquotes/web dev

# Build for production
pnpm --filter @dailyquotes/web build
```

#### Mobile App
```bash
# Start Expo development server
pnpm --filter @dailyquotes/mobile start

# Run on specific platforms
pnpm --filter @dailyquotes/mobile ios
pnpm --filter @dailyquotes/mobile android
pnpm --filter @dailyquotes/mobile web
```

### Code Quality
```bash
# Run Biome checks on all apps
pnpm biome check .

# Auto-fix issues
pnpm biome check --write .

# App-specific linting
pnpm --filter @dailyquotes/web lint
pnpm --filter @dailyquotes/mobile lint
```

## 📱 Applications

### Mobile App (@dailyquotes/mobile)
- **Framework**: React Native + Expo
- **Features**: Random quotes, daily quotes, favorites, theme switching
- **Storage**: AsyncStorage for local data persistence
- **Navigation**: Expo Router with file-based routing
- **Icons**: Lucide React Native

### Web App (@dailyquotes/web)
- **Framework**: React 19 + Vite
- **Purpose**: Marketing site and web presence
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🛠️ Development Commands

### Root Level
```bash
pnpm install                 # Install all dependencies
pnpm biome check .          # Check code quality
pnpm biome check --write .  # Auto-fix issues
```

### Web App
```bash
pnpm --filter @dailyquotes/web dev      # Development server
pnpm --filter @dailyquotes/web build    # Production build
pnpm --filter @dailyquotes/web lint     # Lint code
pnpm --filter @dailyquotes/web format   # Format code
```

### Mobile App
```bash
pnpm --filter @dailyquotes/mobile start     # Start Expo dev server
pnpm --filter @dailyquotes/mobile ios       # Run on iOS
pnpm --filter @dailyquotes/mobile android   # Run on Android
pnpm --filter @dailyquotes/mobile lint      # Lint code
```

## 📊 Project Stats

- **200+ Quotes**: Curated from various authors and sources
- **Cross-Platform**: iOS, Android, and Web
- **TypeScript**: 100% type-safe codebase
- **Modern Tools**: Latest React, Expo, and Vite versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm biome check --write .` to ensure code quality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Web App**: [Production URL]
- **Mobile App**: Available on App Store and Google Play (coming soon)
- **Repository**: [GitHub Repository URL]

---

Built with ❤️ using React, React Native, and Expo