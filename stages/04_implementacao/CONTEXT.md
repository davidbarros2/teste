# Etapa 04 — Implementação

Esta etapa é um **ciclo**, não uma única passagem. O portão de cada tarefa são os testes; o founder só é chamado
quando há um bloqueio ou no fim.

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/03_plano/plano.md` | A lista de tarefas e o estado de cada uma |
| 4 | `produtos/<slug>/02_arquitetura/arquitetura.md` | Só as secções que a tarefa atual referir |
| 4 | `produtos/<slug>/app/` | O código (só os ficheiros da tarefa atual) |
| 3 | `_config/convencoes.md` | Como escrever o código |
| 3 | `_config/seguranca.md` | Itens relevantes para a tarefa |
| 3 | `_config/template-base/` | Via `scripts/criar_app.sh` (T01) |

## Process (repetir por cada tarefa ⬜, por ordem)
1. Marca a tarefa 🔄 no `plano.md`.
2. Implementa-a e escreve o teste indicado no plano.
3. Corre `scripts/verificar.sh <slug>`. Se falhar, corrige e repete. Se ao fim de **3 tentativas** ainda falhar, marca ⛔, regista no log e pára.
4. Commit: `feat(<slug>): Tnn <descrição>`. Marca ✅ com o hash.
5. Regista uma linha em `log-implementacao.md`.
6. Se uma tarefa obrigar a mudar a arquitetura, **não improvises**: marca ⛔ e pergunta ao founder.
7. De 5 em 5 tarefas (ou se o founder pedir), faz push e envia um ponto de situação de 3 linhas.

## Outputs
- Código em `produtos/<slug>/app/`
- `plano.md` com os estados atualizados
- `produtos/<slug>/04_implementacao/log-implementacao.md`: tarefa, resultado, decisões, desvios ao plano
- `ESTADO.md`: etapa 04 → `em revisão` quando todas as tarefas estiverem ✅ (ou ⛔ com motivo)

## Resumo para o founder
Tarefas feitas/bloqueadas, desvios ao plano e o resultado do último `verificar.sh`.
