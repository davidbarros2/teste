#!/usr/bin/env bash
# Archive a product: keep its learnings, move it out of active products.
# Usage: scripts/kill.sh <product-folder-name>
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
name="${1:?Usage: $0 <product>}"
src="$ROOT/products/$name"
[ -d "$src" ] || { echo "No such product: $name"; exit 1; }
mkdir -p "$ROOT/products/_archive"
sed -i.bak -E 's/^\| status \| .* \|$/| status | archived |/' "$src/META.md" && rm -f "$src/META.md.bak"
printf '\n## %s: %s archived\n- Reason: (fill in)\n- Lessons: (fill in)\n' "$(date +%F)" "$name" >> "$ROOT/learnings/LEARNINGS.md"
mv "$src" "$ROOT/products/_archive/$name"
echo "Archived $name. Add the reason and lessons in learnings/LEARNINGS.md."
"$ROOT/scripts/status.sh" >/dev/null || true
