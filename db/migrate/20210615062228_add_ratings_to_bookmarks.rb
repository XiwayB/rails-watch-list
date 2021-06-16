class AddRatingsToBookmarks < ActiveRecord::Migration[6.0]
  def change
    add_column :bookmarks, :ratings, :integer
  end
end
