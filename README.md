# Roots of Balance (جذور التوازن)
## Holistic Wellness Coach & Professional Training Academy Platform

A production-grade, full-stack digital platform designed for independent Holistic Wellness Coach & Somatic Practitioner **Sarah T. Carr** and the **Roots of Balance Training Academy**.

---

## 🪷 Brand Identity & Strategic Customer Journeys

The platform serves two distinct core audiences with tailored conversion funnels and privacy-preserving analytics tracking:

* **Journey A (Personal Wellness Clients):**  
  `Homepage` &rarr; `Coaching Services` &rarr; `Select Service & Slot` &rarr; `Book Appointment` &rarr; `Instant Email Confirmation` &rarr; `Status Tracker`
* **Journey B (Aspiring Holistic Coaches):**  
  `Homepage` &rarr; `Training Academy Hub` &rarr; `Dynamic 9-Module Curriculum` &rarr; `Admissions Application` &rarr; `Faculty Review & Interview` &rarr; `Enrollment & Onboarding`

---

## 🏛️ Technology Stack & Architecture

* **Framework:** Next.js 15 (React 19, TypeScript, App Router)
* **Styling & Design System:** Tailwind CSS with an editorial palette:
  * Sand / Ivory (`#FAF8F5`, `#F3EFEA`)
  * Forest & Sage Green (`#4D7C66`, `#273E34`, `#E3EBE7`)
  * Terracotta / Warm Earth (`#BD6E4A`, `#24211E`)
  * Serif typography (`Playfair Display`, `Cormorant Garamond`) paired with modern sans (`Plus Jakarta Sans`)
* **Persistence & Database:** Atomic JSON/SQLite document engine (`./data/wellness.json`) with safe temp-file swap writes, preventing corruption during concurrent requests.
* **Authentication:** Secure cookie-based session management (`HMAC-SHA256` token verification, 7-day expiration).
* **Double-Booking Engine:** Real-time slot conflict prevention ensuring no two clients can book the same calendar slot simultaneously.
* **Marketing & Analytics Infrastructure:** 
  * Google Analytics 4 (`GA4`), Google Tag Manager (`dataLayer`), and Meta Pixel (`fbq`) dispatchers.
  * Privacy-first data filter strictly eliminating PII or sensitive health notes from third-party scripts.
  * Custom GDPR / ePrivacy Cookie Consent banner with granular preference toggling.
  * Dynamic `sitemap.xml`, `robots.txt`, and structured `JSON-LD` schemas (`LocalBusiness` & `EducationalOrganization`).

---

## 🧭 Page Routes & Site Map

| Route | Description |
| :--- | :--- |
| `/` | **Homepage**: Hero with dual-journey CTAs, philosophy, coaching overview, academy spotlight, testimonials & guide signup |
| `/about` | **About Sarah T. Carr**: Verified certifications (LMT, Attachment Coaching, CST), bio, and ethical scope |
| `/coaching` | **Coaching Services**: Filterable catalog of individual containers, objectives, duration, pricing & booking triggers |
| `/book` | **Appointment Booking System**: Live slot selection, double-booking prevention, online/in-person option, email confirmation |
| `/academy` | **Training Academy Hub**: Methodology, audience, dynamic 9-module curriculum, upcoming cohort dates & FAQ |
| `/academy/apply` | **Admissions Application**: Candidate questionnaire, motivation review, preferred format & confirmation code |
| `/blog` | **Educational Journal**: SEO-friendly articles, categories, estimated reading times, and author cards |
| `/blog/[slug]` | **Article Reader**: Full text, social share options, related insights & practitioner profile |
| `/contact` | **Contact & Channels**: Direct inquiry form, email (`rootsofbalance@outlook.com`), Instagram (`@roots__of_balance`), Telegram, YouTube |
| `/admin/login` | **Coach Authentication**: Secure sign-in portal |
| `/admin` | **Executive Dashboard**: KPIs, appointments calendar, academy application review, curriculum module manager, CMS & lead tracker |

---

## 🔐 Coach Administrator Credentials

* **Sign-in Route:** [`/admin/login`](http://localhost:3000/admin/login)
* **Username:** `admin`
* **Password:** `rootsbalance2026`

---

## 🚀 Running the Platform Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
The server will be available at [http://localhost:3000](http://localhost:3000).

