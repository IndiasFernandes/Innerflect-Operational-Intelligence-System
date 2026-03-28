---
title: Repository Map
description: High-level map of Innerflect Ops—docs layer versus operational canonical paths.
sidebar_position: 21
doc_status: stable
---

# Repository Map

## Root

| Path | Role |
|------|------|
| [README.md](../../README.md) | Primary GitHub entry; philosophy, structure, contribution |
| [AGENTS.md](../../AGENTS.md) | AI operational contract for work in this repo |
| [CHANGELOG.md](../../CHANGELOG.md) | Optional human-readable release digest (alongside git history) |
| [ops/README.md](../../ops/README.md) | Top-level index for canonical `ops/` sections |
| [website/](../../website/) | Docusaurus app: builds `/docs/` + `/ops/` from `docs/` and `ops/` |

## `docs/` — documentation and navigation

| Path | Role |
|------|------|
| [docs/index.md](../index.md) | Docs home |
| [docs/getting-started/](../getting-started/) | Onboarding |
| [docs/system/](../system/) | Maps, taxonomy, linking |
| [docs/playbooks/](../playbooks/) | Hubs linking to playbook categories in `ops/` |
| [docs/templates/](../templates/) | Hub → `ops/03_templates/` |
| [docs/checklists/](../checklists/) | Hub → `ops/04_checklists/` |
| [docs/standards/](../standards/) | Docs-layer standards + pointers to core rules |
| [docs/archive/](../archive/) | Pointer to archive policy |
| [docs/docusaurus-recommendation.md](../docusaurus-recommendation.md) | Rationale for Docusaurus (site implementation: [`website/`](../../website/)) |
| [docs/sidebars-proposal.md](../sidebars-proposal.md) | Proposed sidebar IA |

**Convention:** `docs/**` uses `index.md` for folder entrypoints (Docusaurus-friendly).

## `ops/` — canonical operations

| Path | Role |
|------|------|
| [ops/00_governance/](../../ops/00_governance/) | Mission, versioning, naming, contribution, archiving |
| [ops/01_core-rules/](../../ops/01_core-rules/) | Reusable standards by domain |
| [ops/02_playbooks/](../../ops/02_playbooks/) | Executable playbooks by function |
| [ops/03_templates/](../../ops/03_templates/) | Reusable document templates |
| [ops/04_checklists/](../../ops/04_checklists/) | Quality gates |
| [ops/05_examples/](../../ops/05_examples/) | Reference outputs and anti-patterns |
| [ops/06_subagents/](../../ops/06_subagents/) | Future subagent briefs |
| [ops/07_skills/](../../ops/07_skills/) | Future Cursor skill specs |
| [ops/08_mcp-guides/](../../ops/08_mcp-guides/) | Future MCP integration guides |
| [ops/09_archive/](../../ops/09_archive/) | Superseded assets |

**Convention:** `ops/**` uses `README.md` for folder entrypoints (GitHub-native).

## Change protocol

When you move, rename, or add top-level areas:

1. Update this page.
2. Update affected `README.md` / `index.md` hubs.
3. Run [Docs quality review](../../ops/04_checklists/docs-quality-review.md) before merge.
4. Follow [Docs and site sync](../../ops/00_governance/docs-and-site-sync.md): same PR for canonical content and hub updates; verify `npm run build` in `website/` when navigation or cross-links change.

## Related documents

- [Taxonomy](taxonomy.md)
- [Inner linking conventions](inner-linking-conventions.md)
- [Docs and site sync](../../ops/00_governance/docs-and-site-sync.md)
