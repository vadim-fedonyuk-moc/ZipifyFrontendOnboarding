permissions = %w[read_content write_content read_products read_themes write_themes write_products write_price_rules write_discounts read_discounts]

ShopifyApp.configure do |config|
  config.application_name = 'My Shopify App'
  config.api_key = Rails.application.secrets.shopify_client_api_key
  config.secret = Rails.application.secrets.shopify_client_api_secret
  config.old_secret = ''
  config.scope = permissions.join(',') # https://help.shopify.com/en/api/getting-started/authentication/oauth/scopes
  config.embedded_app = true
  config.after_authenticate_job = false
  config.api_version = "2020-07"
  config.shop_session_repository = 'Shop'
  config.allow_jwt_authentication = true
  # config.webhooks = [
  #     { topic: 'shop/update', address: "#{ENV['SHOPIFY_WEBHOOK_URI']}/webhooks/shop_update", format: 'json' },
  # ]
end
