---
title: Archive policy
description: Rules for what belongs in ops/09_archive and how items are stored and referenced.
doc_status: stable
---

# Archive policy

## What gets archived

- Superseded **playbooks** replaced by a merged or rewritten canonical file
- Deprecated **templates** that would mislead if left alongside current versions
- Old **examples** kept only for training history

## What does not get archived

- Typos fixed in place (use git history)
- Experiments that never shipped (delete or keep in a branch—not the archive)

## Required metadata

At top of archived markdown (frontmatter or short banner):

- `doc_status: archived`
- `superseded_by: relative/path/to/replacement.md`
- `archived_date: YYYY-MM-DD`
- `reason: one line`

## Placement

Prefer **dated subfolders** for clarity. Keep filenames **unchanged** when possible so discussions and links are easier to trace.

## Index updates

Remove archived items from active **category README** and **docs hubs**; the archive is not part of default onboarding paths.

## Related documents

- [Archiving](../00_governance/archiving.md)
