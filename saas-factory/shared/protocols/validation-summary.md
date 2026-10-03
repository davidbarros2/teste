# Validation summary protocol

After any piece of work, post this summary in the chat, in Portuguese, so the
founder can validate without opening files. Then wait.

```
✅ Concluído: <step name>

O que foi feito:
<3-8 bullets with the substance: decisions, numbers, key content>

Ficheiros:
- criado  <full/path/file.md>  (<one-line description>)
- alterado <full/path/file.md> (<what changed>)

Pressupostos assumidos:
- <assumption> (confiança: alta/média/baixa; base: <source>)

Questões em aberto:
- <question, and who must answer it>

Dificuldades e riscos:
- <risk or difficulty, and suggested mitigation>

Auditoria de boas práticas:
- <skill>: <passed / N items fixed / N items pending>

Aprovas?
1. Aprovo, avançar
2. Aprovo com alterações (diz quais)
3. Não aprovo, rever (diz o quê)
```

## Rules
- Empty sections say "Nenhum(a)". Never drop a section.
- Option 2: apply the changes, show a short diff summary, ask again.
- Option 1: write `approved: yes`, the date and the founder's words in the
  stage `output/GATE.md` (or tick the task in tasks.md), then run
  `scripts/advance.sh <product>` when the whole stage is approved.
- Approval must be explicit. "ok, vê isso" is not approval: ask.
