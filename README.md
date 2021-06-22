# Setup project 

## Local development

**Prepare environment**

- Install node 14.x using nvm
- Install yarn
- Install ruby 2.6.5 using rvm
- Install postgres
- Create .env file based on .env.example

**Up project**

```
bundle install
rails db:create
rails db:migrate
rails s 
```

## Docker development
- Create .env file based on .env.example

```
docker-compose build
docker-compose run --rm web bundle exec rails db:create
docker-compose run --rm web bundle exec rails db:migrate
docker-compose up
```


## API Documentation
Swagger is available at http://localhost:7000/apidoc
