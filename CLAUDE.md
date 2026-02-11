# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SunDown Entertainment** — A Next.js website for a premium outdoor cinema rental service operating in Chennai & Coimbatore. The site features a cinema-inspired dark aesthetic with amber accents, showcasing rental packages for inflatable screens, 4K projectors, and sound systems.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router, React 19)
- **Styling**: Tailwind CSS v4 (CSS-based configuration via `@theme` in globals.css)
- **TypeScript**: Strict mode enabled
- **Icons**: Lucide React
- **Email**: Resend API for enquiry form submissions
- **Fonts**: Bebas Neue (display), Outfit (body), JetBrains Mono (mono) — loaded via `next/font`

## Architecture

### Component Organization

The site uses a **single-page layout** composed of discrete, reusable section components:

- **`src/app/page.tsx`**: Main homepage that orchestrates all sections in order
- **`src/components/`**: All UI components (Navigation, HeroSection, PackagesSection, etc.)
- **`src/lib/constants.ts`**: Central content repository — ALL text, links, package data, and configuration constants are defined here

**Important**: When changing content (pricing, package names, contact info, navigation items), edit `src/lib/constants.ts` — NOT the component files directly.

### Styling System

This project uses **Tailwind CSS v4**, which differs from v3:

- **No `tailwind.config.js` file** — configuration is done in CSS via `@theme` directive
- **Design tokens** are defined in `src/app/globals.css` using CSS custom properties
- **Custom typography classes** (`.text-display-xl`, `.text-heading-lg`, etc.) are defined in globals.css
- Use Tailwind utility classes in components; for custom values, extend the `@theme` block in globals.css

### Path Aliases

- `@/*` → `./src/*` (configured in `tsconfig.json`)
- Example: `import { CONTACT } from "@/lib/constants"`

### Environment Variables

Required for production:

- `RESEND_API_KEY` — Resend API key for email notifications
- `RESEND_FROM_EMAIL` — Sender email address (defaults to Resend sandbox)
- `ENQUIRY_EMAIL` — Recipient email for enquiry form submissions

## Design System

This project has a **comprehensive design system** documented in `docs/design/`:

- **`style-guide.md`**: Brand identity, color palette, typography, spacing, motion, accessibility standards
- **`component-specs.md`**: Detailed component blueprints with anatomy, states, responsive behavior, and token mappings
- **`design-tokens.json` & `design-tokens.css`**: Machine-readable token definitions

### Design System Enforcement

A **frontend-designer agent** (`.claude/agents/frontend-designer.md`) is configured to review components against the design system. When creating or modifying UI components:

1. **Always reference** `docs/design/` for design decisions
2. **Use design tokens** from globals.css (e.g., `var(--color-amber-glow)`, `var(--space-6)`)
3. **Follow component specs** for structure, states, and responsive behavior
4. **Maintain accessibility** standards defined in the style guide (WCAG AA contrast, focus indicators, reduced motion support)

### Key Design Principles

- **Nocturnal palette**: Dark backgrounds (`#0A0E1A` Midnight, `#111827` Deep Navy) with amber accents (`#F59E0B`)
- **Cinematic typography**: Bebas Neue for headlines (always uppercase), Outfit for body, JetBrains Mono for pricing
- **Sharp corners**: Buttons and accent blocks use `border-radius: 0` for a bold, cinematic feel
- **Grid-driven layout**: Asymmetric modular grid inspired by `docs/design/references/ref1.webp`
- **Scroll reveals**: Elements animate in with `animate-fade-up` as they enter the viewport

## API Routes

### POST `/api/enquiry`

Handles contact form submissions from the EnquirySection component.

**Request body**:
```json
{
  "name": "string",
  "phone": "string",
  "eventType": "string",
  "description": "string",
  "notes": "string?" // optional
}
```

**Response**:
- `200`: `{ success: true }`
- `400`: Missing required fields
- `500`: Email send failure
- `503`: Resend API not configured

Sends HTML email to the configured `ENQUIRY_EMAIL` using Resend.

## Component Patterns

### Section Components

All major sections follow this pattern:

```tsx
export default function SectionName() {
  return (
    <section id="section-id" className="...">
      {/* Content using constants from @/lib/constants */}
    </section>
  );
}
```

- Each section has an `id` attribute for anchor navigation
- Section IDs are defined in `SECTION_IDS` constant
- Content comes from `@/lib/constants.ts`

### Scroll Animations

The `ScrollReveal` component wraps content to trigger animations on scroll:

```tsx
<ScrollReveal>
  <div className="animate-fade-up">Content</div>
</ScrollReveal>
```

Animation delays can be staggered with `.stagger-1` through `.stagger-6` classes.

### Image Handling

- **Remote images**: Only `images.unsplash.com` is allowed (configured in `next.config.ts`)
- Use Next.js `<Image>` component with proper `width`, `height`, and `alt` attributes
- For images that might fail to load, use the `FallbackImage` component wrapper

## Content Management

All site content lives in `src/lib/constants.ts`:

- `HERO`: Hero section text and CTAs
- `SERVICES`: "What We Do" service cards (category, title, description, images)
- `AUDIENCES`: "Who It's For" audience segments
- `PACKAGES`: Package offerings (name, description, features, highlighting)
- `STEPS`: "How It Works" process steps
- `GALLERY_IMAGES`: Visual proof gallery images
- `CONTACT`: Phone, WhatsApp, email, social links
- `NAV_ITEMS`: Navigation menu items
- `FOOTER_LINKS`: Footer link groups

**To update content**: Edit the relevant constant in this file and the changes will propagate throughout the site.

## Responsive Design

Breakpoints (defined in design system):

- **Mobile**: `< 768px` (4-column grid)
- **Tablet**: `768px - 1279px` (8-column grid)
- **Desktop**: `≥ 1280px` (12-column grid)
- **Wide**: `≥ 1536px` (12-column grid, wider gutters)

Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) for responsive styling.

## Accessibility

- All color combinations meet WCAG AA contrast ratios (verified in `docs/design/style-guide.md`)
- Focus indicators: 2px amber outline with 2px offset
- Touch targets: Minimum 44x44px
- Reduced motion: Respects `prefers-reduced-motion` media query
- Semantic HTML: Proper heading hierarchy, section landmarks, ARIA labels where needed

## Common Tasks

### Adding a new package

Edit `PACKAGES` array in `src/lib/constants.ts`:

```ts
{
  name: "Package Name",
  description: "Package description",
  features: ["Feature 1", "Feature 2"],
  highlighted: false, // Set true for "Most Popular" badge
  badge: null, // or "MOST POPULAR"
}
```

### Modifying contact information

Edit `CONTACT` object in `src/lib/constants.ts`:

```ts
export const CONTACT = {
  whatsappNumber: "919812345678",
  whatsappLink: "https://wa.me/919812345678",
  phone: "+91 98123 45678",
  email: "hello@sundownentertainment.in",
  // ...
};
```

### Adding a new color token

Add to the `@theme inline` block in `src/app/globals.css`:

```css
@theme inline {
  --color-new-color: #HEXCODE;
}
```

Then use in components as `bg-new-color`, `text-new-color`, etc.

### Creating a new section

1. Create component in `src/components/NewSection.tsx`
2. Add section ID to `SECTION_IDS` in `constants.ts`
3. Add section content to `constants.ts` if needed
4. Import and add to `src/app/page.tsx` in the desired order
5. Reference `docs/design/component-specs.md` for component patterns
