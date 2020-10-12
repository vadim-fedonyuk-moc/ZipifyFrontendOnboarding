module OnboardApi
  module Helpers
    module ShopHelpers
      def set_shop
        @shop ||= Shop.find_by(shopify_domain: @current_shopify_session.domain) if @current_shopify_session
      end
    end
  end
end