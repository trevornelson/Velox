# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150328203504) do

  create_table "flights", force: :cascade do |t|
    t.integer  "trip_id"
    t.string   "carrier_abbv",      null: false
    t.integer  "flight_num",        null: false
    t.string   "carrier_full",      null: false
    t.string   "airport_ori_code",  null: false
    t.string   "airport_dest_code", null: false
    t.string   "duration",          null: false
    t.string   "dep_time",          null: false
    t.string   "arr_time",          null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "hotels", force: :cascade do |t|
    t.integer  "itinerary_id"
    t.string   "name",          null: false
    t.string   "city",          null: false
    t.string   "neighbourhood"
    t.string   "postal_code",   null: false
    t.string   "street_name",   null: false
    t.string   "price",         null: false
    t.string   "provider",      null: false
    t.string   "photo_url",     null: false
    t.string   "url",           null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "itineraries", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.integer  "itinerary_id"
    t.string   "price",        null: false
    t.string   "duration",     null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
