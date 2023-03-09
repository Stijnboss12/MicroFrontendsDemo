# build stage
FROM node:lts-alpine as build-stage
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY package*.json angular.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /dist/src/app/dist/shell /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:lts-alpine
# WORKDIR /app
# COPY package*.json angular.json ./
# RUN npm install
# COPY . .

# CMD ["npm", "run", "serve"]