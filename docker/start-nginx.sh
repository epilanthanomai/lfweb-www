#!/bin/bash
set -e
if [ -n "$LFWEB_CERTS_TARBALL" ]; then
  aws s3 cp --quiet "$LFWEB_CERTS_TARBALL" /dev/stdout | tar xz -C /opt/lfweb-www/
  ln -s conf.ssl.d /etc/nginx/conf.d
else
  ln -s conf.nossl.d /etc/nginx/conf.d
fi
exec nginx -g 'daemon off;'
