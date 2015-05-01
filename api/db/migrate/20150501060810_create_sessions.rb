class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.boolean :is_expired,   null: false, default: false
      t.boolean :is_logged_in, null: false, default: true

      t.string  :uuid, null: false

      t.datetime :last_active_at

      t.references :person, index: true

      t.timestamps null: false
    end
  end
end
