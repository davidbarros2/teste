# Routing

On the first message of a session, read the injected factory state, greet the
founder in Portuguese, say where they left off and offer a menu (protocol:
`shared/protocols/interaction.md`, section "Session start").

| Founder wants to... | Go to |
|---|---|
| Configure the factory (first run, or setup incomplete) | `setup/CONTEXT.md` |
| Generate or score ideas | `stages/00_ideation/CONTEXT.md` (portfolio mode) |
| Start a product from an idea | run `scripts/new-product.sh <slug>`, then its 00/01 stage |
| Continue product X | `products/X/STATUS.md`, then its current stage CONTEXT.md |
| Content or marketing for X | `products/X/distribution/CONTEXT.md` |
| Weekly review of X | `products/X/stages/09_operations/CONTEXT.md` |
| New feature on a live product | mini-cycle in `products/X/stages/09_operations/features/<name>/` (02, 03, 05 contracts) |
| Kill or pause product X | confirm twice, then `scripts/kill.sh X` |
| Improve the factory | `learnings/LEARNINGS.md`, then propose edits to `_config/`, skills, stages |
| See the portfolio | run `scripts/status.sh`, then summarize `portfolio/PORTFOLIO.md` |

If setup is incomplete, recommend running it first: legal and quality rules
depend on it.
