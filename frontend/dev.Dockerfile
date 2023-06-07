FROM node:14-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install

ADD next.config.js postcss.config.js tailwind.config.js tsconfig.json ./

CMD [ "npm", "run", "dev" ]
