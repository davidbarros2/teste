---
name: code-quality-testing
description: Code quality, testing strategy, code review, version control and CI practice. Use in foundations and every build task.
---

# Code quality and testing

Last reviewed: 2026-10.

## Rules
1. Readable over clever. Small functions, clear names, one responsibility.
2. Match existing patterns in the codebase before introducing new ones.
3. Test pyramid: many unit tests, some integration tests (DB, API),
   few end-to-end tests on critical flows (sign-up, core job, billing).
4. Tests are deterministic and fast; fix or delete flaky tests, never ignore them.
5. Every bug fix starts with a failing test that reproduces it.
6. Lint, format and type check run locally and in CI; the main branch is always green.
7. Small commits with clear messages (Conventional Commits); semantic versioning for releases.
8. Review every diff (self-review with a checklist when solo): correctness,
   security, tenancy, errors, tests, naming, docs.
9. Track technical debt explicitly; reserve time to pay it.

## Audit checklist
- [ ] New behavior covered by tests at the right level
- [ ] CI green: tests, lint, types, scans
- [ ] Diff reviewed against this checklist and `security`
- [ ] CHANGELOG updated for user-visible changes

## Sources
- Martin Fowler, "The Practical Test Pyramid"
- Google Engineering Practices: code review guide
- Conventional Commits 1.0; Semantic Versioning 2.0.0
- DORA research (*Accelerate*, Forsgren, Humble, Kim)
