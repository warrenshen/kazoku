class AddFamilyToUser < ActiveRecord::Migration
  def change
    add_column :users, :family_id, :integer, index: true
  end
end
