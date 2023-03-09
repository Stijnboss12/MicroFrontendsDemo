# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json angular.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage app/dist/hotel-booking /usr/share/nginx/html
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

# FROM node:lts-slim
# WORKDIR /app
# COPY . .
# EXPOSE 8080
# RUN npm install

# ENTRYPOINT ["npm", "start"]