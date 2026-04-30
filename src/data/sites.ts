export type Tab = "timepass" | "student" | "builder";

export interface Site {
  name: string;
  domain: string;
  url: string;
  description: string;
  tab: Tab;
}

export const getFaviconUrl = (domain: string, size: number = 128): string =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

export const sites: Site[] = [
  // ─── TIMEPASS ──────────────────────────────────────────────
  {
    name: "Slowroads.io",
    domain: "slowroads.io",
    url: "https://slowroads.io",
    description:
      "Infinite procedurally generated roads through mountains, deserts, and coasts. No goal, no timer. Just drive and decompress.",
    tab: "timepass",
  },
  {
    name: "Pointer Pointer",
    domain: "pointerpointer.com",
    url: "https://pointerpointer.com",
    description:
      "Move your cursor anywhere on the screen and it finds a real photograph of a human pointing exactly at your cursor. That's the whole thing.",
    tab: "timepass",
  },
  {
    name: "Neal.fun",
    domain: "neal.fun",
    url: "https://neal.fun",
    description:
      "A hub of polished, high-quality interactive web experiments. Every sub-project is its own rabbit hole — from deep sea exploration to drawing every logo from memory.",
    tab: "timepass",
  },
  {
    name: "The Useless Web",
    domain: "theuselessweb.com",
    url: "https://theuselessweb.com",
    description:
      "Teleports you to a completely random, single-purpose humorous website. Total unpredictability every single click.",
    tab: "timepass",
  },
  {
    name: "Gravity Points",
    domain: "gravitypoints.com",
    url: "https://gravitypoints.com",
    description:
      "A physics simulator where you place gravitational points and watch thousands of particles swirl and react. Deeply satisfying to just stare at.",
    tab: "timepass",
  },
  {
    name: "Magic iPod",
    domain: "themagicipod.com",
    url: "https://themagicipod.com",
    description:
      "Drag and drop 2000s-era songs together to create surprisingly good mashups. Pure nostalgia wrapped in chaos.",
    tab: "timepass",
  },
  {
    name: "Scream Into the Void",
    domain: "screamintothevoid.com",
    url: "https://screamintothevoid.com",
    description:
      "Type your frustrations and scream them into a black hole. Nobody hears it. That's the point.",
    tab: "timepass",
  },
  {
    name: "Find the Invisible Cow",
    domain: "findtheinvisiblecow.com",
    url: "https://findtheinvisiblecow.com",
    description:
      "Move your cursor around a blank screen to find a hidden cow. It screams louder as you get closer. Absolutely ridiculous.",
    tab: "timepass",
  },
  {
    name: "Staggering Beauty",
    domain: "staggeringbeauty.com",
    url: "http://staggeringbeauty.com",
    description:
      "A worm-like creature follows your mouse calmly — until you move fast. Then everything breaks loose.",
    tab: "timepass",
  },
  {
    name: "Zoom Quilt",
    domain: "zoomquilt.org",
    url: "https://zoomquilt.org",
    description:
      "An infinitely zooming surrealist painting that transitions through layered landscapes without ever ending. Completely hypnotic.",
    tab: "timepass",
  },
  {
    name: "2048",
    domain: "play2048.co",
    url: "https://play2048.co",
    description:
      "Slide numbered tiles on a grid to combine them and reach 2048. Simple logic, dangerously addictive.",
    tab: "timepass",
  },
  {
    name: "Draw a Stickman",
    domain: "drawastickman.com",
    url: "https://drawastickman.com",
    description:
      "Draw your own stick figure and watch it come to life inside a narrated adventure story. Your drawing actually matters.",
    tab: "timepass",
  },
  {
    name: "Line Rider",
    domain: "linerider.com",
    url: "https://linerider.com",
    description:
      "Draw a track and send a little sledder flying down it. Can be as simple or as engineering-complex as you want.",
    tab: "timepass",
  },
  {
    name: "Little Alchemy 2",
    domain: "littlealchemy2.com",
    url: "https://littlealchemy2.com",
    description:
      "Combine earth, fire, water, and wind to discover hundreds of new elements. Starts simple, gets philosophical fast.",
    tab: "timepass",
  },
  {
    name: "Patatap",
    domain: "patatap.com",
    url: "https://patatap.com",
    description:
      "Every key on your keyboard triggers a unique sound and animation. Your keyboard becomes a musical instrument instantly.",
    tab: "timepass",
  },
  {
    name: "Weave Silk",
    domain: "weavesilk.com",
    url: "http://weavesilk.com",
    description:
      "Move your mouse and it draws symmetrical glowing silk patterns. Always looks stunning. Zero skill required.",
    tab: "timepass",
  },
  {
    name: "This Is Sand",
    domain: "thisissand.com",
    url: "https://thisissand.com",
    description:
      "Pour colored sand particles down the screen to build layered landscape art. Slow, meditative, and oddly beautiful.",
    tab: "timepass",
  },
  {
    name: "Pixel Thoughts",
    domain: "pixelthoughts.co",
    url: "https://pixelthoughts.co",
    description:
      "A 60-second guided meditation. Type your worry, watch it shrink into a vast starfield while ambient music plays.",
    tab: "timepass",
  },
  {
    name: "Paper Toilet",
    domain: "papertoilet.com",
    url: "http://papertoilet.com",
    description:
      "Scroll to unroll an endless roll of digital toilet paper. It does nothing. You cannot stop.",
    tab: "timepass",
  },
  {
    name: "Bees Bees Bees",
    domain: "beesbeesbees.com",
    url: "https://beesbeesbees.com",
    description:
      "The famous Oprah bee clip, remixed into an infinite swarm. A perfect 10-second jolt of internet absurdity.",
    tab: "timepass",
  },

  // ─── STUDENT ───────────────────────────────────────────────
  {
    name: "Sporcle",
    domain: "sporcle.com",
    url: "https://sporcle.com",
    description:
      "Thousands of trivia quizzes on geography, history, science, and pop culture. The countdown timer turns factual recall into a high-pressure game.",
    tab: "student",
  },
  {
    name: "GeoGuessr",
    domain: "geoguessr.com",
    url: "https://geoguessr.com",
    description:
      "You are dropped into a random Google Street View location anywhere on Earth. Use visual clues — signs, plants, roads — to guess where you are.",
    tab: "student",
  },
  {
    name: "TED-Ed",
    domain: "ed.ted.com",
    url: "https://ed.ted.com",
    description:
      "Short animated video lessons on philosophy, science, history, and math. Every video is under 6 minutes. Pick the title that sounds weirdest.",
    tab: "student",
  },
  {
    name: "Seterra",
    domain: "online.seterra.com",
    url: "https://online.seterra.com",
    description:
      "Map-based geography quizzes. Name every country in Africa. Or every capital in Asia. Much harder than your instincts suggest.",
    tab: "student",
  },
  {
    name: "Freerice",
    domain: "freerice.com",
    url: "https://freerice.com",
    description:
      "Answer vocabulary and knowledge questions — every correct answer donates rice to the UN World Food Programme. Learning with actual stakes.",
    tab: "student",
  },
  {
    name: "Scale of the Universe",
    domain: "scaleofuniverse.com",
    url: "https://scaleofuniverse.com",
    description:
      "An interactive zoom from the size of a quark all the way to the observable universe. Gives you genuine physical perspective in 2 minutes.",
    tab: "student",
  },
  {
    name: "How Stuff Works",
    domain: "howstuffworks.com",
    url: "https://howstuffworks.com",
    description:
      "Deep-dive articles explaining how everyday mechanical and scientific things actually work. Satisfies the \"but why?\" part of your brain.",
    tab: "student",
  },
  {
    name: "Zooniverse",
    domain: "zooniverse.org",
    url: "https://zooniverse.org",
    description:
      "Help real scientists classify galaxies, identify wildlife, or transcribe historical documents. Your boredom session contributes to actual research.",
    tab: "student",
  },
  {
    name: "JetPunk",
    domain: "jetpunk.com",
    url: "https://jetpunk.com",
    description:
      "Geography and history trivia with global leaderboards. The competitive angle makes you want to master things you never cared about before.",
    tab: "student",
  },
  {
    name: "Puzzgrid",
    domain: "puzzgrid.com",
    url: "https://puzzgrid.com",
    description:
      "Find the hidden connection between 16 seemingly unrelated words. A lateral thinking workout that is harder than it looks every single time.",
    tab: "student",
  },
  {
    name: "Wordle",
    domain: "nytimes.com",
    url: "https://nytimes.com/games/wordle",
    description:
      "One five-letter mystery word per day, six guesses to find it. Clean, satisfying, and over in 5 minutes.",
    tab: "student",
  },
  {
    name: "Stellarium Web",
    domain: "stellarium-web.org",
    url: "https://stellarium-web.org",
    description:
      "A live interactive planetarium in your browser. Set your location and see exactly what is in the sky above you tonight.",
    tab: "student",
  },
  {
    name: "Wikipedia Unusual Articles",
    domain: "en.wikipedia.org",
    url: "https://en.wikipedia.org/wiki/Wikipedia:Unusual_articles",
    description:
      "Wikipedia's own curated list of its strangest and most fascinating articles. Every link on this page is a guaranteed rabbit hole.",
    tab: "student",
  },
  {
    name: "Britannica Quizzes",
    domain: "britannica.com",
    url: "https://britannica.com/quiz/browse",
    description:
      "Well-made quizzes on topics from ancient civilisations to modern science. Pick a category you think you already know well.",
    tab: "student",
  },
  {
    name: "Khan Academy",
    domain: "khanacademy.org",
    url: "https://khanacademy.org",
    description:
      "Full free courses on maths, science, economics, and humanities. Spend 10 minutes on the subject you always skipped in school.",
    tab: "student",
  },
  {
    name: "MIT OpenCourseWare",
    domain: "ocw.mit.edu",
    url: "https://ocw.mit.edu",
    description:
      "Every MIT course — lectures, problem sets, and exams — available completely free. Find one syllabus that slightly intimidates you and start there.",
    tab: "student",
  },
  {
    name: "Mental Floss",
    domain: "mentalfloss.com",
    url: "https://mentalfloss.com",
    description:
      "Smart but light articles on history, science, language, and culture. Read three. You will leave with at least one good conversation starter.",
    tab: "student",
  },
  {
    name: "Space.com",
    domain: "space.com",
    url: "https://space.com",
    description:
      "Real-time astronomy news, mission tracking, and outer space photography. Makes the final frontier feel genuinely accessible.",
    tab: "student",
  },
  {
    name: "SparkNotes",
    domain: "sparknotes.com",
    url: "https://sparknotes.com",
    description:
      "Literary analysis and plain-English translations of classic texts. Makes Shakespeare and Dostoevsky actually readable.",
    tab: "student",
  },
  {
    name: "Lichess Training",
    domain: "lichess.org",
    url: "https://lichess.org/training",
    description:
      "One rated chess puzzle. No hints, no skipping. Solve it entirely from your own reasoning. The dopamine hit when it clicks is real.",
    tab: "student",
  },

  // ─── BUILDER ───────────────────────────────────────────────
  {
    name: "21st.dev",
    domain: "21st.dev",
    url: "https://21st.dev",
    description:
      "A curated library of modern, copy-paste UI components built with Tailwind and shadcn. Browse it when you want to steal good ideas legally.",
    tab: "builder",
  },
  {
    name: "CodePen Explore",
    domain: "codepen.io",
    url: "https://codepen.io/explore",
    description:
      "Thousands of live frontend experiments by developers worldwide. Scroll until something makes you ask \"how is this even possible in CSS?\"",
    tab: "builder",
  },
  {
    name: "Awwwards",
    domain: "awwwards.com",
    url: "https://awwwards.com",
    description:
      "The world's most awarded and innovative websites, judged daily. Study the site of the day for 5 minutes and identify one thing you can learn from it.",
    tab: "builder",
  },
  {
    name: "Lapa Ninja",
    domain: "lapa.ninja",
    url: "https://lapa.ninja",
    description:
      "A gallery of the world's best landing page designs. Browse 10 of them and notice what every single one does in the first screen above the fold.",
    tab: "builder",
  },
  {
    name: "Codewars",
    domain: "codewars.com",
    url: "https://codewars.com",
    description:
      "Short algorithm challenges called kata, rated by difficulty in 50+ languages. Do one 6-kyu challenge in your strongest language — then do it cleaner.",
    tab: "builder",
  },
  {
    name: "Frontend Mentor",
    domain: "frontendmentor.io",
    url: "https://frontendmentor.io",
    description:
      "Real-world design-to-code challenges using professional Figma files. The satisfaction of building a polished UI without a client breathing down your neck.",
    tab: "builder",
  },
  {
    name: "Exercism",
    domain: "exercism.org",
    url: "https://exercism.org",
    description:
      "Mentored coding practice focused on writing idiomatic, clean code. Human feedback on your solution makes it feel personal and genuinely useful.",
    tab: "builder",
  },
  {
    name: "Pageflows",
    domain: "pageflows.com",
    url: "https://pageflows.com",
    description:
      "Video recordings of real user flows — onboarding, checkout, upgrades — from the world's best apps. Study how elite products solve UX friction.",
    tab: "builder",
  },
  {
    name: "Realtime Colors",
    domain: "realtimecolors.com",
    url: "https://realtimecolors.com",
    description:
      "Test any color palette live on a real mock website. Turns the tedious task of picking colors into an instant visual experiment.",
    tab: "builder",
  },
  {
    name: "Design Spells",
    domain: "designspells.com",
    url: "https://designspells.com",
    description:
      "A curated gallery of micro-interactions and motion details from real apps. Shows you the subtle things that separate good design from great design.",
    tab: "builder",
  },
  {
    name: "Fffuel",
    domain: "fffuel.co",
    url: "https://fffuel.co",
    description:
      "A massive collection of free SVG generators for gradients, patterns, blobs, and textures. Endless creative exploration with zero setup.",
    tab: "builder",
  },
  {
    name: "Fontshare",
    domain: "fontshare.com",
    url: "https://fontshare.com",
    description:
      "A library of free, professional-grade fonts licensed for commercial use. Testing typefaces across weights is a genuinely calming and inspiring 10 minutes.",
    tab: "builder",
  },
  {
    name: "Phosphor Icons",
    domain: "phosphoricons.com",
    url: "https://phosphoricons.com",
    description:
      "A massive, beautifully consistent icon library with 6 weights for every icon. Deeply satisfying to browse just for the aesthetic organization alone.",
    tab: "builder",
  },
  {
    name: "GitHub Explore",
    domain: "github.com",
    url: "https://github.com/explore",
    description:
      "GitHub's curated trending repositories across every language and topic. Find one repo you have never heard of, read the README fully, and understand what it does.",
    tab: "builder",
  },
  {
    name: "Hono",
    domain: "hono.dev",
    url: "https://hono.dev",
    description:
      "An ultra-fast, lightweight web framework built for the edge — Cloudflare Workers, Deno, Bun. Reading clean framework documentation is genuinely refreshing.",
    tab: "builder",
  },
  {
    name: "Radicle",
    domain: "radicle.xyz",
    url: "https://radicle.xyz",
    description:
      "A decentralized, peer-to-peer alternative to GitHub. Exploring how sovereign, serverless code collaboration works is a fascinating technical rabbit hole.",
    tab: "builder",
  },
  {
    name: "Atuin",
    domain: "atuin.sh",
    url: "https://atuin.sh",
    description:
      "A tool that syncs and searches your entire shell history across machines. Appeals directly to the developer obsession with perfect workflow optimization.",
    tab: "builder",
  },
  {
    name: "Pages CMS",
    domain: "pagescms.org",
    url: "https://pagescms.org",
    description:
      "A CMS that runs directly on top of your GitHub repository. Simplifies the gap between code and content in a genuinely elegant way.",
    tab: "builder",
  },
  {
    name: "Tabby",
    domain: "tabby.tabbyml.com",
    url: "https://tabby.tabbyml.com",
    description:
      "An open-source, self-hosted AI coding assistant. Understanding how to run your own AI infrastructure locally is a top-tier technical challenge.",
    tab: "builder",
  },
  {
    name: "LeetCode",
    domain: "leetcode.com",
    url: "https://leetcode.com/problemset",
    description:
      "The standard for coding interview preparation. Pick one Easy problem, solve it, then optimize it two more ways. Time yourself like it is real.",
    tab: "builder",
  },
];
