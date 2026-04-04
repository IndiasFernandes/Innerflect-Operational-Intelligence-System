---
title: "Deployment pipeline prompts (5-step)"
description: "Verbatim five-prompt sequence for audit, critical questions, deployment generation, verification/rollback, and troubleshooting—mixed hosting."
doc_status: stable
sidebar_label: "[Prompts ×5] Deployment pipeline"
tags:
  - playbook
  - deployment
---

# Deployment pipeline prompts (5-step)

## Purpose

Provide a **production-minded, hosting-agnostic** deployment workflow as **five separate Cursor prompts**, preserved **verbatim** from the author’s pipeline design. Use this when generating or hardening deployment systems for mixed environments (shared hosting, cPanel/WHM, VPS, Passenger-style Node, GitHub Actions, SSH, static hosting).

## When to use

- Standing up or refactoring deployment for a repo where **runtime and hosting are not yet fixed**.
- You want **modular prompts** without splitting into many tiny one-off fragments.
- You will run the prompts **in order** (1→5) or pull **Prompt 5** alone for incident response.

Do not use when: deployment is already fully standardized and these prompts would override locked org runbooks without review.

## Inputs required

- Target repository access (or a faithful export) for Prompt 1.
- Answers to **Prompt 2** gaps before generating files in Prompt 3.
- Hosting constraints and credentials policy (never paste secrets into prompts).

## Step-by-step execution logic

1. Confirm fit using [the category README on GitHub](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/02_playbooks/development/README.md).
2. Run **Cursor prompt 1**; keep the audit output for the next steps.
3. Run **Cursor prompt 2**; answer only what is still unknown.
4. Run **Cursor prompt 3** to generate the deployment system; review diffs carefully before merge.
5. Run **Cursor prompt 4** for verification, rollback, and safeguards.
6. Keep **Cursor prompt 5** ready for production incidents or “green CI, broken site” cases.

## Verbatim source policy

The blocks below are **authoritative copies**. Do **not** edit wording inside the fenced **`text`** blocks unless the owner explicitly updates this playbook; structural headings outside those blocks may evolve for navigation only.

---

## Design notes (verbatim)

```text
Too many prompts creates fragmentation. For your use case, 5 prompts is the better structure:

Audit + classify
Ask only missing critical questions
Generate deployment system
Generate verification + rollback
Troubleshoot broken deployment

That keeps it modular without becoming messy.

Recommended 5-prompt structure
```

---

## Cursor prompt 1 — Audit and classify the project + hosting reality

```text
Prompt 1 — Audit and classify the project + hosting reality

Act as a senior DevOps architect specialized in deployment systems for mixed hosting environments.

Your job is to inspect this repository and classify the correct deployment strategy in a hosting-agnostic but production-realistic way, with special awareness of:
- Verpex reseller
- cPanel / WHM
- VPS
- Apache / Passenger-style Node hosting
- GitHub Actions
- SSH-based deployment
- static hosting
- Node.js / Next.js / Express / monorepos / other frameworks

Goal:
Determine what this project actually is, what kind of deployment it needs, what can be auto-detected from the repo, what is still unknown, and what deployment models are appropriate or inappropriate.

You must inspect and classify:

1. Project type
- static site
- SPA
- Node.js backend/API
- Express app
- Next.js static export
- Next.js SSR / App Router / standalone / custom server
- monorepo vs single app
- mixed frontend + backend
- other framework/runtime if present

2. Runtime/build signals
- package manager from lockfiles
- node version from .nvmrc / package.json / engines / toolchain files
- framework and version
- build scripts
- start scripts
- output folders
- standalone/export configuration
- custom server presence
- server-only features
- dependency on Apache rewrites / .htaccess / public root assumptions

3. Deployment-relevant signals
- whether a DB exists
- whether migrations exist
- whether migrations appear required at deploy time
- whether Supabase / managed DB / remote DB is used
- whether background workers / cron / websockets / queues exist
- whether the app likely needs persistent Node runtime or can be fully static
- whether the project appears heavy for shared hosting

4. Hosting compatibility analysis
For each of these possible deployment models, say whether it is:
- Recommended
- Acceptable
- Risky
- Inappropriate

Models to evaluate:
- Static artifact deploy to docroot
- Artifact deploy to Node runtime
- SSH deploy with remote build
- SSH deploy with prebuilt artifact
- cPanel-managed Git deployment
- Passenger-based Node deployment
- VPS process-based deployment

5. Output format
Return exactly:
A. Repo classification
B. Recommended deployment model ranking
C. What is confidently known from repo inspection
D. What is still unknown
E. What must be asked to the user before generating deployment files
F. Main risks / likely failure modes
G. Whether this should be:
   - static deploy
   - Node runtime deploy
   - hybrid deploy
   - split deployment

Rules:
- Do not force a framework-specific assumption too early.
- Do not assume Node runtime if static export is sufficient.
- Do not assume static deploy if runtime features require a server.
- Do not assume DB migrations unless evidence exists.
- Be precise, practical, and production-minded.
- Prefer reproducible deployment models over clever ones.
```

