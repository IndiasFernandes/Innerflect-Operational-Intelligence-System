---
title: Repository Map
description: High-level map of Innerflect Ops—docs layer versus operational canonical paths.
sidebar_position: 21
doc_status: stable
---

# Repository Map

**Browse the full tree on GitHub:** [Innerflect_Operational_Intelligence_System](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System)

## Root (repository)

| Path | Role |
|------|------|
| `README.md` | Primary GitHub entry; philosophy, structure, contribution |
| `AGENTS.md` | AI operational contract for work in this repo |
| `CHANGELOG.md` | Optional human-readable release digest |
| [`ops/README.md`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/README.md) | Top-level index for canonical `ops/` sections |
| `website/` | Docusaurus app: builds `/docs/` from `docs/`; `/ops/` on the site is **limited** to [included playbooks](../repo/operational-assets.md) |

## `docs/` — documentation and navigation

| Path | Role |
|------|------|
| [docs/index.md](../index.md) | Docs home |
| [docs/vision/](../vision/index.md) | **Route** — product vision (outcome orchestration) |
| [docs/repo/](../repo/index.md) | **Route** — repository and site mechanics |
| [docs/by-role/](../by-role/index.md) | **By role** — tailored paths per role |
| [docs/system/](../system/) | Maps, taxonomy, roles × business areas, linking |

**Convention:** `docs/**` uses `index.md` for folder entrypoints (Docusaurus-friendly).

**Stubs:** Pages labeled `[Stub]` in the sidebar are placeholders until promoted to stable content.

## `ops/` — canonical operations (GitHub)

| Path | Role |
|------|------|
| [`ops/00_governance/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/00_governance) | Mission, versioning, naming, contribution, archiving |
| [`ops/01_core-rules/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/01_core-rules) | Reusable standards by domain |
| [`ops/02_playbooks/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/02_playbooks) | Executable playbooks by function |
| [`ops/03_templates/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/03_templates) | Reusable document templates |
| [`ops/04_checklists/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/04_checklists) | Quality gates |
| [`ops/05_examples/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/05_examples) | Reference outputs and anti-patterns |
| [`ops/06_subagents/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/06_subagents) | Future subagent briefs |
| [`ops/07_skills/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/07_skills) | Future Cursor skill specs |
| [`ops/08_mcp-guides/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/08_mcp-guides) | Future MCP integration guides |
| [`ops/09_archive/`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/tree/main/ops/09_archive) | Superseded assets |

**Convention:** `ops/**` uses `README.md` for folder entrypoints (GitHub-native).

**Static site note:** The Docusaurus `ops` plugin uses an **`include`** list in [`website/docusaurus.config.ts`](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/website/docusaurus.config.ts). Only included files get `/ops/...` URLs on the built site.

## Change protocol

When you move, rename, or add top-level areas:

1. Update this page.
2. Update affected `README.md` / `index.md` hubs.
3. Run [Docs quality review](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/04_checklists/docs-quality-review.md) before merge.
4. Follow [Docs and site sync](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/docs-and-site-sync.md): same PR for canonical content and hub updates; verify `npm run build` in `website/` when navigation or cross-links change.

## Related documents

- [Taxonomy](taxonomy.md)
- [Inner linking conventions](inner-linking-conventions.md)
- [Docs and site sync (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/docs-and-site-sync.md)
