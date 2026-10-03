---
name: document-formatting
description: Formatting and structure for factory documents and markdown files (PRDs, designs, reports), within ICM size budgets. Use whenever writing a file in the factory.
---

# Document formatting

Last reviewed: 2026-10.

## Rules
1. Start with the point: purpose or conclusion in the first lines.
2. Headings in sentence case, logical order, no skipped levels.
3. Tables for comparisons and structured data; lists for steps and sets;
   prose for reasoning.
4. One idea per paragraph; short sentences; define acronyms once.
5. Dates in ISO format (YYYY-MM-DD). Units and currencies explicit.
6. File names: lowercase, hyphenated, descriptive; dated when time-based.
7. Respect ICM budgets (see README); split large files and add an `_index.md`
   to folders with more than 10 files.
8. Mark assumptions, open questions and confidence explicitly.
9. CommonMark-compatible markdown; no HTML unless needed.

## Audit checklist
- [ ] Purpose clear in the first 3 lines
- [ ] Within size budget (`scripts/lint-context.sh`)
- [ ] Assumptions and open questions labeled

## Sources
- Google developer documentation style guide
- Microsoft Writing Style Guide
- CommonMark specification; ISO 8601 (dates); ISO 24495-1 (plain language)
