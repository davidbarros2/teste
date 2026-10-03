---
name: web-performance
description: Web performance to Core Web Vitals "good" thresholds for landing pages and app screens. Use for landing pages, front-end work and pre-launch audits.
---

# Web performance

Last reviewed: 2026-10.

## Targets (75th percentile of real users)
- LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.

## Rules
1. Marketing pages static or server-rendered; minimal JavaScript.
2. Images: modern formats (AVIF/WebP), responsive sizes, explicit width/height,
   lazy-load below the fold, preload the LCP image.
3. Fonts: few weights, `font-display: swap`, self-host or preconnect.
4. Third-party scripts audited; load after interaction when possible.
5. Cache static assets with long TTLs; use a CDN.
6. Avoid layout shifts: reserve space for media, embeds and banners.
7. Measure field data (CrUX or RUM), not only lab scores.

## Audit checklist
- [ ] Lighthouse/PageSpeed run on landing and app entry pages
- [ ] Field Core Web Vitals in "good" (or plan to fix)
- [ ] Third-party scripts listed with justification

## Sources
- Google web.dev: Core Web Vitals, LCP, INP, CLS guides
- MDN Web Docs: performance
