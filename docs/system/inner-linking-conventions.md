---
title: Inner Linking Conventions
description: Rules for consistent relative links between docs hubs and ops canonical files.
sidebar_position: 23
doc_status: stable
---

# Inner Linking Conventions

## Prefer relative links

Use **relative** paths so the repository works on GitHub, in editors, and in static site generators that preserve paths.

Examples from `docs/playbooks/development/index.md` to ops:

```markdown
[Development playbooks (canonical)](../../../ops/02_playbooks/development/README.md)
```

Examples from `ops/02_playbooks/development/project-setup.md` to templates:

```markdown
[Playbook template](../../03_templates/playbook-template.md)
```

## Hub pattern

- **`docs/**` hubs** list playbooks with one-line descriptions and link to the **canonical** file under `ops/`.
- **Category README** in `ops/02_playbooks/<category>/README.md` is the authoritative index for that category.

## Avoid broken anchors

When renaming headings, search the repo for links to old anchors. Prefer linking to the **file** rather than fragile `#` anchors unless the heading is stable.

## Cross-layer references

| From | To | Pattern |
|------|-----|---------|
| `docs/` | `ops/` | `../../ops/...` or `../../../ops/...` depending on depth |
| `ops/` | `docs/` | `../../docs/...` as needed |
| Root `README` | `ops/` | `ops/...` |

## Docusaurus static site (`website/`)

The build uses **two** doc plugins: `docs/` → `/docs/`, and `ops/` → `/ops/`. See [`website/docusaurus.config.ts`](../../website/docusaurus.config.ts).

- **GitHub / editor:** relative `.md` links between `docs/` and `ops/` stay valid for browsing the repo.
- **HTML site users:** `docs/` **hub tables** that should open a rendered playbook must link with **root-absolute paths** to the ops plugin, e.g. `[Title](/ops/playbooks/development/project-intake)` — not `../../../ops/02_playbooks/.../file.md` — or clicks from `/docs/` will not land on the correct `/ops/` page.

Full rules and verification: [Docs and site sync](../../ops/00_governance/docs-and-site-sync.md).

## Related documents

- [Repository map](repository-map.md)
- [Docs and site sync](../../ops/00_governance/docs-and-site-sync.md)
- [Documentation standards](../standards/documentation-standards.md)