---

## Cursor prompt 2 — Ask only the missing critical questions

```text
Prompt 2 — Ask only the missing critical questions

Act as a senior deployment interrogator.

You already have the repo audit.

Your task is to ask only the minimum critical questions still needed before generating a production deployment system.

Goal:
Avoid generic questioning.
Only ask what is truly unresolved and necessary for safe deployment.

You must consider these possible concerns:
- hosting type
- document root
- application root
- runtime availability
- Passenger/Application Manager support
- exact domain/subdomain mapping
- intended deployment mode for Next.js or similar frameworks
- whether existing apps are already configured on the server
- whether DB migrations are allowed or required
- rollback expectations
- route-level verification expectations
- resource constraints
- secrets/build-time vs runtime env vars

Output rules:
1. Group questions into:
- Hosting
- Routing
- Runtime
- Database
- Verification
- Rollback/Operations

2. For each question:
- ask it in one clean sentence
- explain in one short line why it matters

3. Do not ask questions already answerable from the repo.
4. Do not ask more than necessary.
5. At the end, provide:
- “Safe to generate now” if enough is already known
or
- “Need answers first” if not enough is known
```

---

## Cursor prompt 3 — Generate the deployment system

```text
Prompt 3 — Generate the deployment system

Act as a senior production DevOps architect.

Using:
- the repo audit
- the answered critical questions
- the target hosting reality

Generate the correct production-ready deployment system.

This must be hosting-aware, framework-aware, rollback-aware, and verification-aware.

The deployment system should work across environments such as:
- cPanel / WHM / Passenger
- Verpex reseller/shared hosting
- VPS
- Apache-served static hosting
- Node runtime hosting

Your task:
Generate the deployment workflow, scripts, and server assumptions in the most appropriate way for this project.

Requirements:
1. Generate only what is truly needed.
2. Avoid unnecessary steps.
3. Use the correct package manager and lockfile.
4. Align Node version expectations.
5. Include lint/typecheck/tests only when supported and useful.
6. Include migrations only if they truly exist and are required.
7. Include safe restart logic when runtime apps are used.
8. Prevent race conditions and overlapping deploys.
9. Prefer artifact-based deployment when appropriate.
10. Prefer reproducibility over “build live on server” unless justified.
11. Avoid duplicated app instances or duplicated process starts.
12. Avoid stale builds, stale caches, stale assets, stale symlinks, stale runtime assumptions.
13. Account for .htaccess / Apache / routing interactions when relevant.
14. Account for mixed frontend/backend or monorepo situations.
15. Include clear server-side prerequisites.

Output:
A. Deployment strategy summary
B. Why this strategy is the best fit
C. File tree of deployment artifacts to generate
D. Full content for each file
E. Server setup instructions
F. Risk notes
G. What should be customized by the operator before production use

Possible files include only when justified:
- .github/workflows/deploy.yml
- deploy.sh
- activate-release.sh
- rollback.sh
- runtime/startup file
- verification script
- cleanup script
- optional reusable workflow
- optional .htaccess guidance

Rules:
- Do not assume Vercel/Render/Railway unless explicitly selected.
- Do not use PM2, Docker, custom servers, or extra tooling unless justified by the actual environment.
- Do not generate fake “best practice” complexity.
- Favor clarity, rollback safety, and debuggability.
```

---

## Cursor prompt 4 — Generate verification, rollback, and production safeguards

```text
Prompt 4 — Generate verification, rollback, and production safeguards

Act as a production reliability engineer.

Using the already selected deployment approach, generate the operational safety layer for deployment.

Goal:
Ensure the deployment is not only “successful” in CI logs, but actually works in production and can recover safely if it does not.

You must generate:

1. Post-deploy verification
It must check more than a health endpoint.
It must detect cases like:
- health = 200 but homepage = 404
- assets missing
- wrong app mapped to domain
- stale build still being served
- rewrite rules broken
- runtime started but public routing broken

2. Rollback system
It must:
- define rollback conditions
- define how previous working release is preserved
- define rollback commands or scripts
- define what happens when verification fails
- define manual recovery steps if automation is insufficient

3. Production safeguards
Include and evaluate:
- deploy locks / concurrency
- stale release cleanup
- disk-space awareness
- permissions / ownership checks
- environment variable validation
- release directory strategy if relevant
- restart semantics
- log visibility
- route-level smoke tests
- static asset validation
- cache invalidation considerations
- document root / app root mismatch risks
- framework-specific production risks

Output:
A. Verification strategy
B. Rollback strategy
C. Production safeguards checklist
D. Full script contents for:
   - verify
   - rollback
   - optional cleanup
E. Exact failure conditions that should fail deployment
F. Exact operator checklist after first deploy

Rules:
- Do not rely only on /health.
- Do not create rollback complexity if the hosting model cannot realistically support it.
- Prefer practical recovery over theoretical perfection.
```

