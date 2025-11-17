# Task Completion Checklist

When completing a coding task, ensure the following:

## 1. Code Quality
- [ ] TypeScript types are correct and no `any` types used unnecessarily
- [ ] Component props have proper interfaces defined
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] Code follows project conventions (see code_style_conventions.md)

## 2. Testing (if applicable)
- [ ] Run tests: `npm test`
- [ ] Ensure all existing tests still pass
- [ ] Add new tests for new functionality (if needed)

## 3. Build Verification
- [ ] Run production build: `npm run build`
- [ ] Verify build completes without errors
- [ ] Check for any warnings that should be addressed

## 4. Local Testing
- [ ] Test in development mode: `npm start`
- [ ] Verify functionality works as expected
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Check that navigation works correctly
- [ ] Verify modals display properly (if modified)

## 5. Git Workflow
- [ ] Stage changes: `git add .`
- [ ] Commit with descriptive message: `git commit -m "description"`
- [ ] Current branch is usually: `feature/page-title` or feature branch
- [ ] Main branch is: `master`
- [ ] Push to appropriate branch: `git push origin <branch-name>`

## 6. Code Review Checklist
- [ ] No console.log() statements left in code (unless intentional)
- [ ] Imports are organized properly
- [ ] Unused imports removed
- [ ] Component structure is clean and readable
- [ ] Responsive design considerations addressed
- [ ] Accessibility considerations (if applicable)

## 7. Deployment Considerations
- [ ] If ready to deploy: `npm run deploy` (builds and pushes to GitHub Pages)
- [ ] Verify changes work with base path `/adl-orf`
- [ ] Check that assets load correctly on GitHub Pages

## Common Issues to Watch For
- **Routing**: All routes must include `/adl-orf` base path
- **Images**: Verify image paths work in production build
- **Modal Navigation**: Ensure modal numbers align with correct pages (1-10: Lounge, 11-14: Atelier2, 15-19: Atelier1)
- **TypeScript Strict Mode**: All type errors must be resolved
- **Mobile Responsiveness**: Test viewport issues, especially for fixed/sticky elements
- **Header Height**: Many components depend on `headerHeight` prop for positioning

## Before Deployment
- [ ] All changes committed and pushed
- [ ] Production build tested locally
- [ ] No breaking changes to existing functionality
- [ ] README.md updated if needed
