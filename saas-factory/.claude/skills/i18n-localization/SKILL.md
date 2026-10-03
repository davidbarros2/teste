---
name: i18n-localization
description: Internationalization and localization: product_language, translations, formats, multilingual SEO. Use when a product's language is not en-US or serves several markets.
---

# Internationalization and localization

Last reviewed: 2026-10.

## Rules
1. Externalize all UI strings from day one, even for one language.
2. Use ICU MessageFormat for plurals and gender; never concatenate sentences.
3. Format dates, numbers, currency and addresses with locale APIs (CLDR data).
4. Store times in UTC; show in the user's time zone.
5. Leave room for text expansion (+30%); support right-to-left if needed.
6. Localization is not translation: adapt examples, tone, legal texts and prices.
7. Native-speaker review for marketing and legal text; apply `human-writing`
   in that language.
8. Multilingual SEO: one URL per language, `hreflang`, translated metadata.

## Audit checklist
- [ ] No hard-coded user-facing strings
- [ ] Locale formatting used everywhere
- [ ] Native review done for public text

## Sources
- Unicode CLDR; ICU MessageFormat
- W3C Internationalization (i18n) best practices
- Google Search Central: managing multi-regional and multilingual sites
