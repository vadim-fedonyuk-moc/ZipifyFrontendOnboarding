class Banner < ApplicationRecord
  belongs_to :shop

  validates :product_id, uniqueness: true
  validates :title, uniqueness: {
      scope: :product_id,
      message: 'Banner for this product already exists'
  }
end
