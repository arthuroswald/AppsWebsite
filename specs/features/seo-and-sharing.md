# SEO And Sharing Spec

## Purpose

Make public app information discoverable and correctly represented when shared.

## Expected Behavior

- Each page has localized title and description metadata.
- French and English equivalents expose language alternates.
- Canonical and Open Graph URLs use the configured production origin.
- Goalzy uses its approved icon for social imagery until dedicated artwork exists.
- Sitemap and robots enumerate indexable localized pages.

## Edge Cases

- Builds succeed without a configured production URL by using a documented local fallback.
- Private data, local filesystem paths, and draft metadata never enter public output.

## V1 Non-Goals

- Analytics, conversion tracking, structured review data, and generated social images.

## Acceptance Criteria

- Every indexable route has unique localized metadata.
- Sitemap, robots, canonical links, and alternates use the same route source.

