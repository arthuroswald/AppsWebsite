# `src/app` Agent Guide

`src/app` is owned by the Next.js App Router.

- Keep routes thin: validate params, create metadata, and render a screen.
- Do not put localized copy, reusable UI, or substantial page composition here.
- Use layouts for shared document and navigation boundaries.
- Generate all supported locales statically.
- Keep sitemap, robots, canonical URLs, and language alternates consistent with specs.

