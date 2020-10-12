module OnboardApi
  module V1
    class Banners < Grape::API
      resources :banners do
        desc 'Get banners'
        get do
          success(present(@shop.banners, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Get specific banner'
        get ':id' do
          banner = Banner.find_by(id: params[:id])
          raise_error(I18n.t('errors.not_found', entity: Banner), 404) if banner.blank?
          success(present(banner, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Delete banner'
        delete ':id' do
          banner = Banner.find_by(id: params[:id])
          raise_error(I18n.t('errors.not_found', entity: Banner), 404) if banner.blank?

          result = ::Metafields::DeleteBanner.call(banner)
          banner.destroy
          raise_error(result.errors, 422) unless result.success?
          success({})
        end

        desc 'Create banner'
        params do
          requires :banner, type: Hash do
            requires :style, type: Hash, desc: 'Styles for banner'
            requires :content, type: String, desc: 'Banner content'
            requires :product_id, type: Integer, desc: 'Product to bind banner to'
          end
        end
        post do
          banner = @shop.banners.new(params[:banner])
          result = ::Metafields::CreateBanner.call(banner)

          raise_error(result.errors, 422) unless result.success?
          raise_error(banner.errors, 422) unless banner.save

          success(present(banner, with: OnboardApi::Entities::V1::Banner))
        end

        desc 'Update banner'
        params do
          requires :banner, type: Hash do
            requires :style, type: Hash, desc: 'Styles for banner'
            requires :content, type: String, desc: 'Banner content'
            requires :product_id, type: Integer, desc: 'Product to bind banner to'
          end
        end
        put ':id' do
          banner = Banner.find_by(id: params[:id])
          raise_error(I18n.t('errors.not_found', entity: Banner), 404) if banner.blank?

          banner.update(params[:banner])
          result = ::Metafields::UpdateBanner.call(banner)
          raise_error(result.errors, 422) unless result.success?
          success(present(banner, with: OnboardApi::Entities::V1::Banner))
        end
      end
    end
  end
end
