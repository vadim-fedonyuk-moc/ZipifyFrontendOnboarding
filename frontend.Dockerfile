FROM node:16.15.1-stretch

WORKDIR /app

# Git is required for installing node modules from git
RUN apt-get update && apt-get install -qq -y --no-install-recommends git

ADD package.json package-lock.json ./
RUN npm install
