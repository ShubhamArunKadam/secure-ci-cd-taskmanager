FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all source code AFTER node_modules is created
COPY . .

# ✅ FIX: Now react-scripts exists, so fix permission here
RUN chmod +x node_modules/.bin/react-scripts

# Build the React app
RUN npm run build

# Serve with 'serve'
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]

