# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_27_100747) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banners", force: :cascade do |t|
    t.bigint "shop_id", null: false
    t.json "style", null: false
    t.text "content", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title", null: false
    t.index ["shop_id"], name: "index_banners_on_shop_id"
    t.index ["title", "shop_id"], name: "index_banners_on_title_and_shop_id", unique: true
  end

  create_table "shops", force: :cascade do |t|
    t.string "shopify_domain", null: false
    t.string "shopify_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "email"
    t.string "country_name"
    t.string "country_code"
    t.string "customer_email"
    t.string "shop_owner"
    t.string "timezone"
    t.string "currency"
    t.string "money_format"
    t.string "iana_timezone"
    t.index ["shopify_domain"], name: "index_shops_on_shopify_domain", unique: true
  end

end
