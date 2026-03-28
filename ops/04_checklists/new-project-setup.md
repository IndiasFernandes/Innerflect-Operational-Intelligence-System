---
title: New Project Setup Checklist
description: Gate for new repos or greenfield projects—README, tooling, CI, secrets, docs entrypoints.
doc_status: stable
---

# New Project Setup Checklist

## Identity and access

- [ ] Repository name matches purpose; not vague or temporary
- [ ] Default branch policy agreed (`main` or team standard)
- [ ] Access model defined (teams, outside collaborators if any)
- [ ] **No secrets** committed; `.env.example` or documented env vars without values

## Baseline documentation

- [ ] Root `README.md` explains what, why, how to run locally
- [ ] License present if open or distribution planned (or explicit “private” note)
- [ ] Link or pointer to issue tracker / roadmap if used

## Tooling

- [ ] Package manager and language version pinned (`.nvmrc`, `pyproject`, etc.) per stack
- [ ] Formatter and linter configured if stack has team standards
- [ ] `.gitignore` covers OS, build artifacts, env files

## CI / quality

- [ ] Minimal CI exists (lint, test, or build) or documented reason it does not yet
- [ ] Branch protection or review rule aligned with [Git and GitHub standards](../01_core-rules/git-github-standards.md)

## Ops alignment

- [ ] If this repo consumes Innerflect Ops playbooks, note where runbooks live
- [ ] [Repository map](../../docs/system/repository-map.md) updated if this is the Ops repo itself

## Related documents

- [Repo bootstrap playbook](../02_playbooks/development/repo-bootstrap.md)
- [Project setup playbook](../02_playbooks/development/project-setup.md)
