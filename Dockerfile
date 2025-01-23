FROM keymetrics/pm2:latest-alpine

# Set working directory
WORKDIR /usr/src/app

# Bundle APP files
COPY . .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
ENV PM2_PUBLIC_KEY z4k8bvoc65w9v9n
ENV PM2_SECRET_KEY 4gsvhzg2x6x86kb

RUN npm install --production

# Expose the listening port of your app
EXPOSE 5050

# Show current folder structure in logs
RUN ls -al -R

# Start with PM2, including web monitoring interface
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--web"]