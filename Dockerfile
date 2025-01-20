# Use an official Node.js runtime as a parent image
FROM node:20
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install app dependencies
RUN npm install
# Install PM2 globally
RUN npm install pm2 -g
# Set PM2 keys for PM2 Plus monitoring (replace these keys with your own)
ENV PM2_PUBLIC_KEY 
ENV PM2_SECRET_KEY
# Bundle app source
COPY . .
# Expose the port your app runs on
EXPOSE 5050
# Define the command to run your app
CMD [ "pm2-rumtime", "start", "index.js" ]

