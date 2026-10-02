# Convenções de código

## Estrutura do app (`produtos/<slug>/app/`)

```
app/
├── src/app/            rotas Next.js: (marketing)/, (app)/, api/
├── src/components/     componentes de UI
├── src/lib/            lógica de negócio, clientes (supabase, stripe), validação
├── supabase/migrations SQL versionado, incluindo as políticas RLS
├── tests/unit/         Vitest
├── tests/e2e/          Playwright
└── docs/               SETUP, DEPLOY, RUNBOOK (etapa 06)
```

## Regras

- TypeScript `strict`. Nada de `any` sem comentário a justificar.
- Validar todas as entradas do utilizador com `zod`, no servidor.
- A lógica de negócio fica em `src/lib/`, não dentro de componentes. É isso que os testes de unidade cobrem.
- Cada tabela nova tem uma migração e uma política RLS no mesmo ficheiro.
- Não editar código do template base (auth, billing) sem tarefa explícita no plano.
- Uma tarefa do plano = um commit: `feat(<slug>): T<nn> <descrição curta>`.
- Variável de ambiente nova → adicionar logo ao `.env.example` com um comentário.
