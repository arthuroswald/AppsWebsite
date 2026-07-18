# `src/lib` Agent Guide

Library modules contain small, pure, typed helpers.

- Keep locale, routing, and metadata concerns in focused files.
- Do not add React components, public copy, side effects, or catch-all utility modules.
- Prefer explicit exhaustive mappings over implicit string manipulation for localized URLs.
- Add abstractions only when at least two real callers share the behavior.

