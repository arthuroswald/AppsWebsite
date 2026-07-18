# `src/screens` Agent Guide

Screens compose complete public pages rendered by routes.

- Read the matching file in `specs/screens/` before changing a screen.
- Keep content in `src/content`; screens choose and arrange it.
- Split meaningful page sections into local components when they own distinct styling
  or behavior, but keep one-off trivial markup in the screen.
- Promote UI to `src/components/` only when it is reused or clearly site-wide.
- Update specs with any visible behavior or copy contract change.

