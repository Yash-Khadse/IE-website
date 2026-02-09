# Mission Vision Values Component (Strategic Pillars)

## Overview
This component implements a **Strategic Pillars Accordion** interface. It allows users to explore the company's core tenets (Mission, Vision, Promise) through an interactive, expandable vertical layout.

## Architecture
- **State**: Tracks the `activePillar` index.
- **Layout**: Uses Flexbox and `framer-motion`'s `layout` prop to animating width changes (`flex-1` vs `flex-3`).
- **Typography** Rotates 90 degrees when inactive to maximize screen real estate.
- **AnimatePresence**: Handles the smooth entrance/exit of the expanded content.

## Key Features
1. **Physics-Based Expansion**: Clicking a pillar expands it with a smooth spring animation.
2. **Dynamic Gradient Backgrounds**: Each pillar has a unique gradient (`purple`, `pink`, `mint`) that intensifies on activation.
3. **Responsive Design**: Stacks vertically on mobile, transforms into a horizontal accordion heavily optimized for desktop exploration.
4. **Core Values Footer**: A static grid reinforcing the foundational operating principles.

## Usage
Import and use in `app/about/page.tsx`:
```tsx
import MissionVisionValues from "@/sections/about/MissionVisionValues";

export default function AboutPage() {
  return (
    <main>
      <MissionVisionValues />
    </main>
  );
}
```

## Customization
- **Colors**: Adjust the `color`, `accent`, and `border` properties in the `pillars` array.
- **Animations**: Tweak the `transition` prop in `motion.div` for faster/slower expansion.
