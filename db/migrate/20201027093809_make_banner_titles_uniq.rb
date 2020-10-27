class MakeBannerTitlesUniq < ActiveRecord::Migration[5.2]
  def change
    remove_index :banners, name: 'index_banners_on_title_and_product_id'
    add_index :banners, [:title, :shop_id], unique: true
  end
end
