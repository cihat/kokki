FROM node:16-alpine

WORKDIR /app

ADD package.json package-lock.json nodemon.json tsconfig.json ./

ENV NODE_ENV=development
ENV PORT=3000
ENV MONGODB_CONNECTION_STRING=mongodb://localhost:27017/flavor-fusionator

RUN npm install

CMD [ "npm", "run", "dev" ]
