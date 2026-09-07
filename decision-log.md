# Decision Log

## HMW Being Addressed

> How might we help an eligible Einbürgerungstest applicant both notice a newly available slot in time and act quickly enough to secure it before it's lost?

(See `discovery.md` for the full evidence log, persona, journey map, and POV behind this question.)

## Ideation: Directions Generated

Generated as materially different directions, presented neutrally with no ranking (per the Skill's generation/selection guardrail):

- **A. Personal check-reminder / habit-support tool** — helps the applicant sustain their own manual-checking routine (reminders at chosen intervals, a log of past checks). Doesn't touch the portal; supports existing behavior rather than replacing it.
- **B. Community information-sharing hub** — a shared space where people log when they checked and what they saw, building collective knowledge over time about whether any timing pattern exists.
- **C. "Ready to pounce" preparedness kit** — a personal checklist/prep routine so that once a slot is seen, the time to complete booking is minimized.
- **D. Widen-the-search assistant** — helps the applicant find and pursue alternative official channels (other VHS locations, direct contact, escalation paths) with potentially different demand.

All four stay within the human-facing guardrail from the Challenge Frame — no automation or scraping against the portal.

## Selection Criteria

Scored against user value, learning value, feasibility, and risk (per `03-define-and-ideate.md`):

| Criterion | A. Check-reminder / habit tool | B. Community info hub | C. "Ready to pounce" kit | D. Widen-the-search assistant |
|---|---|---|---|---|
| User value | Directly targets the strongest-evidenced pain point: 3 months of manual checking with zero feedback on whether effort is working (rows 4, 5). | Could help *if* enough people participate to produce a signal — unknown, not evidenced. | Only addresses the "secure it" half, which rests entirely on open question 4 (unobserved — no slot has ever been found). | Offers a new option, but zero evidence that alternate channels/locations have different demand. |
| Learning value | Medium — could show whether sustained cadence changes behavior, but can't test whether cadence affects catch odds (open question 2, now an Assumption per row 2). | High — most likely to generate new evidence toward open questions 2, 3, 5, if it gets real usage. | Low — testing the "moment a slot appears" means simulating something never observed by anyone on the team. | Low — introduces brand-new unknowns rather than resolving existing open questions. |
| Feasibility (workshop prototype) | High — self-contained, no dependency on other users or the portal. | Medium-low — core value (shared pattern data) can't be demonstrated with a single-participant test. | High to build, but hard to test meaningfully — can't reproduce the "slot appeared" moment realistically. | Lower — would require researching what alternate channels/escalation routes exist before prototyping anything. |
| Risk | Risk of implying checking cadence affects outcomes when that's unconfirmed (open question 2) — messaging needs care. | Risk of implying a pattern exists to find, when it may not (row 2 is now an Assumption, not evidence). | Risk of solving a problem that may not be the actual bottleneck (open questions 4, 5 unresolved). | Highest risk — could give inaccurate guidance about channels never verified. |

## Decision

**Selected: A — Personal check-reminder / habit-support tool.**

Chosen by the group after reviewing the scoring above. Best grounded in existing evidence (rows 1, 3, 4, 5); most feasible to prototype and test meaningfully at workshop scale; lowest risk of overpromising beyond what's evidenced, provided messaging avoids implying checking cadence is known to affect outcomes (open question 2 remains unresolved).

**Real-world data source clarification:** because this project is scoped to human-facing solutions only (no automation/scraping against the portal, per Phase 1), the check-in history in a real version of this tool would NOT be pulled automatically from service.berlin.de. It would rely on the user manually logging each time they check (a one-click "checked — nothing found" action), with the app only automating the timestamp and the running history view — not the checking itself. The prototype's seeded history data is illustrative only, not a claim about how real data would be sourced.

## Rejected Directions

- **B. Community information-sharing hub** — not rejected on merit (highest learning-value ceiling of the four) but deferred: its core value can't be demonstrated in a single-participant workshop test, since it depends on data from multiple real users over time. Worth revisiting as a later extension if the group wants to pursue real community data collection.
- **C. "Ready to pounce" preparedness kit** — deferred because it addresses only the unevidenced half of the HMW (securing a found slot) and can't be tested authentically, since the target moment has never been observed by anyone on the team.
- **D. Widen-the-search assistant** — deferred because it would require new evidence-gathering (about alternate channels/locations) before it could even be prototyped responsibly, and carries the highest risk of giving inaccurate guidance.
