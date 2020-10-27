class AddBannerValidations < ActiveRecord::Migration[5.2]
  def change
    change_column_null :banners, :product_id, false
    change_column_null :banners, :content, false
    change_column_null :banners, :style, false
    change_column_null :banners, :shop_id, false
  end
end
