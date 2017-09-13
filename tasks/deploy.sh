#!/bin/bash

set -ex

# ENV Variables, Note: ACCESS_TOKEN and NOW_TOKEN in travisCI
ORIGIN='*'
# NOW config
TEAM='github-latest'
PROJECT='micro-github-latest'
ALIAS='micro-github-latest.now.sh'

export PATH="./node_modules/.bin:$PATH"

# 0. Use team
now switch $TEAM -t "$NOW_TOKEN"

# 1. Wair for deployment ready
URL=$(now -e ORIGIN="$ORIGIN" -e ACCESS_TOKEN="$ACCESS_TOKEN" --public -t "$NOW_TOKEN")
await-url "$URL"
now ls -t "$NOW_TOKEN"

# 2. Alias
now alias set "$URL" "$ALIAS" -t "$NOW_TOKEN"

# 3. Purge old services
now remove --yes --safe -t "$NOW_TOKEN" $PROJECT

# 4. Scale to 1
now scale "$ALIAS" 1 -t "$NOW_TOKEN"

# 5. Log results
now ls -t "$NOW_TOKEN"
now alias ls -t "$NOW_TOKEN"
