# Project Overview: ADL-ORF

## Purpose
This is a React-based single-page application (SPA) for the ADL (Advanced Design Lab) ORF (Open Research Forum) event. It provides an interactive virtual tour of the lab spaces with drawer-based content navigation containing information about research projects and members.

## Key Features
- Interactive virtual tour of lab spaces (Lounge, Atelier1, Atelier2)
- **Drawer-based content system** (19 numbered drawers) with single instance architecture
  - Single PopupDrawer component that displays different content based on currentModal state
  - Bottom drawer with full viewport height
  - Integrated navigation (prev/next) within drawer
- Automatic page navigation based on drawer/modal number:
  - Modals 1-10: Lounge
  - Modals 11-14: Atelier2
  - Modals 15-19: Atelier1
- Interactive popup buttons with pulsing animation to trigger drawers
- Scroll indicator button for navigating to 2F section
- Sticky header with navigation
- Mobile-responsive design
- Japanese language content

## UI Architecture
- **Single Instance Drawer**: One PopupDrawer component instance that updates its content dynamically
- **PopupButton**: Position-responsive buttons with animated pulse effect
- **ScrollDownButton**: Animated scroll indicator with "2F" label and chevron

## Deployment
- Deployed to GitHub Pages at: https://yukina765578.github.io/adl-orf/
- Uses custom deployment script that builds and pushes to master branch
