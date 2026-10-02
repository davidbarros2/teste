# Checklist de segurança

Usada para desenhar (02), implementar (04) e verificar (05). Cada item tem de ser marcado **OK**, **N/A** (com motivo) ou **FALHA**.

## Dados e permissões
- [ ] Todas as tabelas com dados de clientes têm RLS ativa
- [ ] Cada política RLS filtra pela conta/organização do utilizador (multi-tenant)
- [ ] Há um teste que prova que o utilizador A não lê nem altera dados do utilizador B
- [ ] A service role key só é usada no servidor e nunca chega ao browser

## Autenticação
- [ ] Rotas da app protegidas por middleware; rotas de API verificam a sessão
- [ ] Reset de password e confirmação de email ativos
- [ ] Rate limiting no login e no registo (Supabase ou middleware)

## Pagamentos
- [ ] O webhook do Stripe verifica a assinatura (`STRIPE_WEBHOOK_SECRET`)
- [ ] O estado da subscrição vem do webhook, nunca do redirect de sucesso
- [ ] O webhook é idempotente (o mesmo evento duas vezes não estraga nada)
- [ ] Funcionalidades pagas verificadas no servidor, não só escondidas na UI

## Entradas e saídas
- [ ] Todas as entradas validadas com zod no servidor
- [ ] Não há SQL montado com concatenação de strings
- [ ] Os erros mostrados ao utilizador não revelam stack traces nem segredos

## Segredos e dependências
- [ ] `.env` está no `.gitignore`; não há segredos no histórico do git
- [ ] `npm audit` sem vulnerabilidades `high` ou `critical`
