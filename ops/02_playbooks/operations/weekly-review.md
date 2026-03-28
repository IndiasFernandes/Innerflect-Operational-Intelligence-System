---
title: "Weekly review"
description: "Run a calm weekly operating rhythm—priorities, risks, metrics pulse, decisions, and carry-over—without meeting theater."
doc_status: stable
tags:
  - operations
  - playbook
---

# Weekly review

## Purpose

Compress a week of motion into **clear priorities**, **visible risks**, and **explicit next actions** so the team enters the next week aligned—not overloaded with unstructured status.

## When to use

- End of week (or end of sprint) for **leadership or squad leads**
- After a disruptive week (incidents, scope shocks) to **reset narrative**
- When work feels “busy but unclear”—to restore **signal**

Do not use as a substitute for **incident response** (handle live incidents first). Do not use for **deep retrospectives**—use [retrospective.md](../project-management/retrospective.md) for structured learning after milestones.

## Inputs required

- Calendar of **commitments** and deadlines for the next 1–2 weeks
- **Work tracking** snapshot: board, issues, or equivalent (even if lightweight)
- **Customer or stakeholder** promises that moved (if any)
- **Metrics** the team trusts (even if manual): pipeline, delivery, reliability, burn—pick ≤5
- Prior week’s **carry-over list** (if this is not the first review)

## Step-by-step execution logic

1. Block **45–60 minutes**; silence notifications.
2. List **wins** (max 5) and **misses** (max 5) with one line each—no blame framing.
3. Review **metrics**: note trend (up/flat/down) and one hypothesis for each change.
4. Identify **top 3 priorities** for next week; demote or delegate the rest explicitly.
5. Scan **risks**: people, scope, dependencies, technical debt—assign owner + “by when” for mitigation *or* accept with reason.
6. Capture **decisions** that emerged; formalize important ones with [decision-log.md](decision-log.md) + [decision-log template](../../03_templates/decision-log-template.md).
7. Run the **Cursor prompt** to structure notes into a shareable summary (optional but recommended for async teams).
8. Publish output to the agreed channel (Notion, Slack pin, wiki, or ticket)—**one canonical link**.

## Cursor prompt

```text
You are facilitating Innerflect’s weekly operating review.

Rules:
- Calm, precise tone—no hype, no shame.
- Prefer decisions and owners over generic advice.
- If data is missing, surface “unknowns” instead of fabricating metrics.
- Do not include confidential client names unless the user pasted them; redact if unsure.

The user will paste raw bullet notes from their review. Transform them into:

## Executive snapshot
3 bullets: overall health, top risk, top opportunity

## Last week
- Wins (max 5)
- Misses (max 5) framed as systems/issues, not individuals

## Metrics pulse
Table: metric | trend (↑/→/↓) | note | owner

## Next week — top 3 priorities
Numbered; each with definition of done

## Risks & blockers
Table: risk | severity (H/M/L) | mitigation | owner | by when

## Decisions needed
Bullets with recommended default if obvious

## Carry-over
Checklist items explicitly deferred with reason

## Communication
Who needs to know what (one short paragraph)

Append the user’s raw notes after this instruction block.
```

## Expected output

- A **single review doc** or message the team can scan in under 3 minutes
- **Three priorities** with definitions of done
- **Risks** with owners—not a vague worry list
- Optional: **decision log entries** for material forks

## Quality checks

- [ ] Priorities are **three or fewer** (or explicit exception documented)
- [ ] Every **risk** has an owner or an explicit acceptance note
- [ ] **Metrics** are honest; missing data called out
- [ ] Link to the review is **stable** for the week (single canonical URL)
- [ ] Carry-overs are intentional, not accidental backlog growth

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Status theater | Ban slide decks; use tables and owners |
| 20 “top” priorities | Force stack rank; defer with written reason |
| Metrics without action | Each trend ties to one next step |
| Forgotten decisions | Route material items to [decision-log.md](decision-log.md) |

## Related documents

- [Decision log](decision-log.md)
- [Process improvement](process-improvement.md)
- [Decision log template](../../03_templates/decision-log-template.md)
- [Communication standards](../../01_core-rules/communication-standards.md)
