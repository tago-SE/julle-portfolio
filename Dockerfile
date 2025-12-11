FROM node:24-alpine AS builder


WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm i -g serve
COPY . .

# Override GitHub static pages
ENV VITE_BASE="/"

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
