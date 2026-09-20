# BBC Pro Gym --- UI/UX Design Document

**Brand:** BBC Pro Gym\
**Visual direction:** Premium Black + Metallic Gold / Heritage Strength\
**Phase:** Static marketing website\
**Date:** 20 September 2026

------------------------------------------------------------------------

## 1. Design Concept

The website should translate the supplied BBC Pro Gym badge into a
modern digital identity.

The logo combines: - Circular badge geometry - Gold metallic detailing -
Black/dark surfaces - Barbell elements - Brick-wall symbolism -
Ornamental/vintage details - Strong BBC monogram

The website should therefore feel:

**POWERFUL · PREMIUM · DISCIPLINED · HERITAGE-DRIVEN · MODERN**

Avoid making the website look like a generic neon gaming/gym template.

------------------------------------------------------------------------

## 2. Color System

### Primary

-   Obsidian: `#080808`
-   Deep Charcoal: `#111111`
-   Surface: `#171717`

### Gold

-   Primary Gold: `#D4AF37`
-   Bright Gold: `#F2C94C`
-   Dark Gold: `#8C6A18`

### Text

-   White: `#F5F5F5`
-   Muted: `#A3A3A3`

### Optional accent

Use a restrained warm metallic accent only when necessary.

Do not introduce red, blue, purple or green as competing brand colors.

------------------------------------------------------------------------

## 3. Typography

### Display

Use a strong condensed or high-impact display font.

Good options: - Bebas Neue - Oswald - Anton

### Body

Use a clean modern sans-serif: - Inter - Manrope - Geist Sans

### Rule

Large headlines should be bold and compact.

Example:

**TRAIN HARD.\
BUILD MORE.**

Small labels can use uppercase letter spacing.

------------------------------------------------------------------------

## 4. Layout System

### Desktop

-   Max content width: 1200--1320px
-   Generous horizontal padding
-   Large section spacing
-   Strong asymmetrical compositions

### Tablet

-   Reduce spacing
-   2-column grids where appropriate

### Mobile

-   Single-column sections
-   16--20px side padding
-   Large readable CTA buttons
-   Sticky action bar

------------------------------------------------------------------------

## 5. Navigation

### Desktop

Left: - BBC Pro Gym logo

Center/right: - Home - About - Services - Facilities - Gallery - Contact

Right CTA: **JOIN / ENQUIRE**

### Mobile

-   Logo
-   Menu button

Mobile menu: - Full-height dark panel - Gold active state - Large touch
targets

------------------------------------------------------------------------

## 6. Hero

### Visual

Use a real BBC Pro Gym image whenever possible.

Overlay: - Black gradient - Subtle gold glow - Optional grain/noise
texture

### Composition

Left: - Small eyebrow: `BBC PRO GYM · AURANGABAD` - Large headline -
Supporting copy - CTA buttons

Right: - Strong gym image / athlete / equipment - Logo watermark may be
used subtly

### Suggested copy

**BUILD YOUR STRONGEST SELF.**

Train with purpose. Build strength. Transform your body at BBC Pro Gym.

Buttons: - **ENQUIRE NOW** - **GET DIRECTIONS**

------------------------------------------------------------------------

## 7. Trust Strip

Immediately below hero:

Possible items: - `STRENGTH` - `CONDITIONING` - `TRANSFORMATION` -
`COMMUNITY`

Do not use numerical claims unless verified.

If the owner approves current review data, a compact review/trust
element may be shown with a link to the public business profile.

------------------------------------------------------------------------

## 8. About Section

Use a split layout:

Left: - Large image

Right: - `ABOUT BBC PRO GYM` - 2--3 short paragraphs - CTA

The content should emphasize training environment, consistency, strength
and member-focused guidance without making unsupported claims.

------------------------------------------------------------------------

## 9. Facilities Section

Use a dark card grid.

Suggested categories, subject to owner confirmation: - Strength
Training - Cardio - Free Weights - Functional Training - Personal
Training - Changing/Locker Facilities

Only show a facility if it is actually available at the gym.

Each card: - Photo - Small category label - Title - One-line description

