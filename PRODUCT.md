# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Travelers:** anyone eager to travel Venezuela, whether friends or family planning a getaway, people coming back home, or first-time visitors. Group trips are the central situation: several people deciding who goes, what each joins, and who pays what.
- **Providers:** anyone offering a tourism service inside Venezuela, such as hotels, posadas, holiday rentals, activities and tours, restaurants, drivers and transfers, car rental, boats and ferries, and flights.

## Product Purpose
lesgouapp.com is the pre-launch site for the Lesgou mobile app (Expo app + Laravel API in `~/Projects2/vayalo-app`). It has three jobs:
1. Make travelers understand and want Lesgou, then collect them on a launch waitlist at a separate link-only page.
2. Let providers get in touch through a contact form, WhatsApp, or email.
3. Explain the product honestly while the app is unreleased.

## Positioning
Lesgou connects the whole trip (lodging, flights, transfers, boats, activities, restaurants) in one place, and it is built for travelling **as a group**:
- Invite people by WhatsApp link or username ("¿Quiénes van?").
- Each person picks what they join and pays their own part from their phone ("Cuentas del viaje").
- People can pay for someone else, including minors who need guardian context.
- Group-size logistics are handled, e.g. boats for 20 people.
- Travelers are notified if something changes before they pay.
- Local payment methods are supported: Pago móvil, transfers, Bs at the BCV rate.

Single services can also be booked without building a whole trip.

## Operating Context
- Launch destinations: Margarita and Morrocoy, with more of Venezuela teased ("y lo que viene").
- The site is bilingual: Spanish is primary, and English uses `data-en` attributes swapped by `script.js`.
- The waitlist lives at a separate URL reached only by shared links (Instagram, WhatsApp, ads). It is not indexed, and the main site reaches it only through subtle entry points.
- After signing up, the visitor is redirected to the main site, and the browser remembers the signup.
- The waitlist teaser displays an owner-requested promotional baseline of 250 plus confirmed web signups. The baseline is a display offset, not 250 database records or a verified user metric. Internal reporting must use the actual `waitlist` row count.
- A read-only `waitlist-count` Edge Function exposes only the actual aggregate. Contact details remain private, and duplicate emails do not add to the total.
- The counter refreshes on load, every 30 seconds while visible, and after a successful signup. Its Edge Function validates the project's publishable API key itself (`verify_jwt: false`); server credentials come only from the hosted function environment. Tests: `node --test tests/waitlist-count.test.mjs`.
- Waitlist fields: country, first name, last name, email, phone with country prefix, and cédula (V/E) only when the country is Venezuela.
- An Instagram contest runs separately on Instagram and is not mentioned on the site.

## Capabilities and Constraints
- Static HTML/CSS/JS with no build step. Assets live in `/assets` and the Manrope variable font is self-hosted.
- Form submissions are stored in the `lesgou-web` Supabase project in Diego's ENV. Visitors can insert form fields only; waitlist and provider submissions remain private. Provider follow-up is manual.
- Provider contact: WhatsApp +58 424-4500211 and email diegosilva06092001@gmail.com, as the user explicitly provided.
- Commission-based model for providers. Terms are defined per service type at onboarding.

## Brand Commitments
- Name: Lesgou. The logo is a teal "G" shaped as a map pin, with a "lesgou" wordmark (`assets/lesgou-logo.png`).
- Palette (user-confirmed): navy #19244e, blue #28469e, teal #2fbfa6, mango #f5a220, white.
- The site must feel like the same product as the mobile app (see Evidence).
- Slogan in use: "Que lo difícil sea volver."
- Voice: short, confident, present-tense lines (the user asked for "Apple power words"). Venezuelan Spanish, warm but not slangy.

## Evidence on Hand
- App walkthrough video: `~/Projects2/VIDEO-2026-10-16-13-51-37.mp4`. App flows deck: `~/Projects2/Lesgou - Margarita y Morrocoy v2.pdf` (26 pages).
- Photos: `assets/morrocoy.webp` (Cayo Sombrero, CC BY-SA 3.0, AndreaC11) and `assets/margarita.webp` (Playa El Agua, CC BY-SA 4.0, Juan Pablo Jaimes). Both need attribution.
- **No real providers, prices, or business names may appear.** No contracts exist yet. App-style examples must use generic descriptors (e.g. "Posada frente al mar", "Chofer por día"), fictional traveler first names, and amounts clearly framed as examples. Public place names (Juan Griego, Playa El Agua, Cayo Sombrero) are fine.
- No testimonials, press, or partner logos exist. Do not fabricate them. The waitlist display offset is the explicit exception documented above; it must not be reused as real traction in other materials.

## Product Principles
1. The group is the protagonist: every feature is shown through people travelling together.
2. Tease, don't claim: show how the experience works without promising unconfirmed inventory or prices.
3. One product, two surfaces: the site should feel like stepping into the app.
4. Respect the visitor's time: one waitlist submission, remembered, and never asked again.

## Accessibility & Inclusion
WCAG AA contrast on the dark theme, full keyboard operation of every interactive mockup, and `prefers-reduced-motion` honored for all scroll and fidget motion. The site must work at phone width, which is where most traffic from Instagram and WhatsApp arrives.
