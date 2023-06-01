# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Use the official Nginx image to serve the built React app
FROM nginx:stable-alpine

# Copy the built React app to the Nginx container
COPY --from=0 /app/build /usr/share/nginx/html
COPY .nginx/default.conf /etc/nginx/conf.d/

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
