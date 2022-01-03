#!/bin/bash
VERSION=$(node -p "require('./package.json').version")
docker build \
  -t "smmoosavi/performance-review-web:latest" \
  -t "smmoosavi/performance-review-web:$VERSION" \
 .
