# 01 Validation

**Goal:** prove people will pay before any code is written.

## Inputs
| Source | File | Scope |
|---|---|---|
| Previous stage | `{P}/stages/00_ideation/output/idea.md` | Full |
| Founder | `_config/founder.md` | "Unfair access" |
| Criteria | `_config/idea-criteria.md` | "Kill criteria" |
| Skills | `customer-research`, `pricing`, `landing-pages`, `copywriting`, `human-writing` | Full |
| Template | `shared/templates/interview-script.md`, `landing-page.md` | Full |
| Founder material | `output/interviews/*.md` | All (after checkpoint) |
| Questions | `references/questions.md` | Full |

Do not load: stack, security, code.

## Process
1. Draft `validation-plan.md`: hypotheses, target profile, where to find 10-20 people.
2. Draft `interview-script.md` (past behavior, no pitching, no "would you use").
3. Draft `landing-copy.md` for a smoke test (value prop, price, waitlist or pre-sale CTA).
4. ⏸ Checkpoint: founder runs interviews and the landing test; notes go to
   `output/interviews/` (template `interview-notes.md`), results to `smoke-test.md`.
5. Synthesize into `synthesis.md`: pains by frequency and intensity, quotes,
   buying signals, current spend, objections.
6. Compare with kill criteria; write `decision.md`: GO / PIVOT / KILL with reasons.

## Outputs
`validation-plan.md`, `interview-script.md`, `landing-copy.md`, `synthesis.md`,
`decision.md`, `GATE.md`, all in `output/`.

## Gate
- [ ] Every conclusion cites interview notes
- [ ] ≥ 3 strong buying signals, or decision is PIVOT/KILL
- [ ] Customer vocabulary captured for later copy
