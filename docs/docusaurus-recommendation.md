---
title: Docusaurus recommendation
description: Why Docusaurus fits Innerflect Ops, how docs/ and ops/ map to a static site, and what to add to go live.
sidebar_position: 100
doc_status: stable
---

# Docusaurus recommendation

## Why Docusaurus

[Docusaurus](https://docusaurus.io/) is a strong fit for Innerflect Ops because it:

- Is **Markdown-first** with optional React for custom pages
- Supports **versioned docs** when you tag releases
- Produces **fast static sites** suitable for public or private hosting
- Has mature **search plugins** (Algolia, local)
- Aligns with **sidebar and frontmatter** conventions already used in `docs/`

## What already supports it

- `docs/` uses **`index.md`** entrypoints and **YAML frontmatter** (`title`, `description`, `sidebar_position`, `doc_status`)
- Content is **structured** with shallow nesting and hub pages
- Operational canon remains in **`ops/`**, avoiding duplicate playbook bodies in `docs/`

## Recommended site architecture

### Primary docs plugin (`docs/`)

Point the default `@docusaurus/plugin-content-docs` instance at the repository `docs/` folder. This renders getting started, system reference, standards, and **hubs**.

### Second docs plugin (`ops/`)

Add another plugin instance to render operational markdown as a separate section:

- `id: 'ops'`
- `path: '../ops'` (relative to site directory—adjust when scaffolding)
- `routeBasePath: 'ops'`

This preserves **single source of truth** while making playbooks browsable as HTML.

**Note:** You may want to exclude `ops/09_archive` via `exclude` patterns or a dedicated sidebar group labeled Archive.

## What you will add later

1. **Scaffold** a Docusaurus site (typically `website/` or `apps/docs/`) with `package.json`, `docusaurus.config.ts`, and `sidebars.ts`
2. Map [sidebars proposal](sidebars-proposal.md) into **`sidebars.ts`**
3. Configure **edit URLs** to GitHub for “Edit this page” (optional)
4. Add **search** (local or Algolia)
5. Decide **hosting** (GitHub Pages, Vercel, Netlify, internal static host)
6. Add **CI** to build on PRs and deploy on default branch

## Conventions to keep

- Continue using **relative links** where possible; verify Docusaurus link checker in CI
- Keep **`docs/` for explanation** and **`ops/` for executable assets**—the mental model should survive the site build

## Related documents

- [Sidebar proposal](sidebars-proposal.md)
- [Repository map](system/repository-map.md)
- [Documentation standards](standards/documentation-standards.md)
