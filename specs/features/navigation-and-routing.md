# Navigation And Routing Spec

## Purpose

Define stable, localized public URLs suitable for app stores and direct sharing.

## Expected Behavior

- Home routes are `/fr` and `/en`.
- Goalzy marketing routes are `/fr/goalzy` and `/en/goalzy`.
- Support routes are `/fr/goalzy/assistance` and `/en/goalzy/support`.
- Privacy routes are `/fr/goalzy/confidentialite` and `/en/goalzy/privacy`.
- Header, footer, app cards, and contextual links use the central route map.
- Unknown locale or app combinations return not found.

## Edge Cases

- Trailing-slash differences must not create duplicate page content.
- The root language gateway remains usable without JavaScript.

## V1 Non-Goals

- User accounts, protected routes, dashboards, and URL-shortening redirects.

## Acceptance Criteria

- Every App Store URL resolves directly to the expected language and subject.
- Internal navigation never relies on hard-coded duplicated paths.

