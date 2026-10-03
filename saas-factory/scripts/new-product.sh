#!/usr/bin/env bash
# Create a new product instance from the factory templates.
# Usage: scripts/new-product.sh <slug>
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
slug="${1:-}"
[[ "$slug" =~ ^[a-z0-9][a-z0-9-]*$ ]] || { echo "Usage: $0 <slug> (lowercase, digits, hyphens)"; exit 1; }

last=$(find "$ROOT/products" -maxdepth 1 -type d -name 'p[0-9][0-9][0-9]-*' 2>/dev/null \
  | sed -E 's#.*/p([0-9]{3})-.*#\1#' | sort -n | tail -1)
next=$(printf "p%03d" $(( 10#${last:-0} + 1 )))
P="products/$next-$slug"
dest="$ROOT/$P"
[ -e "$dest" ] && { echo "Exists: $P"; exit 1; }

mkdir -p "$dest/_config" "$dest/references"
cp -r "$ROOT/stages" "$dest/stages"
cp -r "$ROOT/distribution" "$dest/distribution"
today=$(date +%F)
for f in META STATUS; do
  sed -e "s#{ID}#$next#g" -e "s#{SLUG}#$slug#g" -e "s#{DATE}#$today#g" \
    "$ROOT/shared/templates/$f.md" > "$dest/$f.md"
done
# Point stage contracts at this product folder.
find "$dest/stages" "$dest/distribution" -name 'CONTEXT.md' \
  -exec sed -i.bak "s#{P}#$P#g" {} \; -exec rm -f {}.bak \;
touch "$dest/_config/.gitkeep" "$dest/references/.gitkeep"
echo "Created $P"
"$ROOT/scripts/status.sh" >/dev/null || true
