FROM public.ecr.aws/docker/library/node:latest

RUN mkdir -p /app/public/views

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY app.js /app/

COPY ./public/views/index.ejs /app/public/views/

EXPOSE 80

CMD [ "node", "app.js" ]
