export default {
  // Root level files
  "*.{js,ts,jsx,tsx,json,md}": ["biome check --write"],

  // Web app files
  "apps/web/**/*.{js,ts,jsx,tsx,json,css}": [
    "pnpm --filter @dailyquotes/web check:fix",
  ],

  // Mobile app files
  "apps/mobile/**/*.{js,ts,jsx,tsx,json}": [
    "pnpm --filter @dailyquotes/mobile check:fix",
  ],
};
