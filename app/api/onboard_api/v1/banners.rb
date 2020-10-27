module OnboardApi
  module V1
    class Banners < Grape::API
      resources :banners do
        helpers OnboardApi::Helpers::BannersHelpers

        desc 'Get banners'
        get do
          success(present(@shop.banners, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Get specific banner'
        get ':banner_id' do
          set_banner!
          success(present(@banner, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Delete banner'
        delete ':banner_id' do
          set_banner!
          result = ::Metafields::DeleteBanner.call(@banner)
          raise_error(result.errors, 422) unless result.success?
          @banner.destroy
          success({})
        end

        desc 'Create banner'
        params do
          requires :banner, type: Hash do
            requires :title, type: String, desc: 'Name of the banner'
            requires :style, type: Hash, desc: 'Styles for banner'
            requires :content, type: String, desc: 'Banner content'
            requires :product_id, type: Integer, desc: 'Product to bind banner to'
          end
        end
        post do
          banner = @shop.banners.new(params[:banner])
          raise_error(banner.errors, 422) unless banner.save
          result = ::Metafields::CreateBanner.call(banner)
          raise_error(result.errors, 422) unless result.success?
          success(present(banner, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Update banner'
        params do
          requires :banner, type: Hash do
            requires :title, type: String, desc: 'Name of the banner'
            requires :style, type: Hash, desc: 'Styles for banner'
            requires :content, type: String, desc: 'Banner content'
            requires :product_id, type: Integer, desc: 'Product to bind banner to'
          end
        end
        put ':banner_id' do
          set_banner!
          raise_error(result.errors, 422) unless @banner.update(params[:banner])
          result = ::Metafields::UpdateBanner.call(@banner)
          raise_error(result.errors, 422) unless result.success?
          success(present(@banner, with: OnboardApi::Entities::V1::Banner))
        end
      end
    end
  end
end
