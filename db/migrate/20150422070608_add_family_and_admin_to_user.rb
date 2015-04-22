class AddFamilyAndAdminToUser < ActiveRecord::Migration
  def change
    add_column :users, :family_id, :integer, index: true
    add_column :users, :is_admin, :bool, default: false
  end
end
