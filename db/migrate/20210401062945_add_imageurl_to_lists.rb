class AddImageurlToLists < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :imageUrl, :string
  end
end
