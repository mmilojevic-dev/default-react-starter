# syntax=docker/dockerfile:1

# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build  # Ensure this script builds your app into /app/dist

# Production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
