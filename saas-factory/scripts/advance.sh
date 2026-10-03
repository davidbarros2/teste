#!/usr/bin/env bash
# Advance a product to its next stage once the current GATE.md is approved.
# Usage: scripts/advance.sh <product-folder-name, e.g. p001-clinic-scheduler>
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
dir="$ROOT/products/${1:?Usage: $0 <product>}"
[ -d "$dir" ] || { echo "No such product: $1"; exit 1; }
status="$dir/STATUS.md"
current=$(sed -nE 's/^- \*\*Current stage:\*\* ([0-9]{2}_[a-z_]+).*/\1/p' "$status")
[ -n "$current" ] || { echo "Cannot read current stage from STATUS.md"; exit 1; }
gate="$dir/stages/$current/output/GATE.md"
[ -f "$gate" ] || { echo "Missing $gate"; exit 1; }
grep -qiE '^approved:[[:space:]]*yes' "$gate" || { echo "Gate not approved: $gate"; exit 1; }

next=$(ls "$dir/stages" | sort | awk -v c="$current" 'f{print;exit} $0==c{f=1}')
[ -n "$next" ] || { echo "$current is the last stage (operations is continuous)."; exit 0; }

today=$(date +%F)
sed -i.bak -E "s/^- \*\*Current stage:\*\* .*/- **Current stage:** $next/" "$status" && rm -f "$status.bak"
printf '| %s | %s | advanced to %s |\n' "$current" "$today" "$next" >> "$status"
echo "Advanced $1: $current -> $next"
"$ROOT/scripts/status.sh" >/dev/null || true
