---
title: "Conversion analysis"
description: "Diagnose funnel leaks with hypotheses, evidence, and prioritized experiments—not random CTA tweaks."
doc_status: draft
tags:
  - playbook
---

# Conversion analysis

## Purpose

Diagnose funnel leaks with hypotheses, evidence, and prioritized experiments—not random CTA tweaks.

## When to use

- Pipeline or signup flow underperforms benchmarks.
- You need an experiment backlog tied to metrics.

## Inputs required

- Funnel steps and metric definitions
- Recent changes to product or pricing

## Step-by-step execution logic

1. Confirm fit using [the category README](./README.md); adjust scope if boundaries are unclear.
2. Gather inputs; record unknowns explicitly instead of guessing sensitive facts.
3. Run the **Cursor prompt** below; append session-specific constraints, paths, dates, and stakeholders at the end.
4. Save outputs using the closest template under `../../03_templates/` or your project doc system.
5. Complete the **Quality checks**; link artifacts in tickets or PRs.

## Cursor prompt

```text
You are assisting Innerflect on: Conversion analysis.

Rules:
- Research-first: read existing docs and repo context before recommending changes.
- Reuse Innerflect templates and playbooks; avoid parallel undocumented procedures.
- Never output secrets; ask concise questions if blocked.
- Use these output headings exactly:

## Summary
## Plan
## Deliverables (artifacts + paths if applicable)
## Risks & unknowns
## Next steps (owners + dates)

Task:
Execute "Conversion analysis" for the user's context. If the request spans multiple playbooks, say which playbook should own each part.

Category: marketing
Playbook file: conversion-analysis.md
```

## Expected output

- Sections matching the Cursor prompt headings
- Concrete next steps with owners where possible
- TODO: SME may extend **Expected output** with domain-specific artifacts for this workflow

## Quality checks

- [ ] Outcome matches **Purpose** without scope creep
- [ ] Stakeholders and dates appear in **Next steps** when relevant
- [ ] Unknowns are visible, not hidden in optimistic language

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Wrong playbook | Re-read **When to use** and split work across playbooks |
| Vague AI output | Add metrics, file paths, and explicit non-goals to the appended context |

## Related documents

- [Category README](./README.md)
- [Campaign planning](campaign-planning.md)
- [Research standards](../../01_core-rules/research-standards.md)
