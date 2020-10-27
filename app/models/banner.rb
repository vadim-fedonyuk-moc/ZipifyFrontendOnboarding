# == Schema Information
#
# Table name: banners
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  style      :json             not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint           not null
#  shop_id    :bigint           not null
#
# Indexes
#
#  index_banners_on_shop_id            (shop_id)
#  index_banners_on_title_and_shop_id  (title,shop_id) UNIQUE
#

class Banner < ApplicationRecord
  belongs_to :shop

  validates :product_id, presence: {
      message: 'You should specify product for banner'
  }
  validates :product_id, uniqueness: {
      scope: :shop,
      message: 'Banner for this product already created'
  }

  validates :style, presence: {
      message: 'You should specify styles of banner'
  }

  validates :content, presence: {
      message: 'You should specify content of banner'
  }

  validates :title, presence: {
      message: 'You should specify title of banner'
  }
  validates :title, uniqueness: {
      scope: :shop,
      message: 'Banner with this title already exists'
  }
end
