---
name: accessibility
description: Accessibility to WCAG 2.2 level AA for product UI, landing pages, emails and documents. Use for any UI work and pre-launch audits.
---

# Accessibility

Last reviewed: 2026-10.

## Rules (most common failures first)
1. Text contrast ≥ 4.5:1 (≥ 3:1 for large text and UI components).
2. Every input has a visible label; errors are announced and explained in text.
3. Everything works with a keyboard; focus is visible and not obscured.
4. Semantic HTML first (button, nav, main, headings in order); ARIA only when needed.
5. Images have meaningful alt text (empty alt for decorative ones).
6. Target size ≥ 24×24 CSS px; no drag-only interactions.
7. No information by color alone; respect reduced-motion preferences.
8. Page language set; link text makes sense out of context.
9. Authentication without cognitive tests (allow paste and password managers).
10. Emails and PDFs: real text, headings, alt text.

## Testing
Automated scan (e.g. axe) + keyboard-only pass + one screen reader pass
(NVDA or VoiceOver) on core flows.

## Audit checklist
- [ ] Automated scan: zero serious/critical issues
- [ ] Keyboard pass on sign-up, core job, billing
- [ ] Screen reader pass on the same flows
- [ ] Accessibility statement updated

## Sources
- W3C WCAG 2.2 (Recommendation), Understanding WCAG 2.2
- W3C WAI-ARIA Authoring Practices Guide
- EN 301 549; European Accessibility Act (Directive (EU) 2019/882)
