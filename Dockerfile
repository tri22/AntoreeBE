# Base image Node.js 22
FROM node:22-alpine

# Thư mục làm việc bên trong container
WORKDIR /usr/src/app

# Copy package.json và package-lock.json trước để cache layer cài đặt
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build project NestJS
RUN npm run build

# Chỉ giữ lại dependencies cần thiết khi chạy
RUN npm prune --production

# Expose port 8080
EXPOSE 8080

# Lệnh chạy app
CMD ["node", "dist/main.js"]
