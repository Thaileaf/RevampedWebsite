#!/bin/sh

#apk add --no-cache curl grep

echo 'Grabbing token'
export TOKEN=$(curl -v --request POST \
  --url 'http://localhost:9000/api/user_tokens/generate' \
  --user 'admin:admin' \
  --data 'name=My Token' | \
  grep -oP '"token":"\K[^"]*')

echo "TOKEN is $TOKEN"
echo $TOKEN > /shared/token.txt
