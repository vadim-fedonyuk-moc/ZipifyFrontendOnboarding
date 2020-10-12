module Metafields
  class CreateBanner < BannerService
    def self.call(*args, &block)
      new(*args, &block).execute
    end

    def initialize(banner)
      @banner = banner
    end

    def execute
      metafield = create_metafield(metafield_attrs)
      return OpenStruct.new(success?: false, errors: metafield.errors.full_messages) unless metafield.save
      OpenStruct.new(success?: true, errors: nil)
    end
  end
end