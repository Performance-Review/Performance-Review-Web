#!/bin/bash
bash scripts/docker_build.sh
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
docker push smmoosavi/performance-review-web
