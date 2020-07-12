FROM nginx
RUN apt update
RUN apt install git -y
RUN git clone https://github.com/mayankkholia/mayankkholia.github.io.git
RUN cp -r mayankkholia.github.io/* /usr/share/nginx/html
CMD sed -i "s/80/$PORT/g" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
