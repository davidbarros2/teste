# Fábrica de SaaS

Uma fábrica de SaaS montada com a metodologia ICM (Interpretable Context Methodology).
Entra uma ideia; sai um SaaS pronto para deploy, com instruções para o configurar e publicar.

## Como usar (pelo telemóvel)

Na sessão do Claude Code ligada a este repositório, escreve:

1. `novo saas <nome>`: cria `produtos/<nome>/` e faz-te as perguntas do brief
2. Lê o resumo e o ficheiro gerado (no GitHub ou na app)
3. Responde `aprovo` ou `muda: <o que queres diferente>`
4. `corre 1`, `corre 2`, … até à etapa 06

Os outros comandos estão em [`CONTEXT.md`](CONTEXT.md). Para veres em que ponto está cada produto: `estado <nome>`.

## Linha de montagem

```
00 brief → 01 produto → 02 arquitetura → 03 plano → 04 implementação → 05 verificação → 06 deploy e docs
            ★ revês       ★ revês                      (testes decidem)    ★ revês
```

Cada etapa pára e espera pela tua aprovação. Nada avança sozinho.

## Estrutura

- `CLAUDE.md`: regras para o agente (camada 0)
- `CONTEXT.md`: comandos e encaminhamento (camada 1)
- `stages/`: contrato de cada etapa (camada 2) e modelos (camada 3)
- `_config/`: regras da fábrica: stack, convenções, segurança, RGPD (camada 3)
- `produtos/<slug>/`: tudo o que é de um produto (camada 4)
- `scripts/`: trabalho mecânico
