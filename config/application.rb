require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module ShopifyApp
  class Application < Rails::Application
    config.load_defaults 5.2
    config.action_dispatch.default_headers.delete('X-Frame-Options')
  end
end
