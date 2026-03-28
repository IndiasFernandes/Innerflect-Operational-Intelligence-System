---
title: Avoiding Duplication
description: Rules to keep a single source of truth—no parallel prompts, no duplicated playbook bodies between docs and ops.
doc_status: stable
---

# Avoiding Duplication

## Golden rules

1. **One active playbook** per procedure. If two files overlap, merge or archive the weaker one.
2. **No duplicated bodies** between `docs/` and `ops/`. Docs hubs **link**; they do not copy the Cursor prompt.
3. **Templates are referenced**, not pasted wholesale into every playbook—link to `ops/03_templates/`.
4. **Research outputs** cite sources once; do not fork “summary of summary” documents without new synthesis.

## When duplication seems faster

Duplication is faster for one person **once** and expensive for the org **forever**. Prefer:

- Adding a **short subsection** to an existing playbook
- Adding a **link** in **Related documents**
- Creating a **checklist item** that points to the canonical procedure

## Detection heuristics

During review, ask:

- Does this text already exist elsewhere? If yes, **link or extract** to one place.
- Does this introduce a second name for the same workflow? **Rename** to match taxonomy.
- Does this duplicate a Cursor prompt from another playbook? **Differentiate** the “When to use” or merge.

## Related documents

- [Prompt usage model](prompt-usage-model.md)
- [Contribution rules](contribution-rules.md)
