# PRD — Khadka Car Rental Service Website

## Original Problem Statement
Premium, world-class bilingual (English/Nepali) single-page website for Khadka Car Rental Service — a private travel service in Itahari, Nepal, run by owner/driver Sitaram Khadka with one vehicle (Tata Curvv EV). No fleet messaging, no online payments or fare calculator — all bookings via Call (9763743940) or WhatsApp (9802759592), "Call for Price" throughout. Dark premium automotive theme (black/graphite, electric blue, subtle Nepal red accents), cinematic motion, fully responsive.

## User Choices (confirmed)
- Single-page premium scroll site (all sections, smooth scroll nav)
- AI-generated car visuals (Gemini image generation, not stock photos)
- Booking form submits via WhatsApp deep link only — no backend storage

## Architecture
- Frontend: React 19 + Tailwind CSS + framer-motion (scroll reveals, kinetic hero, 3D tilt) + lenis (momentum scrolling), lucide-react icons, shadcn accordion
- i18n: `/app/frontend/src/i18n.js` — full EN/NE dictionary + LangContext; navbar EN/ने pill toggle switches all copy
- Images: AI-generated (Gemini Nano Banana via Emergent universal key), optimized to WebP (43–91 KB) in `/app/frontend/public/images/`
- Backend: FastAPI template retained (status endpoints only); no data persistence required by design
- Contact deep links: tel:+9779763743940, wa.me/9779802759592, Facebook sitaram.khadka.161, Google Maps embed (Itahari, dark-themed)

## User Personas
- Local residents (Itahari/eastern Nepal) needing airport, city, family travel
- Long-distance travelers (Kathmandu, Pokhara, tours)
- Event/wedding planners wanting a premium single car
- Nepali-speaking users (full NE language support)

## Implemented (2026-07)
- Kinetic hero: masked line-by-line headline reveal, mouse-tilt 3D car, parallax scroll, floating trust pills
- Slow editorial marquee strip
- About: 4 numbered manifesto chapters + owner quote
- Services: 8 glass cards, hover shine, per-service WhatsApp enquiry
- Vehicle showcase: spec chips / comfort-safety tabs, dual AI imagery
- Destinations: 9 route cards + custom destination, approx distances, per-route WhatsApp
- Reviews: 4 sample testimonials (labeled "Sample review"), share-experience CTA
- FAQ: 7-question accordion guiding to call/WhatsApp
- Booking form: 9 fields → prefilled WhatsApp deep link + thank-you state
- Contact: 4 info cards + dark Google Maps embed; footer with all details
- Floating pulsing WhatsApp button site-wide; sticky mobile Call/WhatsApp bar
- SEO meta + OG tags, WebP images, responsive across mobile/tablet/desktop

## Verification Status
- Confirmed: page loads 200, hero/vehicle/destinations/booking render, EN↔NE toggle, form → wa.me/9779802759592 prefilled message, success state, mobile sticky bar
- WhatsApp/phone delivery itself is external (deep links verified, not sent)

## Backlog
- P1: Replace sample reviews with real customer testimonials (owner to supply)
- P1: Optional real Tata Curvv EV press photos once owner approves
- P2: Blog/route guides for SEO; Google Business Profile link
- P2: Backend enquiry storage + admin list (if owner later wants records)

## Test Credentials
- No auth in this app. See /app/memory/test_credentials.md.
