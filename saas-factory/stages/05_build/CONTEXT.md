# 05 Build

**Goal:** implement the MVP one small, reviewed task at a time.

## Inputs
| Source | File | Scope |
|---|---|---|
| PRD / design | `{P}/stages/02_mvp_definition/output/PRD.md`, `03_architecture/output/DESIGN.md` | Sections for the current task |
| Task list | `output/tasks.md` | Next unchecked task |
| Quality | `_config/quality-bar.md` | Definition of Done |
| Loop | `references/build-loop.md` | Full |
| Skills | Per task type (see build-loop) | As listed |
| Product repo | path from `{P}/META.md` | Files the task touches |

## Process
First run: create `output/tasks.md` from `shared/templates/tasks.md`. Order:
auth and tenancy, core job, billing, onboarding, emails, admin, polish.
Tasks must be small (≤ 1 day), each with acceptance criteria.
Every later run: follow `references/build-loop.md` for exactly one task
(or a batch the founder approves).

## Outputs
Code and tests in the product repo; `tasks.md` ticked; `CHANGELOG.md` updated;
`GATE.md` when all tasks are done.

## Gate (stage)
- [ ] All MVP tasks done and approved
- [ ] Quality bar "Definition of Done" met for each
- [ ] Tenant isolation tests pass
- [ ] `security` and `accessibility` audits run on the whole app
