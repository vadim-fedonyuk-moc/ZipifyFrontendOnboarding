module Metafields
  class CreateBanner < BannerService
    def self.call(*args, &block)
      new(*args, &block).execute
    end

    def initialize(banner)
      @banner = banner
    end

    def execute
      shopify_product = ShopifyAPI::Product.find(@banner.product_id)
      return OpenStruct.new(success?: false, errors: I18n.t('errors.not_found', entity: 'Product')) if shopify_product.nil?

      new_metafield = create_metafield(metafield_attrs)
      return OpenStruct.new(success?: false, errors: new_metafield.errors.full_messages) unless new_metafield.save
      OpenStruct.new(success?: true, errors: nil)
    end
  end
end
