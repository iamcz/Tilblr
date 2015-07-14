class AllowNullActiveBlogId < ActiveRecord::Migration
  def change
    change_column :users, :active_blog_id, :integer, null: true
  end
end
