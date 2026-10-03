# 02 MVP definition

**Goal:** the smallest product that solves the validated pain and can be sold.

## Inputs
| Source | File | Scope |
|---|---|---|
| Previous stage | `{P}/stages/01_validation/output/synthesis.md`, `decision.md` | Full |
| Archetypes | `archetypes/<from META>.md` | Full |
| Legal | `_config/legal-framework.md` (+ `{P}/_config/` overrides) | Applies = yes/maybe |
| Quality | `_config/quality-bar.md` | Full |
| Skills | `pricing`, `ux-design`, `onboarding-activation`, `storytelling-positioning` | Full |
| Templates | `shared/templates/PRD.md`, `pricing.md` | Full |
| Questions | `references/questions.md` | Full |

## Process
1. Write `PRD.md`: problem, users, one core job done very well, user stories
   with acceptance criteria, non-functional requirements, explicit out-of-scope.
2. Write `positioning.md`: category, alternatives, differentiator, one-liner.
3. Write `pricing.md`: plans, limits, trial model, annual discount, rationale.
4. Write `flows.md`: core user flows (sign-up to first value, billing).
5. Check every applicable legal item; list product obligations in the PRD.

## Outputs
`PRD.md`, `positioning.md`, `pricing.md`, `flows.md`, `GATE.md` in `output/`.

## Gate
- [ ] Out-of-scope section is explicit
- [ ] Every story has testable acceptance criteria
- [ ] Time to first value defined and short
- [ ] Legal items from the framework mapped to requirements
- [ ] Price grounded in validation evidence
