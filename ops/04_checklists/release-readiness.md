---
title: Release Readiness Checklist
description: Gate before release or major external demo—scope, QA, comms, rollback, metrics.
doc_status: stable
---

# Release Readiness Checklist

## Scope and versioning

- [ ] Release scope frozen; only release blockers merged
- [ ] Version tag or release notes prepared per [Versioning and changelog](../00_governance/versioning-and-changelog.md)

## Quality

- [ ] Automated tests and lint pass on release candidate
- [ ] Manual smoke of **critical user paths** completed
- [ ] **Rollback** path documented (revert deploy, feature flag, or prior artifact)

## Security and privacy

- [ ] No secrets in bundle or logs
- [ ] Access control verified on new surfaces (roles, permissions)

## Observability

- [ ] Errors visible in monitoring or logs for new code paths
- [ ] Key metrics or events defined (even if minimal)

## Documentation and support

- [ ] User-facing changes reflected in docs or changelog
- [ ] Support / CS briefed if customer-visible behavior changes

## Comms

- [ ] Internal announcement: what shipped, risks, owner for incidents
- [ ] External comms reviewed if applicable

## Related documents

- [Pre-release check playbook](../02_playbooks/development/pre-release-check.md)
- [QA standards](../01_core-rules/qa-standards.md)
