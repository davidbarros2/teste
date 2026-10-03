---
name: email-deliverability
description: Transactional and marketing email practice: authentication, deliverability, consent, content. Use when setting up email sending or writing emails.
---

# Email and deliverability

Last reviewed: 2026-10.

## Setup
1. Separate transactional and marketing streams (subdomains or providers).
2. SPF, DKIM (2048-bit) and DMARC (start `p=none` with reports, move to
   `quarantine`/`reject`). Aligned From domain.
3. Bulk mail: one-click unsubscribe (RFC 8058 List-Unsubscribe-Post) and
   spam complaint rate well under 0.3%.
4. Never send from a free-mail address; use a real reply-to.

## Consent (marketing)
- EU: opt-in consent, or the soft opt-in for existing customers and similar
  products with an easy opt-out in every message. Record proof of consent.
- Transactional emails need no marketing consent but must stay transactional.

## Content
- One purpose per email; subject says what it is; plain text alternative.
- Accessible: real text, headings, alt text, sufficient contrast.
- Apply `copywriting` and `human-writing`.

## Audit checklist
- [ ] SPF, DKIM, DMARC pass (check headers of a real email)
- [ ] Unsubscribe works in one click for marketing mail
- [ ] Consent records exist for marketing lists
- [ ] Every transactional email tested in major clients

## Sources
- RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC), RFC 8058
- Google and Yahoo bulk sender requirements (2024)
- ePrivacy Directive 2002/58/EC Art. 13
