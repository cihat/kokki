FROM node:14-alpine

WORKDIR /app

ADD package.json package-lock.json nodemon.json tsconfig.json ./

RUN npm install

CMD [ "npm", "run", "dev" ]
