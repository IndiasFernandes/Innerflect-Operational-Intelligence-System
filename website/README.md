# Innerflect Ops — Docusaurus site

This folder is the **Docusaurus v3** app that renders repository Markdown as HTML:

- **`../docs/`** — documentation layer (`/docs/...`)
- **`../ops/`** — canonical operations (`/ops/...`, `ops/09_archive` excluded)

## Prerequisites

- Node.js 20+

## Install

```bash
npm install
```

## Local development

```bash
npm start
```

Opens a dev server (default [http://localhost:3000](http://localhost:3000)) with live reload.

## Production build

```bash
npm run build
```

Output: `website/build/`. Test it locally:

```bash
npm run serve
```

## GitHub Pages

CI builds with `DOCUSAURUS_URL` and `DOCUSAURUS_BASE_URL` set to match the GitHub Pages URL. After the first deploy, enable **Pages** → source **Deploy from a branch** → branch **`gh-pages`** → `/ (root)`, or use your org’s preferred Pages setup.

## Markdown vs MDX

Site config uses **CommonMark** for all `.md` files so `{placeholders}` in templates are not parsed as MDX. Use `.mdx` if you need JSX in a page.
