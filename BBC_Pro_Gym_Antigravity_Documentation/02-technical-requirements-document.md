# BBC Pro Gym --- Technical Requirements Document

**Project:** BBC Pro Gym Website\
**Phase:** Static website\
**Implementation target:** Antigravity\
**Date:** 20 September 2026

------------------------------------------------------------------------

## 1. Technical Objective

Build a production-quality static marketing website for BBC Pro Gym with
a component architecture that can later transition to a dynamic backend.

### Current phase

-   Static content
-   No database
-   No authentication
-   No member dashboard
-   No payment processing
-   No server-side business logic required
-   External links for phone, WhatsApp, Instagram and Google Maps

### Future phase

Introduce API/database functionality without rebuilding the public UI.

------------------------------------------------------------------------

## 2. Recommended Stack

### Frontend

-   Next.js 15+
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui where useful
-   Framer Motion / Motion for React
-   Lucide React icons

### Current rendering

Prefer: - Static generation - Server components where appropriate -
Client components only for interactive UI

### Future backend

Recommended: - Next.js API routes or NestJS - PostgreSQL - Prisma ORM -
Auth.js or JWT - Object storage for media - Admin/CMS layer

------------------------------------------------------------------------

## 3. Project Structure

``` text
bbc-pro-gym/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── contact/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── hero/
│   ├── sections/
│   ├── cards/
│   ├── gallery/
│   ├── forms/
│   └── ui/
├── data/
│   ├── gym.ts
│   ├── services.ts
│   ├── facilities.ts
│   ├── testimonials.ts
│   └── gallery.ts
├── public/
│   ├── brand/
│   │   └── bbc-pro-gym-logo.png
│   ├── gallery/
│   └── og/
├── lib/
│   ├── constants.ts
│   └── seo.ts
├── types/
│   └── gym.ts
└── docs/
    ├── 01-product-requirements-document.md
    ├── 02-technical-requirements-document.md
    ├── 03-ui-ux-design-document.md
    └── 04-backend-schema.md
```

------------------------------------------------------------------------

## 4. Static Data Architecture

Do not hard-code business data directly inside UI components.

Example:

``` ts
export const gym = {
  name: "BBC Pro Gym",
  address: "Gayatri Nagar Ward No. 4, Mission School Road, Ratanua, Bihar 824101, India",
  phone: "+918709207893",
  instagram: "https://www.instagram.com/bbcprogym/?hl=en",
  mapsUrl: "OWNER_SUPPLIED_GOOGLE_MAPS_URL"
};
```

Components consume this data.

This makes Phase 2 migration to API responses straightforward.

------------------------------------------------------------------------

## 5. Environment Variables

The current static build should require no secrets.

Future variables:

``` env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
WHATSAPP_NUMBER=
```

Never expose database credentials or private API keys through
`NEXT_PUBLIC_*`.

------------------------------------------------------------------------

## 6. Image Requirements

### Brand

Use the supplied BBC Pro Gym logo.

Recommended: - Keep original high-resolution logo as master - Create
optimized WebP/AVIF variants - Transparent logo version where
available - Dark-background logo variant - Light-background logo variant
if needed

### Gym photos

-   Use real gym photographs
-   Optimize large images
-   Use Next.js Image
-   Set width/height or aspect ratio to avoid layout shift
-   Generate responsive sizes
-   Lazy-load below-the-fold gallery images

------------------------------------------------------------------------

## 7. Performance

Target: - Excellent Core Web Vitals - Minimal JavaScript - No
unnecessary animation libraries for simple effects - Compress images -
Avoid autoplay video on mobile unless optimized - Preload only the most
important hero asset - Use font-display: swap - Avoid large third-party
embeds above the fold

Google Maps should preferably be an external "Get Directions" link in
Phase 1 rather than a heavy iframe.

------------------------------------------------------------------------

## 8. SEO

Implement: - Metadata API - Open Graph - Twitter/X card metadata -
Canonical URLs - Sitemap - robots.txt - JSON-LD LocalBusiness/Gym
schema - Breadcrumbs where useful - Semantic HTML

Example entity fields:

``` json
{
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "name": "BBC Pro Gym",
  "telephone": "+91-8709207893",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gayatri Nagar Ward No. 4, Mission School Road, Ratanua",
    "addressRegion": "Bihar",
    "postalCode": "824101",
    "addressCountry": "IN"
  }
}
```

Verify all structured-data values before publishing.

------------------------------------------------------------------------

## 9. Security

Phase 1: - No sensitive data collection - No authentication - No payment
processing - No database

Future: - Validate all inputs server-side - Rate-limit enquiry
endpoints - CSRF protection where applicable - Authentication with
secure cookies - Role-based authorization - Audit logging for admin
actions - Never trust client-side roles/permissions

------------------------------------------------------------------------

## 10. Forms

Phase 1 may use: - `tel:` for phone - WhatsApp deep link - `mailto:`
only as fallback

If an enquiry form is added, it must have: - Name - Phone - Optional
email - Goal/service - Message - Consent - Spam protection

The static phase should not collect personal data unless a real
submission mechanism has been implemented and secured.

------------------------------------------------------------------------

## 11. Analytics

Optional: - Google Analytics - Google Search Console - Privacy-conscious
event tracking

Recommended events: - `click_call` - `click_whatsapp` -
`click_directions` - `click_instagram` - `gallery_open` -
`enquiry_start` - `enquiry_submit`

------------------------------------------------------------------------

## 12. Deployment

Recommended: - GitHub repository - Vercel for frontend deployment -
Custom domain when available - Automatic deployment on main branch -
Preview deployments for pull requests

Future backend can use: - Vercel serverless functions - Render -
Railway - AWS - Other managed infrastructure

Database should be managed separately from the static frontend.

------------------------------------------------------------------------

## 13. Component Requirements

Build reusable components: - Navbar - Mobile menu - Hero -
SectionHeading - CTAButton - FacilityCard - ServiceCard - TrainerCard -
TestimonialCard - GalleryGrid - ContactCard - HoursCard - Footer -
MobileActionBar

Avoid page-specific duplicated UI.

------------------------------------------------------------------------

## 14. Motion Requirements

Animations should be purposeful: - Hero entrance - Scroll reveal - Image
hover - Button micro-interactions - Mobile menu transitions

Use: - opacity - transform - scale - clip-path only where performance
remains good

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  /* reduce or disable non-essential animation */
}
```

------------------------------------------------------------------------

## 15. Acceptance Criteria

The build is complete when: - All routes work. - No broken images. - No
console errors. - Mobile layout works at 320px+. - Desktop layout works
at 1440px+. - Navigation works with keyboard. - Logo is correctly
displayed. - CTA links work. - Google Maps opens the supplied
location. - Instagram opens the supplied profile. - Metadata exists. -
Sitemap/robots are available. - Lighthouse/Core Web Vitals are
optimized. - Content is separated from components. - No invented
business claims are present.
