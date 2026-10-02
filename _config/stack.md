# Stack da fábrica

> Proposta inicial. Muda aqui uma vez e todos os produtos seguintes passam a usar a nova stack.
> Estado: **por confirmar pelo founder**.

| Peça | Escolha | Porquê |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Front e back no mesmo projeto, deploy simples |
| UI | Tailwind CSS + shadcn/ui | Rápido, consistente, sem design system próprio |
| Base de dados + auth | Supabase (Postgres + Auth + Row Level Security) | Login, BD e permissões num só serviço |
| Pagamentos | Stripe (Checkout + Customer Portal + webhooks) | Subscrições sem construir faturação |
| Email transacional | Resend | API simples, bom free tier |
| Hosting | Vercel | Deploy a partir do git, previews por branch |
| Testes | Vitest (unidade) + Playwright (ponta a ponta) | Rápidos; o Playwright testa o fluxo real |
| Qualidade | ESLint + Prettier + `tsc --noEmit` | Apanha erros antes dos testes |

## Fora da stack (só se o brief exigir, e com justificação na arquitetura)

Filas, cron jobs, armazenamento de ficheiros grandes, IA/LLM no produto, apps móveis nativas.

## Versões

Ficam fixadas no `package.json` do template base. Não atualizar dependências durante a etapa 04.
