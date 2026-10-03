#!/usr/bin/env bash
# Check markdown files against ICM size budgets (lines and ~tokens = chars/4).
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
fail=0
check(){ # file maxlines maxtokens
  [ -f "$1" ] || return 0
  local lines chars tokens
  lines=$(wc -l < "$1"); chars=$(wc -c < "$1"); tokens=$(( chars / 4 ))
  if [ "$lines" -gt "$2" ] || [ "$tokens" -gt "$3" ]; then
    echo "OVER  $1: $lines lines (max $2), ~$tokens tokens (max $3)"; fail=1
  fi
}
check CLAUDE.md 80 900
check CONTEXT.md 30 400
while IFS= read -r f; do check "$f" 50 600; done < <(find stages distribution setup products -name CONTEXT.md -not -path '*/_archive/*' 2>/dev/null)
while IFS= read -r f; do check "$f" 150 2000; done < <(find _config archetypes shared .claude/skills learnings portfolio -name '*.md' 2>/dev/null; find stages setup -path '*/references/*.md' 2>/dev/null)
for d in _config archetypes shared/templates .claude/skills; do
  n=$(find "$d" -mindepth 1 -maxdepth 1 ! -name '_index.md' ! -name '.*' | wc -l)
  if [ "$n" -gt 10 ] && [ ! -f "$d/_index.md" ]; then echo "INDEX $d has $n entries and no _index.md"; fail=1; fi
done
[ "$fail" -eq 0 ] && echo "All files within ICM budgets."
exit "$fail"
