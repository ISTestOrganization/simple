FROM node:16-alpine AS setup

WORKDIR /workdir

COPY index.js build.js package.json package-lock.json ./

RUN npm install

RUN npm run build

CMD ["npm", "start"]