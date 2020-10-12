module Metafields
  class UpdateBanner < BannerService
    def self.call(*args, &block)
      new(*args, &block).execute
    end

    def initialize(banner)
      @banner = banner
    end

    def execute
      metafield = find_metafield(@banner.product_id)
      return OpenStruct.new(success?: false, errors: I18n.t('errors.not_found', entity: 'Metafield')) if metafield.nil?
      metafield.attributes = metafield_attrs
      return OpenStruct.new(success?: false, errors: metafield.errors.full_messages) unless metafield.save
      OpenStruct.new(success?: true, errors: nil)
    end
  end
end