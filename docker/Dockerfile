FROM nginx:stable-alpine

MAINTAINER Hope Ranker <hope.ranker@gmail.com>

COPY build/lfweb-www /opt/lfweb-www/
COPY docker/start-nginx.sh /opt/lfweb-www/

COPY docker/default.conf /etc/nginx/conf.d/default.conf

CMD ["bash", "/opt/lfweb-www/start-nginx.sh"]

EXPOSE 80 443
