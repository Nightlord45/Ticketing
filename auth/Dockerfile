FROM node:alpine
LABEL authors="Florian"

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]