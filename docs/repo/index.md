---
title: Repository
description: How this documentation site relates to the Git repo and what is published on the web.
sidebar_position: 12
doc_status: stable
---

# Repository

This repository is **docs-as-code**: Markdown in `docs/`, canonical operational assets in `ops/`, and a Docusaurus app in `website/` that builds a static site (for example GitHub Pages).

## Two routes in documentation

| Route | Folder | What it is |
|-------|--------|------------|
| **Product vision** | [`docs/vision/`](../vision/index.md) | Market and product narrative — outcome orchestration. |
| **Repository** | [`docs/repo/`](../repo/index.md) (this section) | How we work **in this repo**: navigation, stubs, playbooks surfaced on the site. |

## What appears on the static site

- **All** pages under `docs/` listed in the sidebar (unless excluded).  
- **`ops/`** — only **two** playbooks are included in the site build (see [Operational assets](operational-assets.md)). Everything else under `ops/` remains in GitHub and local clones.

## Canonical playbooks on the site

| Playbook | Purpose |
|----------|---------|
| [Deployment pipeline prompts (5-step)](/ops/playbooks/development/deployment-pipeline-prompts) | Five-prompt deployment sequence for mixed hosting. |
| [Full system coherence setup (Context7)](/ops/playbooks/development/full-system-coherence-setup) | Single prompt bundle for Cursor coherence (rules, skills, hooks). |

## Stub discipline

Pages labeled **`[Stub]`** in the sidebar are **placeholders**. They exist so the IA stays visible while content is written in priority order. Remove the stub label in frontmatter when a page is promoted to stable.

## Related

- [Using this site](using-this-site.md) — stub for contributor workflow.  
- [Roles and areas](roles-and-areas.md) — stub for operating roles vs product vision.  
- [System → Repository map](../system/repository-map.md) — directory map.
