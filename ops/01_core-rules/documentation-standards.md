---
title: Documentation Standards (ops layer)
description: Standards for operational Markdown in ops/—frontmatter, playbook schema, headings, and maintenance.
doc_status: stable
---

# Documentation Standards (`ops/`)

## Playbooks

- Follow the section order in [playbook template](../03_templates/playbook-template.md).
- **Cursor prompt** is a single fenced block; session-specific facts are added at runtime, not hard-coded client secrets.
- Every playbook ends with **Related documents** pointing to rules, templates, and checklists.

## Frontmatter

Use at minimum:

```yaml
---
title: Short human title
description: One line summary
doc_status: draft | stable
---
```

## Writing

- Prefer **short paragraphs** and **meaningful headings**—no essay intros.
- Use **tables** for indexes and decision matrices when they improve scan speed.
- Name files descriptively in **kebab-case** per [Naming conventions](../00_governance/naming-conventions.md).

## Docs layer alignment

The `docs/` tree follows [documentation-standards.md](../../docs/standards/documentation-standards.md). When concepts overlap, update **both** if the rule applies to each layer.

## Maintenance

When structure changes, update [Repository map](../../docs/system/repository-map.md) and affected README/index hubs in the same change.

## Related documents

- [Docs quality review](../04_checklists/docs-quality-review.md)
- [Avoiding duplication](../00_governance/avoiding-duplication.md)
