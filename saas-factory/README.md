# Micro SaaS Factory

An ICM (Interpretable Context Methodology) workspace that guides a solo founder
from idea to a running micro SaaS with Claude Code.

## How to start
1. Open Claude Code in this folder.
2. Type anything (for example "olá"). A session hook loads the factory state and
   Claude answers with where you left off and a menu.
3. First run: choose "Configure the factory". Setup interviews you about your
   profile, legal situation and preferences, and fills `_config/`.
4. From then on you only talk. Claude briefs each step, asks, produces, summarizes
   and waits for your approval before moving on.

## Requirements
- Claude Code, bash, git. Python 3 is optional (used by `scripts/lint-context.sh`).
- Make scripts executable once: `chmod +x scripts/*.sh`.

## Layout
See `CLAUDE.md` (map and rules) and `CONTEXT.md` (routing).

## Size budgets (ICM)
| Layer | Files | Budget |
|---|---|---|
| 0 | CLAUDE.md | ~800 tokens, max 80 lines |
| 1 | CONTEXT.md (root) | ~300 tokens, max 30 lines |
| 2 | stage CONTEXT.md | 200-500 tokens, max 50 lines |
| 3 | _config, references, skills, templates | 500-2,000 tokens, max 150 lines |
| 4 | output/ | varies; split when large |

Run `scripts/lint-context.sh` after editing the factory.
