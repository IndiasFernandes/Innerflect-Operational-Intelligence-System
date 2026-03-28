---
title: Prompt Usage Model
description: How Innerflect uses prompts—playbooks as the unit of reuse, Cursor blocks as execution, quality gates as discipline.
doc_status: stable
---

# Prompt Usage Model

## Unit of reuse: the playbook

A **playbook** is the smallest reusable unit that is worth versioning. It bundles:

- **Intent** (purpose, when to use)
- **Inputs** (what you must gather first)
- **Execution logic** (ordered steps a human follows)
- **Cursor prompt** (instructions optimized for an AI session)
- **Quality checks** and **failure modes**

Ad-hoc prompts belong **inside** a session or ticket unless they generalize—then promote them into a playbook.

## Where prompts live

- **Canonical**: `ops/02_playbooks/<category>/<name>.md` in a fenced block titled **Cursor prompt**.
- **Not canonical**: chat threads, personal snippets, duplicated markdown in `docs/`.

## How teams should use them

1. Pick a playbook from the category README.
2. Paste or reference the **Cursor prompt** block into the tool, adding only **session-specific facts** (file paths, constraints, dates).
3. Save durable outputs using the relevant **template** in `ops/03_templates/`.
4. If the prompt stabilizes after several uses, **update the playbook** instead of forking a new file.

## AI tools and this repository

[AGENTS.md](../../AGENTS.md) defines default behavior when AI tools operate on this repo (research-first, no silent duplication, maintain indexes).

## Related documents

- [Adding a playbook](adding-a-playbook.md)
- [Prompt quality review](../04_checklists/prompt-quality-review.md)
