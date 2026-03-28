---
title: Prompt Quality Review Checklist
description: Review gate for playbooks and prompts—schema, boundaries, safety, outputs, duplication.
doc_status: stable
---

# Prompt Quality Review Checklist

## Playbook structure

- [ ] All required sections present: Purpose, When to use, Inputs, Steps, Cursor prompt, Expected output, Quality checks, Failure modes, Related documents
- [ ] **Cursor prompt** is one fenced block with clear output headings
- [ ] “When to use” states **boundaries** (when not to use) if overlap risk exists

## Safety and hygiene

- [ ] No secrets, tokens, or private client data in examples
- [ ] Prompt forbids or discourages unsafe actions where relevant (credential leaks, destructive ops)

## Operational usefulness

- [ ] Inputs list is realistic; reader knows what to gather first
- [ ] Expected output names **artifacts** (paths, doc types), not vibes
- [ ] Quality checks are **checkboxable**, not platitudes

## Duplication and placement

- [ ] Category README and docs hub row updated
- [ ] No parallel playbook covers the same procedure ([Avoiding duplication](../00_governance/avoiding-duplication.md))

## AI behavior alignment

- [ ] Compatible with [AGENTS.md](../../AGENTS.md) (research-first, reuse, maintain indexes)

## Related documents

- [Playbook template](../03_templates/playbook-template.md)
- [Adding a playbook](../00_governance/adding-a-playbook.md)
