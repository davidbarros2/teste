# 00 Ideation

**Goal:** pick one idea worth validating. `{P}` = product folder.

## Inputs
| Source | File | Scope |
|---|---|---|
| Founder | `_config/founder.md` | Full |
| Criteria | `_config/idea-criteria.md` | Full |
| Backlog | `portfolio/ideas-backlog.md` | Full |
| Archetypes | `archetypes/_index.md` | Table |
| Skill | `customer-research` | "Problem framing" |
| Questions | `references/questions.md` | Full |

## Process
**Portfolio mode** (no product yet): generate or collect ideas, score them with
the criteria, update `portfolio/ideas-backlog.md`. Ideas must start from a
problem and an audience the founder can reach, never from a technology.
**Product mode** (after `new-product.sh`): expand the chosen idea into
`{P}/stages/00_ideation/output/idea.md` using `shared/templates/idea.md`;
pick the archetype(s) and fill `{P}/META.md`.

## Outputs
| File | Content |
|---|---|
| `portfolio/ideas-backlog.md` | Scored ideas (portfolio mode) |
| `output/idea.md` | Problem, audience, hypotheses, riskiest assumption |
| `{P}/META.md` | Name, slug, archetypes, product_language |
| `output/GATE.md` | From `shared/templates/GATE.md` |

## Gate
- [ ] Problem stated as "<audience> loses <time/money> doing <task>"
- [ ] Founder can reach the audience (named channels)
- [ ] Riskiest assumption explicit
- [ ] Score recorded with reasons
