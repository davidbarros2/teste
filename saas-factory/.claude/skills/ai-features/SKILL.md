---
name: ai-features
description: Building AI features responsibly in a micro SaaS: evaluation, cost control, privacy, security (prompt injection), transparency and AI Act duties. Use for products with the ai-powered archetype or any AI feature.
---

# AI features

Last reviewed: 2026-10.

## Rules
1. Define what good output means; build an evaluation set from real cases
   before launch and run it on every model or prompt change.
2. Human in the loop for consequential outputs; allow edit and undo.
3. Show uncertainty and sources where possible; never present guesses as facts.
4. Cost: measure tokens per action and per user; set plan limits; cache.
5. Security: treat model output and retrieved content as untrusted; defend
   against prompt injection; restrict tool permissions; never put secrets in prompts.
6. Privacy: DPA with the model provider; check retention and training use;
   minimize personal data sent.
7. Transparency: tell users when they interact with AI or receive AI-generated
   content, as the AI Act requires for the relevant cases.
8. Classify the use case under the AI Act; avoid high-risk uses for a first product.

## Audit checklist
- [ ] Eval set exists and passes the agreed threshold
- [ ] Cost per user within plan margins
- [ ] Prompt injection and data leakage tests done
- [ ] Transparency notices in place; AI Act class recorded

## Sources
- Regulation (EU) 2024/1689 (AI Act)
- NIST AI Risk Management Framework (AI RMF 1.0)
- OWASP Top 10 for LLM Applications