------------------------------------------------------------------------

## 10. Services

Visual style: - Large numbered cards - Gold numbers - Thin borders -
Hover animation

Potential services: 1. Gym Training 2. Personal Training 3. Strength &
Conditioning 4. Body Transformation 5. Nutrition Guidance 6. Group
Training

Mark any unconfirmed service as content requiring owner approval.

------------------------------------------------------------------------

## 11. Gallery

Gallery should be one of the strongest visual sections.

### Recommended layout

-   1 large featured image
-   4 smaller images
-   Masonry/grid variation
-   Lightbox on click

### Photo categories

-   Interior
-   Equipment
-   Training
-   Community
-   Exterior

Use real owner-provided photographs instead of stock images.

------------------------------------------------------------------------

## 12. Testimonials

Do not generate testimonials.

Use: - Owner-approved member quotes - Public reviews only where reuse is
legally/appropriately permitted - First name + initial if privacy is
preferred

Design: - Large quote - Minimal card - Gold quote mark - Optional rating
display

------------------------------------------------------------------------

## 13. Location Section

Dark map/location block.

Content: **BBC Pro Gym**

Gayatri Nagar Ward No. 4, Mission School Road, Ratanua, Bihar 824101,
India

Actions: - Get Directions - Call - WhatsApp - Instagram

Phase 1 should use an external Google Maps directions link rather than
embedding a heavy interactive map unless required.

------------------------------------------------------------------------

## 14. Footer

### Footer structure

Column 1: - Logo - Short brand statement

Column 2: - Navigation

Column 3: - Contact

Column 4: - Social

Bottom: - Copyright - Privacy - Terms

------------------------------------------------------------------------

## 15. Buttons

### Primary

Gold background / dark text.

### Secondary

Transparent / gold border / white text.

### Hover

-   Slight lift
-   Gold brightness increase
-   Subtle shadow

Buttons should not become excessively animated.

------------------------------------------------------------------------

## 16. Cards

Use: - `#111111` / `#171717` surfaces - 1px subtle border - 16--24px
radius depending on section - Gold used as accent, not as full card
background

Avoid excessive glassmorphism.

------------------------------------------------------------------------

## 17. Imagery

The visual identity depends heavily on photography.

Photo treatment: - High contrast - Deep shadows - Warm highlights -
Slight desaturation where appropriate - Gold/amber practical lighting -
Strong subject separation

Do not over-process photographs to the point that equipment or people
look artificial.

------------------------------------------------------------------------

## 18. Responsive UX

### Mobile sticky CTA

Bottom bar: - **CALL** - **WHATSAPP** - **DIRECTIONS**

Ensure it does not cover important content.

### Touch targets

Minimum comfortable target: approximately 44px.

------------------------------------------------------------------------

## 19. Accessibility UX

-   Gold text must be checked for contrast against its background.
-   Never communicate information through color alone.
-   All image content needs meaningful alt text.
-   Focus states must be visible.
-   Animations must respect reduced-motion settings.
-   Forms must have visible labels.

------------------------------------------------------------------------

## 20. UX Writing Style

Use: - Short - Confident - Direct - Motivational - Professional

Avoid: - Empty hype - Fake statistics - Guaranteed transformation
claims - Medical claims - Excessive exclamation marks

Example:

Instead of: **"THE #1 BEST GYM IN THE ENTIRE CITY!!!"**

Use: **"TRAIN WITH PURPOSE."**

------------------------------------------------------------------------

## 21. Design Tokens

``` css
:root {
  --background: #080808;
  --surface: #111111;
  --surface-2: #171717;
  --gold: #D4AF37;
  --gold-bright: #F2C94C;
  --gold-dark: #8C6A18;
  --foreground: #F5F5F5;
  --muted: #A3A3A3;
}
```

------------------------------------------------------------------------

## 22. Design Quality Bar

The final website should feel closer to a premium strength/fitness brand
than a local-business template.

Priorities: 1. Photography 2. Typography 3. Spacing 4. Brand consistency
5. Conversion clarity 6. Performance 7. Animation

Do not sacrifice readability for visual effects.
