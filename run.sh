docker run -dit --rm -p 8080:80  \
  -v $(pwd):/usr/share/nginx/html \
  nginx:latest