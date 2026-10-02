#!/usr/bin/env bash
# Copia o template base para produtos/<slug>/app/ (tarefa T01 da etapa 04).
# Uso: scripts/criar_app.sh <slug>
set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"
slug="${1:?Uso: $0 <slug>}"
template="$raiz/_config/template-base"
destino="$raiz/produtos/$slug/app"

[ -d "$raiz/produtos/$slug" ] || { echo "Produto não existe: $slug" >&2; exit 1; }
[ -e "$destino" ] && { echo "Já existe: produtos/$slug/app" >&2; exit 1; }
[ -f "$template/package.json" ] || {
  echo "O template base ainda não foi construído (falta _config/template-base/package.json)." >&2
  exit 1
}

mkdir -p "$destino"
(cd "$template" && tar --exclude=node_modules --exclude=.next --exclude=.env --exclude=.env.local -cf - .) \
  | (cd "$destino" && tar -xf -)
echo "App criado em produtos/$slug/app"
