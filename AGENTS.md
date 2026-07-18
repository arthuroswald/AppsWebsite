# Apps Website Agent Guide

Follow this file and the nearest scoped `AGENTS.md`. This repository contains the
public, bilingual website for Arthur Oswald's apps.

## Scope

- Make implementation changes only inside AppsWebsite.
- Goalzy is a read-only product reference. Never edit, format, commit, or generate
  files in that repository.
- Ask before adding dependencies or changing the architecture or public URL scheme.
- Prefer the smallest change that satisfies the request. Avoid opportunistic refactors.

## Architecture

- `src/app/`: thin Next.js routes, layouts, metadata, sitemap, and robots.
- `src/screens/`: route-level page composition.
- `src/components/`: reusable, content-agnostic UI.
- `src/content/`: typed app catalog and localized public copy.
- `src/lib/`: pure locale, routing, and metadata helpers.
- `src/theme/`: shared and app-specific design tokens.
- `public/`: deployable assets copied into this repository.
- `docs/apps/`: factual product briefs with source commit traceability.
- `specs/`: living product behavior and acceptance criteria.

## Code Quality

- Keep files small, focused, and easy to scan. Give each file one primary responsibility.
- Routes route, screens compose, components render reusable UI, content files hold copy,
  helpers transform data, and theme files define tokens.
- Extract a section when it owns meaningful behavior, styling, or reuse. Do not split
  trivial markup into components merely to reduce line count.
- Move types, constants, and helpers out when they hide a file's main purpose.
- Colocate component-specific CSS Modules. Keep only genuinely shared values in theme.
- Prefer explicit names, typed props, and short functions over explanatory comments.
- Avoid catch-all utility files, unnecessary barrel exports, over-configurable generic
  components, deep import chains, and premature abstractions.
- Keep public copy, localized paths, and metadata in one typed source of truth.
- Use semantic HTML and accessible native controls. Preserve visible focus styles.

## Content And Specs

- Read the relevant screen and feature specs before changing visible behavior.
- Update specs in the same change when navigation, copy, localization, privacy,
  support, metadata, responsive behavior, or acceptance criteria change.
- Keep Goalzy claims aligned with its current implementation and living specs.
- Record the Goalzy commit whenever its product brief is materially refreshed.

## Dependencies And Commands

- Use pnpm and the repository scripts.
- Ask before adding any runtime or development dependency.
- Prefer `pnpm lint`, `pnpm typecheck`, `pnpm build`, and `pnpm check`.
- Do not add analytics, trackers, a CMS, a UI framework, a state manager, or an i18n
  package without explicit approval.

## Verification

- Run focused checks after changes and verify both languages independently.
- Check public routes, internal links, keyboard navigation, responsive layouts, and
  reduced-motion behavior when relevant.
- Report checks that were skipped or failed.

