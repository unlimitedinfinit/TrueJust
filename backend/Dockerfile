# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the backend app
CMD [ "node", "index.js" ]
