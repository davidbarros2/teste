# Prompts de IA para trabalhar em SB7

Funciona com Claude, ChatGPT, Gemini, etc. Dica: cola primeiro o **prompt de sistema** (ou guarda-o num "Projeto"/"GPT personalizado" junto com o `GUIA-SB7.md`), e depois usa os prompts de tarefa.

> A IA é ótima a **estruturar, criticar e gerar variações**. É fraca a **inventar provas reais** (números, testemunhos) e a conhecer a voz do cliente. Dá-lhe sempre dados reais e revê tudo antes de publicar.

---

## 0. Prompt de sistema (colar uma vez)

```
És um copywriter sénior certificado na metodologia StoryBrand 2.0 (framework SB7 de Donald Miller).
Escreves em português de Portugal, claro, concreto e sem jargão.
Regras inegociáveis:
- O cliente é o herói; a marca é o guia (empatia + autoridade).
- Um único desejo concreto por peça.
- Nomeia sempre o problema externo, interno e filosófico, e um vilão.
- Plano em 3 passos (máx. 4), começando por verbos.
- CTA direto + CTA transicional.
- Stakes presentes mas proporcionais; sucesso concreto e mensurável.
- A peça tem de passar o "teste do grunhido": em 5 segundos percebe-se o que é oferecido, como melhora a vida e como comprar.
- Nunca inventes números, testemunhos ou garantias: se faltarem, escreve [PREENCHER: ...].
Usa o guia anexo (GUIA-SB7.md) como referência.
```

---

## 1. CRIAR um BrandScript a partir de um briefing

```
Com base neste briefing, preenche o template de BrandScript SB7 completo.
Para cada elemento dá 3 opções e assinala a que recomendas e porquê.
No fim escreve 3 one-liners (problema → solução → resultado).
Se faltar informação, faz-me até 5 perguntas antes de avançar.

BRIEFING:
[colar: o que o cliente vende, público, preços, diferenciais, provas reais, objeções comuns, concorrentes]
```

## 2. VALIDAR uma peça existente

```
Avalia a peça abaixo à luz do SB7.
1. Dá uma pontuação 0–2 a cada critério da checklist (teste do grunhido, cliente herói, desejo único,
   problema interno, vilão, empatia+autoridade, plano, CTA, stakes, sucesso) e um total /20.
2. Cita as frases exatas que falham e explica porquê.
3. Conta as ocorrências de "nós/nosso" vs "você/seu/tu".
4. Diz qual é o UM problema mais grave a corrigir primeiro.
Não reescrevas ainda.

PEÇA ([tipo: hero de site / anúncio / email / landing page]):
[colar texto]
```

## 3. REFORMULAR

```
Reescreve a peça abaixo seguindo o SB7, mantendo os factos e as provas reais.
Formato: [hero de site / anúncio Meta 125 caracteres + título 40 / email / landing page].
Dá 3 versões com ângulos diferentes:
 A) foco no problema interno,
 B) foco no sucesso/transformação,
 C) foco no que está em jogo.
Para cada uma, indica a que elemento SB7 corresponde cada frase.

BRANDSCRIPT: [colar]
PEÇA ORIGINAL: [colar]
```

## 4. GERAR peças a partir de um BrandScript aprovado

```
A partir deste BrandScript aprovado, cria:
- Wireframe de homepage (header, stakes, proposta de valor, guia, plano, parágrafo explicativo, preços, rodapé)
- 1 ideia de lead magnet + título + 5 bullets
- Sequência de 6 emails de vendas (assunto + corpo curto + CTA)
- 5 anúncios Meta Ads (texto principal, título, CTA)
- 3 soundbites para redes sociais
Marca com [PREENCHER] tudo o que dependa de dados que não te dei.

BRANDSCRIPT: [colar]
```

## 5. Teste do grunhido rápido (para cabeçalhos e anúncios)

```
Imagina que és um potencial cliente distraído que vê isto durante 5 segundos.
Responde apenas: (1) O que oferecem? (2) Como melhora a minha vida? (3) O que tenho de fazer?
Se alguma resposta for incerta, diz "FALHA" e propõe 3 títulos alternativos.

TEXTO: [colar]
```

---

## Fluxo recomendado na agência

1. Reunião de kickoff → briefing.
2. Prompt 1 → BrandScript rascunho → revisão humana com o cliente → **aprovado**.
3. Prompt 4 → primeiras versões de todas as peças.
4. Copywriter edita (voz, provas reais).
5. Prompt 2 → validação ≥ 16/20 antes de enviar ao cliente.
6. Publicar → medir (CTR, taxa de conversão, custo por lead) → Prompt 3 para testes A/B.
