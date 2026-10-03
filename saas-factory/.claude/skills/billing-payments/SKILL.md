---
name: billing-payments
description: Subscription billing and payments: provider choice, checkout, webhooks, plan limits, dunning, invoices, taxes, refunds. Use in architecture, build of billing, and pre-launch.
---

# Billing and payments

Last reviewed: 2026-10.

## Rules
1. Never handle card data: use hosted checkout or provider elements (keeps
   PCI DSS scope minimal, typically SAQ A).
2. The provider is the source of truth for subscription state; sync via
   verified, idempotent webhooks; reconcile periodically.
3. Model plans and limits in config, not scattered conditionals.
4. Support SCA (3-D Secure) flows required in the EU (PSD2).
5. Dunning: retry schedule, payment-failed emails, grace period, clear downgrade.
6. Self-serve: upgrade, downgrade, cancel, update card, download invoices.
7. Taxes and invoices per `legal-compliance`: merchant of record, or VAT/OSS
   + certified invoicing integration.
8. Test with the provider's test mode, then one real transaction before launch.

## Audit checklist
- [ ] Webhook signature verification and idempotency tested
- [ ] Cancel and downgrade flows work without contacting support
- [ ] Failed payment path tested end to end
- [ ] Invoices legally valid for the founder's jurisdiction

## Sources
- Stripe / Paddle / Lemon Squeezy official billing and webhook documentation
- PCI DSS v4.0 (SAQ A eligibility)
- Directive (EU) 2015/2366 (PSD2) strong customer authentication
