# Code Style and Conventions

## File Naming
- React components: PascalCase (e.g., `Navigation.tsx`, `Modal.tsx`)
- Utilities: camelCase (e.g., `imageUtils.ts`, `env.ts`)
- Types: camelCase with .ts extension (e.g., `types.ts`)
- Directories: camelCase or lowercase (e.g., `global/`, `page/`)

## Component Style

### Functional Components
Prefer functional components with hooks:
```typescript
const ComponentName = () => {
    // hooks and logic
    return (
        // JSX
    )
}
export default ComponentName
```

Or with React.FC for typed props:
```typescript
interface ComponentProps {
    propName: type;
}

const ComponentName: React.FC<ComponentProps> = ({ propName }) => {
    return (
        // JSX
    )
}
```

### Props Interfaces
- Use `interface` for prop types
- Name with component name + "Props" suffix (e.g., `appRoutesProps`)
- Use camelCase for prop names

## TypeScript Usage
- **Strict mode enabled** - all strict checks are on
- Use explicit types for function parameters and component props
- Type inference is acceptable for local variables and return types
- Use `React.FC<PropsType>` or explicit prop destructuring with types

## Import Organization
1. React imports first
2. Third-party library imports (Chakra UI, etc.)
3. Local component imports
4. Utility/type imports

Example:
```typescript
import React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import NaviLink from './NaviLink';
import { useLocation } from 'react-router-dom';
```

## Styling Approach
- Primary: Chakra UI components with props-based styling
- Inline style objects for custom styles:
```typescript
const boxStyle = {
    position: 'fixed',
    bottom: 0,
    // ...
}
```
- Use `sx` prop for Chakra components when needed
- CSS files exist but prefer component-based styling

## Naming Conventions
- **Components**: PascalCase (e.g., `Navigation`, `PageHeader`)
- **Variables/Functions**: camelCase (e.g., `currentModal`, `handleNextModal`)
- **Constants**: camelCase or UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase (e.g., `PopupContent`, `appRoutesProps`)
- **Event Handlers**: `handle` prefix (e.g., `handleNextModal`, `handlePrevModal`)
- **State Setters**: `set` prefix (e.g., `setCurrentModal`, `setData`)

## State Management
- Use React hooks (`useState`, `useEffect`)
- Props drilling for shared state
- No global state management library (Redux, etc.)

## Routing
- Use React Router v6 syntax
- Route paths include `/adl-orf` base path
- Pass state via `navigate()` with `state` option when needed

## Comments
- Minimal inline comments in current codebase
- Self-documenting code preferred
- Add comments for complex logic or non-obvious behavior

## Code Formatting
- No explicit formatter config (Prettier/ESLint rules)
- Follows Create React App defaults
- 4-space indentation appears to be used
- Single quotes for strings in some files, but not enforced

## Testing
- Test files: `*.test.tsx` or `*.test.ts`
- Use React Testing Library
- Co-locate tests with components when possible
