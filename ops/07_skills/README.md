---
title: Skills (future)
description: Placeholder for Cursor skill definitions that point at canonical playbooks and templates.
doc_status: draft
---

# Skills

Cursor **Skills** should be thin wrappers around **existing playbooks**—not parallel prose.

## How we will use this folder

Each skill file should reference:

- One **playbook** under `ops/02_playbooks/`
- One **template** or **checklist** for the default artifact
- Any **core rules** that must load with the skill

## Examples (to author later)

- “Run release readiness” → [Release readiness checklist](../04_checklists/release-readiness.md) + [Pre-release check](../02_playbooks/development/pre-release-check.md)
- “Generate handoff package” → [Project handoff template](../03_templates/project-handoff-template.md) + [Handoff playbook](../02_playbooks/project-management/handoff.md)

## Related documents

- [AGENTS.md](../../AGENTS.md)
- [Prompt usage model](../00_governance/prompt-usage-model.md)
