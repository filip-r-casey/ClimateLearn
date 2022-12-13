FROM node:14-alpine3.12

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 8080

CMD [ "npm", "run", "dev" ]