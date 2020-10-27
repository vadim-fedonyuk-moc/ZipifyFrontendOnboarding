module OnboardApi
  module Helpers
    module BannersHelpers
      extend Grape::API::Helpers

      params :full_banner_params do
        requires :banner, type: Hash do
          requires :title, type: String, desc: 'Name of the banner'
          requires :style, type: Hash, desc: 'Styles for banner'
          requires :content, type: String, desc: 'Banner content'
          requires :product_id, type: Integer, desc: 'Product to bind banner to'
        end
      end

      def set_banner!
        @banner = @shop.banners.find_by(id: params[:banner_id])
        raise_error(I18n.t('errors.not_found', entity: Banner), 404) if @banner.blank?
      end
    end
  end
end
