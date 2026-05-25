# Dotta & Cunha Website

Bilingual (en/pt) marketing site for a Portuguese real-estate developer. Astro + Sveltia CMS, deployed to Netlify. Content is edited through the CMS at `/admin` and committed to GitHub.

## Commands

```bash
npm run dev      # local dev server (astro dev)
npm run build    # production build (astro build)
npm run preview  # preview the build
```

Node version: `lts/krypton` (see `.nvmrc`). There is no test suite or linter configured — verify changes by running `npm run build` and/or the dev server.

## Stack

- **Astro 6** with the Netlify adapter (`middlewareMode: 'edge'`, image CDN on).
- **Sveltia CMS** (`@sveltia/cms`) — git-backed CMS, GitHub backend (`DottaCunha/www.dottacunha.pt`), mounted at `/admin`.
- **Tailwind CSS 4** + **DaisyUI** (theme `dottacunha`, set via `data-theme` in `BaseLayout`).
- Google Fonts via Astro font providers: Inter (`--font-inter`), Space Grotesk (`--font-space-grotesk`).

## Architecture: the schema chain (read this first)

There is a **single source of truth** for content collections. Do not hand-write Zod schemas or TypeScript content types.

```
src/sveltia.config.ts   ← THE source. Defines CMS collections + fields.
        │
        ├──> src/sveltia-zod.ts      derives Zod schemas AND TS types from the config
        │
        └──> src/content.config.ts   wires those Zod schemas into Astro collections
```

- To change a content model (add a field, a block type, a collection): **edit `src/sveltia.config.ts`**. The Zod schema and TS types follow automatically.
- `src/sveltia-zod.ts` is generic, project-agnostic machinery (widget → Zod/type mapper). It maps scalar widgets, `object`/`list` (with `fields`), `select` → enums, and **`list` with `types`** (variable-type block lists) → a `z.discriminatedUnion` keyed on the list's `typeKey` (default `"type"`). You rarely edit it — only to support a _new widget kind_.
- `src/content.config.ts` calls `allCollectionSchemas(config)` and assigns the derived schema to each collection (`pages`, `projects`, `forms` all validate).
- **Consequence — declaring fields is mandatory:** content is validated against the config at build. A field used in content or read by a component **must** be declared in `sveltia.config.ts`, otherwise Zod strips it (data silently lost) or the build fails. This is by design — it's what keeps content, config, and components in sync.

## i18n

- Locales: `en`, `pt`. Default locale is `pt` (note: `astro.config.mjs` sets `defaultLocale: "en"` for routing but `prefixDefaultLocale: true`, so all URLs are prefixed — `/pt/...` and `/en/...`). The root `/` redirects by `Accept-Language` (see `src/pages/index.astro`).
- Content lives in per-locale folders: `src/content/<collection>/<lang>/<file>.md`. Entry ids look like `pt/homepage`, `en/about`.
- **CMS field i18n convention** (in `sveltia.config.ts`):
  - `i18n: true` → translatable text (headings, body, labels).
  - `i18n: "duplicate"` → value shared/copied across locales (images, numbers, enums, slugs, booleans). Follow this convention when adding fields.
- UI strings (nav, statuses, etc.) are NOT in the CMS — they live in `src/i18n/translations.ts`, accessed via `t(key, lang)` from `src/i18n/utils.ts`.
- **Where text belongs:** generic UI / affordance labels (nav, "View all projects", "Inquire", statuses) → `t()`. Editorial / section copy (a block's `label`/`heading`/`body`, project descriptions) → CMS content. Don't put boilerplate labels in per-page content.

## Block system (Pages)

The `pages` collection is **block-based**: each page is a `blocks` list rendered by `src/components/blocks/Blocks.astro`, which dispatches on `block.type`.

A page may **also** carry a long-form markdown `body` — the content below the frontmatter. The `[...slug]` route renders the blocks first, then the body via `src/components/Prose.astro`. So a page can be block-composed (homepage, about), a written document (privacy, terms — body only, no blocks), or both. This is how non-block pages (legal text, a future careers or FAQ page) are authored — no separate collection needed.

The `body` field is declared in `sveltia.config.ts` with `widget: markdown` and **`required: false`**: it maps to the markdown document body, not a frontmatter key, so the derived Zod schema must treat it as optional (it never appears in frontmatter). The route reads it via Astro's `render()`.

Block component Props are **derived from the schema**, not hand-written. `src/lib/blocks.ts` exports:

- `PageBlock` — the full discriminated union of page blocks (from the config).
- `BlockOf<'hero'>` — one variant by `type`; `BlockProps<'hero'>` — that variant minus the `type` key.

Each block component does `export type Props = BlockProps<'name'>`, so it can never drift from the config.

**To add a block type:**

1. Declare it under `blocks` → `types` in `sveltia.config.ts`.
2. Add `src/components/blocks/<Name>.astro` with `export type Props = BlockProps<'name'>`.
3. Add a dispatch branch in `Blocks.astro` (typed as `PageBlock[]`).

Current block types: `hero`, `section`, `projects`, `list`, `images`, `services`, `process`, `cta`.

`services` and `process` are bespoke to the services page (numbered service list with feature bullets, and the 4-step process grid). `services` items carry a `key` used as the section anchor id — the `list` block (variant `list`) links to `/services#<key>`, so keep keys stable.

**Field naming (layered convention):** within blocks and their repeatable items use `label` (eyebrow) / `heading` (headline) / `body` (prose). Collection records (`pages`, `projects`, `forms`) use `title` (identity) / `description` (summary). Don't mix the two vocabularies. (The `pages` collection's top-level `body` is the one exception — it's not a metadata field but the markdown document body itself.)

## Content collections & routing

| Collection | Content path            | Rendered by                                                                                         |
| ---------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| `pages`    | `src/content/pages/`    | `src/pages/[lang]/[...slug].astro` (catch-all, by `slug`) — homepage, projects, about, services, privacy, terms |
| `projects` | `src/content/projects/` | `src/pages/[lang]/projects/[slug].astro` + `[unitId].astro`; helpers in `src/lib/projects.ts`       |
| `forms`    | `src/content/forms/`    | consumed by the `cta` block (`variant: form`) via `getEntry`                                        |

Every page — block-composed or prose-only — is a `pages` entry served by the single `[...slug]` catch-all route. There are no dedicated per-page routes; the legacy `services.astro`, `privacy.astro`, and `terms.astro` routes have been retired.

## Deploy

Netlify. `astro.config.mjs` sets `site: 'https://dottacunha.pt'`, `trailingSlash: 'always'`, sitemap (excludes `/admin` and bare root), and image domains. Cloudflare web-analytics beacon is injected in `BaseLayout`.
