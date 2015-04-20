class AddFamilyNameToPeople < ActiveRecord::Migration
  def change
    add_column :people, :family_name, :string, default: "", null: false
    add_column :families, :size, :integer, default: 0, null: false
  end
end
