class CreateFamilyEvents < ActiveRecord::Migration
  def change
    create_table :family_events do |t|
      t.references :family, index: true
      t.references :event,  index: true

      t.timestamps null: false
    end
  end
end
