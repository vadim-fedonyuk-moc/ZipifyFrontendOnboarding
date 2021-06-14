require 'grape-swagger'

module OnboardApi
  class Main < Grape::API
    content_type :json, 'application/json'
    format :json
    prefix :api

    helpers OnboardApi::Helpers::AuthenticationHelpers
    helpers OnboardApi::Helpers::ShopHelpers

    helpers do
      def success(data, code = 200)
        body(status: code, data: data)
      end

      def raise_error(message, code, options = {})
        error!({ status: code, error: message }.merge(options), code)
      end
    end

    mount OnboardApi::V1::Root

    add_swagger_documentation(
      info: {
        title: 'Zipify Frontend Onboarding API'
      }
    )
  end
end