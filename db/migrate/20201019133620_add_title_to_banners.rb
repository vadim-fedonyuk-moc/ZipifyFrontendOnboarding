class AddTitleToBanners < ActiveRecord::Migration[5.2]
  def change
    add_column :banners, :title, :string, null: false
    add_index :banners, [:title, :product_id], unique: true
  end
end
