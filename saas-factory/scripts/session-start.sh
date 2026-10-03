#!/usr/bin/env bash
# SessionStart hook: print factory state so Claude can greet with a menu.
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
echo "=== FACTORY STATE ($(date +%F)) ==="
pending=$(grep -c 'not configured' "$ROOT/_config/_index.md" 2>/dev/null || true)
if [ "${pending:-0}" -gt 0 ]; then
  echo "Setup: INCOMPLETE ($pending config files not configured). Recommend 'Configure the factory' first."
else
  echo "Setup: complete"
fi
found=0
for d in "$ROOT"/products/p[0-9][0-9][0-9]-*/; do
  [ -f "$d/STATUS.md" ] || continue
  found=1
  echo "--- $(basename "$d")"
  grep -E '^- \*\*(Current stage|Current task|Last session|Next step|Blockers):\*\*' "$d/STATUS.md"
done
[ "$found" -eq 1 ] || echo "Products: none yet"
ideas=$(grep -cE '^\| [0-9]+ ' "$ROOT/portfolio/ideas-backlog.md" 2>/dev/null || true)
echo "Ideas in backlog: $ideas"
echo "Follow shared/protocols/interaction.md, section 'Session start'. Speak pt-PT."
