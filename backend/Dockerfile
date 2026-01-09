# Use Node.js 20-alpine for a small footprint
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install --omit=dev

# Bundle app source
COPY . .

# Expose port 5000
EXPOSE 8080

# Run the app
CMD [ "npm", "start" ]
