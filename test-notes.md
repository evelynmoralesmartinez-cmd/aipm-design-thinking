# Test Notes

## Learning Question

> Can a person easily set up a check-in reminder with a cadence they choose, and understand their own past-checking history at a glance?

Prototype under test: `prototype/index.html` (Direction A — personal check-reminder / habit-support tool, see `decision-log.md`).

## Known Limitations (pre-test)

These are findings 4–7 from the `prototype-reviewer` subagent's audit (see conversation for the full report). The group accepted findings 1–3 as fixes before testing (default cadence removed, history data varied, dark-mode button contrast fixed). Findings 4–7 were accepted as known limitations to watch for, not fixed before this first test. This is subagent critique, not user observation — recorded here for reference so the group can watch for these specifically during the session.

1. **Confirmation message isn't announced to assistive tech.** Focus moves to the view's heading on save, not to the "Reminder set: checking every X" status text itself, and that text has no `aria-live` region. A screen-reader user may not hear the outcome without navigating further.
2. **Custom cadence field has no visible validation.** An empty or invalid entry silently falls back to "1" with no observable state — this sub-path can't currently surface hesitation or failure.
3. **No persistence across reload.** Reminder status resets to "No reminder set yet." on refresh. Low risk for one continuous moderated session; worth noting if the protocol involves a pause or reload.
4. **No path to edit or cancel an existing reminder.** Setting a new reminder silently overwrites any previous one, with no acknowledgment. Not required by the learning question, but could produce natural confusion.

## Test Session Observations

### Session 1

**Participant:** A person navigating the German naturalization process (labeled context, not otherwise identified).

**Observations:**
1. Set up the reminder without help, choosing a cadence without being told which one to pick.
2. Did not hesitate anywhere in the general flow.
3. Noticed the differing history row ("Slot found — booked!") among the others.
4. Said nothing verbally during the test.
5. Confusion point: in the cadence section, the custom-hours input field remains visible and editable at all times, even when a different radio option (e.g. "Every 2 hours") is selected. This creates ambiguity — if a number is typed into the custom field while a different radio is selected, it's unclear which choice would actually apply.

**Interpretation (the group's own conclusion, not an observed fact):** The custom-hours field should be disabled/greyed out until the "Custom" radio itself is explicitly selected, removing the ambiguity between "I chose Custom with this value" vs. "the field has a number but I picked something else."

**Context and limits of this test:** Single participant, one session, one moderator. Findings 4–7 from the pre-test known-limitations list (assistive-tech announcement, custom-field validation, no persistence, no edit/cancel path) were not specifically probed in this session — no assistive technology was used, and the session didn't involve a reload or an attempt to change an existing reminder.

**Questions this test did not answer:**
- Whether the participant would have saved the form while the custom field showed a conflicting number (not attempted in this session).
- Whether other participants would notice the same custom-field ambiguity, or resolve it differently.
- Whether the flow works as well for someone using assistive technology (known limitation, not tested here).

### Session 2

**Participant:** A different person (labeled context, not otherwise identified) than Session 1.

**Observations:**
1. Chose a cadence without being told which one to pick.
2. The custom-hours field worked correctly this time — no confusion; the Session 1 bug fix held up.
3. Noticed the differing history row ("Slot found — booked!").
4. Hesitation point: did not receive any clear confirmation that the reminder was actually saved — was left unsure whether the reminder had been created or not.

**Verbatim feedback (participant's own words, paraphrased slightly for clarity):** "Could include one more confirmation step for the reminder, and offer to save it to Google Calendar or iPhone Calendar."

**Interpretation (the group's own conclusion, not an observed fact):** This connects to prototype-reviewer's Finding #4 from before testing (confirmation not announced to assistive tech) — but Session 2 suggests the issue is broader than accessibility-specific: any user, assistive tech or not, can be left unsure whether saving worked.

**Scope note:** The participant's calendar-integration suggestion (Google/iPhone Calendar) is noted here as a possible future-extension idea, but is out of scope for this project's approved Direction A — no action needed now.

**Context and limits of this test:** Single participant, one session, one moderator — same task as Session 1. The custom-field validation and no-persistence known limitations were not specifically probed in this session either.

**Questions this test did not answer:**
- Whether a more visible confirmation (beyond what Session 2 lacked) would actually resolve the hesitation, or whether it needs testing itself.
- Whether this hesitation would also occur for someone using assistive technology (still untested with real assistive tech).

## Approved Iteration — Session 1

**Change:** Added `.custom-fields[hidden] { display: none; }` to `prototype/style.css`, so the `hidden` attribute takes precedence over the unconditional `display: flex` rule.

**Motivated by:** Observation #5 (Session 1) — the custom-hours field stayed visible and editable regardless of which cadence radio was selected, creating ambiguity about which choice would actually apply.

**Root cause:** A CSS specificity conflict — `.custom-fields { display: flex; ... }` overrode the `hidden` attribute's own display behavior, so `script.js`'s toggle logic (which correctly set/cleared the `hidden` attribute) had no visible effect.

**Status:** Approved and implemented. Re-tested by the group directly and confirmed fixed.

**Other observations from Session 1 (1–4):** No change proposed — these describe the flow working as intended (unaided setup, no hesitation, the varied history row was noticed as intended, no negative verbal feedback).

**Known limitations 4–7** (assistive-tech announcement, custom-field number validation, no persistence, no edit/cancel path): not probed in this session — no new evidence to motivate changing them. They remain open for a future test round if the group wants to test them specifically.

## Approved Iteration — Session 2

**Change:**
1. Added `aria-live="polite"` to `#reminder-status` in `prototype/index.html` (permanent attribute), so any text change is announced to assistive tech automatically, without depending on focus movement.
2. On save, `prototype/script.js` now prefixes the confirmation text with a checkmark (`✓ Reminder set: checking ...`) and adds a `.confirmed` class, styled in `prototype/style.css` with a distinct highlighted background/border (green-toned, theme-aware for light/dark) — visually distinguishing the "saved" state from the neutral "No reminder set yet." default.

**Motivated by:** Session 2, Observation #4 (no clear confirmation that the reminder was saved) and the participant's verbatim feedback requesting a confirmation step. The group's own interpretation noted this is a general visibility problem, not solely the assistive-tech-specific gap in known limitation #1 — so this fix addresses both together.

**Status:** Implemented and re-tested by the group directly — confirmed fixed (checkmark prefix and visual highlight both appear clearly on save).

**Out of scope, noted only:** The participant's calendar-integration suggestion (Google/iPhone Calendar) — a possible future-extension idea, not part of Direction A.
