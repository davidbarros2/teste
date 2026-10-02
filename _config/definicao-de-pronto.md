# Definição de "pronto para deploy"

Um produto só sai da fábrica quando **tudo** isto é verdade:

1. `scripts/verificar.sh <slug>` passa: lint, tipos, testes de unidade, build
2. Os testes ponta a ponta passam no fluxo principal: registo → login → ação principal do produto → pagamento (modo teste)
3. A checklist de `_config/seguranca.md` não tem nenhum **FALHA**
4. A checklist de `_config/rgpd.md` está preenchida (os pendentes ficam explícitos)
5. Todos os critérios de aceitação do `prd.md` estão verificados no `relatorio-verificacao.md`
6. Existem `docs/SETUP.md`, `docs/DEPLOY.md`, `docs/RUNBOOK.md` e `.env.example` completos
7. Alguém que nunca viu o projeto consegue, só com os docs, pôr o produto online
