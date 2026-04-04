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
| **`docs/`** | Documentation layer: [product vision](docs/vision/index.md), [repository guide](docs/repo/index.md), system reference |
| **`ops/`** | Canonical operations: governance, core rules, playbooks, templates, checklists, examples, future skills/MCP/subagents |
| **`AGENTS.md`** | Default behavior for AI tools working in this repository |
| **`README.md`** | You are here |

## Documentation site

The Docusaurus app in **`website/`** builds:

- **`/docs/...`** from `docs/` (see sidebar in `website/sidebars.ts`).
- **`/ops/...`** for a **small include list** only (today: two development playbooks). See [Operational assets](docs/repo/operational-assets.md). Everything else in `ops/` is GitHub-first.

## How to use it

1. Read **[`docs/repo/index.md`](docs/repo/index.md)** for how the site relates to the repo.
2. For **market and product narrative**, open **[`docs/vision/index.md`](docs/vision/index.md)**.
3. Pick a **function** under `ops/02_playbooks/<category>/` and open the **canonical** `.md` file on GitHub or in your editor.
4. Run the **Cursor prompt** block inside the playbook; save outputs using a template from [`ops/03_templates/`](ops/03_templates/).
5. Gate quality with checklists in [`ops/04_checklists/`](ops/04_checklists/) when appropriate.

## Find the right playbook (fast)

- Use **category READMEs** in `ops/02_playbooks/<category>/README.md`—they explain boundaries and when to use each file.
- If you are unsure between two playbooks, compare **Purpose** and **When to use** sections—good playbooks state **non-goals** where overlap is common.

## Contribute

- Read [`ops/00_governance/contribution-rules.md`](ops/00_governance/contribution-rules.md)
- New playbooks must follow [`ops/03_templates/playbook-template.md`](ops/03_templates/playbook-template.md)
- Update [`docs/system/repository-map.md`](docs/system/repository-map.md) and site config when structure or published playbooks change

## Where to start first

| If you… | Start here |
|---------|------------|
| Are new to the repo | [`docs/repo/index.md`](docs/repo/index.md) |
| Need a procedure | `ops/02_playbooks/<category>/` on GitHub |
| Use Cursor or other AI tools | [`AGENTS.md`](AGENTS.md) |
| Run the docs site locally | `cd website && npm install && npm run start` |

## License and confidentiality

Innerflect internal operations material—distribute outside the organization only when policy allows.
