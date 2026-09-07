---
name: design-thinking
description: Synthesize discovery artifacts (persona, journey map, POV, HMW), generate ideation directions, and interpret test notes for this project's Design Thinking workshop, using only evidence the group has supplied. Use when asked to synthesize discovery.md, generate or select ideation directions, or turn test-notes.md observations into proposed iterations.
---

# Design Thinking Workshop Skill

This Skill encodes the method and guardrails from this repository's lesson
files (`01` through `04`). It does not encode a product solution — the
challenge, evidence, and every product decision belong to the group.

## When to run

Invoke this Skill when asked to:

- synthesize `discovery.md`'s evidence log into a persona, journey map, POV
  statement, or HMW question;
- generate ideation directions in response to an approved HMW question;
- apply selection criteria to ideation directions in `decision-log.md`;
- interpret `test-notes.md` observations and propose iteration changes.

Do not invoke this Skill to gather evidence. Evidence collection is a human
task; this Skill only works with evidence already recorded.

## What this Skill expects from the group

- A populated evidence log, with each row already labeled Direct evidence,
  Behavioural evidence, Interpretation, or Assumption.
- An approved challenge frame and journey scope before synthesis begins.
- Explicit approval at each gate below before the work continues.

If the evidence log is too thin to support a section (e.g. no evidence
speaks to a persona's pain point, or a journey phase), say so directly and
list it as an open question. Do not invent detail to complete the section.

## Evidence rules (non-negotiable)

1. Every claim in a persona, journey map, POV, or HMW must trace back to a
   specific evidence-log row by number. If it can't, label it Interpretation
   or Assumption — never state it as fact.
2. Never invent quotes, demographic detail, dates, or behavior not present
   in the evidence log.
3. Mark AI-generated material (a drafted persona, a simulated reaction, a
   role-played skeptical review) as a simulation until a human checks it
   against evidence. A simulation is never treated as user research.
4. When confidence is genuinely low, say so in the artifact itself rather
   than smoothing it into confident prose.
5. Missing evidence is an open question, not a gap to fill with a
   plausible-sounding guess.

## Approval gates (require human decision)

The Skill drafts; it does not finalize. Stop and wait for explicit approval
before treating any of the following as settled:

- final wording of the persona;
- the journey map's phases and which pain point/opportunity are marked;
- the POV statement;
- the HMW question;
- which ideation directions are selected (see below);
- the prototype's learning question;
- which test-note interpretations become approved iteration changes.

## Ideation: separate generation from selection

When generating ideation directions in response to an approved HMW
question:

1. **Generation step.** Propose several materially different directions.
   A variation in wording, color, or layout is not a different direction —
   each proposed direction must differ in its underlying approach. Do not
   rank, recommend, or evaluate any direction during this step. Present all
   directions neutrally and together.
2. **Selection step — separate and explicit.** Only after generation is
   complete, and only when asked to move to selection, apply the four
   criteria from `03-define-and-ideate.md`: user value, learning value,
   feasibility, and risk. State how each direction scores against each
   criterion. The group chooses the direction — this Skill does not choose
   on the group's behalf, even when a direction scores highest.

Never collapse these two steps into one response. A generation step that
already recommends a favorite defeats the purpose of divergent ideation.

## Synthesis workflow

1. Read the current evidence log in `discovery.md`.
2. Cluster related observations; name the tension or need behind each
   cluster (per `03-define-and-ideate.md`).
3. Draft the requested artifact (persona, journey map, POV, or HMW),
   citing evidence-log row numbers for each claim.
4. List open questions where evidence is weak or missing.
5. Present the draft for review — do not mark it as final in the file
   until the group approves it.

## What stays human

This Skill produces drafts and structure. It cannot:

- decide which interpretation is credible;
- approve the concept, persona, journey, POV, HMW, or prototype direction;
- observe real people or generate real user evidence;
- decide which subagent findings matter.

Those decisions belong to the AI Project Manager (the group), not to this
Skill or to Claude acting alone.
