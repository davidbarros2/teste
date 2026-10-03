# Build loop (one task)

1. Brief: task, acceptance criteria, files likely touched, skills applied.
2. Ask only what is truly open (3 options + recommendation).
3. Read the relevant code first. Match existing patterns.
4. Write the test first when practical; see it fail.
5. Implement the smallest change that passes.
6. Run tests, lint, type check. Fix until clean.
7. Self-review the diff as a hostile reviewer: security, tenancy, edge cases,
   accessibility, error states, copy.
8. Commit on a branch with a clear message; open a PR if the founder uses PRs.
9. Validation summary (protocol), including how to try it.
10. On approval: tick the task, update CHANGELOG and STATUS, handoff.

## Skills by task type
| Task type | Skills |
|---|---|
| Any UI | `ux-design`, `visual-design`, `accessibility`, `human-writing` |
| Auth, data, API | `security`, `saas-architecture`, `privacy-gdpr` |
| Billing | `billing-payments`, `legal-compliance` |
| Onboarding, empty states | `onboarding-activation`, `copywriting` |
| Emails | `email-deliverability`, `copywriting`, `human-writing` |
| AI features | `ai-features` |
| Performance | `web-performance` |
