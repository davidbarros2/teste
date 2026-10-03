# 03 Architecture

**Goal:** a simple, secure design that meets the PRD and the quality bar.

## Inputs
| Source | File | Scope |
|---|---|---|
| Previous stage | `{P}/stages/02_mvp_definition/output/PRD.md`, `flows.md` | Full |
| Stack | `_config/default-stack.md` (+ product override) | Full |
| Archetypes | `archetypes/<from META>.md` | "Technical" |
| Legal | `_config/legal-framework.md` | Data, security, AI rows |
| Skills | `saas-architecture`, `security`, `privacy-gdpr`, `billing-payments`, `reliability-operations` | Full |
| Templates | `shared/templates/DESIGN.md`, `ADR.md`, `threat-model.md`, `dpia-lite.md` | Full |
| Questions | `references/questions.md` | Full |

## Process
1. Write `DESIGN.md`: context (C4 level 1-2), modules, data model with tenant
   isolation, integrations, environments, observability, backups (RPO/RTO).
2. One `adr/ADR-NNN-<slug>.md` per significant decision, with alternatives.
3. `threat-model.md`: STRIDE-lite on auth, tenancy, billing, uploads, admin.
4. `dpia-lite.md`: data inventory, purposes, legal bases, retention,
   subprocessors; flag if a full DPIA is required.

## Outputs
`DESIGN.md`, `adr/`, `threat-model.md`, `dpia-lite.md`, `GATE.md` in `output/`.

## Gate
- [ ] Monolith unless an ADR justifies otherwise
- [ ] Tenant isolation strategy explicit and testable
- [ ] Every threat has a mitigation or accepted-risk note
- [ ] Data inventory complete; retention defined
- [ ] Managed services chosen for non-differentiating parts
