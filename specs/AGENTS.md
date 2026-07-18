# `specs` Agent Guide

Specs are lightweight living product contracts, not implementation documentation.

- Screen specs live in `specs/screens/`; cross-screen behavior lives in `specs/features/`.
- Describe purpose, expected behavior, edge cases, V1 non-goals, and acceptance criteria.
- Keep specs stable and concise. Do not enumerate internal components or functions.
- Update the matching spec in the same change as visible behavior, content, navigation,
  localization, privacy, support, accessibility, or SEO behavior.
- If code and spec disagree, align them in the current change.

