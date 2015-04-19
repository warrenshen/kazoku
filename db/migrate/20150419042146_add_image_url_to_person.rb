class AddImageUrlToPerson < ActiveRecord::Migration
  def change
    add_column :people, :image_url, :string, null: false, default: ""
    remove_column :people, :birthday
  end
end
