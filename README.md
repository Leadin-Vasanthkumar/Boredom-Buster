# 🎲 Boredom Buster

**Stop scrolling. Start discovering.**

Boredom Buster is a curated website discovery platform that rescues you from digital stagnation. Instead of mindlessly scrolling through the same feeds, tap a button and get teleported to a fascinating corner of the internet you never knew existed.

---

## ✨ What It Does

You're bored. You click a button. We fix it.

Boredom Buster serves up hand-picked websites across three categories:

- 🎮 **Time Pass** — Pure fun with zero agenda. Interactive experiments, oddly satisfying games, and internet absurdity.
- 📚 **Student** — Get smarter without trying. Trivia, quizzes, interactive learning, and rabbit holes worth falling into.
- 🔧 **Builder** — Level up your craft. Design inspiration, coding challenges, developer tools, and creative resources.

Each recommendation comes with a description of what makes it worth your time, plus a direct link to dive in.

## 🌟 Key Features

- **60+ Curated Sites** — Every site is hand-picked and described. No filler.
- **Smart Randomization** — Never see the same site twice in a row.
- **Favorites** — Star the sites you love and revisit them anytime from your personal Favs section. Saved locally, zero sign-up required.
- **Toy-Box Design** — A playful, tactile interface with bouncy animations, hard shadows, and a pastel color palette that makes browsing feel like play.
- **Fully Responsive** — Desktop sidebar navigation and mobile-optimized bottom nav.
- **URL-Based Routing** — Browser back/forward buttons work. Share a direct link to any category.

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **React 19** | UI framework |
| **Vite** | Build tool & dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations & page transitions |
| **React Router** | Client-side routing |
| **Lucide React** | Icons |
| **localStorage** | Favorites persistence |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Leadin-Vasanthkumar/Boredom-Buster.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start exploring.

## 📁 Project Structure

```
src/
├── App.tsx              # Main app with routing, navigation, and all views
├── main.tsx             # Entry point with BrowserRouter
├── index.css            # Design system, theme variables, animations
├── data/
│   └── sites.ts         # Curated database of 60+ websites
├── lib/
│   └── useFavorites.ts  # Custom hook for localStorage-based favorites
└── stitch_designs/      # Design system reference files
```

## 🎨 Design Philosophy

Boredom Buster uses a **"Toy-Box" aesthetic** — it should feel like opening a box of colorful toys:

- **Heavy 2px black borders** on all interactive elements
- **Hard offset shadows** that grow on hover and collapse on click
- **Bouncy spring physics** for all interactions
- **Pastel palette**: Dusty Pink, Sky Blue, Sage Green on a Soft Blush background
- **Animated gradients** for a sense of depth and energy

---

<p align="center">
  <b>Built to cure boredom, one click at a time.</b>
</p>
