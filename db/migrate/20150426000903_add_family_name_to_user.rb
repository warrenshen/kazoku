class AddFamilyNameToUser < ActiveRecord::Migration
  def change
    add_column :users, :family_name, :string, null: false, default: ""
  end
end
