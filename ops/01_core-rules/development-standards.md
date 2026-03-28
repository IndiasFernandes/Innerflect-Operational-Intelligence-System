---
title: Development Standards
description: Default engineering standards for Innerflect—clarity, safety, tests, and incremental delivery.
doc_status: stable
---

# Development Standards

## Principles

- **Small, reviewable changes** beat large surprise diffs.
- **Explicit over clever**—future readers include future you and AI tools.
- **Security and privacy by default**—no secrets in repo; validate untrusted input at boundaries.

## Code structure

- Match **existing project conventions** before introducing new patterns.
- Prefer **clear module boundaries** over tight coupling across layers.
- **Configuration** belongs in config, not scattered magic constants.

## Quality bar

- Meaningful **automated tests** where the project already uses them; do not skip tests for “quick” fixes without documenting risk.
- **Lint and format** using project tooling; do not fight established formatters in drive-by changes.

## Tooling and AI assistance

- AI-generated code is reviewed like human code: **correctness**, **edge cases**, **security**, **maintainability**.
- Ground library usage in **current docs** or project patterns—avoid deprecated APIs.

## Related playbooks

- [Feature implementation](../02_playbooks/development/feature-implementation.md)
- [Pre-release check](../02_playbooks/development/pre-release-check.md)
- [Full audit](../02_playbooks/development/full-audit.md)
