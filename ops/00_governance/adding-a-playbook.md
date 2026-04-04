---
title: Adding a Playbook
description: Step-by-step process to add a new playbook—template, placement, prompts, hubs, and review.
doc_status: stable
---

# Adding a Playbook

## When to add

Add a playbook when the same procedure will be run **more than once** by more than one person—or when you want AI sessions to **default** to a known structure.

## Steps

1. **Choose category** using [Taxonomy](../../docs/system/taxonomy.md) and the category README under `ops/02_playbooks/<category>/`.
2. **Copy** [playbook template](../03_templates/playbook-template.md) to `ops/02_playbooks/<category>/<kebab-name>.md`.
3. **Fill every section**. If domain expertise is missing, mark only specific gaps with `TODO:` and keep structure intact.
4. **Write the Cursor prompt** as a single fenced block with:
   - Role and constraints
   - Inputs to assume or ask for
   - Required output headings
   - Explicit “do not” rules (scope creep, unsafe actions)
5. **Link related documents**: templates, checklists, core rules.
6. **Update indexes in the same PR** (see [Docs and site sync](docs-and-site-sync.md)):
   - Category `README.md` (file list + “how to choose” if needed)
   - [Repository map](../../docs/system/repository-map.md) if the tree or navigation story changes
   - If the playbook should appear on the **static site**, add its path to the `ops` plugin **`include`** in `website/docusaurus.config.ts` and its doc id to `website/sidebarsOps.ts` — use **`/ops/playbooks/<category>/<slug>`** for links from `docs/`
   - Run `npm run build` in `website/` if you changed hubs, links, or site config
7. **Self-review** with [Prompt quality review](../04_checklists/prompt-quality-review.md) and [Docs quality review](../04_checklists/docs-quality-review.md) when the playbook is listed in indexes or on the site.

## Naming

Follow [Naming conventions](naming-conventions.md). Filename = kebab-case of the stable short name.

## Anti-patterns

- Creating `prompts-v2/` or `misc/` trees outside taxonomy.
- Duplicating the same Cursor block in `docs/` and `ops/`.
- Shipping a playbook without **quality checks** and **failure modes**—those sections are how teams trust the system.

## Related documents

- [Docs and site sync](docs-and-site-sync.md)
- [Prompt usage model](prompt-usage-model.md)
- [Archiving](archiving.md) (when replacing an old playbook)
