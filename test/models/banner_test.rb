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

require 'test_helper'

class BannerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
