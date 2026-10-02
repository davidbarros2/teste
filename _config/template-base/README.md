# Template base

> **Estado: ainda não construído.** É a próxima iteração da fábrica.

O esqueleto de código que todos os SaaS herdam, escrito e testado **uma vez**.
É a peça mais importante da fábrica: a IA não reinventa auth nem pagamentos em cada produto.

## O que vai ter

- Next.js + TypeScript + Tailwind + shadcn/ui (ver `_config/stack.md`)
- Supabase Auth: registo, login, logout, reset de password, rotas protegidas
- Organizações/contas (multi-tenant) com RLS e teste de isolamento
- Stripe: planos, Checkout, Customer Portal, webhook idempotente, `subscription_status` na BD
- Landing page, página de preços, termos e privacidade (placeholders)
- Emails transacionais (Resend) para boas-vindas e recibos
- Testes Vitest + Playwright já a passar; `npm run verify`
- `.env.example` comentado

## Como é usado

A etapa 04 corre `scripts/criar_app.sh <slug>`, que copia esta pasta para `produtos/<slug>/app/`.
A partir daí só se acrescenta o que é específico do negócio.
