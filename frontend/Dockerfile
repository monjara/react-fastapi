FROM node:16.18.0-alpine
WORKDIR /app
ENV PATH  /app/node_modules/.bin:$PATH
COPY package.json ./
COPY vite.config.js ./
COPY src ./src
COPY public ./public
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 8080
