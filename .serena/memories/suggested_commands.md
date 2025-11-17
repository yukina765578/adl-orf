# Suggested Commands

## Development Commands

### Start Development Server
```bash
npm start
```
- Runs the app in development mode
- Opens at http://localhost:3000
- Hot reloading enabled

### Run Tests
```bash
npm test
```
- Launches test runner in interactive watch mode
- Uses Jest and React Testing Library

### Build for Production
```bash
npm run build
```
- Creates optimized production build in `build/` directory
- Minified and optimized

### Build Functions (if using Netlify)
```bash
npm run build:functions
```
- Compiles TypeScript functions using tsconfig.functions.json

## Deployment Commands

### Full Deployment to GitHub Pages
```bash
npm run deploy
```
- Executes: rm -rf docs → build → mv build docs → git add/commit/push
- Deploys to https://yukina765578.github.io/adl-orf/

### Individual Deployment Steps
```bash
npm run rm      # Remove old docs directory
npm run build   # Build production bundle
npm run mv      # Move build to docs
npm run git     # Git add, commit, and push to master
```

## Git Commands (Linux)
```bash
git status                    # Check repository status
git add .                     # Stage all changes
git commit -m "message"       # Commit with message
git push origin <branch>      # Push to remote branch
git checkout <branch>         # Switch branches
git log                       # View commit history
```

## System Commands (Linux)
```bash
ls              # List files/directories
cd <path>       # Change directory
pwd             # Print working directory
cat <file>      # View file contents
grep <pattern>  # Search for pattern
find <path>     # Find files
```

## NPM Commands
```bash
npm install                # Install dependencies
npm install <package>      # Install specific package
npm update                 # Update packages
npm list                   # List installed packages
```

## TypeScript
- TypeScript compilation is handled by react-scripts
- No need to run `tsc` manually for source code
- Strict mode is enabled
