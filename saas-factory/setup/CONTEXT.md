# Setup: configure the factory

**Goal:** capture who the founder is, their legal and tax situation, and their
preferences, so every later stage applies the right rules. Run once; re-run a
block when something changes (e.g. new company, new market).

## Inputs
| Source | File | Scope | Why |
|---|---|---|---|
| Questions | `setup/references/questionnaire.md` | One block at a time | What to ask |
| Current config | `_config/*.md` | Only the file being filled | Avoid overwriting |
| Skill | `.claude/skills/legal-compliance`, `privacy-gdpr` | Full | Build the legal map |

## Process
Run the blocks in order. Each block is its own iteration (brief, answer mode,
questions, summary, approval):
1. Founder profile → `_config/founder.md`
2. Legal and tax profile → `_config/legal-profile.md`
3. Applicable legal framework → `_config/legal-framework.md` (you draft it from
   block 2 and the legal skills; mark each item applies / maybe / no, with why)
4. Idea criteria → `_config/idea-criteria.md`
5. Default stack → `_config/default-stack.md`
6. Brand voice and writing style → `_config/brand-voice.md`, `_config/writing-style.md`
7. Preferences → `_config/preferences.md`
After each approved block, set its line in `_config/_index.md` to `configured`.

## Outputs
The `_config/` files above. Each starts with `Status: configured (YYYY-MM-DD)`.

## Audit
- [ ] No field left as `TODO` without being listed as an open question
- [ ] Legal framework items cite the law or source and the trigger condition
- [ ] Items needing a lawyer or accountant are flagged `⚖️ verify`
