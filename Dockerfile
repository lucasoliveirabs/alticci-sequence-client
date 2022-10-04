FROM node:latest as angular
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=angular app/dist/alticci-sequence-client /usr/share/nginx/html

EXPOSE 80