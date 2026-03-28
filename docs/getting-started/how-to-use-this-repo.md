---
title: How to Use This Repository
description: Practical workflows for finding playbooks, applying templates, and keeping the system coherent.
sidebar_position: 11
doc_status: stable
---

# How to Use This Repository

## Core idea

- **`ops/`** holds the **source of truth**: playbooks, templates, checklists, examples, governance, and core rules.
- **`docs/`** holds **navigation and explanation**: how to use the system, standards for the docs layer, and hubs that link into `ops/`.

Do not duplicate playbook bodies between `docs/` and `ops/`. If a playbook needs to appear on a static site, configure the site to read from `ops/` (see [Docusaurus recommendation](../docusaurus-recommendation.md)).

## Find the right playbook

1. Identify your **function** (development, marketing, branding, project management, sales, operations).
2. Open the matching hub under [Playbooks](../playbooks/index.md).
3. Read the **category README** in [`ops/02_playbooks/<category>/`](../../ops/02_playbooks/)—it explains when to use each file.
4. Open one playbook. Follow **Purpose** and **When to use** to confirm fit.
5. Gather **Inputs required**, then execute **Step-by-step execution logic** and the **Cursor prompt** block.
6. For **large prompt bundles** (multi-step deployment or full Cursor coherence), use [Development → Cursor prompt bundles](../playbooks/development/index.md#cursor-prompt-bundles-sidebar-ids): the **Ops** sidebar shows bracketed **IDs** next to those pages so you can spot them quickly.

## Use a template

1. Go to [`ops/03_templates/`](../../ops/03_templates/).
2. Copy the template into your project or doc, or paste sections into a ticket or PR description.
3. Remove unused sections; keep headings so outputs stay comparable over time.

## Use a checklist

Checklists under [`ops/04_checklists/`](../../ops/04_checklists/) gate quality for setup, docs, prompts, repos, continuation, and release. Run them at the end of a task or before merge.

## Contribute a change

1. Read [Contribution rules](../../ops/00_governance/contribution-rules.md), [Adding a playbook](../../ops/00_governance/adding-a-playbook.md), and [Docs and site sync](../../ops/00_governance/docs-and-site-sync.md) (hubs + Docusaurus build in the **same PR** as new `ops/` content).
2. Prefer **editing an existing playbook** over inventing a parallel prompt file.
3. Update **category README** and the matching **docs hub** if you add or rename files; use **`/ops/...`** links in hub tables for the static site (see [Inner linking conventions](../system/inner-linking-conventions.md)).
4. Update [Repository map](../system/repository-map.md) if structure changes.

## AI-assisted work

[AGENTS.md](../../AGENTS.md) defines default behavior for tools operating on this repo: research-first, reuse templates, no silent duplication, and evidence-backed research outputs.

## Related documents

- [Repository map](../system/repository-map.md)
- [Inner linking conventions](../system/inner-linking-conventions.md)
- [Playbooks hub](../playbooks/index.md)
