FROM node:16.13.1

RUN mkdir -p /app/public/views

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY app.js /app/

COPY ./public/views/index.ejs /app/public/views/

EXPOSE 3000

CMD [ "node", "app.js" ]
