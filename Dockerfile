FROM node:lts-alpine

USER node

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --silent --frozen-lockfile --no-cache

COPY ./src ./src

EXPOSE 3333

CMD [ "yarn dev" ]