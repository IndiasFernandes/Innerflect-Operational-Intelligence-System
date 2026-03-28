---
title: Sidebar proposal (Docusaurus)
description: Proposed information architecture for a future Docusaurus sidebar—maps to docs/ and optionally ops/.
sidebar_position: 101
doc_status: stable
---

# Sidebar proposal

This is a **human-readable** sidebar plan. Implement as `sidebars.ts` when scaffolding Docusaurus.

## Primary sidebar (`docs` plugin)

**Intro**

- [Documentation home](index.md)

**Getting started**

- [Getting started](getting-started/index.md)
- [How to use this repo](getting-started/how-to-use-this-repo.md)

**System**

- [System](system/index.md)
- [Repository map](system/repository-map.md)
- [Taxonomy](system/taxonomy.md)
- [Inner linking conventions](system/inner-linking-conventions.md)

**Standards**

- [Standards](standards/index.md)
- [Documentation standards (docs layer)](standards/documentation-standards.md)

**Playbooks (hubs)**

- [Playbooks](playbooks/index.md)
- [Development](playbooks/development/index.md)
- [Marketing](playbooks/marketing/index.md)
- [Branding](playbooks/branding/index.md)
- [Project management](playbooks/project-management/index.md)
- [Sales](playbooks/sales/index.md)
- [Operations](playbooks/operations/index.md)

**Templates & checklists (hubs)**

- [Templates](templates/index.md)
- [Checklists](checklists/index.md)

**Archive**

- [Archive](archive/index.md)

**Site**

- [Docusaurus recommendation](docusaurus-recommendation.md)
- [Sidebar proposal](sidebars-proposal.md) (this page)

## Secondary sidebar (`ops` plugin, optional)

**Governance**

- `ops/00_governance/README.md` and children (mission, naming, contribution, …)

**Core rules**

- `ops/01_core-rules/README.md` and domain standards

**Playbooks**

- Category README + playbook files per folder

**Templates / checklists / examples**

- `ops/03_templates/README.md`
- `ops/04_checklists/README.md`
- `ops/05_examples/README.md`

**Future**

- `ops/06_subagents/README.md`
- `ops/07_skills/README.md`
- `ops/08_mcp-guides/README.md`

**Archive**

- `ops/09_archive/README.md` (collapsed; clearly labeled)

## Labels

Use short **sidebar labels** where filenames are verbose (for example: “How to use” instead of a long path).

## Related documents

- [Docusaurus recommendation](docusaurus-recommendation.md)
