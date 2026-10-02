# Deploy — <Nome do produto>

Pré-requisito: [SETUP.md](SETUP.md) concluído.

## 1. Testar localmente
```bash
npm install
npm run verify      # lint + tipos + testes + build
npm run dev         # abre http://localhost:3000
```
✅ Consegues registar-te, fazer <ação principal> e chegar ao Checkout do Stripe (modo teste).

## 2. Vercel
1. vercel.com → Add New Project → importa o repositório.
2. Environment Variables: cola todas as do `.env.local` (Production e Preview).
3. Deploy.
4. Settings → Domains → adiciona `<dominio>` e configura o DNS indicado.
✅ Confirmação: …

## 3. Depois do primeiro deploy
- [ ] Atualizar a Site URL no Supabase e o URL do webhook no Stripe para o domínio final
- [ ] Fazer um pagamento real de teste e reembolsá-lo
- [ ] Passar o Stripe de modo teste para live (chaves `sk_live_…`)

## Atualizações seguintes
Push para `main` faz deploy automático. Migrações novas: `npx supabase db push` **antes** do push.
