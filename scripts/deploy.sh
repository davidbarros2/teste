#!/usr/bin/env bash
# Deploy de um produto para a Vercel via CLI. Opcional: os DEPLOY.md explicam como fazer o mesmo pelo browser.
# Precisa de VERCEL_TOKEN (e, na primeira vez, de o projeto estar ligado: `vercel link`).
# Uso: scripts/deploy.sh <slug> [--prod]
set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"
slug="${1:?Uso: $0 <slug> [--prod]}"
app="$raiz/produtos/$slug/app"

[ -f "$app/package.json" ] || { echo "Não há app em produtos/$slug/app" >&2; exit 1; }
[ -n "${VERCEL_TOKEN:-}" ] || { echo "Falta a variável VERCEL_TOKEN." >&2; exit 1; }

"$raiz/scripts/verificar.sh" "$slug"
cd "$app"
npx --yes vercel deploy ${2:+"$2"} --token "$VERCEL_TOKEN" --yes
