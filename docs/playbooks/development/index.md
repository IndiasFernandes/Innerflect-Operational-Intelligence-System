---
title: Development Playbooks
description: Hub linking to development playbooks—intake, setup, implementation, audits, release.
sidebar_position: 31
doc_status: stable
---

# Development Playbooks

Canonical index (same content as GitHub): [Development playbooks](/ops/playbooks/development/).

In the static site, use the **Ops** routes below so playbooks open as HTML (the `ops` docs plugin), not raw repo paths.

### Cursor prompt bundles (sidebar IDs)

| ID | Playbook | Purpose |
|----|----------|---------|
| `[Prompts ×5]` | [deployment-pipeline-prompts](/ops/playbooks/development/deployment-pipeline-prompts) | Five verbatim prompts: audit, critical questions, deploy artifacts, verify/rollback, troubleshoot |
| `[COH · Context7]` | [full-system-coherence-setup](/ops/playbooks/development/full-system-coherence-setup) | One prompt: full system scan → rules, skills, hooks, subagents, optional AGENTS.md |

### All development playbooks

| Playbook | Purpose |
|----------|---------|
| [project-intake](/ops/playbooks/development/project-intake) | Frame a new engineering effort from goals and constraints |
| [project-setup](/ops/playbooks/development/project-setup) | Establish env, tooling, and baseline repo hygiene |
| [project-continuation](/ops/playbooks/development/project-continuation) | Resume work with context and minimal rediscovery |
| [repo-bootstrap](/ops/playbooks/development/repo-bootstrap) | Greenfield or restructure repo foundations |
| [docs-bootstrap](/ops/playbooks/development/docs-bootstrap) | Stand up docs architecture alongside code |
| [cursor-start](/ops/playbooks/development/cursor-start) | Align AI session with repo rules and task scope |
| [architecture-planning](/ops/playbooks/development/architecture-planning) | Shape technical design before large build-out |
| [feature-implementation](/ops/playbooks/development/feature-implementation) | Ship a feature with tests and review discipline |
| [full-audit](/ops/playbooks/development/full-audit) | Cross-cutting codebase health review |
| [ui-ux-audit](/ops/playbooks/development/ui-ux-audit) | Interface quality, accessibility, consistency |
| [performance-audit](/ops/playbooks/development/performance-audit) | Latency, bundle, data-path performance |
| [pre-release-check](/ops/playbooks/development/pre-release-check) | Gate before release or major demo |
| [deployment-pipeline-prompts](/ops/playbooks/development/deployment-pipeline-prompts) | Five verbatim prompts: audit, critical questions, deploy artifacts, verify/rollback, troubleshoot |
| [full-system-coherence-setup](/ops/playbooks/development/full-system-coherence-setup) | Full scan → Cursor coherence (rules, skills, hooks, subagents, optional AGENTS.md) |
