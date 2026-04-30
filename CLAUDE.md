# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based web application called "Boredom Buster" that helps users discover interesting websites based on their interests. The app categorizes sites into three main tabs:
- Time Pass: Fun, entertaining websites
- Student: Educational and knowledge-building sites
- Builder: Resources for developers and creators

## Common Development Commands

### Development
```bash
npm run dev
```
Starts the development server on port 3000

### Building
```bash
npm run build
```
Builds the production version of the app

### Preview
```bash
npm run preview
```
Previews the built application locally

### Type Checking
```bash
npm run lint
```
Runs TypeScript type checking without emitting files

### Cleaning
```bash
npm run clean
```
Removes the dist directory

## Codebase Architecture

### Core Structure
- `src/main.tsx` - Entry point, sets up React and routing
- `src/App.tsx` - Main application component with routing logic
- `src/index.css` - Global styles and Tailwind configuration
- `src/data/sites.ts` - Contains all website data categorized by type
- `vite.config.ts` - Vite build configuration

### Key Components in App.tsx

1. **TopHeader** - Universal header component with title
2. **SideNav** - Desktop navigation sidebar
3. **BottomNav** - Mobile navigation bar
4. **LandingPage** - Initial "I am bored" landing page
5. **PickYourVibe** - Category selection interface
6. **RecommendationCanvas** - Site recommendation display
7. **App** - Main application router and state management

### Data Structure
The `sites.ts` file contains an array of Site objects with:
- name: Site title
- domain: Website domain
- url: Full URL to the site
- description: Brief description of what the site offers
- tab: Category ("timepass", "student", or "builder")

### Routing
The app uses React Router with the following paths:
- `/` - Landing page with "I am bored" button
- `/app` - Category selection view
- `/app/:tab` - Specific category view with site recommendations

### Styling
- Uses Tailwind CSS with custom configuration
- Custom fonts: Barlow Condensed, Nunito, DM Sans, Be Vietnam Pro
- Custom animations and interactive elements
- Responsive design for both desktop and mobile

## Key Technical Details

### State Management
- Uses React useState and useEffect for client-side state
- Tracks current tab, selected site, and last viewed domain
- Implements site recommendation logic with no-repeat functionality

### Animation Library
- Uses Framer Motion for smooth transitions and animations
- AnimatedPresence for page transitions
- Custom CSS animations for interactive elements

### Favicons
- Uses Google's favicon service to fetch site icons
- Function: `getFaviconUrl(domain, size)` in `sites.ts`

### Main Dependencies
- React 18+ with Vite
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

## Development Guidelines

### Adding New Sites
To add new sites to the data:
1. Edit `src/data/sites.ts`
2. Add new Site objects to the appropriate category array
3. Follow the existing pattern for consistency

### Site Interface
```typescript
interface Site {
  name: string;
  domain: string;
  url: string;
  description: string;
  tab: "timepass" | "student" | "builder";
}
```

### Component Architecture
The main App component handles all the routing and state management logic for:
- Navigation between app views
- Site selection and recommendation
- Category switching
- Surprise me functionality

### Styling System
The app uses a custom class-based styling system with:
- Tailwind utility classes
- Custom CSS variables for consistent design system
- Material Symbols for icons
- Responsive design patterns

## Common Tasks for Claude Code

### When Adding New Sites
1. Update the `sites` array in `src/data/sites.ts`
2. Follow the existing data structure
3. Ensure sites are categorized appropriately

### When Modifying Components
- Components are in `src/App.tsx`
- Each component is self-contained with clear props
- Follow existing patterns for consistency

### When Working with Styles
- Global styles in `src/index.css`
- Uses CSS variables for consistent theming
- Tailwind classes for utility styling
- Custom animations and interactive states