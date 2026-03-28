---
title: "Repo bootstrap"
description: "Establish a coherent repository foundation—structure, hygiene, docs entrypoints, and guardrails—for greenfield or early restructuring."
doc_status: stable
tags:
  - development
  - playbook
---

# Repo bootstrap

## Purpose

Create a **calm, navigable repository foundation** that scales with the team: clear layout, honest README, sensible ignores, baseline automation hooks, and alignment with Innerflect governance—without over-engineering day one.

## When to use

- Starting a **new codebase** or splitting a monolith into a focused repo
- Early stage where structure is **already drifting** (mixed concerns, unclear boundaries)
- Before onboarding multiple contributors who need **predictable conventions**

Do not use when the only need is a **single feature**—use [feature-implementation.md](feature-implementation.md) instead. Do not use for **Innerflect Ops content** changes—use governance and docs playbooks.

## Inputs required

- Primary **language/stack** and package manager
- **Deployment target** (if any): static, server, mobile, edge
- **Sensitivity**: open source, private client, regulated constraints
- Existing **README**, `LICENSE`, CI config (if any)—or explicit “none”
- Team **Git defaults** (branch name, review policy pointer)

## Step-by-step execution logic

1. Skim [Development standards](../../01_core-rules/development-standards.md) and [Git and GitHub standards](../../01_core-rules/git-github-standards.md); note any team overrides.
2. Inventory the repo: top-level dirs, build entrypoints, env handling, secrets risk (`grep` for key patterns only—do not paste secrets).
3. Decide **domain boundaries** (e.g. `src/`, `apps/`, `packages/`, `docs/`) and one **obvious** place for operational docs (`README`, `docs/`, or `CONTRIBUTING.md`).
4. Draft or tighten **`.gitignore`** for OS noise, build artifacts, env files, and editor folders.
5. Ensure **README** answers: what, why, local setup, test/lint commands, how to contribute.
6. Add or align **minimal CI** (lint/test/build) or document why it is deferred with an explicit follow-up date.
7. Run [New project setup checklist](../../04_checklists/new-project-setup.md) mentally or literally; file tickets for gaps.
8. Run the **Cursor prompt** with repo-specific paths filled in; review output before applying bulk moves.

## Cursor prompt

```text
You are bootstrapping a software repository for Innerflect.

Non-negotiables:
- Research-first: inspect the existing tree, configs, and README before proposing structure.
- Prefer the smallest change that yields clear boundaries; avoid framework churn.
- Never commit or echo secrets, API keys, tokens, or private URLs with credentials.
- If information is missing, list questions under “Risks & unknowns” instead of inventing.

Produce the following sections exactly:

## Summary
One paragraph: current state vs target state.

## Recommended structure
Use a fenced directory tree (text) showing proposed top-level layout.

## Files to add or update
Table: path | action (add/update/remove) | rationale | priority (P0–P2)

## Conventions
Bullets: branching, formatting, testing expectations, where docs live.

## CI recommendation
Minimal workflow or explicit deferral with owner + date.

## Migration plan
Ordered steps if files must move; call out risky renames.

## Risks & unknowns
Include “questions for humans” if blocked.

## Next steps
Owners and dates for P0 items only.

Context the human will append after this block:
- Stack:
- Deploy target:
- Constraints (client/regulated/oss):
```

## Expected output

- A **reviewable plan** (Summary + Recommended structure + Migration plan) suitable for a PR description
- **Concrete file list** with priorities, not vague advice
- **CI** either sketched as workflow names/steps or explicitly deferred with accountability
- Optional follow-up: open issues for P1/P2 items

## Quality checks

- [ ] README matches actual commands after changes
- [ ] `.gitignore` covers env files and build artifacts for the stack
- [ ] No secrets introduced; any found are rotated per security process (outside this playbook)
- [ ] Structure **depth** stays shallow unless the repo truly needs more (avoid >3 levels without reason)
- [ ] [New project setup checklist](../../04_checklists/new-project-setup.md) satisfied or gaps ticketed

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Over-built monorepo tooling too early | Ship minimal layout; add Nx/Turborepo only when pain is measured |
| Moves without `git mv` history | Use `git mv`; split PRs if huge |
| CI that nobody can fix | Start with one job the team understands |
| Docs in wrong layer | App docs in repo; Innerflect Ops playbooks stay in Ops repo |

## Related documents

- [Project setup](project-setup.md)
- [Docs bootstrap](docs-bootstrap.md)
- [Development standards](../../01_core-rules/development-standards.md)
- [New project setup checklist](../../04_checklists/new-project-setup.md)
