# DESIGN: <product>

## 1. Context (C4 level 1)
Users, the system, external systems (payments, email, auth, AI provider).
## 2. Containers and modules (C4 level 2)
## 3. Data model
Entities, tenant key on every tenant-owned table, indexes, retention.
## 4. Tenant isolation
Strategy, enforcement layer (DB policies / middleware), tests that prove it.
## 5. Auth and authorization
## 6. Integrations and webhooks (idempotency, retries, signature checks)
## 7. Environments and deployment
## 8. Observability (errors, logs without personal data, uptime, alerts)
## 9. Backups and recovery (RPO, RTO, restore procedure)
## 10. Performance and scaling assumptions
## 11. Decisions (links to ADRs)
