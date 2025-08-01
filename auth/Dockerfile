FROM node:alpine
LABEL authors="Florian"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]