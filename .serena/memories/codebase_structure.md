# Codebase Structure

## Root Directory
```
/
├── src/                 # Source code
├── public/             # Public assets
├── build/              # Production build output
├── docs/               # GitHub Pages deployment directory
├── node_modules/       # Dependencies
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript configuration
└── README.md          # Documentation
```

## Source Directory (src/)
```
src/
├── App.tsx                    # Main app component with Router, ChakraProvider
├── index.tsx                  # Entry point
├── App.css / index.css       # Global styles
│
├── page/                     # Page components
│   ├── Home/                 # Home page
│   ├── Lounge/               # Lounge page (modals 1-10)
│   ├── Atelier1/             # Atelier1 page (modals 15-19)
│   ├── Atelier2/             # Atelier2 page (modals 11-14)
│   └── loading.tsx           # Loading component
│
├── global/                   # Global components and routing
│   ├── Routes.tsx            # Route definitions
│   └── components/           # Shared components
│       ├── Navigation.tsx    # Main navigation
│       ├── NavigationButton.tsx
│       ├── NavigationLeft.tsx
│       ├── NavigationRight.tsx
│       ├── Header.tsx        # Main header
│       ├── PageHeader.tsx    # Page-specific header
│       ├── LogoHeader.tsx    # Logo component
│       ├── Modal.tsx         # Modal component
│       ├── HomeButton.tsx    # Home navigation button
│       ├── BackButton.tsx    # Back navigation button
│       ├── NaviLink.tsx      # Navigation link component
│       ├── OpenFade.tsx      # Fade animation component
│       ├── Overlay.tsx       # Overlay component
│       ├── Preload.tsx       # Preloader component
│       └── maps/             # Map components for each space
│           ├── Atelier1Map.tsx
│           ├── Atelier2Map.tsx
│           └── LoungeMap.tsx
│
├── image/                    # Image assets
│   ├── *.png                 # Various images
│   └── ModalImage/           # Images for modals
│
├── notion/                   # Notion/data related
│   ├── types.ts              # Type definitions (PopupContent, etc.)
│   ├── api.ts                # API functions
│   └── imageUtils.ts         # Image utility functions
│
├── storage/                  # Local storage management
│   └── localStorageService.ts
│
├── types/                    # Type definitions
│   └── env.d.ts              # Environment type definitions
│
├── utils/                    # Utility functions
│   └── env.ts                # Environment utilities
│
└── fonts/                    # Custom font files
    └── NotoSerifJP-*.otf
```

## Routing Structure
- `/adl-orf` - Home page
- `/adl-orf/lounge` - Lounge page
- `/adl-orf/atelier1` - Atelier1 page
- `/adl-orf/atelier2` - Atelier2 page

## Key Components
- **App.tsx**: Main app with Router, theme provider, loading, header, and routes
- **Routes.tsx**: Handles routing and modal state management
- **Navigation components**: Fixed navigation UI elements
- **Map components**: Interactive maps for each space
- **Modal.tsx**: Reusable modal for displaying content
