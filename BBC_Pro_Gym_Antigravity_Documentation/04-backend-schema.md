# BBC Pro Gym --- Backend Schema / Future Data Model

**Current phase:** No backend/database\
**Purpose:** Define the future schema now so Phase 2 can be implemented
without restructuring the frontend.

------------------------------------------------------------------------

## 1. Architecture

### Phase 1

``` text
Next.js Static Website
        |
        +-- Static TypeScript data
        |
        +-- Public assets
        |
        +-- External Google Maps
        +-- External Instagram
        +-- Phone / WhatsApp
```

### Phase 2

``` text
Next.js Frontend
       |
       v
API / Server Actions
       |
       v
PostgreSQL
       |
       +-- Members
       +-- Memberships
       +-- Plans
       +-- Trainers
       +-- Attendance
       +-- Payments
       +-- Enquiries
       +-- Workouts
       +-- Diet Plans
       +-- Progress
       +-- Content
       +-- Gallery
```

Recommended ORM: Prisma.

------------------------------------------------------------------------

## 2. Core Entities

### Gym

``` text
Gym
- id
- name
- slug
- description
- phone
- whatsappNumber
- email
- instagramUrl
- mapsUrl
- addressId
- logoUrl
- createdAt
- updatedAt
```

### Address

``` text
Address
- id
- line1
- line2
- locality
- city
- state
- postalCode
- country
- latitude
- longitude
```

Current known address:

``` text
Gayatri Nagar Ward No. 4
Mission School Road
Ratanua
Bihar 824101
India
```

Coordinates supplied through the owner's Google Maps URL:

``` text
24.7427364, 84.3650776
```

------------------------------------------------------------------------

## 3. User / Member Model

``` text
User
- id
- email
- phone
- passwordHash
- role
- firstName
- lastName
- dateOfBirth
- gender
- profileImageUrl
- isActive
- createdAt
- updatedAt
```

### Roles

``` text
ADMIN
MANAGER
TRAINER
MEMBER
STAFF
```

Never store plain-text passwords.

------------------------------------------------------------------------

## 4. Membership

``` text
MembershipPlan
- id
- name
- slug
- description
- durationDays
- price
- currency
- features[]
- isActive
- createdAt
- updatedAt
```

``` text
Membership
- id
- memberId
- planId
- startDate
- endDate
- status
- autoRenew
- createdAt
- updatedAt
```

Statuses:

``` text
ACTIVE
EXPIRED
CANCELLED
PAUSED
PENDING
```

------------------------------------------------------------------------

## 5. Payments

``` text
Payment
- id
- membershipId
- memberId
- amount
- currency
- provider
- providerPaymentId
- status
- paidAt
- createdAt
```

Statuses:

``` text
PENDING
SUCCESS
FAILED
REFUNDED
```

Payment provider integration should be added only in the dynamic phase.

------------------------------------------------------------------------

## 6. Attendance

``` text
Attendance
- id
- memberId
- gymId
- checkInAt
- checkOutAt
- method
- createdAt
```

Possible methods:

``` text
QR
MANUAL
RFID
BIOMETRIC
APP
```

Do not implement biometric functionality unless there is a specific
business/security requirement and proper consent/legal review.

------------------------------------------------------------------------

## 7. Trainer

``` text
Trainer
- id
- userId
- bio
- specialization
- certifications[]
- experienceYears
- profileImageUrl
- isActive
- createdAt
- updatedAt
```

Do not publish certification or experience information until verified by
the gym.

------------------------------------------------------------------------

## 8. Workout Plans

``` text
WorkoutPlan
- id
- memberId
- trainerId
- name
- goal
- notes
- startDate
- endDate
- createdAt
- updatedAt
```

``` text
WorkoutExercise
- id
- workoutPlanId
- exerciseName
- muscleGroup
- sets
- reps
- weight
- restSeconds
- notes
- order
```

------------------------------------------------------------------------

## 9. Diet Plans

``` text
DietPlan
- id
- memberId
- trainerId
- name
- goal
- caloriesTarget
- proteinTarget
- carbsTarget
- fatsTarget
- notes
- startDate
- endDate
- createdAt
- updatedAt
```

``` text
DietMeal
- id
- dietPlanId
- name
- time
- notes
- order
```

``` text
DietFood
- id
- dietMealId
- name
- quantity
- unit
- calories
- protein
- carbs
- fats
```

The future application should clearly distinguish general nutrition
information from medical advice.

------------------------------------------------------------------------

## 10. Progress Tracking

``` text
ProgressRecord
- id
- memberId
- recordedAt
- weightKg
- bodyFatPercent
- chestCm
- waistCm
- armCm
- thighCm
- notes
```

Only collect sensitive measurements that the gym actually needs.

------------------------------------------------------------------------

## 11. Enquiries

``` text
Enquiry
- id
- name
- phone
- email
- goal
- service
- message
- source
- status
- assignedTo
- createdAt
- updatedAt
```

Statuses:

``` text
NEW
CONTACTED
FOLLOW_UP
CONVERTED
CLOSED
```

Sources:

