FROM ruby:2.6.5-stretch

WORKDIR /app

ENV RAILS_SERVE_STATIC_FILES false
ENV EXECJS_RUNTIME=Disabled
ENV WEBPACKER_PRECOMPILE=false

RUN gem install bundler -v 2.2.19 --no-document
RUN bundle config git.allow_insecure true

COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install
