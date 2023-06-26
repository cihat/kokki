FROM node:16-alpine

WORKDIR /app

ADD package*.json ./

RUN yarn install

COPY next.config.js ./next.config.js
COPY .eslintrc.json ./.eslintrc.json
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY tsconfig.json ./tsconfig.json

COPY public ./public
COPY src ./src

CMD [ "yarn", "run", "dev" ]
