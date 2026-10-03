# Boilerplate

Reusable SaaS starter code copied into each product repo in stage 04.
It starts empty: the first product builds it, later products reuse and improve it.

## Expected variants
| Folder | For archetype |
|---|---|
| `webapp/` | b2b-webapp, b2c-webapp |
| `api/` | developer-api |
| `browser-extension/` | browser-extension |

## Every variant must include
- Auth (sign-up, login, reset, verification, MFA option)
- Organizations, roles, invitations, tenant isolation with tests
- Billing integration (checkout, webhooks, plan limits, portal)
- Transactional email setup
- Admin view, data export and account deletion
- CI (tests, lint, types, SCA, secret scan), error tracking, health check
- CLAUDE.md template, README, CHANGELOG, LICENSE inventory

Alternatively, record a vetted third-party starter here (name, version, license,
why chosen) and the patches the factory applies to it.
