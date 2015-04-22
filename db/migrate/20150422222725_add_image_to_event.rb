class AddImageToEvent < ActiveRecord::Migration
  def change
    add_column :events, :image_url, :string, null: false, default: ""
  end
end
