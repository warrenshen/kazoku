class CreateFamilies < ActiveRecord::Migration
  def change
    create_table :families do |t|
      t.string :surname, null: false, default: ""
      t.integer :size, null: false, default: 0

      t.references :event

      t.timestamps null: false
    end
  end
end
