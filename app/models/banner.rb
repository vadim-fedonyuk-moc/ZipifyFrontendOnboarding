class Banner < ApplicationRecord
  belongs_to :shop

  validates :product_id, uniqueness: true
end
