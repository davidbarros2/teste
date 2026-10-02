# Runbook — <Nome do produto>

## Onde ver o que se passa
| O quê | Onde |
|---|---|
| Erros da app | Vercel → Project → Logs |
| BD e auth | Supabase → Logs |
| Pagamentos e webhooks | Stripe → Developers → Events / Webhooks |
| Emails | Resend → Emails |

## Problemas comuns
| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Cliente pagou mas não tem acesso | Webhook falhou | Stripe → Webhooks → reenviar o evento |
| Ninguém consegue fazer login | Site URL / redirect errado no Supabase | … |
| … | | |

## Backups e reposição
…

## Rollback
Vercel → Deployments → deploy anterior → "Promote to Production". Migrações de BD **não** revertem sozinhas: …

## Contactos e contas
| Serviço | Conta (email) | Plano |
|---|---|---|
