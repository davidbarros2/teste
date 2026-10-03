---
name: privacy-gdpr
description: Personal data protection under GDPR and ePrivacy: roles, legal bases, minimization, rights, cookies, DPAs, transfers, breaches. Use in setup, architecture, any feature touching personal data, and pre-launch.
---

# Privacy and GDPR

Last reviewed: 2026-10. Not legal advice; flag ⚖️ items.

## Rules
1. Know your role per data set: controller (your accounts, marketing) or
   processor (data customers put in the product). Processor → DPA (Art. 28).
2. Every purpose has a legal basis (contract, legal obligation, legitimate
   interest with a balancing test, consent).
3. Minimize: collect only what the purpose needs; set retention and delete.
4. Privacy by design and default (Art. 25): private settings by default.
5. Rights: access, export (portability), rectification, erasure, objection.
   Build self-serve export and deletion; answer within one month.
6. Records of processing (Art. 30) kept in `dpia-lite.md`.
7. DPIA required for high-risk processing (special categories, large-scale
   monitoring, minors, innovative tech with high risk).
8. Subprocessors listed; international transfers covered (adequacy, e.g.
   EU-US Data Privacy Framework, or SCCs).
9. Breach: assess, notify the authority within 72 hours when required,
   inform people when high risk. Keep a breach log.
10. Cookies and device storage: consent before non-essential ones; reject as
    easy as accept; no pre-ticked boxes; no cookie walls by default.

## Audit checklist
- [ ] Data inventory with purpose, basis, retention, location
- [ ] Privacy notice matches actual processing
- [ ] Export and deletion work end to end
- [ ] DPA and subprocessor list published (B2B)
- [ ] Consent mechanism compliant or no non-essential cookies used

## Sources
- Regulation (EU) 2016/679 (GDPR); Directive 2002/58/EC (ePrivacy)
- EDPB guidelines: 05/2020 consent, 07/2020 controller/processor, 03/2022
  deceptive design patterns; WP248 DPIA
- CJEU C-673/17 Planet49 (cookie consent)
- National authority guidance (Portugal: CNPD; Lei 58/2019)
