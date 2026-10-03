---
name: ux-design
description: Usability and interaction design practice for flows, forms, navigation, empty and error states. Use for any product UI or flow design.
---

# UX design

Last reviewed: 2026-10.

## Nielsen's 10 heuristics (check every screen)
1. Visibility of system status  2. Match with the real world  3. User control
and freedom (undo, cancel)  4. Consistency and standards  5. Error prevention
6. Recognition over recall  7. Flexibility and efficiency  8. Minimalist design
9. Help users recognize and recover from errors  10. Help and documentation

## Rules
- Design the shortest path from sign-up to first value; remove every optional step.
- Forms: single column, only necessary fields, inline validation after blur,
  clear labels above fields, sensible defaults, explain why sensitive data is asked.
- Every screen has designed empty, loading, error and success states.
- Destructive actions confirm and, where possible, can be undone.
- Use the customer's vocabulary for labels and navigation.
- Test with 3-5 real users per round; observe, do not explain.

## Audit checklist
- [ ] Heuristics reviewed for each core screen
- [ ] Empty, loading, error states exist
- [ ] Time to first value measured in a usability test
- [ ] `accessibility` audit passes

## Sources
- Jakob Nielsen, 10 Usability Heuristics (Nielsen Norman Group)
- ISO 9241-110:2020 Interaction principles; ISO 9241-210 Human-centred design
- Steve Krug, *Don't Make Me Think*
