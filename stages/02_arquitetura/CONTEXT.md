# Etapa 02 — Arquitetura

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/01_produto/prd.md` | O que construir (secções 3, 4 e 5) |
| 3 | `_config/stack.md` | Tecnologias permitidas |
| 3 | `_config/convencoes.md` | Estrutura do app |
| 3 | `_config/seguranca.md` | Secções "Dados e permissões" e "Pagamentos" |
| 3 | `_config/template-base/README.md` | O que já vem feito (não redesenhar) |
| 3 | `stages/02_arquitetura/references/modelo-arquitetura.md` | Estrutura do documento |

## Process
1. Parte do template base. Desenha **só o que falta** para o negócio.
2. Modelo de dados: tabelas novas, colunas, relações, e a política RLS de cada uma em linguagem simples.
3. Páginas e rotas: lista de ecrãs, quem pode ver cada um e que plano é preciso.
4. Mapeia cada funcionalidade `Must` do PRD para tabelas, rotas e componentes. Funcionalidade sem mapeamento = falha da etapa.
5. Integrações externas: o que entra, o que sai, que segredos são precisos.
6. Se algo exigir tecnologia fora da stack, justifica e destaca para o founder decidir.
7. Riscos técnicos, do maior para o menor.

## Outputs
- `produtos/<slug>/02_arquitetura/arquitetura.md` seguindo o modelo
- `ESTADO.md`: etapa 02 → `em revisão`

## Resumo para o founder
Número de tabelas e páginas novas, as decisões não óbvias e os 2–3 maiores riscos.
