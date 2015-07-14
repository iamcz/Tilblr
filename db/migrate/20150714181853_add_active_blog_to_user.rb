class AddActiveBlogToUser < ActiveRecord::Migration
  def change
    add_column :users, :active_blog_id, :integer
    change_column :users, :active_blog_id, :integer, null: false
  end
end
