#docker login
#docker build -t patrikx3/p3x-redis-ui .
##docker tag IMAGE_ID patrikx3/p3x-redis-ui:latest
#docker push patrikx3/p3x-redis-ui:latest
#docker tag patrikx3/p3x-redis-ui:latest patrikx3/p3x-redis-ui:2020.10.2020.10.313
#docker push patrikx3/p3x-redis-ui:2020.10.2020.10.313
#docker images
#docker rmi -f IMAGE_ID
FROM node:slim
MAINTAINER patrikx3/p3x-redis-ui - Patrik Laszlo
ENV COMPOSER_PROCESS_TIMEOUT=3600
ENV DEBIAN_FRONTEND=noninteractive
ENV P3XRS_DOCKER_HOME=/settings
EXPOSE 7843
RUN npm -g --unsafe-perm install p3x-redis-ui
CMD p3x-redis
