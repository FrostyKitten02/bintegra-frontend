FROM node:lts-alpine3.18
WORKDIR /react-app
COPY package.json .
COPY package-lock.json .
COPY tailwind.config.js .
COPY tsconfig.json .
RUN npm install
COPY . .
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]