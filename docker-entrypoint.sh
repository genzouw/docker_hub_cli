#!/usr/bin/env bash
set -o errexit
set -o nounset

declare -r SCRIPT_DIR_PATH="$(dirname "$(readlink -f "$0")")"

tmp=$(mktemp)

CONFIG_JSON="$HOME/.docker_hub_api/credential.json"
if [[ -f $CONFIG_JSON ]]; then
  . <(cat "$CONFIG_JSON" | jq -r 'to_entries|map("\(.key)=\(.value|tostring)")|.[]' | sed 's/^/export /')
fi

"${SCRIPT_DIR_PATH}/main.js" "${@}" >"${tmp}"

case "${1}" in
  login)
    mkdir -p "$HOME/.docker_hub_api/"
    cat "${tmp}" >"${CONFIG_JSON}"
    ;;
  create_repository)
    cat "${tmp}" | jq -r '.dockerhub_url'
    ;;
  *)
    echo "Subcommand not exists. ($subcommand)"
    exit 100
    ;;
esac
