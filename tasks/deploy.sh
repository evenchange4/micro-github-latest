#!/bin/bash

set -ex

# ENV Variables, Note: ACCESS_TOKEN and NOW_TOKEN in travisCI
ORIGIN='*'
# NOW config
TEAM='github-latest'
PROJECT='micro-github-latest'
ALIAS='micro-github-latest.now.sh'

export PATH="./node_modules/.bin:$PATH"

# 0. token and team
NOW_FLAG="--token $NOW_TOKEN --team $TEAM"

# 1. Wair for deployment ready
URL=$(now -e ORIGIN="$ORIGIN" -e ACCESS_TOKEN="$ACCESS_TOKEN" --public "$NOW_FLAG")
await-url "$URL"
now ls "$NOW_FLAG"

# 2. Alias
now alias set "$URL" "$ALIAS" "$NOW_FLAG"

# 3. Purge old services
now remove --yes --safe "$NOW_FLAG" $PROJECT

# 4. Scale to 1
now scale "$ALIAS" 1 "$NOW_FLAG"

# 5. Log results
now ls "$NOW_FLAG"
now alias ls "$NOW_FLAG"
