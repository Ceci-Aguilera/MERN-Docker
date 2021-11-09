FROM node:16-bullseye

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Exports
EXPOSE 8080

CMD ["npm","start"]