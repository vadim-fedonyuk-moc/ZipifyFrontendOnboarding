# frozen_string_literal: true
class Shop < ActiveRecord::Base
  include ShopifyApp::ShopSessionStorage

  has_many :banners, dependent: :destroy

  after_commit :install_shop

  def api_version
    ShopifyApp.configuration.api_version
  end

  class << self
    def shopify_keys
      {
          name: :name,
          email: :email,
          country_name: :country_name,
          country_code: :country_code,
          customer_email: :customer_email,
          shop_owner: :shop_owner,
          timezone: :timezone,
          currency: :currency,
          money_format: :money_format,
          iana_timezone: :iana_timezone,
          created_at: :shopify_created_at,
          updated_at: :shopify_updated_at
      }
    end

    def session(domain, token)
      ShopifyAPI::Session.new(domain: domain, token: token, api_version: ShopifyApp.configuration.api_version)
    end

    def activate_session(domain, token)
      session = session(domain, token)
      ShopifyAPI::Base.activate_session(session)
    end
  end

  def session
    @session ||= self.class.session(shopify_domain, shopify_token)
  end

  def activate_session
    ShopifyAPI::Base.activate_session(session)
  end

  private

  def install_shop
    InstallShopJob.set(wait: 5.seconds).perform_later(id)
  end
end
