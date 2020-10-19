module OnboardApi
  module Entities
    module V1
      class Banner < OnboardApi::Entities::BaseEntity
        expose :id
        expose :title
        expose :style
        expose :content
        expose :product_id
      end
    end
  end
end
