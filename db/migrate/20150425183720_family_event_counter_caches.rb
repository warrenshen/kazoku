class FamilyEventCounterCaches < ActiveRecord::Migration
  def change
    add_column :events, :families_count, :integer, null: false, default: 0
    add_column :families, :events_count, :integer, null: false, default: 0
  end
end
