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

# Set PM2 public and secret keys
ENV PM2_PUBLIC_KEY z4k8bvoc65w9v9n
ENV PM2_SECRET_KEY 4gsvhzg2x6x86kb

# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 5050

# Use pm2-runtime to run your application
CMD ["pm2-runtime", "index.js"]
