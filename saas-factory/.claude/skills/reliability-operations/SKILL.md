---
name: reliability-operations
description: Running a SaaS in production: observability, SLOs, backups and recovery, incidents, maintenance and DORA metrics. Use in architecture, foundations, pre-launch and operations.
---

# Reliability and operations

Last reviewed: 2026-10.

## Rules
1. Monitor what users feel: uptime of key endpoints, error rate, latency.
2. Set simple SLOs (e.g. 99.5% monthly availability) and alert on user impact,
   not on every metric. Alerts must reach the founder's phone.
3. Error tracking with release tagging; logs structured and free of personal data.
4. Backups: automatic, encrypted, off-platform copy (3-2-1 idea), defined RPO/RTO,
   restore tested at least quarterly (monthly before launch).
5. Runbook for common incidents: outage, payment provider down, data leak,
   credential leak. Status page for customers if promised.
6. Blameless post-mortem for every customer-facing incident.
7. Maintenance rhythm: dependency updates weekly, access review monthly,
   restore test quarterly.
8. Watch DORA metrics: deployment frequency, lead time, change failure rate,
   time to restore.

## Audit checklist
- [ ] Uptime and error alerts tested
- [ ] Last restore test date within policy
- [ ] Runbook exists and is current
- [ ] Incidents have post-mortems with actions

## Sources
- Google, *Site Reliability Engineering* (SLOs, alerting, post-mortems)
- DORA State of DevOps research
- NIST SP 800-34 (contingency planning, backups)
