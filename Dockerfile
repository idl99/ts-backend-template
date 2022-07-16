# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# what image we want to build from
# we will use the latest LTS (long term support) version 12 of node
FROM node:12

ENV NODE_ENV=production
ENV APP_HOST='0.0.0.0'
ENV APP_PORT=8080

# create a directory to hold the application code inside the image
# this will be the working directory for the application
WORKDIR /usr/src/app

# install the app dependencies using the npm binary
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci --production --silent

# bundle app's source code inside the Docker image
COPY . .

EXPOSE ${APP_PORT}

CMD ["npm", "start"]
