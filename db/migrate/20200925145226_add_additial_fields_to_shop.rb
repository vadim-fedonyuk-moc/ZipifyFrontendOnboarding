class AddAdditialFieldsToShop < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :name, :string
    add_column :shops, :email, :string
    add_column :shops, :country_name, :string
    add_column :shops, :country_code, :string
    add_column :shops, :customer_email, :string
    add_column :shops, :shop_owner, :string
    add_column :shops, :timezone, :string
    add_column :shops, :currency, :string
    add_column :shops, :money_format, :string
    add_column :shops, :iana_timezone, :string
  end
end