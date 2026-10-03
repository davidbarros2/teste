Status: default (adjust during setup if needed)

# Quality bar

Minimum standard for every product. Stage gates check against it.

## Definition of Done (per task)
- Acceptance criteria met and demonstrated.
- Automated tests cover the new behavior; the full suite passes in CI.
- Lint, format and type checks pass. No new warnings.
- Security: input validated, authorization checked per tenant, no secrets in code.
- Accessibility: keyboard usable, labels present, contrast AA (skill `accessibility`).
- User-facing text passes `human-writing` and `copywriting` audits.
- Docs updated (README, CHANGELOG, help article if user-visible).
- Reviewed: the founder approved the change summary.

## Product baseline (before public launch)
- Tenant isolation tested (user A cannot read or change user B's data).
- OWASP Top 10 checked; dependency scan clean of high/critical issues.
- Backups automatic and one restore tested.
- Error tracking and uptime alerts live.
- Privacy policy, terms, cookie handling, DPA and subprocessor list published.
- WCAG 2.2 AA on core flows (sign-up, main feature, billing).
- Core Web Vitals "good" on the landing page.
- SPF, DKIM and DMARC set for the sending domain.
- Invoicing and VAT configured per `_config/legal-framework.md`.
