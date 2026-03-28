---
title: Project Continuation Checklist
description: Before resuming paused work—context, branch state, decisions, blockers, playbook alignment.
doc_status: stable
---

# Project Continuation Checklist

## Context recovery

- [ ] Last known goal and **definition of done** written in ticket or doc
- [ ] **Branch / PR** state noted (what is merged vs in flight)
- [ ] Key **decisions** linked or summarized ([Decision log](../02_playbooks/operations/decision-log.md) if formal)

## Environment

- [ ] Local setup still works (`README` commands re-run)
- [ ] Env vars and secrets refreshed if rotated during pause

## Scope drift check

- [ ] New requests since pause captured; scope change escalated if needed
- [ ] Playbook choice still correct per category README

## Quality

- [ ] Tests or checks run on resumed branch before new work piles on
- [ ] Open bugs / regressions listed explicitly

## Communication

- [ ] Stakeholders notified of resume date and expected next milestone

## Related documents

- [Project continuation playbook](../02_playbooks/development/project-continuation.md)
- [Communication standards](../01_core-rules/communication-standards.md)
