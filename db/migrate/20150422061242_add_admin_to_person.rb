class AddAdminToPerson < ActiveRecord::Migration
  def change
    add_column :people, :is_admin, :bool, default: false
  end
end
