# Localization Spec

## Purpose

Serve complete French and English experiences through stable localized URLs.

## Expected Behavior

- `/` prefers the user's stored choice, then the browser language.
- French browser languages go to `/fr`; all other languages fall back to `/en`.
- A no-JavaScript fallback exposes direct French and English links.
- A visible selector maps the current page to its explicit translated equivalent.
- English and French stay in a fixed order and fixed-width control so selection never shifts the layout.
- Manual selection persists locally and overrides later browser detection.
- Every document declares its actual `lang`.

## Edge Cases

- Unknown locales return a real not-found response.
- Storage failures do not block navigation.
- Localized routes use explicit mappings rather than translated string substitution.

## V1 Non-Goals

- Region-specific variants, automatic copy translation, and server-side negotiation.

## Acceptance Criteria

- Every public page exists in both languages.
- Switching language preserves page intent.
- Unsupported browser languages reliably receive English.
