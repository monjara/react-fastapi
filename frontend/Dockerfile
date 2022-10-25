FROM node:16.18.0-alpine

WORKDIR /app

ENV PATH  /app/node_modules/.bin:$PATH
COPY package.json ./
COPY src ./src
COPY public ./public

RUN npm install -g pnpm
RUN npm run build

