---
title: Contribution Rules
description: How to contribute to Innerflect Ops—review expectations, hub updates, and quality gates.
doc_status: stable
---

# Contribution Rules

## Before you write

1. Search for an **existing playbook** or template that fits—extend it before adding a parallel file.
2. Read [Avoiding duplication](avoiding-duplication.md) and the relevant **category README** in `ops/02_playbooks/`.

## Pull request expectations

- **One logical change** per PR when possible (easier to review and revert).
- **Docs and site sync**: follow [Docs and site sync](docs-and-site-sync.md)—canonical changes under `ops/` ship with updated hubs, and Docusaurus navigation is verified when links or indexes change.
- Update **hubs**: category `README.md`, matching `docs/playbooks/.../index.md`, and [Repository map](../../docs/system/repository-map.md) if structure changed.
- Run or self-apply [Docs quality review](../04_checklists/docs-quality-review.md) and [Prompt quality review](../04_checklists/prompt-quality-review.md) when applicable.

## Style

- Follow playbook schema in [playbook template](../03_templates/playbook-template.md).
- Prefer **short paragraphs**, **explicit lists**, and **tables** for indexes.
- No confidential data in examples—use fictional companies and redacted figures.

## Ownership

Teams may own categories, but **governance owns taxonomy**. If a new category is needed, open a discussion and update governance docs in the same change.

## Related documents

- [Docs and site sync](docs-and-site-sync.md)
- [Adding a playbook](adding-a-playbook.md)
- [Git and GitHub standards](../01_core-rules/git-github-standards.md)
