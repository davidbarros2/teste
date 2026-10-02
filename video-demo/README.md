# Demo: vídeo feito com o método ICM (script-to-animation)

Um vídeo vertical de 24 s ("O que acontece quando tocas em Enviar"), produzido seguindo as
três etapas do workspace oficial `script-to-animation` do ICM. O código é original, escrito
para esta demo seguindo as regras do workspace (sistema de design, regras de movimento, formato vertical).

| Etapa | Saída |
|---|---|
| 01 Guião | [`stages/01-script/output/enviar-script.md`](stages/01-script/output/enviar-script.md) |
| 02 Plano visual | [`stages/02-spec/output/enviar-spec.md`](stages/02-spec/output/enviar-spec.md) |
| 03 Construção | [`src/`](src/) (código Remotion) → [`enviar.mp4`](enviar.mp4) |

Nesta demo, as decisões que normalmente seriam do utilizador (marca, cores, ângulo, aprovação
em cada ponto de controlo) foram tomadas pelo agente.

## Correr
```bash
npm install
npm run studio   # pré-visualizar no browser
npm run render   # exportar MP4
```
