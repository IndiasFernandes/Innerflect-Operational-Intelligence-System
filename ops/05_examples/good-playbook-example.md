---
title: Example — Good playbook (abbreviated)
description: Shortened exemplar showing the full playbook schema; see repo-bootstrap.md for a production-grade version.
doc_status: stable
---

# Example: Good playbook (abbreviated)

This is a **trimmed** illustration. The full production exemplar is [repo-bootstrap.md](../02_playbooks/development/repo-bootstrap.md).

## Purpose

Show how a playbook combines **human steps**, a **Cursor prompt** with output contract, and **quality gates** so teams trust reuse.

## When to use

- Training new contributors on Innerflect Ops format
- Reviewing a draft playbook against a positive pattern

## Inputs required

- Task context the operator will append after the prompt block
- Links to any files the AI must read first

## Step-by-step execution logic

1. Verify category fit.
2. Gather inputs.
3. Run the Cursor prompt; append paths and constraints.
4. Save output to the agreed doc or ticket.
5. Run quality checks.

## Cursor prompt

```text
You are assisting Innerflect on: {one-line task}.

Rules:
- Research-first; cite file paths you inspected.
- No secrets in output.
- Use headings exactly:

## Summary
## Plan
## Deliverables
## Risks & unknowns
## Next steps (owners + dates)

Task:
{Operator fills concrete task here.}
```

## Expected output

- All headings present
- Deliverables name artifacts, not vibes
- Next steps have owners

## Quality checks

- [ ] Prompt includes **output contract**
- [ ] Failure modes table exists
- [ ] Related documents link to rules/templates

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Missing output shape | Add required headings to prompt |
| No boundaries | Add “When to use” / “Do not use when” |

## Related documents

- [Repo bootstrap (full)](../02_playbooks/development/repo-bootstrap.md)
- [Playbook template](../03_templates/playbook-template.md)
