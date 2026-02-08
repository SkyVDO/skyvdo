# SunDown Entertainment — Component Specifications

> Component blueprints derived from the reference layout (ref1.webp) and adapted for the SunDown nocturnal cinema aesthetic. Each spec includes anatomy, states, responsive behavior, and token mappings.

---

## Table of Contents

1. [Navigation Header](#1-navigation-header)
2. [Hero Banner](#2-hero-banner)
3. [Feature Card](#3-feature-card)
4. [Accent Block](#4-accent-block)
5. [Deal Card](#5-deal-card)
6. [Package Card](#6-package-card)
7. [Vertical Sidebar Nav](#7-vertical-sidebar-nav)
8. [Button](#8-button)
9. [Arrow CTA Link](#9-arrow-cta-link)
10. [Search Bar](#10-search-bar)
11. [Booking Form](#11-booking-form)
12. [Testimonial Card](#12-testimonial-card)
13. [Footer](#13-footer)
14. [Page Layouts](#14-page-layouts)

---

## 1. Navigation Header

Adapted from ref1's top bar: logo left, search + hamburger right, clean horizontal line separation.

### Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo Icon] SUNDOWN          [Search Icon]  [Hamburger Icon]   │
│              ENTERTAINMENT                                      │
└─────────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Height | 72px (desktop), 56px (mobile) |
| Background | `var(--bg-primary)` with `border-bottom: 1px solid var(--border-subtle)` |
| Padding | `0 var(--space-6)` (desktop), `0 var(--space-4)` (mobile) |
| Logo text | `font-display`, `var(--text-heading-lg)`, `var(--text-primary)` |
| Logo subtitle | `font-body`, `var(--text-label)`, `var(--text-accent)`, uppercase |
| Icon size | 24px |
| Icon color | `var(--text-secondary)`, hover: `var(--text-accent)` |
| Position | `sticky`, top: 0, `z-index: var(--z-sticky)` |
| Backdrop | `backdrop-filter: blur(12px)`, `background: rgba(10, 14, 26, 0.85)` |

### States

| State | Behavior |
| --- | --- |
| Default | Transparent or semi-transparent over hero |
| Scrolled | Gains solid `var(--bg-primary)` background + bottom border |
| Mobile open | Hamburger transforms to X, full-screen overlay menu slides in from right |

### Responsive

- **Desktop**: Logo left-aligned, icons right-aligned in same row
- **Mobile**: Logo and icons compress, hamburger triggers full-screen nav overlay
- Full-screen mobile menu: `var(--bg-primary)` background, nav items stacked vertically in `text-display-md`, 48px spacing between items

---

## 2. Hero Banner

The dominant visual block — mirrors ref1's large left-side hero with overlaid text and CTA.

### Anatomy

```
┌────────────────────────────────────────┬──────────────┐
│                                        │              │
│  [Background Image: outdoor cinema]    │  (Feature    │
│                                        │   Card or    │
│     OVERLINE LABEL                     │   sidebar    │
│     HERO HEADLINE                      │   content)   │
│     IN BEBAS NEUE                      │              │
│                                        │              │
│     Supporting description text        │              │
│     in Outfit regular.                 │              │
│                                        │              │
│     [ BOOK YOUR NIGHT → ]             │              │
│                                        │              │
└────────────────────────────────────────┴──────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Height | `min-height: 85vh` (desktop), `min-height: 60vh` (mobile) |
| Grid span | 8 of 12 columns (desktop), full-width (mobile) |
| Background image | Cover, center, with `var(--gradient-hero-overlay)` on top |
| Overline | `text-label`, `var(--text-accent)`, uppercase |
| Headline | `text-display-xl`, `var(--text-primary)` |
| Description | `text-body-lg`, `var(--text-secondary)`, max-width 480px |
| CTA | Primary Button component (see Button spec below) |
| Content padding | `var(--space-16)` left, `var(--space-20)` vertical |
| Animation | `animate-hero-reveal` for background, staggered `animate-fade-up` for text elements |

### Responsive

- **Desktop**: Image spans 8 columns, text overlay on left half
- **Tablet**: Full-width, image still large, text overlays bottom-left
- **Mobile**: Full-width, taller aspect, text stacks below with reduced headline size (`text-display-lg`)

---

## 3. Feature Card

Adapted from ref1's sidebar product cards (headphones card, Apple Watch card). Used for showcasing equipment or services.

### Anatomy

```
┌──────────────────────────┐
│                          │
│     [Product Image]      │
│                          │
│  →                       │
│  ─────────               │
│  CATEGORY LABEL          │
│  Product Name            │
│                          │
└──────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface)` |
| Border | `1px solid var(--border-subtle)` |
| Border radius | `var(--radius-md)` |
| Padding | `var(--space-6)` |
| Image area | Top 60% of card, object-fit: contain, centered |
| Arrow icon | 20px, `var(--text-secondary)` |
| Divider | `1px solid var(--border-default)`, width 40px, below arrow |
| Category label | `text-label`, `var(--text-secondary)`, uppercase |
| Product name | `text-heading-sm`, `var(--text-primary)`, `font-weight: var(--weight-bold)` |
| Grid span | 4 of 12 columns (desktop), 4 of 8 (tablet), full-width (mobile) |

### States

| State | Behavior |
| --- | --- |
| Default | As specified above |
| Hover | `translateY(-4px)`, `box-shadow: var(--shadow-card-hover)`, border color transitions to `var(--border-default)`, arrow color changes to `var(--text-accent)` |
| Focus | `outline: 2px solid var(--focus-ring)`, `outline-offset: 2px` |

### Transition

```css
transition: transform var(--duration-base) var(--ease-default),
            box-shadow var(--duration-base) var(--ease-default);
```

---

## 4. Accent Block

Adapted from ref1's bold red "GADGETS & MORE..." card. A promotional highlight block with strong background color.

### Anatomy

```
┌──────────────────────────┐
│                          │
│  BOLD                    │
│  HEADLINE                │
│  TEXT...                 │
│                          │
└──────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-promo)` (Cinema Red) or `var(--gradient-amber-horizon)` |
| Border radius | `var(--radius-none)` — sharp corners for dramatic punch |
| Padding | `var(--space-8)` |
| Text | `text-display-md`, `var(--color-screen-white)`, uppercase (Bebas Neue) |
| Min height | 200px |
| Grid span | 2-4 columns, height matches adjacent cards |

### Variants

| Variant | Background | Text Color |
| --- | --- | --- |
| **Cinema Red** | `var(--bg-promo)` | `var(--color-screen-white)` |
| **Amber Gradient** | `var(--gradient-amber-horizon)` | `var(--text-on-accent)` |
| **Twilight** | `var(--color-twilight-purple)` | `var(--color-screen-white)` |

### Usage

- Promotional callouts: "PACKAGES & MORE...", "BOOK NOW", seasonal offers
- Always paired with other cards in the grid — never standalone
- Maximum 1 per visible viewport to avoid visual overload

---

## 5. Deal Card

Adapted from ref1's "DEAL OF THE WEEK" section. Horizontal card with thumbnail, title, description, and arrow CTA.

### Anatomy

```
┌─────────────────────────────────────────────┐
│  DEAL OF THE WEEK                           │
│                                             │
│  ┌────────┐  PACKAGE NAME                   │
│  │        │  Description text about what     │
│  │ [img]  │  is included in this deal.       │
│  │        │  →                               │
│  └────────┘                                 │
│                                             │
│  01  ── ──                                  │
└─────────────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface)` |
| Border | `1px solid var(--border-subtle)` |
| Border radius | `var(--radius-md)` |
| Padding | `var(--space-6)` |
| Section title | `text-label`, `var(--text-secondary)`, uppercase, `margin-bottom: var(--space-4)` |
| Thumbnail | 80x80px, `border-radius: var(--radius-sm)`, `object-fit: cover` |
| Product name | `text-label`, `var(--text-primary)`, uppercase |
| Description | `text-body-sm`, `var(--text-secondary)`, max 2 lines |
| Arrow CTA | Arrow CTA Link component (see spec #9) |
| Slide number | `font-display`, `text-display-md`, `var(--text-muted)` — decorative "01", "02" |
| Pagination dots | 3 dots: active = 24px wide bar `var(--text-primary)`, inactive = 8px dot `var(--text-muted)` |

### Carousel Behavior

- Swipeable on mobile/tablet
- Auto-advances every 6 seconds (pauses on hover/focus)
- 3 visible pagination indicators at bottom

---

## 6. Package Card

SunDown-specific component for displaying rental packages (Basic, Premium, Corporate).

### Anatomy

```
┌──────────────────────────────────────┐
│  [Atmospheric Package Image]         │
│  ████████████████████ (overlay)      │
│                                      │
│  ★ MOST POPULAR                      │
│                                      │
│  PACKAGE NAME                        │
│  Screen size + duration              │
│                                      │
│  ₹8,000 — ₹12,000                   │
│                                      │
│  ── Includes ──                      │
│  ✓ 4K Projector                      │
│  ✓ Inflatable Screen (12ft)          │
│  ✓ 2 Speakers                        │
│  ✓ Setup & Takedown                  │
│                                      │
│  [ VIEW PACKAGE → ]                  │
│                                      │
└──────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface)` |
| Border | `1px solid var(--border-subtle)` |
| Border radius | `var(--radius-lg)` |
| Image | Top 40%, `object-fit: cover`, `var(--gradient-card-overlay)` overlay |
| Badge | Pill shape (`var(--radius-full)`), `var(--bg-accent)`, `var(--text-on-accent)`, `text-label` |
| Package name | `text-display-md` (Bebas Neue), `var(--text-primary)` |
| Subtitle | `text-body-sm`, `var(--text-secondary)` |
| Price | `text-price` (JetBrains Mono), `var(--text-accent)`, `font-size: var(--text-heading-lg)` |
| Divider | `1px solid var(--border-subtle)`, full-width, `margin: var(--space-4) 0` |
| Feature list | `text-body-md`, `var(--text-secondary)`, checkmark icon in `var(--state-success)` |
| CTA | Primary Button, full-width |
| Content padding | `var(--space-6)` |
| Grid span | 4 columns (desktop), full-width stack (mobile) |

### Highlighted Variant

For the recommended package:
- Border: `2px solid var(--border-accent)` instead of subtle
- Subtle glow: `box-shadow: var(--shadow-glow-amber)`
- Badge visible ("MOST POPULAR")
- Scale: `transform: scale(1.02)` relative to siblings

---

## 7. Vertical Sidebar Nav

Adapted directly from ref1's right-edge vertical text navigation (GADGETS, FLASH SALE, DEAL OF THE WEEK, etc.).

### Anatomy

```
                ┐
   SERVICES     │
                │
   PACKAGES     │
                │
   GALLERY      │
                │
   BOOKING      │
                │
   CONTACT US   │
                ┘
```

### Specs

| Property | Value |
| --- | --- |
| Position | Fixed, right edge of viewport |
| Width | 48px |
| Background | transparent |
| Text | `text-label`, `var(--text-muted)`, uppercase |
| Text orientation | `writing-mode: vertical-rl`, `transform: rotate(180deg)` |
| Item spacing | `var(--space-8)` between items |
| Active indicator | Text color changes to `var(--text-accent)`, small 2px bar appears left of text |
| Hover | Text color transitions to `var(--text-primary)` |
| Z-index | `var(--z-sticky)` |

### Responsive

- **Desktop only** — hidden below 1280px breakpoint
- On tablet/mobile, these items move into the hamburger menu

---

## 8. Button

### Variants

#### Primary Button

```
[ BOOK YOUR NIGHT → ]
```

| Property | Value |
| --- | --- |
| Background | `var(--bg-accent)` |
| Text | `var(--text-on-accent)`, `text-label`, uppercase |
| Padding | `var(--space-3) var(--space-6)` |
| Border radius | `var(--radius-none)` — sharp, cinematic |
| Border | none |
| Height | 48px minimum |
| Arrow icon | 16px, inline, `margin-left: var(--space-2)` |
| Transition | `background var(--duration-fast) var(--ease-out)` |

| State | Behavior |
| --- | --- |
| Default | Amber background, dark text |
| Hover | `background: var(--bg-accent-warm)` (Sunset Orange), arrow translates 4px right |
| Active | `transform: scale(0.98)` |
| Focus | `outline: 2px solid var(--focus-ring)`, `outline-offset: 2px` |
| Disabled | `opacity: 0.4`, `cursor: not-allowed` |

#### Secondary Button (Outlined)

```
[ MORE DETAILS → ]
```

| Property | Value |
| --- | --- |
| Background | transparent |
| Text | `var(--text-primary)`, `text-label`, uppercase |
| Border | `2px solid var(--text-primary)` |
| Padding | `var(--space-3) var(--space-6)` |
| Border radius | `var(--radius-none)` |

| State | Behavior |
| --- | --- |
| Default | Transparent with white border |
| Hover | `background: rgba(255, 255, 255, 0.08)`, border color → `var(--text-accent)`, text → `var(--text-accent)` |
| Active | `transform: scale(0.98)` |
| Focus | Standard focus ring |

#### Ghost Button

| Property | Value |
| --- | --- |
| Background | transparent |
| Text | `var(--text-accent)`, `text-label`, uppercase |
| Border | none |
| Padding | `var(--space-2) var(--space-4)` |

### Size Variants

| Size | Height | Font Size | Padding |
| --- | --- | --- | --- |
| Small | 36px | `var(--text-label)` | `var(--space-2) var(--space-4)` |
| Medium (default) | 48px | `var(--text-label)` | `var(--space-3) var(--space-6)` |
| Large | 56px | `var(--text-body-sm)` | `var(--space-4) var(--space-8)` |

---

## 9. Arrow CTA Link

A distinctive pattern from ref1 — standalone arrow or text + arrow used throughout as navigation/action triggers.

### Variants

#### Standalone Arrow

```
→
```

| Property | Value |
| --- | --- |
| Icon | `arrow-right`, 20px |
| Color | `var(--text-secondary)` |
| Hover | Color → `var(--text-accent)`, `translateX(4px)` |
| Touch target | 44x44px minimum (padded) |
| Transition | `color var(--duration-fast), transform var(--duration-fast)` |

#### Text + Arrow

```
VIEW PACKAGES →
```

| Property | Value |
| --- | --- |
| Text | `text-label`, `var(--text-primary)`, uppercase |
| Arrow | 16px, `margin-left: var(--space-2)` |
| Hover | Text + arrow → `var(--text-accent)`, arrow `translateX(4px)` |
| Transition | Same as above |

---

## 10. Search Bar

Expanded state triggered by clicking the search icon in the header.

### Anatomy (Expanded)

```
┌──────────────────────────────────────────────┐
│  🔍  Search packages, locations, events...   │
└──────────────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface-alt)` |
| Border | `1px solid var(--border-default)` |
| Border radius | `var(--radius-sm)` |
| Height | 48px |
| Padding | `var(--space-3) var(--space-4)` |
| Icon | Search, 20px, `var(--text-muted)`, left-aligned |
| Placeholder | `text-body-md`, `var(--text-muted)` |
| Input text | `text-body-md`, `var(--text-primary)` |
| Focus border | `var(--border-accent)` |
| Expansion | Animates from icon-only (48x48) to full-width with `var(--duration-base)` |

---

## 11. Booking Form

SunDown-specific — the core conversion component for booking a cinema night.

### Anatomy

```
┌──────────────────────────────────────────────┐
│  BOOK YOUR NIGHT                             │
│                                              │
│  Event Type          ▾                       │
│  ─────────────────────                       │
│  Date                📅                       │
│  ─────────────────────                       │
│  Location / City     ▾                       │
│  ─────────────────────                       │
│  Guest Count         ▾                       │
│  ─────────────────────                       │
│  Package             ▾                       │
│  ─────────────────────                       │
│                                              │
│  Phone / WhatsApp                            │
│  ─────────────────────                       │
│                                              │
│  [ CHECK AVAILABILITY → ]                    │
│                                              │
└──────────────────────────────────────────────┘
```

### Field Specs

| Property | Value |
| --- | --- |
| Container background | `var(--bg-surface)` |
| Container border | `1px solid var(--border-subtle)` |
| Container radius | `var(--radius-lg)` |
| Container padding | `var(--space-8)` |
| Form title | `text-display-md` (Bebas Neue), `var(--text-primary)` |
| Field label | `text-label`, `var(--text-secondary)`, uppercase, `margin-bottom: var(--space-1)` |
| Input | `text-body-md`, `var(--text-primary)`, transparent background, `border-bottom: 1px solid var(--border-default)` |
| Input padding | `var(--space-3) 0` |
| Input focus | Border-bottom color → `var(--border-accent)` |
| Dropdown icon | `chevron-down`, 16px, `var(--text-muted)` |
| Error text | `text-body-sm`, `var(--state-error)`, `margin-top: var(--space-1)` |
| Submit button | Primary Button, full-width |
| Field spacing | `var(--space-5)` between fields |

### Validation States

| State | Indicator |
| --- | --- |
| Valid | Green checkmark icon, border-bottom → `var(--state-success)` |
| Error | Red border-bottom, error message text below |
| Loading | Pulsing amber glow on submit button |

---

## 12. Testimonial Card

Customer review display for social proof.

### Anatomy

```
┌──────────────────────────────────────┐
│                                      │
│  ★★★★★                              │
│                                      │
│  "We hosted a birthday party with    │
│   the 14ft screen and it was         │
│   absolutely magical. The kids       │
│   loved it!"                         │
│                                      │
│  ── Priya S., Chennai                │
│     Birthday Party, Dec 2025         │
│                                      │
└──────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface)` |
| Border | `1px solid var(--border-subtle)` |
| Border radius | `var(--radius-md)` |
| Padding | `var(--space-6)` |
| Stars | 5 star icons, 16px, filled = `var(--text-accent)`, empty = `var(--text-muted)` |
| Quote text | `text-body-lg`, `var(--text-primary)`, italic, max 3 lines |
| Divider | 24px line, `var(--border-default)` |
| Name | `text-body-md`, `var(--text-primary)`, `font-weight: var(--weight-semibold)` |
| Event type | `text-body-sm`, `var(--text-secondary)` |

### Carousel

- Display 3 cards on desktop (4-col each), 1 on mobile
- Auto-scroll with same pagination dots as Deal Card

---

## 13. Footer

### Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Logo] SUNDOWN                                                 │
│         ENTERTAINMENT    Night screen magic at your doorstep    │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  SERVICES        COMPANY        CONNECT         BOOK NOW        │
│  Outdoor Cinema  About Us       Instagram       [Phone CTA]     │
│  Corporate       FAQ            YouTube         [WhatsApp CTA]  │
│  Parties         Blog           Facebook                        │
│  Sports          Careers        WhatsApp                        │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2025 SunDown Entertainment. Chennai & Coimbatore.            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Specs

| Property | Value |
| --- | --- |
| Background | `var(--bg-surface)` |
| Top border | `1px solid var(--border-subtle)` |
| Padding | `var(--space-16) var(--space-6) var(--space-8)` |
| Logo section | Same as header logo |
| Tagline | `text-body-md`, `var(--text-secondary)` |
| Column title | `text-label`, `var(--text-primary)`, uppercase |
| Column links | `text-body-md`, `var(--text-secondary)`, hover → `var(--text-accent)` |
| Link spacing | `var(--space-3)` between items |
| Dividers | `1px solid var(--border-subtle)`, full-width |
| Copyright | `text-body-sm`, `var(--text-muted)` |
| Grid | 4 columns evenly spaced on desktop, 2x2 on tablet, stacked on mobile |

---

## 14. Page Layouts

### Homepage Layout Map

Based on the ref1 asymmetric grid, adapted for SunDown:

```
┌─────────────────────────────────────────────────────────┬──────┐
│ [Navigation Header - full width]                        │ VERT │
├────────────────────────────────────┬────────────────────┤ SIDE │
│                                    │                    │ BAR  │
│  HERO BANNER                       │  FEATURE CARD:     │ NAV  │
│  "YOUR BACKYARD.                   │  4K PROJECTOR      │      │
│   OUR SCREEN.                      │                    │ S    │
│   PURE MAGIC."                     │                    │ E    │
│                                    ├────────────────────┤ R    │
│  [BOOK YOUR NIGHT →]              │  ACCENT BLOCK:     │ V    │
│                                    │  "PACKAGES         │ I    │
├──────────────┬─────────────────────┤   & MORE..."       │ C    │
│              │                     ├────────────────────┤ E    │
│  DEAL CARD:  │  "SHOP BY          │  FEATURE CARD:     │ S    │
│  FEATURED    │   DEPARTMENT" →    │  INFLATABLE        │      │
│  PACKAGE     │  description       │  SCREEN            │ P    │
│              │                     │                    │ A    │
└──────────────┴─────────────────────┴────────────────────┘ C    │
│                                                         │ K    │
│  [PACKAGES SECTION - 3 Package Cards in row]            │ A    │
│                                                         │ G    │
├─────────────────────────────────────────────────────────┤ E    │
│                                                         │ S    │
│  [HOW IT WORKS - 4-step horizontal process]             │      │
│                                                         │      │
├─────────────────────────────────────────────────────────┤      │
│                                                         │      │
│  [TESTIMONIALS CAROUSEL]                                │      │
│                                                         │      │
├─────────────────────────────────────────────────────────┤      │
│                                                         │      │
│  [BOOKING FORM]                                         │      │
│                                                         │      │
├─────────────────────────────────────────────────────────┤      │
│                                                         │      │
│  [FOOTER]                                               │      │
│                                                         │      │
└─────────────────────────────────────────────────────────┴──────┘
```

### Grid Column Mapping (Desktop — 12 columns)

| Section | Columns | Notes |
| --- | --- | --- |
| Hero Banner | 1–8 | Full height, image + overlay |
| Feature Card (top) | 9–12 | Aligns with hero top |
| Accent Block | 9–10 | Below feature card, bold color |
| Feature Card (bottom) | 11–12 | Aligns with accent block |
| Deal Card | 1–5 | Below hero left |
| Browse CTA | 6–8 | "Shop by Department" equivalent |
| Vertical Sidebar | 13 (outside grid) | Fixed position, right edge |

### Section Spacing

| Between | Gap |
| --- | --- |
| Hero → Packages | `var(--space-16)` (64px) |
| Packages → How It Works | `var(--space-16)` (64px) |
| How It Works → Testimonials | `var(--space-12)` (48px) |
| Testimonials → Booking Form | `var(--space-16)` (64px) |
| Booking Form → Footer | `var(--space-16)` (64px) |

---

## Appendix: Recommended Tech Stack

Since the project is greenfield, the following stack aligns with the design system:

| Layer | Recommendation | Rationale |
| --- | --- | --- |
| **Framework** | Next.js (App Router) | SSR for SEO (local search is critical for this business), image optimization, easy deployment |
| **Styling** | Tailwind CSS | Utility-first maps directly to design tokens, responsive variants built-in |
| **Fonts** | `next/font` with Google Fonts | Optimized font loading for Bebas Neue + Outfit + JetBrains Mono |
| **Icons** | Lucide React | Tree-shakeable, consistent 1.5px stroke weight |
| **Animation** | Framer Motion | Scroll-triggered reveals, staggered animations, page transitions |
| **Forms** | React Hook Form + Zod | Lightweight validation for booking form |
| **CMS** | Sanity or Contentful | Manage packages, testimonials, gallery images |
| **Deployment** | Vercel | Zero-config for Next.js, edge functions for booking API |
| **Analytics** | Plausible or PostHog | Privacy-friendly, lightweight |

### Tailwind Config Mapping

The design tokens translate directly to a Tailwind config extension:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        midnight:        '#0A0E1A',
        'deep-navy':     '#111827',
        'slate-blue':    '#1E293B',
        'twilight':      '#312E81',
        amber:           '#F59E0B',
        sunset:          '#EA580C',
        'cinema-red':    '#DC2626',
        starlight:       '#F1F5F9',
        moonstone:       '#94A3B8',
        dusk:            '#475569',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        body:    ['Outfit', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem',   { lineHeight: '1' }],
        'display-lg': ['3.5rem',   { lineHeight: '1.05' }],
        'display-md': ['2.5rem',   { lineHeight: '1.1' }],
        'heading-lg': ['1.75rem',  { lineHeight: '1.2' }],
        'heading-md': ['1.375rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.35' }],
      },
      borderRadius: {
        none: '0px',
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
      },
      boxShadow: {
        raised:       '0 1px 3px rgba(0, 0, 0, 0.4)',
        elevated:     '0 4px 12px rgba(0, 0, 0, 0.5)',
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.2)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.6)',
      },
      transitionDuration: {
        fast:      '150ms',
        base:      '250ms',
        slow:      '400ms',
        cinematic: '800ms',
      },
    },
  },
}
```
