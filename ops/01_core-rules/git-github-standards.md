---
title: Git and GitHub Standards
description: Branching, commits, pull requests, and reviews for Innerflect repositories.
doc_status: stable
---

# Git and GitHub Standards

## Branches

- Use **short-lived feature branches**; avoid long-lived divergence when possible.
- Branch names: **kebab-case**, intent-clear: `feat/onboarding-copy`, `fix/invoice-total`.

## Commits

- **Present tense**, imperative subject line: `Add weekly review playbook`.
- Keep commits **logically scoped**; squash only when it improves clarity, not to hide review feedback.

## Pull requests

- PR description states **why**, **what**, and **risk**; link issues or playbooks when relevant.
- Update **docs and hubs** in the same PR when paths or taxonomy change.

## Reviews

- **Approve with comments** only when minor; block on material issues.
- Prefer **suggestions** that can be committed in-thread for small fixes.

## Related documents

- [Contribution rules](../00_governance/contribution-rules.md)
- [Repo health review](../04_checklists/repo-health-review.md)
