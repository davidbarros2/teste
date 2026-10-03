---
name: product-analytics
description: SaaS metrics and privacy-respecting product analytics. Use when defining success metrics, setting up tracking, and in weekly reviews.
---

# Product analytics and SaaS metrics

Last reviewed: 2026-10.

## Core metrics (definitions)
- MRR: sum of normalized monthly recurring revenue (excl. VAT, one-offs).
- Customer churn rate: customers lost in period / customers at start.
- Revenue churn: MRR lost (cancellations + downgrades) / MRR at start.
- Net revenue retention: (start MRR + expansion − contraction − churn) / start MRR.
- ARPA: MRR / paying accounts. LTV ≈ ARPA × gross margin / revenue churn.
- CAC: acquisition spend / new customers. Healthy: LTV/CAC > 3, payback < 12 months.
- Activation rate, trial → paid conversion, time to first value.

## Funnel
Visit → sign-up → activation → paid → retained → referral.

## Rules
1. Track few events with clear names (`object_action`: `project_created`).
2. Privacy: no personal data in event properties; prefer privacy-friendly or
   self-hosted analytics; consent where non-essential cookies or device access
   are used (`privacy-gdpr`).
3. Compare periods and cohorts, not single numbers. Explain changes.

## Audit checklist
- [ ] Event plan documented; activation and conversion events exist
- [ ] Consent handled where required; no personal data in analytics
- [ ] Weekly metrics recorded with comparisons

## Sources
- David Skok, "SaaS Metrics 2.0" (For Entrepreneurs)
- Dave McClure, AARRR pirate metrics
- ePrivacy Directive 2002/58/EC Art. 5(3); EDPB guidance on consent
