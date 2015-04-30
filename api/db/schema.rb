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

ActiveRecord::Schema.define(version: 20150425183720) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "name",           default: "", null: false
    t.string   "description",    default: "", null: false
    t.string   "image_url",      default: "", null: false
    t.date     "date"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "families_count", default: 0,  null: false
  end

  create_table "families", force: :cascade do |t|
    t.string   "name",         default: "", null: false
    t.integer  "size",         default: 0,  null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.integer  "events_count", default: 0,  null: false
  end

  create_table "family_events", force: :cascade do |t|
    t.integer  "family_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "family_events", ["event_id"], name: "index_family_events_on_event_id", using: :btree
  add_index "family_events", ["family_id"], name: "index_family_events_on_family_id", using: :btree

  create_table "people", force: :cascade do |t|
    t.string   "first_name",             default: "",    null: false
    t.string   "last_name",              default: "",    null: false
    t.string   "image_url",              default: "",    null: false
    t.string   "family_name",            default: "",    null: false
    t.boolean  "is_admin",               default: false, null: false
    t.integer  "family_id"
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "people", ["email"], name: "index_people_on_email", unique: true, using: :btree
  add_index "people", ["family_id"], name: "index_people_on_family_id", using: :btree
  add_index "people", ["reset_password_token"], name: "index_people_on_reset_password_token", unique: true, using: :btree

end
