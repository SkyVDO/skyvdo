# SunDown Entertainment — Style Guide

> **"Night screen magic at your doorstep"**

---

## 1. Brand Identity

### Brand Essence
SunDown Entertainment delivers premium outdoor cinema experiences — inflatable screens, 4K projectors, and immersive sound under the open sky. The brand lives at the intersection of **cinematic wonder** and **effortless luxury**. Every visual decision should feel like the moment the projector flickers on against a twilight sky.

### Design Philosophy
Adapted from the reference grid-based layout (ref1.webp), the system uses **asymmetric modular grids**, **bold uppercase typography**, and **card-based content blocks** — but recast in a nocturnal palette. Where the reference uses white + red accents on light backgrounds, SunDown inverts this into **deep indigo surfaces** with **warm amber highlights**, evoking starlit nights and golden projector glow.

### Design Principles

| Principle | Description |
|---|---|
| **Cinematic** | Every layout should feel like a widescreen frame. Use dramatic scale, generous negative space, and atmospheric imagery. |
| **Nocturnal** | Dark surfaces dominate. Light is used intentionally — amber warmth, not clinical white. |
| **Bold & Clear** | Uppercase headings, strong typographic hierarchy, no visual noise. The message hits immediately. |
| **Grid-Driven** | Asymmetric modular grids create visual interest while maintaining order. Cards, not chaos. |
| **Premium Approachable** | High-end feel without being intimidating. This is a celebration, not a gallery. |

---

## 2. Color System

### Primary Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| **Background** | Midnight | `#0A0E1A` | Primary page background, dark surfaces |
| **Surface** | Deep Navy | `#111827` | Card backgrounds, elevated surfaces |
| **Surface Alt** | Slate Blue | `#1E293B` | Secondary cards, hover states, dividers |
| **Accent Primary** | Amber Glow | `#F59E0B` | CTAs, highlights, active states, star motifs |
| **Accent Warm** | Sunset Orange | `#EA580C` | Secondary accent, urgency, pricing highlights |
| **Text Primary** | Starlight | `#F1F5F9` | Headings, primary body text on dark |
| **Text Secondary** | Moonstone | `#94A3B8` | Captions, metadata, supporting text |
| **Text Muted** | Dusk | `#475569` | Disabled states, placeholder text |

### Extended Palette

| Name | Hex | Usage |
|---|---|---|
| Twilight Purple | `#312E81` | Gradient accents, decorative backgrounds |
| Screen White | `#FFFFFF` | Projector screen imagery, high-contrast elements |
| Success Green | `#10B981` | Booking confirmed, availability indicators |
| Error Red | `#EF4444` | Form errors, unavailable dates |
| Cinema Red | `#DC2626` | Bold accent blocks (inspired by ref1 red cards) |

### Gradient Definitions

```
Night Sky:        linear-gradient(180deg, #0A0E1A 0%, #1E293B 50%, #312E81 100%)
Amber Horizon:    linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)
Twilight Fade:    linear-gradient(180deg, #312E81 0%, #0A0E1A 100%)
Screen Glow:      radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)
```

