# Etapa 05 — Verificação

O objetivo é encontrar problemas, não confirmar que está tudo bem. Lê o código como um revisor desconfiado.

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/01_produto/prd.md` | Critérios de aceitação (secção 4) |
| 4 | `produtos/<slug>/app/` | O código a verificar |
| 4 | `produtos/<slug>/04_implementacao/log-implementacao.md` | Desvios conhecidos |
| 3 | `_config/seguranca.md` | Checklist completa |
| 3 | `_config/rgpd.md` | Checklist completa |
| 3 | `_config/definicao-de-pronto.md` | Critérios de saída |
| 3 | `stages/05_verificacao/references/modelo-relatorio.md` | Estrutura do relatório |

Não carregar: `arquitetura.md` nem `plano.md`. Verifica-se contra o **PRD** (o que foi prometido), não contra o plano.

## Process
1. Corre `scripts/verificar.sh <slug>` e os testes ponta a ponta. Regista o resultado.
2. Para cada critério de aceitação do PRD: aponta o teste ou ficheiro que o prova. Sem prova = **FALHA**.
3. Percorre a checklist de segurança item a item, com evidência (ficheiro:linha).
4. Percorre a checklist de RGPD.
5. Corre `npm audit --omit=dev`.
6. **Não corrijas nada nesta etapa.** As falhas vão para o relatório; o founder decide se se volta à 04.

## Outputs
- `produtos/<slug>/05_verificacao/relatorio-verificacao.md`
- `ESTADO.md`: etapa 05 → `em revisão`

## Resumo para o founder
Veredicto (pronto / não pronto), o número de falhas por gravidade e as 3 mais importantes.
