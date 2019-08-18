#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

#DEBUG=serialport:*,ngivr-arabesque:*
#REM yarn link ngivr-ms-arabesque
docker build -t patrikx3/p3x-redis-ui .
mkdir -p ./build
docker run -e P3XRS_DOCKER_HOME='/settings' -v $DIR/../build:/settings -h docker-p3x-redis-ui -p 7843:7843 -t -i patrikx3/p3x-redis-ui
