---
title: Versioning and Changelog
description: How Innerflect Ops signals change—repo tags, meaningful commits, and optional CHANGELOG for major shifts.
doc_status: stable
---

# Versioning and Changelog

## Repository versioning

Treat this repository as **product infrastructure**:

- **Git history** is the authoritative record of change.
- Use **annotated tags** for milestones (for example `v1.0.0`, `v1.1.0`) when the team agrees a baseline is stable for external reference or onboarding.

## Semantic-ish tags (recommended)

- **MAJOR** — taxonomy moves, renamed canonical paths, breaking changes to playbook contracts.
- **MINOR** — new playbooks, new templates, materially expanded standards.
- **PATCH** — typo fixes, clarifications, link repairs, small checklist tweaks.

Exact semver discipline is optional; **consistency** matters more than perfection.

## Changelog

Maintain a root **`CHANGELOG.md`** when the team needs a **human-readable digest** across releases. If absent, rely on:

- Descriptive **commit messages**
- **PR descriptions** that reference affected playbooks and hubs

## Frontmatter `last_reviewed`

Substantive pages may set `last_reviewed: YYYY-MM-DD` after a deliberate review—not after every typo.

## Related documents

- [Contribution rules](contribution-rules.md)
- [Archiving](archiving.md)
