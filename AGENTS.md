# AGENTS.md — AI behavior for Innerflect Ops

When operating on this repository (Cursor, CI bots, or other assistants), follow these rules **in addition** to any user instructions for a specific task.

## Research-first

- Read relevant files in **`ops/`** and **`docs/`** before proposing structural changes or new playbooks.
- Prefer inspecting the actual tree and indexes over guessing paths.

## Reuse over recreation

- Extend **existing playbooks and templates** before adding parallel documents.
- If a procedure already exists, **link to it** and add a subsection rather than duplicating a full prompt.

## No duplication

- Do **not** copy full playbook bodies into `docs/`. Hubs **link** to `ops/02_playbooks/`.
- Do **not** create vague catch-all folders (`misc/`, `temp/`) for operational content.

## Maintain docs when the system changes

- If you move, rename, or add top-level areas, update **`docs/system/repository-map.md`** and affected **`README.md` / `index.md` hubs** in the same change set.
- For new or renamed **playbooks** (and similar canonical `ops/` assets), update **category README + matching `docs/playbooks/.../index.md`** in the same PR. Use **`/ops/...`** paths in hub tables so the Docusaurus HTML site links work. Follow **`ops/00_governance/docs-and-site-sync.md`** and run **`npm run build`** in **`website/`** when navigation or links change.

## Templates and structure

- New playbooks must follow **`ops/03_templates/playbook-template.md`** section order.
- Use **kebab-case** filenames and descriptive titles per **`ops/00_governance/naming-conventions.md`**.

## Naming and tone

- Preserve established naming patterns (`00_governance`, `02_playbooks`, etc.).
- Improve **clarity**, not complexity—shorter paths and fewer synonyms win.

## Team-usable outputs

- When generating content meant for humans, use **stable headings**, **tables** for indexes, and **checkboxes** for quality gates.
- Prefer artifacts that can live in tickets, PRs, or wiki pages without heavy rewriting.

## Research and evidence

- For research-style outputs, follow **`ops/01_core-rules/research-standards.md`**: cite sources, separate facts from interpretation, label **assumptions** and **unknowns**, and mark **confidence** when uncertainty affects decisions.

## Safety

- Never commit or echo **secrets** (tokens, passwords, private keys). Use placeholders and point to secure storage processes.

## Stop conditions

- If required inputs are missing, **list questions** instead of fabricating client names, metrics, or repository facts.
