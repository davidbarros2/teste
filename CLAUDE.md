# Fábrica de SaaS (workspace ICM)

<!-- Camada 0 — "Onde estou?" -->

Este repositório é uma **fábrica**: recebe a ideia de um negócio SaaS e, etapa a etapa,
produz um SaaS pronto para deploy e os documentos para o configurar e publicar.
Segue a Interpretable Context Methodology (ICM): pastas numeradas são etapas, ficheiros
markdown são as instruções, scripts fazem o trabalho mecânico.

## Mapa

| Pasta | O que tem | Camada |
|---|---|---|
| `CONTEXT.md` | Encaminhamento: que pedido leva a que etapa; comandos curtos | 1 |
| `stages/NN_*/CONTEXT.md` | O contrato de cada etapa (Entradas / Processo / Saídas) | 2 |
| `stages/NN_*/references/` | Modelos e checklists dessa etapa | 3 |
| `_config/` | Regras da fábrica: stack, convenções, segurança, RGPD | 3 |
| `setup/questionario.md` | Perguntas para arrancar um produto novo | 3 |
| `scripts/` | Trabalho mecânico (criar produto, verificar, deploy) | — |
| `produtos/<slug>/` | **Tudo o que é de um produto**: saídas das etapas e o código | 4 |

Desvio consciente ao ICM original: como a fábrica produz vários SaaS, as saídas de cada
etapa não ficam em `stages/NN/output/` mas em `produtos/<slug>/NN_*/`. Os contratos ficam em `stages/`
e são partilhados; os produtos ficam separados.

## Regras de funcionamento (obrigatórias)

1. **Uma etapa de cada vez.** Lê só o `CONTEXT.md` da etapa e os ficheiros que a tabela de Entradas indicar.
   Não carregues outras etapas nem outros produtos.
2. **Portões.** Antes de correr a etapa N, confirma em `produtos/<slug>/ESTADO.md` que a etapa N-1 está
   `aprovada`. Se não estiver, pára e diz o que falta aprovar.
3. **No fim de cada etapa:** marca-a como `em revisão` no `ESTADO.md`, faz commit e push, e pára.
   Nunca avances sozinho para a etapa seguinte.
4. **Só o humano aprova.** Marca uma etapa como `aprovada` apenas quando o utilizador o disser
   ("aprovo", "ok avança", etc.).
5. **O humano manda nos ficheiros.** Se o utilizador editou uma saída, a versão editada é a verdade. Não a reescrevas
   a não ser que ele peça.
6. **Resumo para telemóvel.** O utilizador trabalha pelo telemóvel. Termina cada etapa com um resumo
   de no máximo 10 linhas: o que fizeste, as 2–4 decisões que ele deve confirmar, e como responder.
7. **Mecânico = script.** Para criar pastas, copiar o template, correr testes ou fazer deploy, usa `scripts/`.
8. **Segredos nunca vão para o git.** Chaves e passwords só em `.env` (ignorado) ou nos segredos do serviço.
