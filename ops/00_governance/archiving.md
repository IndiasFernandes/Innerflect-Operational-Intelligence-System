---
title: Archiving
description: How to archive outdated playbooks and prompts—preserve history, redirect mentally, avoid duplicate active copies.
doc_status: stable
---

# Archiving

## When to archive

Archive when a playbook is **superseded**, **misleading**, or **unused** but still historically useful—or when consolidating duplicates.

Do **not** archive for minor edits; use git history for that.

## Steps

1. Create a destination under `ops/09_archive/` following [ARCHIVE_POLICY.md](../09_archive/ARCHIVE_POLICY.md).
2. Move the file (preserve git history when possible with `git mv`).
3. Add a short **redirect note** at the old path only if tooling depends on the old URL—prefer updating links instead.
4. Update **category README** and **docs hub** to remove stale links; point to the replacement playbook.
5. Note the change in the PR description (and `CHANGELOG.md` if you maintain one).

## Status in frontmatter

Optional: set `doc_status: archived` and `superseded_by: path/to/new.md` in archived copies for clarity.

## Related documents

- [Avoiding duplication](avoiding-duplication.md)
- [Versioning and changelog](versioning-and-changelog.md)
