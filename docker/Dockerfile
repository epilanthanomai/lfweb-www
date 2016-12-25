FROM nginx

MAINTAINER Hope Ranker <hope.ranker@gmail.com>

RUN apt-get update && apt-get install -y \
  awscli

COPY build/lfweb-www /opt/lfweb-www/
COPY docker/start-nginx.sh /opt/lfweb-www/

RUN rm -rf /etc/nginx/conf.d/
COPY docker/default.nossl.conf /etc/nginx/conf.nossl.d/default.conf
COPY docker/default.ssl.conf /etc/nginx/conf.ssl.d/default.conf

CMD ["bash", "/opt/lfweb-www/start-nginx.sh"]
