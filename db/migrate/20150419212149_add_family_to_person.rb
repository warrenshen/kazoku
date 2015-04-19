class AddFamilyToPerson < ActiveRecord::Migration
  def change
    add_column :people, :family_id, :integer, index: true
    remove_column :families, :size
  end
end
