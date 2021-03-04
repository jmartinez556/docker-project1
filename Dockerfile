FROM node:latest

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 53747

ENTRYPOINT ["node", "index.js"]
