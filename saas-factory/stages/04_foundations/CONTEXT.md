# 04 Foundations

**Goal:** a code repository where shipping safely is the default.

## Inputs
| Source | File | Scope |
|---|---|---|
| Previous stage | `{P}/stages/03_architecture/output/DESIGN.md`, `adr/` | Full |
| Boilerplate | `boilerplate/README.md` + chosen variant | Full |
| Quality | `_config/quality-bar.md` | Full |
| Skills | `code-quality-testing`, `security`, `reliability-operations`, `email-deliverability` | Full |
| Questions | `references/questions.md` | Full |

## Process
1. Create the product repo outside the factory (default `../<slug>/`) from the
   boilerplate. Record the path in `{P}/META.md` and add it to
   `.claude/settings.local.json` → `permissions.additionalDirectories`.
2. Write the product repo `CLAUDE.md`: commands (test, lint, run), conventions,
   and links to the approved PRD and DESIGN in the factory.
3. Set up CI: tests, lint, type check, dependency and secret scanning.
4. Environments (dev, prod; staging optional), secrets management, IaC if used.
5. Error tracking, uptime monitoring, automatic backups.
6. Walking skeleton: sign-up → empty dashboard → deployed to prod.
7. ⏸ Checkpoint: founder creates accounts (domain, hosting, payments, email);
   list exactly what is needed and where to click.

## Outputs
`setup-report.md` (what exists, where, how to run) and `GATE.md` in `output/`;
product repo with CLAUDE.md, README, CI.

## Gate
- [ ] CI green on main; deploy is one command or automatic
- [ ] No secret in the repo; secret scan enabled
- [ ] Walking skeleton live in production
- [ ] Error tracking receives a test error; backup job ran once
