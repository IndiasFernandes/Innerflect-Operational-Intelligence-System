---
title: Taxonomy
description: How Innerflect Ops classifies content—playbook categories, asset types, and naming patterns.
sidebar_position: 22
doc_status: stable
---

# Taxonomy

## Playbook categories

Playbooks live under `ops/02_playbooks/<category>/`. Each category maps to an operating function:

| Category | Folder | Typical use |
|----------|--------|-------------|
| Development | `development/` | Codebase lifecycle, tooling, audits, release |
| Marketing | `marketing/` | Research, positioning, funnel, campaigns |
| Branding | `branding/` | Core brand, visual direction, messaging, audits |
| Project management | `project-management/` | Client work, scope, kickoff, handoff |
| Sales | `sales/` | Outreach, sequences, calls, follow-up |
| Operations | `operations/` | Rhythm, decisions, process, knowledge |

## Asset types

| Type | Location | Description |
|------|----------|-------------|
| Playbook | `ops/02_playbooks/**/*.md` | Procedure + Cursor prompt + quality gates |
| Template | `ops/03_templates/*.md` | Reusable outline for deliverables |
| Checklist | `ops/04_checklists/*.md` | Binary pass/fail or sign-off lists |
| Core rule | `ops/01_core-rules/*.md` | Durable standards for a domain |
| Governance doc | `ops/00_governance/*.md` | Policy and repo mechanics |
| Example | `ops/05_examples/*.md` | Illustrations and contrasts |

## Naming

- Files: **kebab-case** (`project-kickoff.md`).
- Folders under `ops/`: **numbered prefixes** where order matters (`00_governance`, …).
- No vague names (`notes.md`, `temp.md`). Names should state intent.

## Status and review

Substantive pages use frontmatter `doc_status: draft | stable` and optional `last_reviewed: YYYY-MM-DD`. Governance defines review cadence in [Versioning and changelog (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/versioning-and-changelog.md).

## Related documents

- [Naming conventions (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/naming-conventions.md)
- [Repository map](repository-map.md)
