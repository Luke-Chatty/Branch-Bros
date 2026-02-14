# Build Stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN ls -la /app/dist

# Production Stage
FROM caddy:2-alpine

COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile

# Debug: Check if files were copied correctly
RUN ls -la /usr/share/caddy

EXPOSE 80
EXPOSE 3000
