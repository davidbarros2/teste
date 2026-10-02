# Encaminhamento

<!-- Camada 1 — "Para onde vou?" -->

## Comandos curtos (pensados para o telemóvel)

| O utilizador escreve | O que fazer |
|---|---|
| `novo saas <nome>` | Corre `scripts/novo_produto.sh <nome>` e depois a etapa **00_brief** |
| `corre <N> <slug>` | Corre a etapa N desse produto (respeitando os portões) |
| `aprovo <N> <slug>` (ou só `aprovo`) | Marca a etapa como `aprovada` no `ESTADO.md`, faz commit e push e diz qual é a próxima |
| `muda <N> <slug>: <o quê>` | Edita a saída da etapa N com a alteração pedida; continua `em revisão` |
| `refaz <N> <slug>` | Volta a correr a etapa N do zero; as etapas a seguir passam a `desatualizada` |
| `estado <slug>` | Corre `scripts/estado.sh <slug>` e resume |
| `lista` | Corre `scripts/estado.sh`: produtos e etapa atual de cada um |

Se o slug for omitido e só existir um produto em curso, usa esse.
Se um pedido não encaixar em nenhum comando, interpreta-o pelo sentido e confirma numa linha.

## Etapas

| Etapa | Pasta de contrato | Produz | Revisão humana |
|---|---|---|---|
| 00 | `stages/00_brief/` | `brief.md`: a ideia, estruturada | média |
| 01 | `stages/01_produto/` | `prd.md`: o que se constrói e o que fica de fora | **alta** |
| 02 | `stages/02_arquitetura/` | `arquitetura.md`: dados, páginas, permissões, integrações | **alta** |
| 03 | `stages/03_plano/` | `plano.md`: tarefas pequenas e ordenadas | média |
| 04 | `stages/04_implementacao/` | código em `app/` + `log-implementacao.md` | baixa (os testes são o portão) |
| 05 | `stages/05_verificacao/` | `relatorio-verificacao.md` | **alta** |
| 06 | `stages/06_deploy_e_docs/` | `docs/` no app: SETUP, DEPLOY, RUNBOOK, `.env.example` | média |

## Recursos partilhados (Camada 3)

- `_config/stack.md`: tecnologias fixas (todas as etapas técnicas)
- `_config/convencoes.md`: como se escreve código (02, 03, 04)
- `_config/seguranca.md`: checklist de segurança (02, 04, 05)
- `_config/rgpd.md`: privacidade e legal na UE (01, 05, 06)
- `_config/definicao-de-pronto.md`: o que conta como "pronto para deploy" (05, 06)
- `_config/template-base/`: o esqueleto de código já testado (04)
