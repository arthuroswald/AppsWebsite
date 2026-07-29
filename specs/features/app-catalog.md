# App Catalog Spec

## Purpose

Allow the site to add apps without duplicating its architecture.

## Expected Behavior

- Each app has a stable ID, localized name, summary, metadata, routes, theme, and assets.
- Required localized fields are enforced by TypeScript.
- Optional store links render only when provided.
- The home page derives its cards from the catalog.

## Edge Cases

- One app uses the same layout quality as several apps.
- Missing optional artwork has a meaningful accessible fallback.

## V1 Non-Goals

- CMS editing, runtime fetching, remote configuration, and arbitrary page builders.

## Acceptance Criteria

- Goalzy is represented by one catalog entry.
- Goalzy's catalog entry exposes its verified generic App Store URL.
- A future app can reuse the shared screen contracts without changing Goalzy content.
