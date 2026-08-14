# App Marketing Screen Spec

## Purpose

Explain an app's promise and current public features concisely.

## Expected Behavior

- Goalzy's page presents its playful decision positioning, five-step flow, four modes,
  twelve arena experiences, result sharing, local history, choice customization, and
  principal benefits.
- The modes section identifies Goalzy 1.3.0 as the first version containing Pétanque
  Arcade, rugby, boxing, MMA, and sumo, and advises visitors to update the app when
  those settings are missing.
- A localized App Store action appears in the hero when a verified store URL exists.
- The app theme may be expressive while shared header and footer remain consistent.
- Support and privacy pages are directly reachable.
- No store action or availability claim appears until a valid store URL exists.

## Edge Cases

- Long localized headings and descriptions wrap without hiding artwork.
- Missing optional store links do not leave empty controls.

## V1 Non-Goals

- Interactive game demo, video, testimonials, pricing, and download tracking.

## Acceptance Criteria

- A new visitor understands Goalzy without knowing the mobile app.
- Every claim matches the Goalzy brief and current implementation.
- The page remains readable without images or client-side JavaScript.
