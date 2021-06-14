FROM ruby:2.6.5-stretch as builder

WORKDIR /app

RUN apt-get update && apt-get install -qq -y --no-install-recommends curl nodejs && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash

ENV BUNDLE_PATH /bundle
RUN gem install bundler -v 2.2.19 --no-document
RUN bundle config git.allow_insecure true

COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install
