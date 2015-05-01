class AddAuthTokenToPerson < ActiveRecord::Migration
  def change
    add_column :people, :auth_token, :string, null: false, default: ""
  end
end
