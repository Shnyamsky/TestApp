FROM node:16.14.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
