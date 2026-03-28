# Innerflect Ops

**Innerflect Ops** is Innerflect’s Markdown-first **operational intelligence system**: playbooks with embedded Cursor prompts, reusable templates, checklists, standards, and governance—built to stay **navigable on GitHub**, **renderable as a static docs site**, and **safe for AI-assisted work**.

## Who this is for

Engineering, marketing, brand, sales, project management, and operations. The taxonomy is shared so outputs stay **comparable**, **versionable**, and **easy to find**.

## Core philosophy

- **Operating logic over noise** — procedures are curated; chat dumps are not the system of record.
- **Single source of truth** — canonical assets live in **`ops/`**; **`docs/`** explains and links.
- **Reuse before invention** — extend an existing playbook before adding a parallel prompt file.
- **Calm structure** — shallow trees, descriptive names, index pages at every major folder.

## Repository map

| Path | Role |
|------|------|
| **`docs/`** | Documentation layer: onboarding, system reference, standards for docs, hubs linking into `ops/` |
| **`ops/`** | Canonical operations: governance, core rules, playbooks, templates, checklists, examples, future skills/MCP/subagents |
| **`AGENTS.md`** | Default behavior for AI tools working in this repository |
| **`README.md`** | You are here |

## How to use it

1. Open **[`docs/getting-started/how-to-use-this-repo.md`](docs/getting-started/how-to-use-this-repo.md)** for workflows.
2. Pick a **function** (development, marketing, branding, project management, sales, operations).
3. Go to the matching **playbook hub** in [`docs/playbooks/`](docs/playbooks/index.md)—then open the **canonical** playbook under [`ops/02_playbooks/`](ops/02_playbooks/).
4. Run the **Cursor prompt** block inside the playbook; save outputs using a template from [`ops/03_templates/`](ops/03_templates/).
5. Gate quality with checklists in [`ops/04_checklists/`](ops/04_checklists/) when appropriate.

## Find the right playbook (fast)

- Use **category READMEs** in `ops/02_playbooks/<category>/README.md`—they explain boundaries and when to use each file.
- If you are unsure between two playbooks, compare **Purpose** and **When to use** sections—good playbooks state **non-goals** where overlap is common.

## Contribute

- Read [`ops/00_governance/contribution-rules.md`](ops/00_governance/contribution-rules.md)
- New playbooks must follow [`ops/03_templates/playbook-template.md`](ops/03_templates/playbook-template.md)
- Update hubs and [`docs/system/repository-map.md`](docs/system/repository-map.md) when structure changes

## Where to start first

| If you… | Start here |
|---------|------------|
| Are new to the repo | [`docs/getting-started/index.md`](docs/getting-started/index.md) |
| Need a procedure | [`docs/playbooks/index.md`](docs/playbooks/index.md) |
| Use Cursor or other AI tools | [`AGENTS.md`](AGENTS.md) |
| Will publish a docs site later | [`docs/docusaurus-recommendation.md`](docs/docusaurus-recommendation.md) |

## License and confidentiality

Innerflect internal operations material—distribute outside the organization only when policy allows.
