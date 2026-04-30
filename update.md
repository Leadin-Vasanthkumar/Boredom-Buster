# Boredom Buster Project Update

### App overview
Boredom Buster is a curated website discovery platform designed to rescue users from digital stagnation. It presents a "toy-box" inspired interface where users can explore interesting corners of the web through three distinct lenses: pure entertainment (Time Pass), effortless learning (Student), and technical inspiration (Builder). The app prioritizes a playful, tactile experience with bouncy interactions and a vibrant, high-contrast aesthetic.

### Tech stack
- **React 19 & Vite** — Core frontend framework and ultra-fast build tool.
- **TypeScript** — Ensures type safety across the site database and component props.
- **Tailwind CSS v4** — Modern utility-first styling with high-performance CSS variables and `@tailwindcss/vite` integration.
- **Framer Motion (`motion`)** — Powers the "bouncy" interactions, staggered entrances, and smooth page transitions.
- **React Router Dom** — Manages client-side navigation via URL-based routing (e.g., `/app/timepass`).
- **Stitch Design System** — Custom "Toy-Box" theme with hard shadows and heavy black outlines.
- **Lucide React** — Clean, consistent iconography for UI actions.
- **Google Generative AI (`@google/genai`)** — Integrated for AI-driven features (configured via `.env`).
- **React Three Fiber & Drei** — Included for 3D visual experiments and background effects.

### Project structure
```text
/src
  /components     # Shared UI components (TopHeader, SideNav, BottomNav, RecommendationCanvas, etc.)
  /data
    sites.ts      # Core database of 60+ curated websites with Site interface and helper functions
  /lib            # Utility functions and helper modules
  /stitch_designs # Stitch-specific design assets and configuration
  App.tsx         # Main application orchestrator using React Router for navigation
  index.css       # Global design system, theme variables, and animated gradients
  main.tsx        # React application entry point with BrowserRouter
```

### Brand & Design System (Toy-Box Aesthetic)
**Personality:** Tactile, playful, and high-energy. It feels like a physical toy that reacts to every touch.

**Design Rules:**
- **Outlines:** Heavy `2px` black borders (`#000000`) on all interactive containers.
- **Shadows:** Hard, offset black shadows (`hard-shadow`) that grow on hover and disappear on click.
- **Corners:** Large radii (`24px` to `32px`) for a "bubbly" feel.
- **Animations:** Bouncy spring physics for all hover and active states.
- **Backgrounds:** Dynamic mesh gradients and animated linear gradients for a sense of depth and life.

**Core Palette:**
- **Primary:** Dusty Pink `#f7b3d2` (Highlights, primary buttons, active states)
- **Secondary:** Sky Blue `#b6e7fd` (Navigation backgrounds, hover accents)
- **Tertiary:** Sage Green `#acd199` (Category accents)
- **Surface:** Pure White `#ffffff` (Cards and headers)
- **Background:** Soft Blush `#fff8f8` (Global page background)
- **Text:** Onyx Black `#1f1a1c` (Primary text and borders)

### Database schema
The application uses a local, high-performance data store in `src/data/sites.ts`.
- **Site Interface:**
  - `name`: String (Display name of the site)
  - `domain`: String (Root domain for favicon fetching)
  - `url`: String (Full destination link)
  - `description`: String (Short, engaging summary)
  - `tab`: `"timepass" | "student" | "builder"` (Category mapping)
- **Helper Functions:**
  - `getFaviconUrl`: Generates a high-quality favicon link via Google S2.

### Auth flow
- **No Authentication:** The app is fully public and requires no login or session management to ensure zero friction for bored users.

### Core features implemented
- **URL-Based Navigation:** Fully integrated routing. Navigation to `/`, `/app`, and `/app/:tab` is handled via React Router.
- **Dual-State Layout:** Seamless transition between a focused Landing Page and a functional Dashboard.
- **Responsive Navigation:** `SideNav` for desktop users and a mobile-optimized `BottomNav` with a central action button.
- **Category Explorer:** Dedicated views for "Time Pass", "Student", and "Builder" sites, accessible via sidebar or dashboard.
- **Random Discovery ("Surprise Me"):** Intelligent randomization logic that ensures no immediate repeats and allows cross-category discovery.
- **Interactive Site Cards:** Polished recommendation cards with auto-fetching favicons, descriptions, and "Open Site" actions.
- **Animated Backgrounds:** Live-animated gradients and mesh backgrounds that adapt to the application state.

### Features not yet built
- **Search & Filtering:** Ability to search for specific sites or filter by more granular tags.
- **User Favorites:** Local storage-based "Save for Later" feature to bookmark interesting finds.
- **AI-Powered "Nudge":** Utilizing Gemini to suggest a site based on a user's current mood or previous clicks.
- **Community Submissions:** A flow for users to suggest new sites to be added to the database.

### Key logic and gotchas
- **State Management:** The app state (`activeTab`) is derived directly from the URL path using `useLocation`. This allows for browser back/forward button support.
- **Site Selection:** When a user navigates to a category, a random site is picked if one isn't already active.
- **Randomization:** The `getRandomSite` logic includes a `lastDomain` check to prevent the same site from appearing twice in a row when clicking "Next".
- **Asset Loading:** Favicons are fetched on-the-fly from Google. If a site has no favicon, it falls back to a generic icon.
- **Mesh Gradients:** The `.mesh-bg` class uses fixed positioning for performance; changing it to scrollable might cause lag on low-end devices.

### How to run locally
1. **Clone & Install:**
   ```bash
   npm install
   ```
2. **Environment Setup:**
   - Copy `.env.example` to `.env` (if using GenAI features).
3. **Launch Dev Server:**
   ```bash
   npm run dev
   ```
4. **Access:** Open `http://localhost:3000` (or the port specified in terminal).
