# Base image
FROM node:20

# Build arg & env
ARG MODE=prod
ENV NODE_ENV=$MODE

# Create app dir
WORKDIR /app

# Install concurrently
RUN npm install -g concurrently

# Copy backend dependencies
COPY package*.json ./
RUN npm install

# Copy frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

COPY . .

# Expose frontend (3000) và backend (3004)
EXPOSE 3000
EXPOSE 3004

CMD sh -c 'if [ "$MODE" = "dev" ]; then concurrently "cd frontend && npm start" "npm run start-dev"; else npm run start; fi'