``` text
WEBSITE
INSTAGRAM
GOOGLE
WHATSAPP
REFERRAL
OTHER
```

------------------------------------------------------------------------

## 12. Website Content

The frontend should eventually read content from CMS/database entities.

### Page

``` text
Page
- id
- slug
- title
- metaTitle
- metaDescription
- content
- isPublished
- publishedAt
- createdAt
- updatedAt
```

### Section

``` text
Section
- id
- pageId
- type
- title
- subtitle
- content
- sortOrder
- isVisible
```

------------------------------------------------------------------------

## 13. Facilities

``` text
Facility
- id
- name
- slug
- description
- imageUrl
- isFeatured
- isActive
- sortOrder
```

------------------------------------------------------------------------

## 14. Services

``` text
Service
- id
- name
- slug
- shortDescription
- description
- imageUrl
- isActive
- sortOrder
```

------------------------------------------------------------------------

## 15. Gallery

``` text
GalleryImage
- id
- title
- altText
- imageUrl
- category
- sortOrder
- isPublished
- createdAt
- updatedAt
```

Categories:

``` text
INTERIOR
EQUIPMENT
TRAINING
COMMUNITY
EXTERIOR
EVENT
```

------------------------------------------------------------------------

## 16. Testimonials

``` text
Testimonial
- id
- name
- quote
- rating
- imageUrl
- source
- isApproved
- isFeatured
- createdAt
```

Only approved testimonials should appear publicly.

------------------------------------------------------------------------

## 17. Announcements

``` text
Announcement
- id
- title
- content
- imageUrl
- startsAt
- endsAt
- isPublished
- createdAt
- updatedAt
```

------------------------------------------------------------------------

## 18. Audit Log

``` text
AuditLog
- id
- userId
- action
- entity
- entityId
- metadata
- ipAddress
- createdAt
```

Use audit logs for important admin operations.

------------------------------------------------------------------------

## 19. Prisma Relationship Overview

``` text
User 1---N Membership
User 1---1 Trainer
User 1---N Attendance
User 1---N ProgressRecord

MembershipPlan 1---N Membership
Membership 1---N Payment

Trainer 1---N WorkoutPlan
WorkoutPlan 1---N WorkoutExercise

Trainer 1---N DietPlan
DietPlan 1---N DietMeal
DietMeal 1---N DietFood

Gym 1---N Attendance
Gym 1---1 Address

Page 1---N Section
```

------------------------------------------------------------------------

## 20. API Planning

Future endpoints:

``` text
GET    /api/gym
GET    /api/services
GET    /api/facilities
GET    /api/gallery
GET    /api/testimonials

POST   /api/enquiries

GET    /api/members/me
GET    /api/members/me/membership
GET    /api/members/me/attendance
GET    /api/members/me/workouts
GET    /api/members/me/diet
GET    /api/members/me/progress

POST   /api/auth/login
POST   /api/auth/logout

GET    /api/admin/dashboard
POST   /api/admin/members
PATCH  /api/admin/members/:id
POST   /api/admin/memberships
POST   /api/admin/payments
POST   /api/admin/gallery
```

API authorization must be role-based.

------------------------------------------------------------------------

## 21. Migration Strategy

### Step 1 --- Static

``` text
data/*.ts
```

### Step 2 --- Introduce typed repository layer

``` text
lib/repositories/
```

Example:

``` ts
interface GymRepository {
  getGym(): Promise<Gym>;
  getServices(): Promise<Service[]>;
  getFacilities(): Promise<Facility[]>;
}
```

### Step 3 --- Replace static repository with database repository

UI components remain unchanged.

``` text
UI
 ↓
Repository Interface
 ↓
Prisma Repository
 ↓
PostgreSQL
```

This is the key architectural decision that keeps Phase 1 maintainable.

------------------------------------------------------------------------

## 22. Database Principles

-   Use UUID/CUID IDs.
-   Add timestamps to mutable entities.
-   Add indexes to frequently queried fields.
-   Use unique constraints for emails/slugs where appropriate.
-   Store money in integer minor units where practical.
-   Store dates in UTC in the database.
-   Convert to local timezone for display.
-   Never store plaintext passwords.
-   Never expose internal IDs unnecessarily.
-   Validate all API inputs.
-   Enforce authorization server-side.

------------------------------------------------------------------------

## 23. Current Static-Phase Rule

**Do not build the backend now.**

Create: - TypeScript types - Static data objects - Repository interfaces
if useful - Clear component boundaries

Do not add: - PostgreSQL - Prisma migrations - Authentication - Payment
gateway - Member database - Admin dashboard

until the static website has been approved.

------------------------------------------------------------------------

## 24. Future Integration With Existing BBC Pro Gym App

Public research indicates that a BBC Pro Gym mobile app already exists,
published by Uplyft Innovations Private Limited. The public App Store
description mentions exercise, diet, steps, weekly diet analysis,
community updates and progress tracking.

If the gym's existing app/backend is actually in use, Phase 2 should
first investigate whether an API/integration is available before
duplicating those systems.

Do not assume the existing app's backend, database, API or
authentication can be accessed by this website.
