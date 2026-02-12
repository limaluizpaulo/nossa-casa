# AI Coding Instructions - Nossa Casa Website

## Project Overview
React 19 SPA for Nossa Casa cultural center (Guarulhos, Brazil). Built with Vite, React Router, and a custom design system emphasizing accessibility, warmth, and community focus. All content and UI text are in Portuguese (pt-BR).

## Architecture & Key Patterns

### Component Structure
- **Pages** ([src/pages/](src/pages/)): Full page components with Hero sections, each maps to a route in [App.jsx](src/App.jsx)
- **Components** ([src/components/](src/components/)): Reusable UI (Button, Card, Header, Footer, Icons)
- **Hooks** ([src/hooks/](src/hooks/)): Custom hooks for animations and scroll behaviors

### Routing Pattern
All routes defined in [App.jsx](src/App.jsx) using React Router v7. The app uses:
- `<ScrollToTop />` to reset scroll position on navigation
- `<ScrollToTopButton />` for accessibility
- Consistent Header/Footer wrapper around all pages

### Button Component ([src/components/Button.jsx](src/components/Button.jsx))
Polymorphic component supporting multiple rendering modes:
```jsx
// As React Router Link
<Button variant="fill" as={Link} to="/agenda">Text</Button>

// As native link
<Button variant="outline" href="https://...">Text</Button>

// As button
<Button variant="text" onClick={handler}>Text</Button>
```

**Variants:** `fill`, `outline`, `secondary`, `accent`, `text`  
**Sizes:** `small`, `default`, `large`

### Animation System ([src/hooks/useAnimations.jsx](src/hooks/useAnimations.jsx))
Scroll-triggered animations using IntersectionObserver:
```jsx
<AnimateOnScroll animation="fade-up" delay={200}>
  <div>Content animates when scrolled into view</div>
</AnimateOnScroll>
```

**Key hooks:**
- `useIntersectionObserver()` - detect viewport visibility
- `useScrollAnimation(delay)` - trigger animations with stagger timing
- `useScrollProgress()` - track scroll percentage for progress bar
- `<ScrollProgress />` - visual scroll indicator component

## Styling Architecture

### Design System ([src/styles/tokens.css](src/styles/tokens.css))
CSS custom properties define the entire design system:
- **Brand color:** `--brand-yellow: #f8ee13` (primary CTA color)
- **Spacing:** 8pt grid system (`--space-1` through `--space-32`)
- **Typography:** Inter + DM Sans at standardized sizes (`--text-xs` → `--text-7xl`)
- **Breakpoints:** `--bp-sm: 640px` through `--bp-2xl: 1536px`

### CSS Organization ([src/index.css](src/index.css))
Imports are layered:
1. `tokens.css` - design system variables
2. `utilities.css` - helper classes
3. `cards.css`, `interactions.css` - component styles
4. `components.css`, `pages.css`, `sections.css` - layout styles
5. `accessibility.css` - focus states, skip links, aria support

**Pattern:** Always use CSS custom properties for colors, spacing, and typography. Never hardcode values.

## Development Workflows

### Commands
```bash
yarn dev       # Start dev server (Vite)
yarn build     # Production build
yarn preview   # Preview production build
yarn lint      # ESLint check
```

### Adding New Pages
1. Create component in `src/pages/[PageName].jsx`
2. Add route in [App.jsx](src/App.jsx) `<Routes>` section
3. Add navigation link in [Header.jsx](src/components/Header.jsx) `menuItems` array
4. Use `<AnimateOnScroll>` wrapper for scroll animations
5. Include `PageHero` or custom hero section at top

### Creating Components
- Use `forwardRef` when component may be wrapped or needs ref forwarding
- Export as default for single-export files
- Import icons from [components/Icons.jsx](src/components/Icons.jsx)
- Add prop validation in future (currently no PropTypes)

## Project-Specific Conventions

### Accessibility Requirements
**Critical:** This project prioritizes WCAG AA/AAA compliance
- Always include `aria-label` on icons and icon buttons
- Maintain skip-link in [Header.jsx](src/Header.jsx) (`#main-content`)
- Use semantic HTML (`<section>`, `<article>`, `<nav>` with `aria-label`)
- Test with `prefers-reduced-motion` - animations respect user settings
- Ensure proper heading hierarchy (h1 → h2 → h3, no skips)

### Content Language
All UI text, comments, and content must be in **Portuguese (pt-BR)**. Examples:
- Button text: "Ver agenda de eventos", "Conheça nossa história"
- Aria labels: "Navegação principal", "Fechar menu"
- Component names may be English, but props/content are Portuguese

### Visual Design Principles
Documented in [README.md](README.md):
- **Airy spacing** - generous whitespace between sections
- **Warm + institutional** - balance trust with approachability  
- **No visual clutter** - clean, focused layouts without heavy borders
- **Large authentic photos** - community-focused imagery

### Image Handling
- Store in `src/assets/` for build-time imports
- Use `public/images/` for static assets referenced by path
- Always include descriptive `alt` text in Portuguese
- Apply `loading="lazy"` for below-fold images

## Key Files Reference

- [App.jsx](src/App.jsx) - Router configuration, all routes
- [Header.jsx](src/components/Header.jsx) - Main navigation with dropdowns, mobile menu
- [useAnimations.jsx](src/hooks/useAnimations.jsx) - Scroll animation hooks and components
- [tokens.css](src/styles/tokens.css) - Complete design system (spacing, colors, type scale)
- [Home.jsx](src/pages/Home.jsx) - Homepage pattern example with hero, sections, CTAs

## Common Tasks

**Add new section to page:**
```jsx
<section className="section-name">
  <div className="wrap">
    <AnimateOnScroll animation="fade-up" delay={100}>
      <h2>Section Title</h2>
      <p>Content</p>
    </AnimateOnScroll>
  </div>
</section>
```

**Create CTA with proper routing:**
```jsx
<Button variant="fill" size="large" as={Link} to="/contato">
  Entre em contato
</Button>
```

**Apply design system spacing:**
Use tokens via CSS:
```css
.my-section {
  padding: var(--space-16) 0; /* 64px vertical */
  margin-bottom: var(--space-8); /* 32px */
}
```
