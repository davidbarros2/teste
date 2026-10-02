# Etapa 03 — Plano de implementação

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/02_arquitetura/arquitetura.md` | O que construir e como |
| 4 | `produtos/<slug>/01_produto/prd.md` | Só a secção 4 (critérios de aceitação) |
| 3 | `_config/convencoes.md` | Regras de commits e testes |
| 3 | `stages/03_plano/references/modelo-plano.md` | Estrutura do documento |

## Process
1. Divide o trabalho em tarefas pequenas: cada uma com um resultado verificável e cabendo num commit (alvo: ≤ 1–2 horas de trabalho humano equivalente).
2. Ordena por dependência: migrações → lógica em `src/lib` → API → UI → testes ponta a ponta.
3. Cada tarefa indica os ficheiros que mexe, os critérios de aceitação que cobre e o teste que a prova.
4. A primeira tarefa é sempre `T01 — criar app a partir do template` (`scripts/criar_app.sh`).
5. A última tarefa é sempre o teste ponta a ponta do fluxo principal.
6. Verifica: todos os critérios de aceitação `Must` do PRD aparecem em pelo menos uma tarefa.

## Outputs
- `produtos/<slug>/03_plano/plano.md` seguindo o modelo
- `ESTADO.md`: etapa 03 → `em revisão`

## Resumo para o founder
Número de tarefas, as 3–5 tarefas mais arriscadas e uma estimativa grosseira de esforço.
