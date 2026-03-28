---
title: Example — Clean audit output
description: Fictional sample aligned with audit-template.md for calibration.
doc_status: stable
---

# Example: Clean audit output (fictional)

Aligned with [audit template](../03_templates/audit-template.md). Values are **illustrative**.

## Metadata

| Field | Value |
|-------|--------|
| Auditor(s) | Alex Kim |
| Date | 2025-03-01 |
| Scope in | `apps/web`, `packages/ui` |
| Scope out | Mobile apps, billing service |
| Repo / version / branch | `acme-app` @ `main` @ `a1b2c3d` |

## Executive summary

- **Top risks**: inconsistent error handling on checkout; large client bundle on marketing pages
- **Top opportunities**: shared form primitives; lazy-load heavy chart library

## Method

90-minute pass: traced primary user flows, ran bundle analyzer on marketing build, skimmed `packages/ui` exports for duplication.

## Findings

### F-001: Checkout errors leak implementation details

| Field | Detail |
|-------|--------|
| Severity | High |
| Area | Security / UX |
| Evidence | `apps/web/app/checkout/error.tsx` surfaces raw exception message in production build |

**Observation** — Users see stack fragments; support tickets include internal messages.

**Impact** — Trust and compliance risk; harder support triage.

**Recommendation** — Map errors to stable codes + human-safe copy; log details server-side only. Effort: M.

### F-002: Marketing home loads full analytics chart library upfront

| Field | Detail |
|-------|--------|
| Severity | Medium |
| Area | Performance |
| Evidence | Bundle report: `chart-vendor` chunk ~420kb on `/` (see `build/stats.html`) |

**Observation** — Above-fold hero does not need interactive charts.

**Impact** — Slower LCP on mobile networks.

**Recommendation** — Dynamic import chart module below fold; provide static placeholder. Effort: S.

## Prioritized backlog

| ID | Title | Severity | Owner | Target date |
|----|-------|----------|-------|-------------|
| F-001 | Sanitize checkout errors | High | Web | 2025-03-08 |
| F-002 | Lazy-load charts on marketing | Medium | Web | 2025-03-15 |

## Open questions

- Do we have a **global error taxonomy** yet, or per-surface only?

## Related documents

- [Full audit playbook](../02_playbooks/development/full-audit.md)
- [Audit template](../03_templates/audit-template.md)
