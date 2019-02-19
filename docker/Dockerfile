FROM node:10.15.1-alpine AS builder
ENV ROOT /opt/lfweb-www
WORKDIR $ROOT
COPY . $ROOT
RUN ["/usr/local/bin/npm", "install"]
RUN ["./node_modules/.bin/gulp"]

FROM nginx:1.14.2-alpine
MAINTAINER Hope Ranker <hope.ranker@gmail.com>
ENV ROOT /opt/lfweb-www
WORKDIR $ROOT
COPY --from=builder $ROOT/build/lfweb-www $ROOT
COPY docker/start-nginx.sh $ROOT
COPY docker/default.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh", "./start-nginx.sh"]
EXPOSE 80
