# Tech Stack

## Core Framework
- **React** (v18.3.1) with TypeScript (v4.9.5)
- **Create React App** (v5.0.1) - bootstrapped project
- **React Router DOM** (v6.19.0) - client-side routing

## UI Framework
- **Chakra UI** (v2.8.2) - component library
- **Emotion** (v11.11.x) - CSS-in-JS styling
- **Framer Motion** (v10.16.5) - animations

## Fonts
- Fontsource: Crimson Pro, Noto Serif JP, Source Sans Pro
- Custom font files in src/fonts/ directory

## Data Layer
- **Local Storage** - currently using browser local storage for data
- Previously used Notion API (@notionhq/client) but replaced with dummy/local data

## Build Tools
- TypeScript compiler with strict mode enabled
- React Scripts for build, test, and development
- ESLint (react-app config)

## Testing
- Jest and React Testing Library
- @testing-library/react (v13.4.0)
- @testing-library/user-event (v13.5.0)
- @testing-library/jest-dom (v5.17.0)

## TypeScript Configuration
- Target: ES5
- Module: ESNext
- Strict mode enabled
- Base URL: "src" for absolute imports
- Path aliases: "image/*" maps to "src/image/*"
