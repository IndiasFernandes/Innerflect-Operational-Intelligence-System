---
title: Playbook Template
description: Copy this file when creating a new playbook; replace angle-bracket placeholders and remove this description line if duplicating frontmatter.
doc_status: stable
---

# Replace with playbook title

Use an H1 that matches frontmatter `title` below.

When creating a **new** playbook file, start with this frontmatter block (replace values):

```yaml
---
title: "<Short title>"
description: "<One-line summary for sidebars and search>"
doc_status: draft
tags:
  - "<category-tag>"
---
```

Then use these sections in order:

## Purpose

&lt;What outcome this playbook produces and why it exists.&gt;

## When to use

- &lt;Specific situation 1&gt;
- &lt;Specific situation 2&gt;
- Do not use when: &lt;boundary&gt;

## Inputs required

- &lt;Artifact or fact&gt;
- &lt;Access: repos, analytics, design files&gt;

## Step-by-step execution logic

1. &lt;Human step: confirm scope / gather inputs&gt;
2. &lt;Human step: environment or branch&gt;
3. Run the **Cursor prompt** below; append session-specific facts at the end.
4. &lt;Human step: save outputs using a template from `ops/03_templates/`&gt;
5. &lt;Human step: run quality checks; open PR or update ticket&gt;

## Cursor prompt

```text
You are assisting Innerflect on: <one-line task>.

Context:
- Repo / project: <fill>
- Constraints: <fill>
- Definition of done: <fill>

Rules:
- Research-first: inspect codebase/docs before proposing changes.
- Prefer reusing existing patterns over inventing new ones.
- Do not introduce secrets or commit credentials.
- If blocked, list explicit questions rather than guessing.

Tasks:
1. <Task 1 with expected artifact>
2. <Task 2 with expected artifact>

Output format (use these headings):
## Summary
## Plan
## Changes / Recommendations
## Risks & open questions
## Next steps (owners + dates)
```

## Expected output

- &lt;Artifact: path or doc type&gt;
- &lt;Secondary artifact&gt;

## Quality checks

- [ ] Correct **category**; “When to use” boundaries respected
- [ ] **Inputs** gathered before running the prompt
- [ ] Output uses agreed **headings or template**
- [ ] **Risks and unknowns** are visible
- [ ] **Related docs** updated if taxonomy changed

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Prompt too vague | Add file paths, constraints, and required output headings |
| Wrong playbook | Use category README; split scopes if one prompt does two jobs |
| Duplicate procedures | Merge per [Avoiding duplication](../00_governance/avoiding-duplication.md) |

## Related documents

- [Adding a playbook](../00_governance/adding-a-playbook.md)
- [Relevant core rule](../01_core-rules/README.md)
- [Relevant checklist](../04_checklists/README.md)
