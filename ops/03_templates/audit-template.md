---
title: Audit Template
description: Structured findings for technical, UX, or performance audits—scope, severity, evidence, recommendations.
doc_status: stable
---

# Audit: {system or surface}

## Metadata

| Field | Value |
|-------|--------|
| Auditor(s) | |
| Date | |
| Scope in | |
| Scope out | |
| Repo / version / branch | |

## Executive summary

- **Top risks** (max 3)
- **Top opportunities** (max 3)

## Method

How evidence was gathered (timeboxed exploration, profiling tools, heuristics, user flows, etc.).

## Findings

For each finding, use one block:

### F-001: {short title}

| Field | Detail |
|-------|--------|
| Severity | Critical / High / Medium / Low |
| Area | Security / Correctness / UX / Performance / Maintainability / Docs |
| Evidence | File path, metric, screenshot reference, repro steps |

**Observation** — What is wrong or fragile.

**Impact** — Who suffers and how.

**Recommendation** — Specific next step; optional effort (S/M/L).

## Prioritized backlog

| ID | Title | Severity | Owner | Target date |
|----|-------|----------|-------|-------------|
| F-001 | | | | |

## Open questions

- 

## Related documents

- [Full audit playbook](../02_playbooks/development/full-audit.md)
- [UI/UX audit playbook](../02_playbooks/development/ui-ux-audit.md)
- [Performance audit playbook](../02_playbooks/development/performance-audit.md)
