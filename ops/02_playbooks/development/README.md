---
title: Development Playbooks
description: Index of development playbooks—intake through release—with guidance on choosing the right file.
doc_status: stable
---

# Development Playbooks

## What this section is

Procedures for **software delivery**: framing work, setting up repositories and docs, implementing features, running audits, and gating release.

## When to use it

Use this category when the primary outcome is **working software** or **technical health** of a codebase—not marketing copy or sales motion (those have their own categories).

## Cursor prompt bundles (sidebar IDs)

Large, copy-paste **Cursor** sequences live here. In the **Ops** site sidebar, look for the bracketed **ID** so you can jump straight to the right bundle.

| ID | Playbook | Use when |
|----|----------|----------|
| `[Prompts ×5]` | [deployment-pipeline-prompts.md](deployment-pipeline-prompts.md) | Deployment: audit → questions → generate → verify/rollback → troubleshoot |
| `[COH · Context7]` | [full-system-coherence-setup.md](full-system-coherence-setup.md) | Coherence: full scan → rules, skills, hooks, subagents, optional AGENTS.md |

## How to choose a playbook

| Situation | Start with |
|-----------|------------|
| New effort, unclear scope | [project-intake.md](project-intake.md) |
| Greenfield or major restructure | [repo-bootstrap.md](repo-bootstrap.md) |
| Add docs site or docs IA | [docs-bootstrap.md](docs-bootstrap.md) |
| Resume after pause | [project-continuation.md](project-continuation.md) |
| Start an AI session cleanly | [cursor-start.md](cursor-start.md) |
| Before large build | [architecture-planning.md](architecture-planning.md) |
| Ship a feature | [feature-implementation.md](feature-implementation.md) |
| Broad health check | [full-audit.md](full-audit.md) |
| UI quality pass | [ui-ux-audit.md](ui-ux-audit.md) |
| Performance pass | [performance-audit.md](performance-audit.md) |
| Before release | [pre-release-check.md](pre-release-check.md) |
| Deployment system (audit → deploy → verify → troubleshoot) | [deployment-pipeline-prompts.md](deployment-pipeline-prompts.md) |
| Cursor coherence system (rules, skills, hooks, subagents) | [full-system-coherence-setup.md](full-system-coherence-setup.md) |

## Files in this folder

- [project-intake.md](project-intake.md)
- [project-setup.md](project-setup.md)
- [project-continuation.md](project-continuation.md)
- [repo-bootstrap.md](repo-bootstrap.md)
- [docs-bootstrap.md](docs-bootstrap.md)
- [cursor-start.md](cursor-start.md)
- [architecture-planning.md](architecture-planning.md)
- [feature-implementation.md](feature-implementation.md)
- [full-audit.md](full-audit.md)
- [ui-ux-audit.md](ui-ux-audit.md)
- [performance-audit.md](performance-audit.md)
- [pre-release-check.md](pre-release-check.md)
- [deployment-pipeline-prompts.md](deployment-pipeline-prompts.md)
- [full-system-coherence-setup.md](full-system-coherence-setup.md)

## Related documents

- [Development standards](../../01_core-rules/development-standards.md)
- [Release readiness checklist](../../04_checklists/release-readiness.md)
