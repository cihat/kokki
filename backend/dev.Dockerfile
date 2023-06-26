FROM node:16-alpine

WORKDIR /app

ADD package*.json ./

ENV NODE_ENV=development
ENV PORT=3000
ENV MONGODB_CONNECTION_STRING=mongodb://localhost:27017/flavor-fusionator

RUN npm install

COPY nodemon.json ./nodemon.json
COPY tsconfig.json ./tsconfig.json

CMD [ "npm", "run", "dev" ]
