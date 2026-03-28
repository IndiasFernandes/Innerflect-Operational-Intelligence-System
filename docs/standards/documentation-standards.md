---
title: Documentation Standards (docs layer)
description: Conventions for Markdown in docs/—frontmatter, headings, naming, and hubs.
sidebar_position: 51
doc_status: stable
---

# Documentation Standards (`docs/`)

## Scope

This page applies to **`docs/`**—navigation, explanation, and hubs. Operational prose in **`ops/`** follows [`ops/01_core-rules/documentation-standards.md`](../../ops/01_core-rules/documentation-standards.md) and must stay aligned with this layer.

## Folder entrypoints

- Use **`index.md`** per folder (works well with Docusaurus defaults).
- Each index explains: what the section is, when to use it, what is inside, how to pick the right child page.

## Frontmatter

Use YAML frontmatter on substantive pages:

```yaml
---
title: Page title
description: One line for SEO and sidebars
sidebar_position: 10
doc_status: draft | stable
last_reviewed: YYYY-MM-DD
tags:
  - onboarding
---
```

## Writing style

- Short paragraphs, clear heading hierarchy, no bloated intros.
- Prefer tables for scan-heavy indexes (playbook lists, maps).
- Avoid vague section names (`misc`, `other`, `stuff`).

## Linking

- Link to **canonical** assets in `ops/` rather than duplicating them.
- Follow [Inner linking conventions](../system/inner-linking-conventions.md).

## File naming

- Kebab-case filenames: `how-to-use-this-repo.md`.
- Descriptive names; no `final-v2.md`.

## When you change structure

Update [Repository map](../system/repository-map.md) and any affected hub `index.md` files in the same change.

## Related documents

- [Ops documentation standards](../../ops/01_core-rules/documentation-standards.md)
- [Contribution rules](../../ops/00_governance/contribution-rules.md)
