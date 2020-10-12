class InstallShopJob < ActiveJob::Base
  queue_as :critical

  def perform(shop_id)
    shop = Shop.find_by(id: shop_id)

    return if shop.blank?

    shop.activate_session
    shopify_shop = ShopifyAPI::Shop.current
    values = shopify_shop.attributes.select { |key,_| Shop.shopify_keys.keys.include?(key) }.transform_keys { |key| Shop.shopify_keys[key] }
    shop.update(values)

    ShopifyAPI::Base.clear_session
  end
end