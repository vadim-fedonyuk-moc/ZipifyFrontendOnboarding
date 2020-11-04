module Metafields
  class BannerService
    METAFIELD_NAMESPACE = 'onboardapp'.freeze
    METAFIELD_KEY = 'banner'.freeze
    METAFIELD_TYPE = 'json_string'.freeze
    METAFIELD_OWNER = 'product'.freeze

    protected

    def create_metafield(attrs)
      ShopifyAPI::Metafield.new(attrs)
    end

    def find_metafield(product_id)
      shopify_product = ShopifyAPI::Product.find(product_id)
      shopify_product.metafields.find { |m| m.attributes[:namespace] == METAFIELD_NAMESPACE }
    rescue NotFoundException => _
      nil
    end

    def metafield_attrs
      {
          namespace: METAFIELD_NAMESPACE,
          key: METAFIELD_KEY,
          owner_id: @banner.product_id,
          owner_resource: METAFIELD_OWNER,
          value: banner_attrs,
          value_type: METAFIELD_TYPE
      }
    end

    def banner_attrs
      {
          style: @banner.style,
          content: @banner.content,
          product_id: @banner.product_id
      }.to_json
    end
  end
end
