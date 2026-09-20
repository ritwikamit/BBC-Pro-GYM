# BBC Pro Gym --- Product Requirements Document (PRD)

**Project:** BBC Pro Gym Website\
**Phase:** Phase 1 --- Static Marketing Website\
**Future:** Phase 2 --- Dynamic gym-management/member platform\
**Prepared for:** Antigravity implementation\
**Date:** 20 September 2026

------------------------------------------------------------------------

## 1. Product Overview

BBC Pro Gym is a fitness center in Aurangabad, Bihar. The website should
establish a premium, strong and trustworthy digital presence for the
gym, convert visitors into enquiries/visits, make the location easy to
find, and showcase the gym's facilities, training environment and brand
identity.

The current implementation is intentionally **static**. Content should
be structured so that it can later be connected to a CMS/API/database
without redesigning the public website.

### Brand identity

The supplied logo uses: - Black/dark background - Metallic gold emblem -
BBC monogram - Barbell imagery - Brick-wall motif - "PRO GYM"
lettering - Premium vintage/heritage badge styling

A public design case study for the BBC Pro Gym logo describes the brand
as an Aurangabad, Bihar fitness center and explains that the brick wall
in the mark references the heritage of Bajrang Bali Bricks Company.
Treat that history as brand context, not as a claim that must dominate
the website. \[Source: Behance --- BBC Pro Gym Logo System\]

------------------------------------------------------------------------

## 2. Verified/Public Business Information

### Name

**BBC Pro Gym**

### Category

Gym / Fitness Center

### Address

**Gayatri Nagar Ward No. 4, Mission School Road, Ratanua, Bihar 824101,
India**

### Public phone

**+91 87092 07893**

### Current Google/business listing signals

-   Rating: approximately **4.5/5**
-   Review count: approximately **174** on the current business listing
-   Category: Gym
-   Listed hours currently returned by the business listing:
    -   Monday: 05:00--21:00
    -   Tuesday--Saturday: 05:00--22:00
    -   Sunday: not returned by the current listing result; do not
        hard-code a Sunday schedule until the owner confirms it.

### Location

Use the owner's supplied Google Maps listing as the primary "Get
Directions" destination.

### Instagram

Public profile supplied by owner:
`https://www.instagram.com/bbcprogym/?hl=en`

The Instagram page could not be reliably fetched by the research
environment, so the website must **not invent follower counts, post
counts, services, offers, testimonials, or other Instagram-derived
facts**. The profile can still be linked as the official social
destination supplied by the owner.

------------------------------------------------------------------------

## 3. Product Goals

### Primary goals

1.  Make BBC Pro Gym look premium and credible online.
2.  Communicate what the gym offers within the first screen.
3.  Drive visitors toward:
    -   Call
    -   WhatsApp
    -   Get Directions
    -   Visit the gym
    -   Membership enquiry
4.  Showcase the real gym environment through high-quality photography.
5.  Improve local discoverability for searches related to BBC Pro Gym
    and gyms in Aurangabad.
6.  Provide a scalable foundation for a future dynamic platform.

### Secondary goals

-   Build trust using real photos, trainer information, facilities and
    member results/testimonials when approved.
-   Make the website fast on mobile networks.
-   Make the website accessible and SEO-friendly.
-   Make future content editable without changing the UI architecture.

------------------------------------------------------------------------

## 4. Target Users

### Primary

-   People in Aurangabad/Ratanua looking for a gym
-   Students and young professionals
-   Beginners starting fitness
-   People interested in strength/bodybuilding
-   People looking for structured training or personal guidance

### Secondary

-   Existing members looking for location/contact information
-   People discovering the gym through Google or Instagram
-   People comparing local gyms
-   Potential trainers/partners

------------------------------------------------------------------------

## 5. Information Architecture

### Required pages/sections for Phase 1

**Home** - Header/navigation - Hero - Trust/value proposition - About
BBC Pro Gym - Facilities - Training/services - Why train here -
Gallery - Testimonials - CTA - Location/contact - Footer

**About** - Brand story - Gym philosophy - Training environment -
Trainers/team - Facilities

**Services** - Strength training - Cardio - Personal training - Body
transformation guidance - Nutrition guidance - Group/training programs
if confirmed by the owner

