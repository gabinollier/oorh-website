# Copilot Instructions for OORH Website

## Project Overview
This is a Next.js 15 website for OORH (a shared HR services one-woman company) built with React 19, TypeScript, and Tailwind CSS V4. The site is a single-page application with smooth scrolling sections and modern animations.

## Animation Guidelines

### Using tailwindcss-motion
This project uses **tailwindcss-motion** for all animations. **NEVER use custom CSS animations** - always use the motion utilities.

### Animation Types
1. **Base Animations**: Individual property controls following pattern `motion-[property]-[direction]-[value]`
2. **Presets**: Ready-made combinations for common patterns
3. **Modifiers**: Fine-tune animation behavior

### Common Animation Patterns

#### Entrance Animations
```tsx
// Fade in from opacity 0
<div className="motion-opacity-in-0">

// Slide in from bottom
<div className="motion-translate-y-in-100">

// Slide in from left
<div className="motion-translate-x-in-[-50]">

// Scale in from small
<div className="motion-scale-in-75">

// Combined animations
<div className="motion-opacity-in-0 motion-translate-y-in-25 motion-scale-in-95">
```

#### Ready-Made Presets
```tsx
// Simple presets for quick animations
<div className="motion-preset-fade">        // Fade in
<div className="motion-preset-slide-up">    // Slide up and fade
<div className="motion-preset-bounce">      // Bounce effect
```

#### Animation Modifiers
```tsx
// Duration (in milliseconds)
<div className="motion-duration-500">       // 500ms
<div className="motion-duration-1000">      // 1000ms
<div className="motion-duration-2000">      // 2000ms

// Delay (in milliseconds)  
<div className="motion-delay-200">          // 200ms delay
<div className="motion-delay-500">          // 500ms delay

// Easing functions
<div className="motion-ease-spring-smooth">
<div className="motion-ease-spring-bouncy">
<div className="motion-ease-bounce">

// Property-specific modifiers (using slash notation)
<div className="motion-delay-500/rotate motion-rotate-in-180 motion-opacity-in-0">
```

#### Loop Animations
```tsx
// Continuous animations
<div className="motion-translate-y-loop-25">     // Bounce up/down
<div className="motion-rotate-loop-180">         // Continuous rotation
<div className="motion-scale-loop-110">          // Pulse effect

// Loop controls
<div className="motion-loop-once">               // Play once
<div className="motion-loop-twice">              // Play twice  
<div className="motion-loop-infinite">           // Play forever (default)

// Loop styles
<div className="motion-translate-y-loop-25/mirror">  // Reverses direction
<div className="motion-translate-y-loop-25/reset">   // Resets to start
```

#### Animation Control
```tsx
// Pause/resume animations
<div className="motion-paused">             // Pause animation
<div className="motion-running">            // Resume animation
```

### Animation Best Practices
- **Combine multiple properties**: Use `motion-opacity-in-0 motion-translate-y-in-25` for richer effects
- **Stagger animations**: Use different `motion-delay-*` values for sequential reveals
- **Performance**: Stick to transform and opacity properties when possible
- **Accessibility**: Plugin automatically respects `prefers-reduced-motion`
- **Timing**: Use 300-500ms for quick interactions, 1000ms+ for dramatic entrances

### Project-Specific Animation Patterns
```tsx
// Hero section entrance (current pattern)
<div className="motion-opacity-in-0 motion-translate-x-in-[-50] motion-duration-1000 motion-delay-300">

// Staggered content reveals
<h1 className="motion-opacity-in-0 motion-duration-1000">
<p className="motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-200">
<button className="motion-opacity-in-0 motion-translate-y-in-25 motion-duration-1000 motion-delay-400">
```

## Architecture Patterns

### Component Structure
- **Single-page layout**: All content sections are components imported into `src/app/page.tsx`
- **Section-based navigation**: Header tracks active sections using IntersectionObserver
- **Component naming**: Use PascalCase exports (e.g., `export function Hero()`)
- **File organization**: Components in `src/components/`, each in its own `.tsx` file

### Key Dependencies & Usage
- **Tailwind CSS v4**: Uses new `@import "tailwindcss"` syntax in `globals.css`
- **tailwindcss-motion**: For animation utilities - see [Animation Guidelines](#animation-guidelines) above
- **tailwindcss-intersect**: For scroll-triggered animations via `ObserverProvider`
- **embla-carousel-react**: For carousels with autoplay (see `Hero.tsx` quotes)
- **framer-motion**: Available for complex animations
- **lucide-react**: For icons

### Styling Conventions
- **Color scheme**: Rose-based palette (`rose-700`, `rose-900`, `rose-100`)
- **Background gradients**: Use `bg-gradient-to-br from-rose-100 to-rose-50/50`
- **Backdrop blur**: Header uses `bg-white/70 backdrop-blur-lg`
- **Animations**: Use tailwindcss-motion utilities only (see [Animation Guidelines](#animation-guidelines))
- **Custom CSS**: Minimal - only for specific needs (like `.embla-fade` mask effects)

### Client-Side Patterns
- **Observer pattern**: Wrap root in `ObserverProvider` for intersection-based animations
- **Scroll detection**: Use IntersectionObserver for active section tracking
- **State management**: Local useState for component state, useEffect for side effects

## Development Workflow

### Commands
- `npm run dev --turbopack`: Development with Turbopack (faster builds)
- `npm run build`: Production build
- `npm run lint`: ESLint checking

### File Paths
- Use `@/` alias for `src/` imports (configured in `tsconfig.json`)
- Static assets in `public/` (videos, images, etc.)

### TypeScript Setup
- Strict mode enabled
- Next.js plugin configured
- Target ES2017 for broad compatibility

## Component Examples

### Creating a new section component:
```tsx
"use client";
import React from "react";

export function NewSection() {
  return (
    <section id="new-section" className="min-h-screen bg-gradient-to-br from-rose-100 to-rose-50/50">
      {/* Content with motion classes for animations */}
    </section>
  );
}
```

### Adding to navigation:
Update `sections` array in `Header.tsx` with `{ id: "new-section", label: "New Section" }`

## Key Implementation Notes
- All interactive components need `"use client"` directive
- Section IDs must match navigation array in Header
- Use semantic HTML elements (`<section>`, `<header>`, `<main>`)
- Prefer composition over inheritance for component design
- Background videos should include fallback and accessibility attributes
