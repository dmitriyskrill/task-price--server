FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
RUN yarn generate

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/src/main.js"]
