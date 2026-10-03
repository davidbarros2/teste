# Distribution pipeline

Runs in parallel with the product stages, from validation onward. One piece of
content (or one campaign) per run. `{P}` = product folder.

| Stage | Does | Output |
|---|---|---|
| `01_research/` | Find topics the niche searches and asks about | `output/topics.md` |
| `02_draft/` | Write one piece (article, post, email, video script) | `output/<date>-<slug>.md` |
| `03_publish/` | Adapt per channel, schedule, record results | `output/calendar.md`, `results.md` |

Always load: `{P}/stages/02_mvp_definition/output/positioning.md` (if it exists),
`_config/brand-voice.md`, skill `human-writing`.
