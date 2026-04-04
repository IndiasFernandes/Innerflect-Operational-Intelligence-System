---
title: Operational assets (ops/)
description: What lives in ops/ vs what the site renders.
sidebar_position: 16
doc_status: stable
---

# Operational assets (`ops/`)

The repository keeps **canonical** procedures, templates, checklists, and governance under `ops/`. **This static site only includes two playbook files** from `ops/` (see [Repository index](index.md)).

## On the site

| Resource | Site URL |
|----------|----------|
| Deployment pipeline prompts (5-step) | [/ops/playbooks/development/deployment-pipeline-prompts](/ops/playbooks/development/deployment-pipeline-prompts) |
| Full system coherence setup (Context7) | [/ops/playbooks/development/full-system-coherence-setup](/ops/playbooks/development/full-system-coherence-setup) |

## In Git only (browse on GitHub)

Everything else — governance, core rules, other playbooks, templates, checklists, examples — remains in the tree for editors and automation. Do not assume a URL under `/ops/...` exists unless that file is added to the site `include` list in `website/docusaurus.config.ts`.

**GitHub:** [Innerflect_Operational_Intelligence_System](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System) → `ops/`.

## When you add a playbook to the site

1. Add its path to the `include` array for the `ops` docs plugin in `website/docusaurus.config.ts`.  
2. Add the doc id to `website/sidebarsOps.ts`.  
3. Run `npm run build` in `website/` and fix link warnings.  
4. Follow [Docs and site sync](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/docs-and-site-sync.md).
