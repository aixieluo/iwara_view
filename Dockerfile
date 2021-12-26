FROM node:14

MAINTAINER xxy

WORKDIR /var/www

COPY . /var/www

RUN npm install

ENTRYPOINT ["npm", "run", "serve"]

