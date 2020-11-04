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
        params { use :full_banner_params }
        post do
          banner = @shop.banners.new(params[:banner])
          raise_error(banner.errors, 422) if banner.invalid?
          result = ::Metafields::CreateBanner.call(banner)
          raise_error(result.errors, 422) unless result.success?
          banner.save
          success(present(banner, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Update banner'
        params { use :full_banner_params }
        put ':banner_id' do
          set_banner!
          @banner.attributes = params[:banner]
          raise_error(result.errors, 422) if @banner.invalid?
          result = ::Metafields::UpdateBanner.call(@banner)
          raise_error(result.errors, 422) unless result.success?
          @banner.save
          success(present(@banner, with: OnboardApi::Entities::V1::Banner))
        end
      end
    end
  end
end
