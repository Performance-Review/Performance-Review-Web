#!/bin/bash
docker build \
  -t "smmoosavi/performance-review-web:dev" \
  -t "smmoosavi/performance-review-web:dev-$TRAVIS_COMMIT" \
  -t "smmoosavi/performance-review-web:dev-$TRAVIS_BUILD_NUMBER" \
   .
