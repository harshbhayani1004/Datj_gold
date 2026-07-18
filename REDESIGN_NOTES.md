# Ruprays website audit and redesign

## Isolation

This is a separate project copy. The original storefront and its existing `redesign/` folder were left untouched.

## Audit summary

The source storefront already provided a complete React shopping flow: multi-page routing, category browsing, product detail, local cart and wishlist state, sign-in UI, contact forms, and responsive layouts. The main issues were visual rather than functional:

- competing colour and type systems;
- a dense homepage with weak merchandising priority;
- inconsistent spacing, radius and page-header treatments;
- duplicated legacy page variants and starter assets;
- account, cart and concierge experiences that felt generic;
- red and burgundy accents that conflicted with the requested direction.

## New design system

- **Ink navy** for authority and premium contrast.
- **Warm ivory** for a calm editorial foundation.
- **Muted sage** for restrained interaction accents.
- **Antique gold** for jewellery-specific highlights.
- **Cormorant Garamond** with **Manrope** for classic display type and clear interface copy.
- Subtle square corners and fine rules in place of oversized rounded cards.

No red, pink, burgundy, purple, neon, or random high-saturation interface colour is used.

## Redesigned journeys

- Global announcement, navigation, mobile drawer and footer
- Homepage and category-led merchandising
- Collection listing, filters and sorting
- Product gallery, variants, size, quantity, delivery check, cart and wishlist actions
- Shopping bag and empty state
- Wishlist and empty state
- Sign-in, registration and authentication modal
- Brand story
- Concierge, appointment request and confirmation
- Site metadata and bespoke social-preview artwork

## Behaviour

Cart, wishlist and demo sign-in state remain device-local. Product filtering, sorting, variants, pincode feedback and contact confirmation remain interactive.
