---
title: QA Standards
description: Quality assurance discipline—definition of done, testing expectations, and release gating.
doc_status: stable
---

# QA Standards

## Definition of done

A change is “done” when:

- It meets the **stated acceptance criteria** (or documented exceptions).
- **Automated checks** relevant to the change pass.
- **Risky areas** are exercised manually or with targeted tests when automation is insufficient.

## Testing posture

- **Regression first**: protect existing behavior before optimizing new paths.
- **Edge cases**: empty states, permissions, slow networks, invalid input—match product risk.
- **Record what you ran** in PR description for non-trivial changes.

## Review

- Reviewers look for **correctness**, **maintainability**, **security**, and **user impact**.
- Use [release readiness checklist](../04_checklists/release-readiness.md) and [pre-release check playbook](../02_playbooks/development/pre-release-check.md) before demos and releases.

## Related documents

- [Git and GitHub standards](git-github-standards.md)
- [Development standards](development-standards.md)
