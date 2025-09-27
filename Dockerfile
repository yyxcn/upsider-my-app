FROM node:lts-slim

WORKDIR /app
ADD package-lock.json package.json ./

RUN npm ci

ADD app.js ./
ENTRYPOINT ["node", "app.js"]
EXPOSE 3000
