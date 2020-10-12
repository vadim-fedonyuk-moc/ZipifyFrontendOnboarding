class CreateBanners < ActiveRecord::Migration[5.2]
  def change
    create_table :banners do |t|
      t.belongs_to :shop
      t.json :style
      t.text :content
      t.integer :product_id

      t.timestamps
    end
  end
end
