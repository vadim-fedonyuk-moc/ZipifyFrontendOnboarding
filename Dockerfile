FROM ruby:2.6.5-stretch

WORKDIR /app

RUN apt-get update && apt-get install -qq -y --no-install-recommends curl
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y nodejs yarn

ENV BUNDLE_PATH /bundle
RUN gem install bundler -v 2.2.19 --no-document
RUN bundle config git.allow_insecure true

COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install

COPY ./package.json ./yarn.lock ./
RUN yarn install

RUN npm rebuild node-sass
RUN bundle exec rails assets:precompile
