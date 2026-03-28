---
title: Naming Conventions
description: Kebab-case files, numbered ops folders, descriptive names, and stable playbook titles.
doc_status: stable
---

# Naming Conventions

## Files

- **Kebab-case** for markdown: `project-kickoff.md`, `release-readiness.md`.
- **No vague names**: avoid `misc.md`, `notes.md`, `temp.md`, `final.md`.
- Names should answer: **what procedure or artifact is this?**

## Folders under `ops/`

- Prefix with **two-digit order** where sequencing helps onboarding: `00_governance`, `01_core-rules`, …
- Category folders under playbooks use **lowercase single words**: `development`, `marketing`, `project-management`.

## Docs layer (`docs/`)

- Folder entry: **`index.md`**
- Use the same kebab-case filenames as operational counterparts when mirroring concepts (for example `how-to-use-this-repo.md`).

## Playbook titles

- H1 and frontmatter `title` should **match the file intent** and be readable in a sidebar.
- Prefer **verb-led** or **outcome-led** titles: “Weekly review”, “Repo bootstrap”, “Scope definition”.

## Headings inside documents

- Use stable, boring headings for the playbook schema (Purpose, When to use, …) so links and training stay predictable.

## Related documents

- [Taxonomy](../../docs/system/taxonomy.md)
- [Documentation standards](../01_core-rules/documentation-standards.md)
