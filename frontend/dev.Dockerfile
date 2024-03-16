FROM node:21-alpine

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

ADD package.json pnpm-lock.yaml ./ 

RUN pnpm install

ADD .eslintrc.js .
ADD .prettierrc.json .
ADD env.d.ts .
ADD index.html .
ADD tsconfig.node.json .
ADD tsconfig.app.json .
ADD vite.config.ts .
ADD .env .

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

CMD [ "pnpm", "dev" ]
