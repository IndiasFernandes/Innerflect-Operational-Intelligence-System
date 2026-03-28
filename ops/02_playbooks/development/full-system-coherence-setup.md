---
title: "Full system coherence setup (Context7)"
description: "Single Cursor prompt to scan a codebase and design rules, skills, hooks, subagents, and optional AGENTS.md with structured, evidence-first outputs."
doc_status: stable
sidebar_label: "[COH · Context7] Full system coherence"
tags:
  - playbook
  - cursor
  - coherence
---

# Full system coherence setup (Context7)

## Purpose

Provide a **single, end-to-end Cursor prompt** for designing a **complete Cursor coherence system** (rules, skills, hooks, subagents, optional `AGENTS.md`) from a **real codebase scan**, with **Context7-style structured reasoning** and **anti-hallucination** discipline.

## When to use

- You are onboarding a repo (or monorepo) to Cursor and need **rules + skills + enforcement hooks** aligned to actual code.
- You want **one session** to produce a **map, gap analysis, and concrete artifacts list** before implementation.
- You will **paste session-specific paths, constraints, and product facts** at the end of the prompt block.

Do not use when: the goal is a small localized fix with no repo-wide coherence work—use a narrower playbook instead.

## Inputs required

- Access to the target repository (or faithful export) for a real scan.
- Any **non-negotiables** (hosting, compliance, stack locks).
- Links to existing internal docs if they exist (optional but improves Step 1).

## Step-by-step execution logic

