FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY jest.config.js ./

RUN npm install

VOLUME ["/usr/src/app/test-report"]

ADD __tests__ /usr/src/app/__tests__

CMD [ "./node_modules/.bin/jest"]

