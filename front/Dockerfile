FROM node:20-alpine

WORKDIR /app

COPY front/package*.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start", "build"]