class AddUrlToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :url, :string
    change_column :blogs, :url, :string, null: false
  end
end
