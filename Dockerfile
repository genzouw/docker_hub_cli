FROM node:alpine3.11

LABEL maintainer "genzouw <genzouw@gmail.com>"

RUN apk add --no-cache \
  bash \
  jq \
  ;

ENV HOME /root

WORKDIR $HOME

COPY ./main.js /root
COPY ./docker-entrypoint.sh /root
COPY ./package.json /root
COPY ./yarn.lock /root

RUN yarn install

VOLUME ["$HOME/.docker_hub_api"]

ENTRYPOINT ["./docker-entrypoint.sh"]
