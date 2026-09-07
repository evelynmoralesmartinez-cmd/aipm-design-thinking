# Discovery: Catching an Einbürgerungstest Appointment Slot

## Challenge Frame (agreed, Phase 1)

- **Actor:** A Berlin resident who already meets all eligibility requirements
  for the Einbürgerungstest.
- **Goal:** Notice a newly released appointment slot (e.g. from a
  cancellation) and secure it before someone else does.
- **Portal:** [service.berlin.de – Einbürgerungstest booking](https://service.berlin.de/dienstleistung/351180/)
- **Journey scope:** Close-up on the slot-catching loop only — checking,
  finding nothing, checking again, a slot appearing, racing to book it.
  Explicitly out of scope: eligibility/document steps before this point, and
  anything after a successful booking.
- **Guardrail:** Ideation stays human-facing (awareness, reminders,
  community information-sharing). Automated booking bots/scrapers against
  the portal are out of scope.

Confirmed facts (first-hand knowledge, not assumptions):
- The portal has no waitlist, email alert, or notification system of any
  kind.
- The portal only reveals availability at the moment a booking is
  attempted — there is no visible calendar of upcoming open slots.

## Evidence Log

Record every observation here before any interpretation happens. Keep the
columns honest: if something is a guess, it belongs in the Assumption rows,
not Direct or Behavioural evidence.

| # | Type | Observation | Source | Date noted | Confidence / notes |
|---|------|-------------|--------|------------|---------------------|
| 1 | Direct evidence | The portal only shows appointment availability at the moment of attempting to book — there is no visible calendar of future open slots | First-hand experience | Ongoing, since ~June 2026 | High |
| 2 | Assumption | No pattern is known, because no slot has ever been observed appearing — whether cancellations are the typical cause is assumed, not directly observed | First-hand experience | Ongoing, since ~June 2026 | Low |
| 3 | Direct evidence | The portal has no waitlist, email alert, or notification system of any kind | First-hand experience | Ongoing, since ~June 2026 | High |
| 4 | Direct evidence | Despite checking repeatedly over approximately 3 months, no available slot has ever been found open at the moment of checking | First-hand experience | Ongoing, since ~June 2026 | High |
| 5 | Interpretation | Because slots must be caught in the moment they appear and none has ever been observed open in 3 months of checking, the only available strategy today is manually re-checking the site repeatedly, with no way to know if or when it will pay off | Own conclusion from rows 1–4 | — | Medium |
| 6 | Direct evidence | An official VHS Berlin-Pankow page states demand for Einbürgerungstest registration slots is very high, and asks for patience since short-notice participation isn't possible | VHS Berlin-Pankow (public page) | 2026-09-07 | High (official statement) |
| 7 | Direct evidence | A paid third-party service exists specifically to monitor and secure appointment slots on behalf of users, with a user testimonial describing weeks of unsuccessful manual attempts before using the paid service | TerminFinder (third-party service site) | 2026-09-07 | Low (vendor marketing copy with a financial incentive to oversell scarcity) |
| 8 | Interpretation | The existence of a paid slot-hunting service suggests scarcity is severe enough to create a market for it — this is indirect evidence that competition/scarcity is real, though it doesn't confirm real-time competition between individual users | Inferred from rows 6–7 | — | Medium |

**Type key** (see `02-empathise-with-evidence.md`):
- **Direct evidence** — something a real person said or reported firsthand, recorded close to their wording.
- **Behavioural evidence** — a pattern observed in tickets, forum threads, analytics, or repeated behaviour, not a single quote.
- **Interpretation** — the team's synthesis of what evidence might mean. Must be labeled as synthesis, never presented as fact.
- **Assumption** — something the team believes but has not yet tested. Must be tested before it drives a design decision.

### Open questions (evidence still missing)

1. Whether third parties (agencies, bots) compete for slots alongside
   individuals manually refreshing — unconfirmed.
2. How often slots actually appear in practice (frequency, time-of-day
   patterns, if any).
3. What people currently do to try to catch a slot (manual refreshing
   cadence, shared tips, group chats, spreadsheets, etc.).
4. What happens, concretely, in the moments after a slot is found — how
   fast the booking flow moves, and what causes people to lose the slot
   before completing it.
5. Whether slots are actually taken by other users within seconds/minutes
   of appearing, or whether they simply don't appear often at all — still
   unconfirmed directly (no slot has been observed in 3 months), but rows
   6–8 give partial, indirect evidence that scarcity/competition is severe
   (an official VHS notice describing very high demand, and a paid
   third-party market for slot-hunting). Whether the bottleneck is
   real-time competition, sheer rarity, or both remains open.

## Persona

**The Eligible Applicant** *(role label, not a fictional name — no demographic detail exists in the evidence log to name one)*

- **User group & context:** A Berlin resident who already meets all eligibility requirements for the Einbürgerungstest and is now blocked purely by appointment availability on service.berlin.de. *(Challenge Frame, agreed Phase 1)*
- **Goal:** Secure a test appointment slot before someone/something else does — this competitive framing is a frame-level assumption carried from the original Challenge Frame, not directly evidence-backed; the closest support is indirect (rows 6–8), which suggest severe scarcity but don't confirm real-time competition (open questions 1, 5). What's actually evidenced is narrower: slots appear unpredictably with no advance calendar. *(row 1)*
- **Behavior:** Checks the booking portal repeatedly over an extended period (~3 months in this case) and has never once found an open slot at the moment of checking. *(row 4)* Has no way to know when to check, since there's no waitlist, alert, or notification system. *(row 3)*
- **Evidence-backed pain point:** Three months of manual re-checking with zero successful catches and no feedback signal on whether the effort is likely to ever pay off. *(rows 4, 5 — row 5 is labeled Interpretation, not fact)*
- **Context that may or may not be shared by others:** An official VHS notice describes very high demand, and a paid third-party service exists to hunt slots on people's behalf. *(rows 6, 7)* This suggests scarcity is severe *(row 8, Interpretation)* — but whether this applicant is in real-time competition with others, or slots are just rare, is **unconfirmed** *(open question 5)*.
- **Open questions carried into this persona (evidence still missing):**
  - What checking cadence/tools/tips this applicant or others actually use *(open question 3)*.
  - What happens in the moments right after a slot appears — since none has been observed, we don't know *(open question 4)*.
  - Whether competition is from individuals, agencies, or both *(open question 1)*.

## Journey Map

**Actor:** The Eligible Applicant · **Scenario:** Trying to catch a released Einbürgerungstest slot on service.berlin.de · **Goal:** Book a slot before it's gone

| Phase | Action | Thought | Feeling | Evidence |
|---|---|---|---|---|
| 1. Decide to check | Opens the booking page, not knowing if today has a slot | "Maybe this time" *(Interpretation)* | Cautious hope *(Interpretation)* | rows 1, 2 |
| 2. Attempt to view availability | Attempts to make a booking, since availability is only revealed at that moment | Uncertainty — the only way to know is to attempt booking itself *(Interpretation)* | Tense *(Interpretation)* | row 1 |
| 3. Find no slot | Sees no open appointment — this has been the outcome every time in 3 months | — | Frustration/resignation *(Interpretation)* | row 4 |
| 4. Decide when to try again | Closes the site with no signal for when to return | "No way to know if/when it's worth checking again" *(Interpretation)* | Fatigue *(Interpretation)* | rows 3, 5 |
| 5. *(Hypothesized, not observed)* A slot appears | Would need to complete the booking flow fast enough to secure it | — | — | **Not evidenced.** No slot has ever been found in 3 months *(row 4)*; this phase is the target moment the whole challenge is about, but nothing here is observed — flagged per open question 4. |
| 6. *(Hypothesized, not observed)* Outcome: booked or lost | Either secures the appointment or loses it to someone/something else | — | — | **Not evidenced** — same caveat as Phase 5. |

**Pain point (best-evidenced):** Repeated manual checking over months produces zero success and no feedback on whether the strategy is working. *(row 4, reinforced by row 5's Interpretation)*

**Opportunity (solution-neutral, not a designed feature):** Some way to reduce blind, effortful manual checking and give the applicant a better basis for deciding when checking is worthwhile — direction intentionally left open for Ideate.

## Point of View (POV)

> An eligible Berlin resident needs a way to know when a new Einbürgerungstest slot might become available, because the official portal gives no advance signal of availability and no notification of any kind *(rows 1, 3)* — and three months of manual checking has produced zero successful catches, with no way to judge whether continued effort is likely to pay off *(rows 4, 5)*.

## How Might We (HMW)

> How might we help an eligible Einbürgerungstest applicant both notice a newly available slot in time and act quickly enough to secure it before it's lost?

This keeps both the noticing (awareness/timing) and securing (speed/action) angles open for Ideate, without asserting that competition from other users is the confirmed cause of loss — that remains open question 5.
