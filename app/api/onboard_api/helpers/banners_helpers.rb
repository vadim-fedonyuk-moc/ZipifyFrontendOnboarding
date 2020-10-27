module OnboardApi
  module Helpers
    module BannersHelpers
      def set_banner!
        @banner = @shop.banners.find_by(id: params[:banner_id])
        raise_error(I18n.t('errors.not_found', entity: Banner), 404) if @banner.blank?
      end
    end
  end
end
