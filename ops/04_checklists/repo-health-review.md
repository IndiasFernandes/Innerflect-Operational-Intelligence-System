---
title: Repo Health Review Checklist
description: Periodic hygiene—branches, issues, dependencies, docs drift, archival candidates.
doc_status: stable
---

# Repo Health Review Checklist

## Housekeeping

- [ ] Stale branches identified (merged or abandoned); owners notified
- [ ] Open issues triaged (labels, priority, close if obsolete)
- [ ] `README` still matches reality (commands, architecture one-liner)

## Dependencies and security

- [ ] Dependency manifest up to date; known critical CVEs addressed or risk accepted in writing
- [ ] Lockfile committed if team policy requires reproducible installs

## Tests and CI

- [ ] CI green on default branch
- [ ] Flaky tests documented or quarantined with owner

## Documentation drift

- [ ] Runbooks match current deploy path
- [ ] Innerflect Ops hubs match `ops/` tree if this is the Ops repo

## Archive candidates

- [ ] Superseded playbooks marked for [archiving](../00_governance/archiving.md) rather than left ambiguous

## Related documents

- [Full audit playbook](../02_playbooks/development/full-audit.md)
- [Git and GitHub standards](../01_core-rules/git-github-standards.md)
