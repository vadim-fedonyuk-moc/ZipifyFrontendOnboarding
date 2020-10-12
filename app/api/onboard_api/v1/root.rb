module OnboardApi
  module V1
    class Root < Grape::API
      version :v1, using: :path

      before do
        set_shopify_session
        validate_shopify_session
        set_shop
      end

      mount OnboardApi::V1::Banners
    end
  end
end