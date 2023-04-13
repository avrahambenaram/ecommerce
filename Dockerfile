FROM node:16.19.1-alpine3.16

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm i
RUN npm run build
RUN npx prisma migrate dev

CMD [ "yarn", "start" ]