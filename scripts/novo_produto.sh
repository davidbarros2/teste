#!/usr/bin/env bash
# Cria a pasta de um produto novo: produtos/<slug>/ com ESTADO.md e as pastas das etapas.
# Uso: scripts/novo_produto.sh "Nome do Produto"
set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"
nome="${1:?Uso: $0 \"Nome do Produto\"}"
slug="$(python3 -c 'import re,sys,unicodedata as u; s=u.normalize("NFKD",sys.argv[1]).encode("ascii","ignore").decode().lower(); print(re.sub(r"[^a-z0-9]+","-",s).strip("-"))' "$nome")"
[ -n "$slug" ] || { echo "Nome inválido: $nome" >&2; exit 1; }

destino="$raiz/produtos/$slug"
[ -e "$destino" ] && { echo "Já existe: produtos/$slug" >&2; exit 1; }

mkdir -p "$destino"/{00_brief,01_produto,02_arquitetura,03_plano,04_implementacao,05_verificacao}
data="$(date +%Y-%m-%d)"
nome_esc="$(printf '%s' "$nome" | sed 's/[&|\\]/\\&/g')"
sed -e "s|__NOME__|$nome_esc|g" -e "s|__SLUG__|$slug|g" -e "s|__DATA__|$data|g" \
  "$raiz/produtos/_modelo/ESTADO.md" > "$destino/ESTADO.md"

echo "$slug"
