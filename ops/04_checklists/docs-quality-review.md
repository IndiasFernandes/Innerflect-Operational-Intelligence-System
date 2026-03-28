---
title: Docs Quality Review Checklist
description: Review gate for Markdown changes—structure, links, frontmatter, duplication, hub updates.
doc_status: stable
---

# Docs Quality Review Checklist

## Structure and navigation

- [ ] New folders have `index.md` (`docs/`) or `README.md` (`ops/`) per convention
- [ ] Page answers: what, when to use, what is inside (for index pages)
- [ ] Heading hierarchy is logical (single H1 per page)

## Links and paths

- [ ] Internal links are **relative** and resolve from GitHub browse (where that is the intent)
- [ ] **`docs/` hubs** that list playbooks for the **static site** use **`/ops/...`** permalinks to match [Docs and site sync](../00_governance/docs-and-site-sync.md) (cross-plugin Docusaurus navigation)
- [ ] No duplicate canonical content between `docs/` and `ops/` without explicit reason
- [ ] [Repository map](../../docs/system/repository-map.md) updated if structure changed

## Docusaurus site (when hubs or `website/` changed)

- [ ] `cd website && npm run build` succeeds, or new failures from this change are fixed
- [ ] New playbooks appear in both the **Docs** hub row and the **Ops** sidebar (source under `ops/` is picked up automatically)

## Frontmatter (substantive pages)

- [ ] `title` and `description` present where used for site build
- [ ] `doc_status` reflects reality (`draft` vs `stable`)

## Writing

- [ ] No vague section titles (`misc`, `stuff`, `other`)
- [ ] Tables used where scan speed matters (indexes, maps)
- [ ] Short paragraphs; no bloated intro

## Governance

- [ ] Contribution expectations met per [Contribution rules](../00_governance/contribution-rules.md)

## Related documents

- [Docs and site sync](../00_governance/docs-and-site-sync.md)
- [Documentation standards (docs)](../../docs/standards/documentation-standards.md)
- [Documentation standards (ops)](../01_core-rules/documentation-standards.md)
