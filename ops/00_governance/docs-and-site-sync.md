---
title: Docs and site sync
description: Rules so new ops content, hubs, and the Docusaurus site stay aligned—same change set, verifiable build.
doc_status: stable
---

# Docs and site sync

## Why this exists

**Docs-as-code** practice is to treat documentation like source: keep it in-repo, review it in PRs, and **ship navigation updates in the same change** as the content they describe (co-location, single PR). That reduces drift between “what exists in `ops/`” and “what humans can find in `docs/` or on the static site.” Industry guidance consistently stresses **atomic doc + code (or doc + index) changes**, **automated link/build checks**, and **explicit contribution checklists**—not ad-hoc updates after the fact.

This repository adds one layer: **Docusaurus** loads two doc plugins (`docs/` → `/docs/`, `ops/` → `/ops/`). The **`ops/` plugin uses an `include` glob** in `website/docusaurus.config.ts` — only matching files get `/ops/...` URLs. Hub pages under `docs/` must use **site routes** when linking to rendered playbook pages, or the HTML site will not navigate correctly.

## Non-negotiables

1. **Same change set** — Adding or renaming canonical content under `ops/` (playbook, template, checklist, governance file) **includes** updates to every index that lists it: category `README.md`, relevant `docs/**` pages (for example [Repository map](/docs/system/repository-map) or [Operational assets](/docs/repo/operational-assets)), and **`website/docusaurus.config.ts` / `sidebarsOps.ts`** when a playbook should appear on the static site.
2. **No orphan indexes** — If a file appears in a hub table, it must exist; if it is removed or renamed, **every** hub row and sidebar-relevant link is updated in the same PR.
3. **Verify the site when navigation changes** — After hub or link changes that affect browsing, run `npm run build` from the `website/` directory at repo root and fix **new** errors tied to your edits (see [Verification](#verification)).

## What to update by change type

| You change… | Update also… |
|-------------|----------------|
| New playbook under `ops/02_playbooks/<category>/` | Category `README.md` (“How to choose” + file list); [Repository map](/docs/system/repository-map) if tree changes; add the file to the `ops` plugin **`include`** and `sidebarsOps.ts` if it should appear on the site; follow [Adding a playbook](adding-a-playbook.md) |
| Rename/move playbook | All inbound links (search repo); hub tables; related docs |
| New template / checklist / major `ops/` area | Relevant `docs/` hub; [Repository map](/docs/system/repository-map) if tree changes |
| `docs/` hub only (wording) | [Docs quality review](../04_checklists/docs-quality-review.md) |

## Docusaurus: two plugins

| Plugin | Source path | Base URL | Example |
|--------|-------------|----------|---------|
| Primary | `docs/` | `/docs/` | `/docs/vision/` |
| Secondary (`id: ops`) | `ops/` (see `include` in config) | `/ops/` | `/ops/playbooks/development/deployment-pipeline-prompts` |

Playbooks are **canonical** in `ops/` on GitHub. **Only included files** are browsable under **`/ops/...`** on the built site. The **Playbooks** navbar entry lists included docs.

### Links from `docs/` hubs to `ops/` playbooks (HTML)

In **hub tables** that should open the **rendered** playbook in the browser, use **root-absolute paths** (no `.md`):

```markdown
[deployment-pipeline-prompts](/ops/playbooks/development/deployment-pipeline-prompts)
```

Relative links like `../../../ops/02_playbooks/.../file.md` remain useful for **GitHub** raw browsing but **do not** resolve across Docusaurus plugins for the static site user. Use the pattern above for **user-facing navigation** from `docs/` hubs; see [Inner linking conventions](/docs/system/inner-linking-conventions) for the full picture.

## Verification

From repository root:

```bash
cd website && npm run build
```

- **Must pass** before merge when **your** change touches hub links, new playbooks listed in `docs/`, or `website/` config/sidebars.
- The build may report **existing** broken cross-plugin links elsewhere; do not ignore **new** failures caused by your paths.

Optional: `npm run start` in `website/` for local click-through.

## Related documents

- [Contribution rules](contribution-rules.md)
- [Adding a playbook](adding-a-playbook.md)
- [Docs quality review](../04_checklists/docs-quality-review.md)
- [Inner linking conventions](/docs/system/inner-linking-conventions)
- `AGENTS.md` at repository root (AI defaults; not part of the static site)
