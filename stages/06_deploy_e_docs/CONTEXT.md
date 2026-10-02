# Etapa 06 — Deploy e documentação

O produto final: o código pronto e documentos que permitem a qualquer pessoa pô-lo online.

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/05_verificacao/relatorio-verificacao.md` | Tem de dizer ✅ pronto |
| 4 | `produtos/<slug>/02_arquitetura/arquitetura.md` | Só a secção 6 (integrações e segredos) |
| 4 | `produtos/<slug>/app/.env.example` | Variáveis existentes |
| 4 | `produtos/<slug>/app/supabase/migrations/` | Para as instruções da BD |
| 3 | `stages/06_deploy_e_docs/references/` | Modelos SETUP, DEPLOY, RUNBOOK |
| 3 | `_config/definicao-de-pronto.md` | Critério 7: os docs chegam sozinhos |
| 3 | `_config/rgpd.md` | Pendentes legais a referir |

## Process
1. Se o relatório não disser ✅, pára e diz ao founder.
2. Confirma que cada variável usada no código (`process.env.*`) está no `.env.example` com um comentário. Corrige se faltar.
3. Preenche os três modelos com os valores **deste** produto: nomes de planos Stripe, eventos de webhook, migrações, domínio.
4. Escreve os passos para alguém sem contexto: cada passo diz onde clicar ou que comando correr, e como confirmar que resultou.
5. Lê os docs de ponta a ponta como se fosses essa pessoa. Corrige qualquer passo que pressuponha conhecimento.
6. Opcional (só se o founder pedir e os segredos estiverem configurados): `scripts/deploy.sh <slug>`.

## Outputs
- `produtos/<slug>/app/docs/SETUP.md`: contas a criar e configuração de cada serviço
- `produtos/<slug>/app/docs/DEPLOY.md`: pôr online, passo a passo
- `produtos/<slug>/app/docs/RUNBOOK.md`: operação: logs, falhas comuns, backups, rollback
- `produtos/<slug>/app/.env.example` completo
- `ESTADO.md`: etapa 06 → `em revisão`

## Resumo para o founder
Contas que tem de criar, tempo estimado de setup e os pendentes (legais ou técnicos).
