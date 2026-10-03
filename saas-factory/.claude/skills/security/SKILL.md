---
name: security
description: Application security for SaaS: secure design, coding, dependencies, secrets, auth and verification. Use in architecture, every build task touching data or auth, and pre-launch audits.
---

# Security

Last reviewed: 2026-10. Target: OWASP ASVS level 1 for all products, level 2
for auth, tenancy, billing and anything with sensitive data.

## Rules
1. Authorization on every request, scoped to the tenant; deny by default.
2. Use a managed or well-reviewed auth library. Offer MFA. Rate-limit login,
   reset and sign-up; check passwords against breached lists.
3. Validate input at boundaries; parameterized queries; encode output.
4. Secrets in a secret manager or platform env vars; never in git; rotate on leak.
5. Dependencies: lockfiles, automated updates, scanning (SCA) in CI; SBOM.
6. Security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors.
7. Cookies: Secure, HttpOnly, SameSite; CSRF protection on state changes.
8. Webhooks: verify signatures, use idempotency, reject replays.
9. Logs: security events logged; no passwords, tokens or personal data in logs.
10. Least privilege for team, services and database users; MFA on all admin accounts.
11. Backups encrypted; restore tested.
12. Vulnerability disclosure contact (`security.txt`).

## Audit checklist
- [ ] OWASP Top 10 categories reviewed against the app
- [ ] Tenant isolation tests exist and pass
- [ ] SAST, SCA and secret scanning run in CI, no high/critical open
- [ ] Headers and cookie flags verified in production
- [ ] Threat model mitigations implemented or accepted

## Sources
- OWASP ASVS (latest release), OWASP Top 10, OWASP Cheat Sheet Series
- NIST SP 800-218 Secure Software Development Framework (SSDF)
- NIST SP 800-63B (authentication guidance)
- RFC 9116 (security.txt)
