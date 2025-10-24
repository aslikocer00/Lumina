# StyleAI / Lumina

StyleAI is a premium AI stylist experience built with Next.js 14 and Tailwind CSS. It guides users from photo upload to personalized style recommendations, showcasing features such as color season analysis, body type guidance, hair and accessory suggestions, and curated “shop the look” recommendations.

## Table of Contents

1. [Project Highlights](#project-highlights)  
2. [Tech Stack](#tech-stack)  
3. [App Structure](#app-structure)  
4. [Getting Started](#getting-started)  
5. [Available Scripts](#available-scripts)  
6. [Key Features](#key-features)  
7. [Mock Data Overview](#mock-data-overview)  
8. [Styling System](#styling-system)  
9. [Deployment](#deployment)  
10. [Roadmap Ideas](#roadmap-ideas)

## Project Highlights

- **Live Demo**: https://lumina-eosin.vercel.app/

- **Responsive UX**: Optimized for mobile-first browsing with smooth fade transitions between views.  
- **Premium Styling Language**: Inspired by Apple and Glossier with soft gradients, rounded cards, and elevated typography.  
- **AI-Like Interactions**: Mocked analysis pipeline mimics asynchronous AI processing with progress feedback.  
- **Rich Results Page**: Color season visualization, body type guides, hairstyle/accessory pairings, and shopping cards.  
- **Marketing Landing**: `/app` route doubles as a product marketing page with Framer Motion animations.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS with custom tokens  
- **Animations**: Framer Motion  
- **Images**: Next/Image with local SVG assets  
- **Tooling**: ESLint (Next.js config), PostCSS, TypeScript strict mode

## App Structure

```
├─ app/
│  ├─ page.tsx               # Homepage (hero + how it works + about section)
│  ├─ upload/page.tsx        # Photo upload with drag & drop, preview, and mock analysis
│  ├─ results/page.tsx       # Personalized insights rendered from stored/mock data
│  ├─ app/page.tsx           # Marketing landing for the mobile app experience
│  └─ layout.tsx             # Root layout with global metadata, navbar, footer
├─ components/               # Reusable UI components (NavBar, UploadForm, StyleResults, etc.)
├─ lib/mockApi.ts            # Mocked AI response with typed sample data
├─ public/                   # Static assets (favicon, placeholder SVGs, marketing illustrations)
└─ styles/globals.css        # Tailwind base styles
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

3. **Optional: Type checking & linting**
   ```bash
   npm run lint
   ```

> **Prerequisites**: Node.js ≥ 18.17 and npm ≥ 9 (or corresponding pnpm/yarn equivalents).

## Available Scripts

| Script        | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `npm run dev` | Starts Next.js in development mode                   |
| `npm run build` | Creates an optimized production build               |
| `npm run start` | Runs the production build locally                   |
| `npm run lint` | Lints the project with ESLint/Next.js configuration  |

## Key Features

- **Homepage (`/`)**: Hero section with brand positioning, feature highlights, and anchored sections (“How it works”, “About”).  
- **Upload Flow (`/upload`)**:
  - Drag & drop or file selection with live preview  
  - Progress bar + overlay to simulate AI analysis  
  - Results cached to `localStorage` for retrieval on the results page  
- **Results (`/results`)**:
  - Face shape insight card with iconography  
  - Suggested colors rendered as swatches  
  - Body type / skin tone panels  
  - Body type guide with expandable cards  
  - Hairstyle & accessory pairings with imagery tags  
  - “Shop the Look” is a responsive grid of mock product cards  
- **Marketing Page (`/app`)**:
  - Framer Motion animations for hero, features, timeline steps, testimonials  
  - Custom premium SVG illustrations housed in `public/marketing`  
  - Early-access call-to-action with mock app store badges

## Mock Data Overview

The application uses `lib/mockApi.ts` to simulate AI responses:

- `analyzeStyle` returns a `StyleAnalysis` object after a short delay.  
- Includes face shape insight, body type, skin tone, color season info, body guide details, hairstyle/accessory combos, and shopping collections.  
- Upload flow stores the mock result in `localStorage` under `styleai:last-result`, so navigating to `/results` can render the data without re-uploading.

## Styling System

- Tailwind extended with a custom palette (`primary`, `secondary`, `accent`, `soft`, `sand`, `stone`) and shared gradients/shadows.  
- Global fonts via `@next/font` (Inter).  
- Components rely on utility classes paired with subtle borders, blurs, and elevated shadows defined in `tailwind.config.ts`.  
- SVG illustrations in `public/marketing` maintain a cohesive pastel aesthetic.

## Deployment

- The app is optimized for deployment on Vercel:
  - `next.config.js` enables strict mode and broad remote image support.  
  - `package.json` includes `build` and `start` scripts for production.  
- For GitHub Pages or fully static hosting, Next.js static export would require significant adjustments (removing dynamic routes, `localStorage` usage during SSR, etc.).

## Roadmap Ideas

- Integrate a real AI inference endpoint for style analysis.  
- Persist user sessions beyond `localStorage` with Supabase or App Router actions.  
- Add multi-step onboarding (questionnaires, style preferences).  
- Build an admin dashboard to manage product feeds for “Shop the Look”.  
- Internationalization (i18n) support and accessibility audits.  
- Visual regression tests and component storybook for design collaboration.

---

Feel free to adapt or extend this project. Contributions are welcome—open an issue or submit a PR with improvements!
