# Apps Website

Static, bilingual website for Arthur Oswald's apps. It provides marketing, support,
and privacy URLs suitable for the App Store and, later, Google Play.

Goalzy is the first published app. Its separate repository is a read-only product
reference: never edit it from this project. The Goalzy brief records the exact source
commit used for public claims.

## Requirements

- Node.js 24 LTS recommended (`.nvmrc`); Node.js 22 or later is supported.
- pnpm 10.17.1, managed through Corepack.

```bash
corepack enable
corepack prepare pnpm@10.17.1 --activate
pnpm install
```

## Start locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root page chooses French for
a French browser and English otherwise. A visible language switcher remembers manual
choices in the browser.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Check TypeScript without emitting files |
| `pnpm build` | Create the production build |
| `pnpm start` | Serve the production build locally |
| `pnpm check` | Run lint, typecheck, and build |

## Project structure

```text
docs/apps/       Product briefs and source commit traceability
public/          Deployable app artwork and self-hosted fonts
specs/screens/   Page-level behavior contracts
specs/features/  Cross-page behavior contracts
src/app/         Thin Next.js routes, layouts, metadata, sitemap, robots
src/screens/     Page composition
src/components/  Reusable accessible UI
src/content/     Typed app catalog and all localized public copy
src/lib/         Pure locale, route, and metadata helpers
src/theme/       Shared and app-specific design tokens
```

Read the root and nearest scoped `AGENTS.md` before editing a directory. Update the
matching spec whenever public behavior, copy contracts, navigation, localization,
support, privacy, accessibility, or metadata changes.

## Public routes

| Subject | English | French |
| --- | --- | --- |
| Apps | `/en` | `/fr` |
| Goalzy | `/en/goalzy` | `/fr/goalzy` |
| Goalzy support | `/en/goalzy/support` | `/fr/goalzy/assistance` |
| Goalzy privacy | `/en/goalzy/privacy` | `/fr/goalzy/confidentialite` |

Localized paths are explicit and centralized. Do not construct them by translating
individual path segments at runtime.

## Add another app

1. Create `docs/apps/<app-id>.md` from verified product sources and record the commit.
2. Copy approved assets to `public/apps/<app-id>/` and record their provenance.
3. Add the app ID, localized paths, metadata, and content to `src/content`.
4. Add app-specific tokens to `src/theme` only when the shared theme is insufficient.
5. Reuse the marketing, support, and privacy screen contracts; create new UI only for
   genuinely different product needs.
6. Add or update screen and feature specs before changing visible behavior.
7. Run `pnpm check` and verify every new route in both languages.

Required localized fields are enforced by TypeScript. Store URLs are optional and
must not render until a real destination is available.

## Production URL and metadata

Set `NEXT_PUBLIC_SITE_URL` to the final origin, without a trailing slash, so canonical,
Open Graph, sitemap, and robots URLs use the custom domain:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

Without it, development and preview builds use `http://localhost:3000`. This variable
is public configuration, not a secret.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel and keep the detected Next.js settings.
3. Set `NEXT_PUBLIC_SITE_URL` after connecting the production domain.
4. Deploy, then verify every route in the table above, the language switcher, email
   links, sitemap, robots, and social metadata.

No database, server API, CMS, analytics service, or secret is required.

## Refresh Goalzy content

Read Goalzy's root and relevant scoped `AGENTS.md`, product specs, implementation, app
configuration, privacy manifest, and brand assets. Update `docs/apps/goalzy.md` with the
new commit and modify the site content/specs in the same change. Goalzy itself must
remain untouched.

