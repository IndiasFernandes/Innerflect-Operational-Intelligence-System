---
title: Example — Bad prompt vs good playbook
description: Contrasts one-off vague prompts with a structured playbook approach.
doc_status: stable
---

# Bad prompt vs good playbook

## Bad (chat-style prompt)

> “Make the repo better and add best practices and also docs and CI if needed thanks”

**Why it fails**

- No **definition of done** or scope boundary
- No **stack context** or paths to inspect
- **“Best practices”** invites generic slop unrelated to your constraints
- No **output shape**—hard to review, hard to reuse
- Encourages **silent invention** instead of research-first

## Good (playbook-backed)

A playbook adds:

1. **Purpose** — what outcome, why it exists
2. **When to use** — boundaries vs other playbooks
3. **Inputs required** — what the human gathers first
4. **Step-by-step execution** — human + AI choreography
5. **Cursor prompt** — with **rules** and **required headings**
6. **Expected output** — artifacts reviewers can verify
7. **Quality checks** — checkbox discipline
8. **Failure modes** — predictable mistakes pre-addressed
9. **Related documents** — links to standards and templates

**Cursor prompt excerpt (pattern)**

```text
Rules:
- Research-first: inspect X before proposing Y.
- No secrets; ask if blocked.

Output format:
## Summary
## Plan
## Deliverables (paths)
## Risks & unknowns
## Next steps (owners + dates)
```

## Takeaway

**Prompts live inside playbooks** so they inherit governance, stay versioned, and remain discoverable from category READMEs—not buried in chat history.

## Related documents

- [Prompt usage model](../00_governance/prompt-usage-model.md)
- [Avoiding duplication](../00_governance/avoiding-duplication.md)
- [Good playbook example](good-playbook-example.md)
