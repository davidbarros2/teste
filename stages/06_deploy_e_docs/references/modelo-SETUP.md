# Setup — <Nome do produto>

Tempo estimado: ~<n> minutos. No fim terás todas as chaves para preencher o `.env`.

## Antes de começar
- [ ] Conta GitHub com acesso a este repositório
- [ ] Domínio comprado (opcional para testar): `<dominio>`

## 1. Supabase (base de dados e login)
1. Cria um projeto em supabase.com → região **<UE, ex.: Frankfurt>**.
2. Settings → API: copia `Project URL` → `NEXT_PUBLIC_SUPABASE_URL` e `anon key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Copia a `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (**secreta**).
4. Aplica as migrações: `npx supabase db push` (ou cola os ficheiros de `supabase/migrations/` no SQL editor, por ordem).
5. Authentication → URL Configuration: Site URL = `<url de produção>`.
✅ Confirmação: …

## 2. Stripe (pagamentos)
1. Cria os produtos/preços: <tabela de planos deste produto>.
2. Copia os `price_…` para `<variáveis>`.
3. Developers → Webhooks → endpoint `<url>/api/stripe/webhook` com os eventos: <lista>.
4. Copia o signing secret → `STRIPE_WEBHOOK_SECRET`.
✅ Confirmação: …

## 3. Resend (emails)
…

## 4. Preencher o `.env`
`cp .env.example .env.local` e preenche com os valores acima.
