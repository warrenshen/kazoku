class CreateFamilies < ActiveRecord::Migration
  def change
    create_table :families do |t|
      t.string  :name, null: false, default: ""
      t.integer :size, null: false, default: 0

      t.timestamps null: false
    end
  end
end

