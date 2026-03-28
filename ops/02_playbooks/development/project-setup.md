---
title: "Project setup"
description: "Establish local environment, dependencies, and baseline commands so any qualified contributor can run and test the project."
doc_status: draft
tags:
  - playbook
---

# Project setup

## Purpose

Establish local environment, dependencies, and baseline commands so any qualified contributor can run and test the project.

## When to use

- Repo exists but onboarding is painful or undocumented.
- Toolchain drift is blocking feature work.

## Inputs required

- Target OS and language versions
- Secrets handling process (no values in repo)
- Existing README and package manifests

## Step-by-step execution logic

1. Confirm fit using [the category README](./README.md); adjust scope if boundaries are unclear.
2. Gather inputs; record unknowns explicitly instead of guessing sensitive facts.
3. Run the **Cursor prompt** below; append session-specific constraints, paths, dates, and stakeholders at the end.
4. Save outputs using the closest template under `../../03_templates/` or your project doc system.
5. Complete the **Quality checks**; link artifacts in tickets or PRs.

## Cursor prompt

```text
You are assisting Innerflect on: Project setup.

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
Execute "Project setup" for the user's context. If the request spans multiple playbooks, say which playbook should own each part.

Category: development
Playbook file: project-setup.md
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
- [Repo bootstrap](repo-bootstrap.md)
- [New project setup checklist](../../04_checklists/new-project-setup.md)
