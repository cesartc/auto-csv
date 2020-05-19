FROM node:12

WORKDIR /var/www/app

ADD . .

RUN npm install

EXPOSE 3001

CMD npm start