1. Confirm fit using [the category README](./README.md).
2. Confirm you want the **`[COH · Context7]`** bundle (see [Cursor prompt bundles](./README.md#cursor-prompt-bundles-sidebar-ids) in the category README).
3. Run the **Cursor prompt** below; append session-specific repo paths, constraints, and stakeholders at the end.
4. Save outputs using templates under `../../03_templates/` or your project’s doc system; promote stable rules into `.cursor/` only after review.
5. Complete **Quality checks**; track follow-ups from **Critical questions**.

## Verbatim source policy

The block below is **authoritative**. Do **not** edit wording inside the fenced **`text`** block unless the owner explicitly updates this playbook.

## Cursor prompt

```text
🧠 CURSOR PROMPT — FULL SYSTEM COHERENCE SETUP

Title:
🔍 FULL SYSTEM SCAN → RULES, SKILLS, HOOKS, AGENTS (CONTEXT7 OPTIMIZED)

Prompt
You are a senior system architect.

Your goal is to analyze this entire codebase/website and design a COMPLETE Cursor coherence system using:

- Rules (.cursor/rules)
- Skills (.cursor/skills)
- Hooks (.cursor/hooks)
- Subagents
- (Optional) AGENTS.md

⚠️ CRITICAL PRINCIPLES
- DO NOT assume anything → scan real code
- Prefer minimal tokens, maximum clarity
- Reference files instead of rewriting them
- Separate facts vs assumptions
- Use Context7-style structured reasoning

---

## STEP 1 — SYSTEM SCAN (MANDATORY)

Scan the codebase and report ONLY verified facts:

1. Tech stack (frontend, backend, infra)
2. Folder structure (high-level)
3. Core systems detected:
   - Auth
   - Payments
   - Database
   - APIs
   - State management
   - Audio / media / special systems (if any)
4. Key flows (detected from routes/components):
   - onboarding
   - main user journey
   - data creation/storage
5. External services (Supabase, Stripe, etc.)
6. Existing docs (md files, schemas, configs)

Output format:

### VERIFIED SYSTEM MAP
- Stack:
- Structure:
- Core Systems:
- Key Flows:
- Integrations:
- Existing Docs:

---

## STEP 2 — GAP & RISK ANALYSIS

Identify:

- Missing structure (no clear flows, no schema, etc.)
- Risk areas (inconsistency, unclear logic, duplication)
- Areas that require strict rules

Output:

### RISKS / GAPS
- ❌ Missing:
- ⚠️ Risk:
- 🔧 Needs structure:

---

## STEP 3 — GENERATE CURSOR RULES

Create a minimal but powerful set of rules:

- Max 5–7 rules files
- Each rule must be SHORT and actionable
- Reference real files instead of duplicating

Include:

1. Project Map Rule
2. Coding / Architecture Standards
3. Workflow Rule (scan → plan → implement → verify → doc sync)
4. Doc Sync Rule (SYSTEM_SPECS / AUDIT / DB_SCHEMA)
5. Safety Rule (no hallucination)
6. (Optional) Domain-specific rule (if needed)

Output:

### RULES STRUCTURE
For each:
- filename
- purpose
- content (concise)

---

## STEP 4 — GENERATE SKILLS (HIGH VALUE ONLY)

Create reusable skills for THIS project.

Constraints:
- Max 6–8 skills
- Only high-impact workflows
- Each skill = procedural, not conceptual

Each skill must include:

- name
- when to use
- steps (scan → verify → output)
- output format
- anti-hallucination rule

Examples:
- auth audit
- db schema mapping
- api route scan
- payment flow audit
- frontend flow trace
- cursor prompt generator

Output:

### SKILLS

---

## STEP 5 — DEFINE HOOKS (ENFORCEMENT)

Design minimal hooks that enforce coherence:

Focus on:
- after edit validation
- schema / API change detection
- doc sync enforcement

Output:

### HOOKS
- name
- trigger (before/after edit)
- logic (simple, practical)

---

## STEP 6 — DEFINE SUBAGENTS

Split responsibilities:

- Architect (scan + structure)
- Implementer (code changes)
- Auditor (verification)
- Doc Sync (update docs)

Output:

### SUBAGENTS
- name
- responsibility
- when invoked

---

## STEP 7 — AGENTS.md (OPTIONAL)

If useful, generate a short AGENTS.md that:

- explains how to operate in this repo
- references rules and skills
- defines workflow in <15 lines

---

## STEP 8 — CRITICAL QUESTIONS

Ask ONLY high-leverage questions needed to improve the system.

Max 5–8 questions.

Focus on:
- unclear architecture decisions
- missing integrations
- product logic ambiguity
- scaling constraints

Output:

### QUESTIONS

---

## STEP 9 — FINAL OUTPUT FORMAT

Keep everything structured, concise, and readable.

DO NOT:
- write long explanations
- repeat information
- speculate without evidence

PRIORITY:
Clarity > completeness > verbosity

---

Proceed.
⚡ Why this works (short, direct)
Forces scan before thinking → kills hallucination
Keeps rules minimal → avoids bloated context
Uses skills for execution → reusable intelligence
Adds hooks for discipline → real enforcement
Uses subagents → separation of concerns
Adds questions → continuous improvement loop
Keeps token usage low via:
structured outputs
no duplication
file referencing
```

## Expected output

- **Steps 1–2:** Evidence-backed system map and gap/risk list tied to real paths.
- **Steps 3–6:** Concrete filenames, responsibilities, and triggers—not generic advice.
- **Step 7:** Optional short `AGENTS.md` outline if it adds value.
- **Step 8:** A small set of high-leverage questions only.
- **Step 9:** Final consolidated sections per the required headings.

## Quality checks

- [ ] Outputs cite **files or folders** from the repo where claims are made.
- [ ] **Assumptions** are labeled separately from **verified facts**.
- [ ] Rule/skill counts stay within the stated **max** unless justified under risks.
- [ ] No secrets or credentials appear in generated text.

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Skipping the scan | Re-run Step 1 on the actual tree; refuse to invent stack facts. |
| Over-long rules | Enforce 5–7 rule files; merge or defer extras to skills. |
| Duplicating large files in the answer | Reference paths and diff-sized summaries only. |

## Related documents

- [Category README](./README.md)
- [Deployment pipeline prompts](./deployment-pipeline-prompts.md) (multi-prompt deployment sequence)
- [Prompt usage model](../../00_governance/prompt-usage-model.md)
- [Repository bootstrap](./repo-bootstrap.md)
