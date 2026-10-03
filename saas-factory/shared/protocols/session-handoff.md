# Session handoff protocol

Run this when a step is approved, and before the context gets long.

1. Update `products/<id>/STATUS.md` (template: `shared/templates/STATUS.md`):
   current stage and task, what was done, decisions with dates, next step,
   blockers, open questions.
2. If a lesson applies to future products, append it to `learnings/LEARNINGS.md`
   (date, product, lesson, suggested factory change).
3. Tell the founder, in Portuguese:
   - what comes next and why;
   - "Para o próximo passo, abre uma janela nova (ou usa /clear) para teres
     contexto limpo. Tudo ficou guardado em <path>."
4. Do not start the next step in the same session unless the founder insists.
