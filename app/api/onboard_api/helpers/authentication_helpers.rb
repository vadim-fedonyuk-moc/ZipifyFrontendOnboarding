module OnboardApi
  module Helpers
    module AuthenticationHelpers
      def validate_shopify_session
        raise_error(I18n.t('errors.unauthorized'), 403) unless @current_shopify_session
      end

      def set_shopify_session
        if shopify_session
          @current_shopify_session ||= ShopifyApp::SessionRepository.retrieve_shop_session(shopify_session)
          ShopifyAPI::Base.activate_session(@current_shopify_session)
        end
      end

      private

      def shopify_session
        session[:shop_id]
      end

      def session
        env['rack.session']
      end
    end
  end
end

