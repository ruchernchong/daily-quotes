# Daily Quotes Mobile App

The mobile application for Daily Quotes - a cross-platform app built with React Native and Expo, featuring daily inspiration through curated quotes.

## 🌟 Features

- **Daily Quotes**: Get a new inspirational quote every day based on the date
- **Random Quotes**: Access 200+ carefully curated quotes from various authors
- **Favorites**: Save your favorite quotes with local storage persistence
- **Themes**: Beautiful light and dark mode support
- **Smooth Navigation**: File-based routing with Expo Router
- **Cross-Platform**: Runs natively on iOS, Android, and web

## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and toolchain
- **Expo Router**: File-based routing with Stack navigation
- **TypeScript**: Full type safety throughout the application
- **AsyncStorage**: Local data persistence for favorites
- **Lucide React Native**: Beautiful, customizable icons
- **Expo Font**: Custom font loading (PlayfairDisplay)
- **Biome**: Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js (18+)
- pnpm
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation
```bash
# From project root
pnpm install

# Or install mobile app dependencies only
cd apps/mobile
pnpm install
```

### Development
```bash
# Start Expo development server
pnpm start

# Start with Expo Go (for testing)
pnpm start:go

# Run on specific platforms
pnpm ios        # iOS Simulator
pnpm android    # Android Emulator
pnpm web        # Web browser
```

## 📝 Available Scripts

```bash
# Development
pnpm start          # Start development server (dev client)
pnpm start:go       # Start with Expo Go support
pnpm ios            # Run on iOS simulator
pnpm android        # Run on Android emulator
pnpm web            # Run in web browser

# Code Quality
pnpm lint           # Run Biome linter
pnpm lint:fix       # Run linter with auto-fix
pnpm format         # Format code with Biome
pnpm format:write   # Format and write changes
pnpm check          # Run both linting and formatting
pnpm check:fix      # Run checks with auto-fix
```

## 📁 Project Structure

```
apps/mobile/
├── app/                    # File-based routing
│   ├── _layout.tsx         # Root layout with navigation
│   ├── index.tsx           # Main quote display screen
│   ├── favorites.tsx       # Favorites screen
│   ├── components/         # UI components
│   │   └── Quote.tsx       # Quote display component
│   ├── hooks/              # Custom React hooks
│   │   ├── useQuote.ts     # Quote management hook
│   │   ├── useFavorites.ts # Favorites management hook
│   │   └── useNotifications.ts # Notification setup
│   └── constants/          # App constants
│       ├── Colors.ts       # Color definitions
│       └── Themes.ts       # Theme configuration
├── lib/                    # Shared utilities
│   └── quotes/
│       └── quotes.ts       # Quote data source (200+ quotes)
├── assets/                 # Static assets
│   ├── fonts/              # Custom fonts
│   └── images/             # App icons and images
├── ios/                    # iOS-specific configuration
├── android/                # Android-specific configuration
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Design System

### Themes
The app supports both light and dark themes:
- **Light Theme**: Clean, bright interface
- **Dark Theme**: Easy on the eyes for nighttime reading
- **System Theme**: Follows device preferences

### Typography
- **Primary Font**: PlayfairDisplay-Regular (custom loaded)
- **System Font**: San Francisco (iOS) / Roboto (Android)
- **Responsive**: Scales with device text size settings

### Colors
Defined in `app/constants/Colors.ts`:
- Primary brand colors
- Theme-specific variations
- Accessibility-compliant contrast ratios

## 📱 Features Detail

### Quote Management
- **Daily Quote**: Algorithm generates consistent daily quotes based on date
- **Random Quote**: Shuffle through all available quotes
- **Quote Data**: 200+ inspirational quotes from various authors
- **Storage**: Quotes stored locally in `lib/quotes/quotes.ts`

### Favorites System
- **Local Storage**: Uses AsyncStorage for persistence
- **Cross-Session**: Favorites persist between app launches
- **Management**: Add/remove favorites with intuitive UI

### Navigation
- **File-Based Routing**: Expo Router with automatic route generation
- **Stack Navigation**: Smooth transitions between screens
- **Tab Navigation**: Bottom tabs for main sections

## 🔧 Configuration

### Expo Configuration (`app.json`)
- App metadata and build settings
- Platform-specific configurations
- Asset and font declarations
- Development and production settings

### EAS Build (`eas.json`)
- Build profiles for development and production
- Platform-specific build configurations
- Environment variable handling

### TypeScript
- Strict type checking enabled
- React Native type definitions
- Custom type declarations

## 📱 Platform-Specific Features

### iOS
- Native look and feel
- SF Symbols integration
- iOS-specific splash screens
- App Store optimization

### Android
- Material Design components
- Android-specific icons
- Play Store optimization
- Gradle build configuration

### Web
- Responsive design for web browsers
- PWA capabilities
- Web-specific optimizations

## 🚀 Building & Deployment

### Development Build
```bash
# Install Expo CLI
npm install -g @expo/cli

# Build for development
eas build --profile development --platform ios
eas build --profile development --platform android
```

### Production Build
```bash
# Build for app stores
eas build --profile production --platform ios
eas build --profile production --platform android
```

### Submission
```bash
# Submit to app stores
eas submit --platform ios
eas submit --platform android
```

## 📊 Performance

- **Launch Time**: Optimized for fast startup
- **Memory Usage**: Efficient AsyncStorage usage
- **Bundle Size**: Tree-shaking and code splitting
- **Animations**: Smooth 60fps animations

## 🧪 Testing

Currently no tests are implemented. To add testing:
1. Install Jest and React Native Testing Library
2. Add test scripts to package.json
3. Create test files alongside components
4. Run tests with `pnpm test`

## 🤝 Contributing

1. Follow React Native best practices
2. Use TypeScript for all new code
3. Run `pnpm check:fix` before committing
4. Test on both iOS and Android
5. Ensure accessibility standards
6. Update quotes data responsibly

## 📄 License

This project is part of the Daily Quotes monorepo and follows the same MIT License.

---

Built with ❤️ using React Native, Expo, and TypeScript