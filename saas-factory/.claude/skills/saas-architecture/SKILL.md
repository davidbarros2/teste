---
name: saas-architecture
description: Architecture practice for small SaaS: monolith first, multi-tenancy, data model, integrations, environments, decision records. Use in architecture and build.
---

# SaaS architecture

Last reviewed: 2026-10.

## Rules
1. Modular monolith on managed infrastructure. Split only with an ADR and a real need.
2. Multi-tenancy: tenant id on every tenant-owned row; enforce in one place
   (DB row-level security or a mandatory scoped data layer) and test it.
3. Twelve-factor: config in env, stateless processes, logs as streams,
   dev/prod parity, one-command deploys.
4. Background jobs for slow or retryable work; idempotent handlers.
5. Webhooks in and out: signatures, retries with backoff, idempotency keys.
6. Database migrations versioned, reversible when possible, run in CI/CD.
7. Document with C4 (context, containers) and ADRs for each significant decision.
8. Design for deletion and export from day one (GDPR and churn).
9. Keep costs visible: per-tenant usage where variable costs exist.

## Audit checklist
- [ ] Isolation enforced centrally and covered by tests
- [ ] No state in app servers; config only from environment
- [ ] ADRs exist for stack, tenancy, auth, billing choices
- [ ] Export and deletion paths exist in the design

## Sources
- The Twelve-Factor App (12factor.net)
- Simon Brown, C4 model; Michael Nygard, "Documenting Architecture Decisions"
- AWS Well-Architected SaaS Lens; Microsoft Azure multitenant architecture guidance
