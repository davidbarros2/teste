# Threat model (STRIDE-lite): <product>

| Area | Threat | STRIDE | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|---|---|
| Auth | Credential stuffing | S | | | Rate limit, MFA option, breached-password check | |
| Tenancy | Read another tenant's data via ID change | I/E | | | Tenant-scoped queries + DB policies + tests | |
| Billing | Forged webhook grants paid plan | T | | | Verify signatures, idempotency | |
| Uploads | Malicious file | T/E | | | Type/size limits, storage isolation, scan | |
| Admin | Impersonation abuse | E/R | | | Audit log, MFA, least privilege | |
| Secrets | Leaked API key | I | | | Secret manager, rotation, scanning | |

STRIDE: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.
