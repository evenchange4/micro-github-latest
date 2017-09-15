#!/bin/bash

set -ex

# ENV Variables, Note: ACCESS_TOKEN and NOW_TOKEN in travisCI
ORIGIN='*'
# NOW config
TEAM='github-latest'
PROJECT='micro-github-latest'
ALIAS='micro-github-latest.now.sh'

export PATH="./node_modules/.bin:$PATH"

# 1. Wair for deployment ready
URL=$(now -e ORIGIN="$ORIGIN" -e ACCESS_TOKEN="$ACCESS_TOKEN" --public --token "$NOW_TOKEN" --team $TEAM)
await-url "$URL"
now ls --token "$NOW_TOKEN" --team $TEAM

# 2. Alias
now alias set "$URL" "$ALIAS" --token "$NOW_TOKEN" --team $TEAM

# 3. Purge old services
now remove --yes --safe --token "$NOW_TOKEN" --team $TEAM $PROJECT

# 4. Scale to 1
now scale "$ALIAS" 1 --token "$NOW_TOKEN" --team $TEAM

# 5. Log results
now ls --token "$NOW_TOKEN" --team $TEAM
now alias ls --token "$NOW_TOKEN" --team $TEAM
