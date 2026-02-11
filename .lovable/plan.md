
# 🎮 Eccentric Interactive Portfolio Website

A single-page portfolio that feels more like an interactive playground than a typical developer site. Playful, animated, and memorable.

## Design Concept
- **Dark theme with vibrant accent colors** (electric purple, neon green, warm orange pops)
- **Unconventional layout** — sections aren't just stacked boxes; they feel alive with movement
- **Cursor-reactive elements** — things respond to the user's mouse
- **Quirky micro-interactions** — hover effects that surprise, text that wiggles, cards that tilt
- **Smooth scroll-triggered animations** as sections come into view

## Sections

### 1. Hero Section
- Your name displayed in large, animated typography with a playful entrance animation
- Rotating/morphing subtitle cycling through your interests ("Full-Stack Developer", "CRM Enthusiast", "Problem Solver")
- An animated call-to-action that bounces or pulses
- Floating emoji/icon particles in the background for a whimsical feel

### 2. About Me
- Your LinkedIn bio content presented in an engaging, non-traditional layout
- Text reveals on scroll with staggered animations
- Fun visual accents — maybe a "drag me" element or an interactive card that flips to reveal more info

### 3. Skills & Tech Stack
- Interactive skill badges/pills for React, TypeScript, ASP.NET, etc.
- Hover effects that enlarge and glow each skill
- Skills grouped by category (Frontend, Backend, Interests) with playful icons

### 4. Projects (Placeholder)
- 3 placeholder project cards with tilt-on-hover effect
- Each card has a colorful gradient border and animated tags
- Easy to replace with real projects later

### 5. Contact Section
- Placeholder email, GitHub, and LinkedIn links styled as fun interactive buttons
- A playful "Let's connect!" message with animated hand-wave emoji
- Copy-to-clipboard interaction for email

## Technical Notes
- **GitHub Pages compatible** — uses `HashRouter` instead of `BrowserRouter` so all routes work without server-side config
- Single-page app with smooth scrolling between sections
- Fully responsive for mobile and desktop
- All animations done with CSS + Tailwind (no heavy libraries needed)