---

## Cursor prompt 5 — Troubleshoot a broken deployment

```text
Prompt 5 — Troubleshoot a broken deployment

Act as a senior deployment troubleshooter.

A deployment is failing or appears successful but the site/app is broken.

Use the evidence provided to diagnose the problem rigorously.

Inputs may include:
- CI/CD logs
- server logs
- routing behavior
- HTTP status codes
- repo type
- hosting type
- startup file
- app root
- docroot
- framework
- deploy method
- screenshots
- cPanel/Passenger/Apache details

Your task:
Rank the most likely causes and give a precise debugging path.

Output:
1. Symptom summary
2. Top likely causes ranked from most likely to least likely
3. Why each cause fits the evidence
4. Exact checks to confirm or eliminate each cause
5. Exact fixes
6. Safe-first fixes vs risky fixes
7. If relevant, say whether the deploy model itself is wrong for this project

You must pay special attention to issues such as:
- health endpoint works but public site fails
- wrong document root
- wrong application root
- wrong startup file
- Passenger not restarting
- stale assets / stale builds
- Apache rewrite conflicts
- static vs SSR mismatch
- Node version mismatch
- missing runtime env vars
- duplicated deploy overlap
- monorepo wrong subdirectory deployed
- build output copied to wrong destination
- Next.js mixed with Node.js assumptions incorrectly

Rules:
- Be practical, not generic.
- Do not just list possibilities — rank them and explain why.
- Prefer the shortest safe path to isolate the root cause.
```

---

## Rationale and coverage (verbatim)

```text
Why this 5-prompt structure is better

This is better because it maps to the real lifecycle:

Prompt 1 decides what the project really is.
Prompt 2 fills only the true gaps.
Prompt 3 generates the actual deployment system.
Prompt 4 generates the safety layer.
Prompt 5 handles failure.

That is cleaner than having separate tiny prompts for audit, workflow, bootstrap, smoke test, rollback, framework variants, and troubleshooting.

Even more agnostic principle

The key is to stop thinking in terms of:

“Node prompt”
“Next prompt”
“cPanel prompt”

And instead think in terms of:

What is the app actually doing
What runtime does it require
What hosting constraints exist
What is the safest deployment model for that combination

That produces better outputs.

The 5 cases underneath these prompts

These 5 prompts still fully cover the 5 actual deployment cases you care about:

Static deploy
Node runtime deploy
Next.js static export
Next.js SSR / runtime app
Monorepo / mixed / special-case app

So you reduce prompt count without losing case coverage.

My recommendation

Use these 5 as the main system.
```

---

## Expected output

- **Prompt 1:** A structured audit (sections A–G as specified in the prompt).
- **Prompt 2:** A minimal question list grouped by theme, ending with “Safe to generate now” or “Need answers first”.
- **Prompt 3:** Concrete deployment artifacts (files, scripts, workflow YAML) and setup notes.
- **Prompt 4:** Verification and rollback scripts plus explicit failure conditions and an operator checklist.
- **Prompt 5:** Ranked diagnosis and fixes for the incident context.

## Quality checks

- [ ] Prompts were run against the **current** repo state and hosting facts.
- [ ] No secrets were pasted into prompts or saved in repo outputs.
- [ ] Generated automation was reviewed for idempotency, locks, and rollback before production use.

## Common failure modes

| Failure | Mitigation |
|---------|------------|
| Skipping Prompt 2 | You generate deploy files with wrong docroot/runtime assumptions. |
| Prompt 3 without Prompt 1 audit | Re-run Prompt 1 or attach its output explicitly. |
| Treating `/health` as enough | Use Prompt 4’s verification breadth. |

## Related documents

- [Category README (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/02_playbooks/development/README.md)
- [Prompt usage model (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/00_governance/prompt-usage-model.md)
- [Pre-release check (GitHub)](https://github.com/indiasfernandes/Innerflect_Operational_Intelligence_System/blob/main/ops/02_playbooks/development/pre-release-check.md)
