---
title: "Docs bootstrap"
description: "Stand up or repair documentation architecture alongside code—entrypoints, IA, and contribution expectations for technical docs."
doc_status: draft
tags:
  - playbook
---

# Docs bootstrap

## Purpose

Stand up or repair documentation architecture alongside code—entrypoints, IA, and contribution expectations for technical docs.

## When to use

- README is insufficient for growing complexity.
- You are preparing for a static docs site or public SDK docs.

## Inputs required

- Audience (internal, partners, end users)
- Existing docs locations
- Future site generator preference if any (e.g. Docusaurus)

## Step-by-step execution logic

1. Confirm fit using [the category README](./README.md); adjust scope if boundaries are unclear.
2. Gather inputs; record unknowns explicitly instead of guessing sensitive facts.
3. Run the **Cursor prompt** below; append session-specific constraints, paths, dates, and stakeholders at the end.
4. Save outputs using the closest template under `../../03_templates/` or your project doc system.
5. Complete the **Quality checks**; link artifacts in tickets or PRs.

## Cursor prompt

```text
You are assisting Innerflect on: Docs bootstrap.

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
Execute "Docs bootstrap" for the user's context. If the request spans multiple playbooks, say which playbook should own each part.

Category: development
Playbook file: docs-bootstrap.md
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
- [Documentation standards (ops)](../../01_core-rules/documentation-standards.md)
- [Docs quality review checklist](../../04_checklists/docs-quality-review.md)
- [Docusaurus recommendation](../../../docs/docusaurus-recommendation.md)
