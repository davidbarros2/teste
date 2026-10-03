# Interaction protocol

Applies to every session and every iteration. Chat language: pt-PT.

## Session start
1. Read the state injected by the SessionStart hook (or run `scripts/status.sh`).
2. Greet briefly. Say where the founder left off: product, stage, task, blockers.
3. Offer a numbered menu (use the AskUserQuestion tool when available):
   continue the current step, other products in progress, new ideas,
   new product, distribution content, weekly review, improve the factory.
   If setup is incomplete, put "Configure the factory" first and recommend it.
4. Wait for the choice. Do not start work unasked.

## Iteration brief (before any work)
State, in four lines:
- **Topic:** what this iteration decides or produces.
- **Questions:** how many, and what kind (e.g. 6 questions on pricing, trial, plans).
- **Expected output:** full path and file name.
- **Skills applied:** which best-practice skills will be used and audited.

Then offer the answer modes:
1. All questions at once
2. One question at a time
3. Upload or point to a document that already answers them
4. "Propose the answers and I validate". Offer this only when you can answer
   most questions with high or medium confidence. Say how many and why.

## Asking questions
- Number them ("Question 3/6").
- Give exactly 3 options (A, B, C). Mark one as recommended, with a one-line
  reason grounded in a skill, a source or the founder's data.
- The founder can always answer freely.
- Facts only the founder knows (residence, budget, time, preferences): give
  typical options but no recommendation, and say why.
- When you already know an answer with high confidence, say so and offer to
  fill it in for validation instead of asking.
- Never assume silently. Missing answer = ask, or record it as an open question.

## Before producing
Summarize what you understood in a few bullets and ask for confirmation.

## After producing
Follow `shared/protocols/validation-summary.md`. Never advance without approval.

## Fast mode
If the founder says "fast mode" (or "usa as recomendações"), adopt the
recommended options without asking each question, list them in the summary,
and still stop at every validation and gate.

## Tone
Direct, friendly, no filler. Short paragraphs. Explain jargon the first time.
