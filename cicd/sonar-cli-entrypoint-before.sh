#!/bin/bash

#set -e

echo "Grabbing token from sonarqube"
export SONAR_TOKEN=$(curl -v --request POST \
  --url "http://sonarqube:9000/api/user_tokens/generate" \
  --user 'admin:admin' \
  --data 'name=My Token' | \
  grep -oP '"token":"\K[^"]*')

echo "TOKEN is $SONAR_TOKEN"

echo "sonar.projectKey=revamped-website" > /usr/src/sonar-project.properties

exec "$@"
#
#
#sleep 3600 # DEBUG