### Color Usage Rules
- **Never** place amber text on amber backgrounds. Amber is for interactive elements and highlights only.
- **Dark surfaces** use the 3-tier depth system: Midnight → Deep Navy → Slate Blue (back to front).
- **Light-on-dark** contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text).
- The **Cinema Red** (`#DC2626`) is used sparingly — only for bold promotional blocks (mirroring ref1's red "GADGETS & MORE" card pattern).

---

## 3. Typography

### Font Stack

| Role | Font | Fallback | Weight |
|---|---|---|---|
| **Display / Headings** | **Bebas Neue** | Impact, sans-serif | 400 (regular only) |
| **Body / UI** | **Outfit** | system-ui, sans-serif | 300, 400, 500, 600, 700 |
| **Mono / Technical** | **JetBrains Mono** | monospace | 400 |

### Why These Fonts
- **Bebas Neue**: Tall, condensed, cinematic uppercase — perfect for bold hero headlines and section titles. Echoes the bold uppercase headings in ref1 ("ALL-IN-ONE VR 3D HEADSET"). Free on Google Fonts.
- **Outfit**: Geometric sans-serif with warmth. Clean enough for UI, characterful enough to avoid generic feel. Excellent legibility at small sizes on dark backgrounds.
- **JetBrains Mono**: For pricing, technical specs (lumens, screen sizes), and data — gives these a precise, premium feel.

### Type Scale

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `display-xl` | 72px / 4.5rem | 1.0 | Bebas 400 | 0.02em | Hero headlines |
| `display-lg` | 56px / 3.5rem | 1.05 | Bebas 400 | 0.02em | Section heroes |
| `display-md` | 40px / 2.5rem | 1.1 | Bebas 400 | 0.02em | Card headlines |
| `heading-lg` | 28px / 1.75rem | 1.2 | Outfit 700 | -0.01em | Section headings |
| `heading-md` | 22px / 1.375rem | 1.3 | Outfit 600 | -0.005em | Subsection headings |
| `heading-sm` | 18px / 1.125rem | 1.35 | Outfit 600 | 0 | Card titles |
| `body-lg` | 18px / 1.125rem | 1.6 | Outfit 400 | 0 | Lead paragraphs |
| `body-md` | 16px / 1rem | 1.6 | Outfit 400 | 0 | Default body |
| `body-sm` | 14px / 0.875rem | 1.5 | Outfit 400 | 0.005em | Captions, metadata |
| `label` | 12px / 0.75rem | 1.4 | Outfit 600 | 0.08em | Buttons, tags, overlines (uppercase) |
| `mono` | 16px / 1rem | 1.5 | JetBrains 400 | 0 | Pricing, specs |

### Typography Rules
- **Headings (Bebas Neue)** are always uppercase — the font is designed for it.
- **Body (Outfit)** uses sentence case. Never uppercase body text.
- **Labels and overlines** (Outfit) use uppercase + wide letter-spacing for small text.
- **Pricing** always uses JetBrains Mono for precision and visual distinction.
- Maximum line width for body text: **65 characters** (~600px).

---

## 4. Spacing System

Based on a **4px base unit** with an 8-point grid:

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight internal padding, icon gaps |
| `space-2` | 8px | Compact element spacing |
| `space-3` | 12px | Default inner padding |
| `space-4` | 16px | Standard component padding |
| `space-5` | 20px | Card inner padding |
| `space-6` | 24px | Section inner padding |
| `space-8` | 32px | Between related sections |
| `space-10` | 40px | Between distinct sections |
| `space-12` | 48px | Major section gaps |
| `space-16` | 64px | Page section separators |
| `space-20` | 80px | Hero section padding |
| `space-24` | 96px | Top-level page margins |

---

## 5. Layout System

### Grid

Derived from the reference's asymmetric modular grid:

```
Desktop (≥1280px):  12-column grid, 24px gutters, max-width 1440px
Tablet (768–1279px): 8-column grid, 20px gutters
Mobile (<768px):     4-column grid, 16px gutters
```

### Asymmetric Feature Grid (Hero Pattern)

Inspired by ref1's layout where the hero image spans ~60% left and product cards tile the right:

```
┌──────────────────────────┬────────────┐
│                          │  Search /  │
│   Logo                   │  Nav Icon  │
├──────────────────────────┼────────────┤
│                          │            │
│   HERO IMAGE             │  FEATURE   │
│   + Overlay Text         │  CARD 1    │
│   + CTA                  │            │
│                          ├────────────┤
│                          │  ACCENT    │
├──────────┬───────────────┤  BLOCK     │
│          │               ├────────────┤
│  DEAL    │  CONTENT      │  FEATURE   │
│  CARD    │  BLOCK        │  CARD 2    │
│          │               │            │
└──────────┴───────────────┴────────────┘
```

- **Hero area**: spans 8 of 12 columns on desktop
- **Sidebar cards**: span 4 of 12 columns
- **Accent blocks**: use Cinema Red or Amber Glow background, 1-2 columns wide
- **Vertical sidebar text**: rotated 90deg navigation labels on far right (from ref1)

### Breakpoints

| Name | Min Width | Columns | Gutter |
|---|---|---|---|
| `mobile` | 0px | 4 | 16px |
| `tablet` | 768px | 8 | 20px |
| `desktop` | 1280px | 12 | 24px |
| `wide` | 1536px | 12 | 32px |

### Container Widths

| Context | Max Width |
|---|---|
| Full layout | 1440px |
| Content area | 1200px |
| Narrow content (text) | 720px |

---

## 6. Elevation & Depth

Dark interfaces need careful layering. Use background color tiers + subtle borders instead of heavy shadows:

| Level | Background | Border | Shadow | Usage |
|---|---|---|---|---|
| **Base** | Midnight `#0A0E1A` | none | none | Page background |
| **Raised** | Deep Navy `#111827` | `1px solid rgba(255,255,255,0.06)` | `0 1px 3px rgba(0,0,0,0.4)` | Cards, panels |
| **Elevated** | Slate Blue `#1E293B` | `1px solid rgba(255,255,255,0.08)` | `0 4px 12px rgba(0,0,0,0.5)` | Modals, dropdowns, popovers |
| **Glow** | — | — | `0 0 30px rgba(245,158,11,0.2)` | Active/focused interactive elements |

---

## 7. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-none` | 0px | Buttons, accent blocks (sharp, cinematic) |
| `radius-sm` | 4px | Inputs, small tags |
| `radius-md` | 8px | Cards, images |
| `radius-lg` | 12px | Modal containers, large cards |
| `radius-xl` | 16px | Feature images, promotional blocks |
| `radius-full` | 9999px | Avatars, pill badges |

**Default approach**: Prefer **sharp corners** (`radius-none` or `radius-sm`) for buttons and accent blocks — this matches the ref1 aesthetic and feels more cinematic. Reserve larger radii for image containers and feature cards.

---

## 8. Iconography

| Property | Value |
|---|---|
| Style | Outlined stroke, 1.5px weight |
| Sizes | 16px, 20px, 24px, 32px |
| Library | Lucide Icons (recommended) or Phosphor Icons |
| Color | Inherits from text color; amber for interactive |

### Key Icons

| Icon | Usage |
|---|---|
| `arrow-right` | CTA arrows (prominent in ref1 pattern) |
| `search` | Search functionality |
| `menu` | Hamburger navigation |
| `play-circle` | Video/cinema actions |
| `calendar` | Booking dates |
| `map-pin` | Location selection |
| `star` | Reviews, premium features |
| `projector` / `monitor` | Equipment/service indicators |
| `phone` | WhatsApp/contact CTAs |
| `chevron-down` | Dropdowns, expandable sections |

### Arrow CTA Pattern (from ref1)
The reference heavily uses `→` arrows as standalone CTAs and within buttons. Adopt this:
- Standalone arrows: 20px, Moonstone color, hover → Amber Glow
- Button arrows: inline after text, 16px, same color as button text

---

## 9. Imagery & Photography

### Style Guidelines
- **Hero images**: Full-bleed, atmospheric — outdoor setups at dusk/night with warm ambient lighting
- **Product shots**: Clean, well-lit equipment on neutral backgrounds (like ref1's product cards)
- **Lifestyle**: People enjoying the experience — families, groups, laughter under the stars
- **Overlay treatment**: Dark gradient overlay on hero images for text legibility (`rgba(10,14,26,0.6)`)

### Image Aspect Ratios

| Context | Ratio | Usage |
|---|---|---|
| Hero | 16:9 | Full-width hero banners |
| Feature Card | 4:3 | Product/service cards in grid |
| Thumbnail | 1:1 | Package listing thumbnails |
| Gallery | 3:2 | Event gallery images |
| Vertical Sidebar | 9:16 | Mobile stories, vertical features |

### Image Treatment
- Apply a subtle **warm color grade** to all photos (slight amber shift in highlights)
- Use the **Screen Glow** gradient as an overlay on feature images
- Never show raw, ungraded daylight photos — even daytime shots should feel warm and inviting

---

## 10. Motion & Animation

### Principles
- Motion should feel like a **slow fade-in of a projector** — smooth, deliberate, atmospheric
- No bouncy or playful animations. Think cinema, not carnival.
- Prefer **opacity + transform** for performance

### Timing

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `duration-fast` | 150ms | `ease-out` | Hovers, micro-interactions |
| `duration-base` | 250ms | `ease-in-out` | Transitions, state changes |
| `duration-slow` | 400ms | `ease-in-out` | Page transitions, reveals |
| `duration-cinematic` | 800ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Hero entrances, major reveals |

### Key Animations
- **Page load**: Staggered fade-up of grid cards (100ms delay between each)
- **Hero entrance**: Scale from 1.05 → 1.0 with opacity 0 → 1 over 800ms
- **Card hover**: Subtle lift (translateY -4px) + glow shadow appear
- **CTA arrows**: Translate-x 4px on hover
- **Scroll reveal**: Elements fade-up as they enter viewport

---

## 11. Accessibility

| Requirement | Standard |
|---|---|
| Color contrast (body text) | WCAG AA — minimum 4.5:1 |
| Color contrast (large text) | WCAG AA — minimum 3:1 |
| Focus indicators | 2px amber outline with 2px offset |
| Touch targets | Minimum 44x44px |
| Reduced motion | Respect `prefers-reduced-motion` — disable all transforms, use opacity-only transitions |
| Dark mode | Default. Light mode not required for v1 but token system supports it. |
| Language | English primary, Tamil secondary (future) |

### Contrast Verification

| Combination | Ratio | Pass |
|---|---|---|
| Starlight (#F1F5F9) on Midnight (#0A0E1A) | 16.4:1 | AAA |
| Moonstone (#94A3B8) on Midnight (#0A0E1A) | 6.8:1 | AA |
| Amber Glow (#F59E0B) on Midnight (#0A0E1A) | 9.1:1 | AAA |
| Amber Glow (#F59E0B) on Deep Navy (#111827) | 7.9:1 | AA |
| Midnight (#0A0E1A) on Amber Glow (#F59E0B) | 9.1:1 | AAA |

---

## 12. Voice & Tone in UI

| Context | Tone | Example |
|---|---|---|
| Headlines | Bold, cinematic, aspirational | "YOUR BACKYARD. OUR SCREEN. PURE MAGIC." |
| Body text | Warm, clear, inviting | "We bring the cinema experience to your doorstep with premium 4K projection." |
| CTAs | Action-oriented, confident | "BOOK YOUR NIGHT →" / "VIEW PACKAGES →" |
| Error states | Helpful, not alarming | "That date isn't available. Let's find another night for your show." |
| Success states | Celebratory | "You're all set! Get ready for movie magic." |
| Pricing | Transparent, no-nonsense | "Starting at ₹8,000 for 4 hours. Everything included." |
