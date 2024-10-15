# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install expo-cli globally
RUN npm install -g expo-cli

# Copy the rest of the app’s source code
COPY . .

# Expose the port the app runs on
EXPOSE 19006

# Start the Expo development server
CMD ["npm", "start"]
