#!/usr/bin/env bash
# Lista os produtos e o estado de cada etapa (comando `lista`).
# Uso: scripts/estado.sh [slug]
set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"

if [ -n "${1:-}" ]; then
  cat "$raiz/produtos/$1/ESTADO.md"
  exit 0
fi

encontrou=0
for estado in "$raiz"/produtos/*/ESTADO.md; do
  [ -e "$estado" ] || continue
  slug="$(basename "$(dirname "$estado")")"
  [ "$slug" = "_modelo" ] && continue
  encontrou=1
  atual="$(grep -E '^\| 0[0-6] ' "$estado" | grep -v '| aprovada |' | head -1 | cut -d'|' -f2,3 | sed 's/  */ /g')"
  echo "$slug →${atual:- concluído}"
done
[ "$encontrou" = 1 ] || echo "Ainda não há produtos. Usa: novo saas <nome>"
