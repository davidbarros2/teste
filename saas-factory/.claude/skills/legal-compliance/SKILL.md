---
name: legal-compliance
description: Map the legal and tax framework for a solo founder's SaaS from their profile: consumer law, digital content, VAT and invoicing, accessibility, cybersecurity, AI, platforms, licenses. Use in setup, MVP definition, pre-launch and when entering new markets.
---

# Legal and tax compliance map

Last reviewed: 2026-10. This produces a map of what to check, not advice.
Mark uncertain or high-impact items ⚖️ for a lawyer or accountant.

## Inputs needed
Legal form, tax residence, markets, B2B/B2C, what is sold, data processed,
sectors (from `_config/legal-profile.md`).

## Checklist by trigger
| Trigger | Check |
|---|---|
| Any EU business | GDPR, ePrivacy, company identification on site, e-commerce info duties |
| Sells B2C in EU | Consumer Rights Directive (pre-contract info, withdrawal for digital services), Digital Content Directive 2019/770, Unfair Commercial Practices, price indication |
| Sells digital services in EU | VAT place-of-supply rules; OSS for B2C cross-border; reverse charge B2B (VIES check) |
| Portugal-based | Certified invoicing software (AT); SAF-T; Lei 58/2019; DL 24/2014 and DL 84/2021 (B2C); electronic complaints book and ADR info (B2C) |
| B2C services, not micro-enterprise | European Accessibility Act (Directive 2019/882) |
| Critical sectors or larger size | NIS2 applicability |
| Product with digital elements sold as a product | Cyber Resilience Act (Reg. 2024/2847) scope check |
| Uses AI | AI Act (Reg. 2024/1689) risk classification and transparency duties |
| Hosts user content | Digital Services Act obligations by size |
| Sells to UK / US | UK GDPR; US state privacy laws; US sales-tax nexus; consider merchant of record |
| Always | Open-source license inventory and obligations; trademark search for the name |

## Merchant of record vs direct
A merchant of record resells your product and handles VAT/sales tax and
invoicing worldwide, for a higher fee. Direct processing needs your own VAT,
OSS and certified invoicing setup. Recommend based on markets and volume.

## Audit checklist
- [ ] Each framework row marked applies / maybe / no, with the trigger
- [ ] Obligations turned into requirements (PRD) or tasks
- [ ] ⚖️ items listed with the question to ask the professional
- [ ] Review date set

## Sources
- EUR-Lex texts of the cited directives and regulations
- European Commission VAT e-commerce and OSS guidance
- Autoridade Tributária (Portugal) guidance on invoicing and SAF-T
