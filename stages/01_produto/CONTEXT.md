# Etapa 01 — Produto (PRD)

## Inputs
| Camada | Ficheiro | Para quê |
|---|---|---|
| 4 | `produtos/<slug>/00_brief/brief.md` | A ideia aprovada |
| 3 | `stages/01_produto/references/modelo-prd.md` | Estrutura do documento |
| 3 | `_config/rgpd.md` | Requisitos legais mínimos a incluir |

Não carregar: `_config/stack.md`. Esta etapa decide **o quê**, não **como**.

## Process
1. Transforma o brief em funcionalidades concretas, cada uma com uma user story e critérios de aceitação verificáveis.
2. Prioriza com MoSCoW. O MVP só inclui os **Must**. Se forem mais de ~6 funcionalidades, propõe cortes.
3. Descreve o fluxo principal passo a passo, do primeiro contacto até ao valor entregue e ao pagamento.
4. Define os planos de preço e o que cada um desbloqueia.
5. Lista explicitamente o que fica **fora** do MVP.

## Outputs
- `produtos/<slug>/01_produto/prd.md` seguindo o modelo
- `ESTADO.md`: etapa 01 → `em revisão`

## Resumo para o founder
As funcionalidades do MVP (uma linha cada), o que foi cortado e porquê, e os planos de preço.
