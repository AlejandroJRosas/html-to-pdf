FROM zenika/alpine-chrome:89-with-node:latest AS dev

COPY package*.json ./

RUN npm install

COPY . .

ENV PUPPETEER_EXECUTABLE_PATH='/usr/bin/chromium-browser'

EXPOSE 8080
RUN npm run build
CMD [ "node", "build/index.js" ]