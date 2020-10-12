class UpdateBannerProductId < ActiveRecord::Migration[5.2]
  def change
    change_column :banners, :product_id, :bigint
  end
end
