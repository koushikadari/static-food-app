FROM nginx
MAINTAINER koushik editer
LABEL this is my first dockerfile for ci/cd
EXPOSE 80
COPY . /usr/share/nginx/html/
