FROM node:21-alpine AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM builder AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM builder AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM builder 
COPY --from=prod-deps /app/node_modules /app/node_modules

ENV NODE_ENV=development

ADD bin ./bin

VOLUME [ "/app/src" ]

CMD [ "pnpm", "dev" ]
