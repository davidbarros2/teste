#!/usr/bin/env bash
# Portão automático da etapa 04/05: instala dependências e corre `npm run verify`
# (lint + tipos + testes de unidade + build) no app de um produto.
# Uso: scripts/verificar.sh <slug>
set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"
slug="${1:?Uso: $0 <slug>}"
app="$raiz/produtos/$slug/app"

[ -f "$app/package.json" ] || { echo "Não há app em produtos/$slug/app" >&2; exit 1; }
cd "$app"

if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi
npm run verify
echo "VERIFICAR: OK ($slug)"