**Gallery** - Gym interior - Equipment - Training - Exterior -
Community/events - Before/after only when permission is available

**Contact** - Phone - WhatsApp - Instagram - Google Maps - Address -
Opening hours - Enquiry CTA

------------------------------------------------------------------------

## 6. Hero Requirements

The hero must communicate the brand immediately.

### Suggested headline

**BUILD YOUR STRONGEST SELF.**

### Supporting copy

**Train with purpose. Build strength. Transform your body at BBC Pro
Gym, Aurangabad.**

Copy should remain editable because the owner may choose a different
final tagline.

### Hero actions

-   **Join / Enquire Now**
-   **Get Directions**
-   Secondary: **View Gallery**

### Hero visual direction

-   Dark/black cinematic gym photography
-   Gold highlights
-   Subtle motion
-   Strong typography
-   Logo visible but not oversized
-   Optional short looping background video later

Do not use generic stock gym imagery when real BBC Pro Gym photographs
are available.

------------------------------------------------------------------------

## 7. Conversion Requirements

Every major page should provide at least one clear action.

### Primary CTA hierarchy

1.  WhatsApp / Enquire
2.  Call
3.  Get Directions
4.  Instagram
5.  View facilities/gallery

Mobile should use a sticky bottom action bar: - Call - WhatsApp -
Directions

------------------------------------------------------------------------

## 8. Content Rules

### Must use

-   Real BBC Pro Gym logo supplied by owner
-   Real gym photographs supplied by owner
-   Real address
-   Real contact information
-   Real Google Maps location
-   Owner-approved testimonials
-   Owner-approved membership/pricing information

### Must not invent

-   Membership prices
-   Trainer names
-   Certifications
-   Exact equipment counts
-   "24/7" claims
-   Number of members
-   Number of years in operation
-   Awards
-   Celebrity/member claims
-   Transformation statistics
-   Medical/health guarantees

------------------------------------------------------------------------

## 9. SEO Requirements

Target local-intent phrases naturally: - BBC Pro Gym - BBC Pro Gym
Aurangabad - gym in Aurangabad Bihar - gym near Mission School Road -
gym in Ratanua - fitness center Aurangabad Bihar - bodybuilding gym
Aurangabad

### Required metadata

-   Unique title per page
-   Meta description
-   Open Graph image
-   Canonical URL
-   robots.txt
-   sitemap.xml
-   LocalBusiness/Gym structured data where appropriate

Do not keyword-stuff.

------------------------------------------------------------------------

## 10. Accessibility

-   WCAG-oriented contrast
-   Keyboard navigation
-   Visible focus states
-   Semantic headings
-   Alt text for meaningful images
-   Decorative images marked appropriately
-   Reduced-motion support
-   Buttons must have accessible names
-   Form errors must be understandable

------------------------------------------------------------------------

## 11. Phase 2 --- Future Dynamic Requirements

The architecture should later support: - Membership plans - Online
enquiry capture - Trial booking - Trainer profiles - Member login -
Attendance - Membership expiry - Payments - Workout plans - Diet plans -
Progress tracking - Announcements - Gallery/content management - Admin
dashboard - CRM/enquiry management

The Phase 1 public website should not pretend these features already
exist.

------------------------------------------------------------------------

## 12. Success Criteria

The Phase 1 website is successful when: - A new visitor understands what
BBC Pro Gym is within 5 seconds. - Location/contact actions are
obvious. - The site works well on mobile. - Images load efficiently. -
The visual identity consistently follows the black/gold BBC Pro Gym
brand. - The site has no fabricated business information. - Content is
structured for a future API/database migration. - The website can be
deployed as a static application.

------------------------------------------------------------------------

## 13. Source/Research Notes

Primary sources supplied by the owner: - Google Maps listing:
owner-provided URL - Instagram: owner-provided public profile

Additional public research used for validation: - Google/business
listing - Yappe.in business listing - iBihar business listing - Behance
BBC Pro Gym Logo System - Apple App Store listing for the BBC Pro Gym
app

The Apple listing indicates that a BBC Pro Gym app exists and describes
features including exercise, diet and step tracking, weekly diet
analysis, community updates and progress tracking. These are useful as
**future product context**, not requirements for the current static
website.
